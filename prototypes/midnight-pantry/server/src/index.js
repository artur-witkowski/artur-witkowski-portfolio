// Midnight Pantry — daily leaderboard (Cloudflare Worker + D1).
//
//   GET  /daily/:date?limit=25   -> { rows: [{ player, name, score, night }] }   best first
//   POST /daily/:date            -> { status: "saved" | "kept" }                 body: { player, name, score, night, hp, seed, log }
//
// One row per player per day; a new result only replaces the old one when it is higher.
// Checks today: date window, the daily seed, value ranges and sizes. Not yet: replaying `log`
// through the game rules to recompute the score (needs the game logic extracted into a shared module).

const SEED_PREFIX = 'midnight-pantry/';
// 10 nights × 100 + 5 hearts × 25 + 300 for winning + 14 new ★★★ dishes × 50
const MAX_SCORE = 10 * 100 + 5 * 25 + 300 + 14 * 50;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const PLAYER_RE = /^[a-zA-Z0-9_-]{4,40}$/;

const CORS = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET,POST,OPTIONS',
  'access-control-allow-headers': 'content-type',
  'access-control-max-age': '86400',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', ...CORS } });
}

// Same FNV-1a as the game, so the server can tell the real daily seed.
export function hashStr(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

// Players are in different time zones, so accept yesterday..tomorrow relative to UTC.
export function dateAllowed(date, now = Date.now()) {
  if (!DATE_RE.test(date)) return false;
  const t = Date.parse(date + 'T00:00:00Z');
  if (Number.isNaN(t)) return false;
  const day = 86400000;
  const today = Math.floor(now / day) * day;
  return t >= today - day && t <= today + day;
}

function cleanName(v) {
  return String(v || '').replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, 16) || 'Kucharz';
}

export function validate(date, b, now) {
  if (!dateAllowed(date, now)) return 'date';
  if (!b || typeof b !== 'object') return 'body';
  if (!PLAYER_RE.test(String(b.player || ''))) return 'player';
  const int = (v, lo, hi) => Number.isInteger(v) && v >= lo && v <= hi;
  if (!int(b.score, 0, MAX_SCORE)) return 'score';
  if (!int(b.night, 0, 10)) return 'night';
  if (!int(b.hp, 0, 5)) return 'hp';
  if (b.seed !== hashStr(SEED_PREFIX + date)) return 'seed';
  if (typeof b.log !== 'string' || b.log.length > 8000) return 'log';
  // a score can't be higher than what the nights and hearts allow
  if (b.score > b.night * 100 + b.hp * 25 + (b.night === 10 ? 300 : 0) + 14 * 50) return 'score';
  return null;
}

export default {
  async fetch(req, env) {
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
    const url = new URL(req.url);
    const m = url.pathname.match(/^\/daily\/([0-9-]+)$/);
    if (!m) return json({ error: 'not_found' }, 404);
    const date = m[1];

    if (req.method === 'GET') {
      if (!DATE_RE.test(date)) return json({ error: 'date' }, 400);
      const limit = Math.min(100, Math.max(1, parseInt(url.searchParams.get('limit') || '25', 10) || 25));
      const { results } = await env.DB.prepare(
        'SELECT player, name, score, night FROM scores WHERE date = ?1 ORDER BY score DESC, updated_at ASC LIMIT ?2'
      ).bind(date, limit).all();
      return json({ date, rows: results });
    }

    if (req.method === 'POST') {
      let body;
      try { body = await req.json(); } catch { return json({ error: 'body' }, 400); }
      const bad = validate(date, body);
      if (bad) return json({ error: bad }, 400);
      const now = Date.now();
      const res = await env.DB.prepare(
        `INSERT INTO scores (date, player, name, score, night, hp, seed, log, updated_at)
         VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)
         ON CONFLICT (date, player) DO UPDATE SET
           name = excluded.name, score = excluded.score, night = excluded.night, hp = excluded.hp,
           log = excluded.log, updated_at = excluded.updated_at
         WHERE excluded.score > scores.score`
      ).bind(date, body.player, cleanName(body.name), body.score, body.night, body.hp, body.seed, body.log, now).run();
      return json({ status: res.meta && res.meta.changes > 0 ? 'saved' : 'kept' });
    }

    return json({ error: 'method' }, 405);
  },
};
