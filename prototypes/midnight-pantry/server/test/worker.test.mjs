// Runs the Worker against an in-memory SQLite that mimics the D1 API.
// npm test   (Node 22.13+ for node:sqlite)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import worker, { hashStr } from '../src/index.js';

function d1() {
  const db = new DatabaseSync(':memory:');
  db.exec(readFileSync(new URL('../schema.sql', import.meta.url), 'utf8'));
  return {
    prepare(sql) {
      const stmt = db.prepare(sql.replace(/\?(\d+)/g, '?'));
      let args = [];
      return {
        bind(...a) { args = a; return this; },
        async all() { return { results: stmt.all(...args) }; },
        async run() { const r = stmt.run(...args); return { meta: { changes: Number(r.changes) } }; },
      };
    },
  };
}

const today = new Date().toISOString().slice(0, 10);
const seed = hashStr('midnight-pantry/' + today);
const env = { DB: d1() };
const call = (method, path, body) => worker.fetch(new Request('https://x' + path, {
  method, headers: { 'content-type': 'application/json' }, body: body ? JSON.stringify(body) : undefined,
}), env);
const entry = (o) => Object.assign({ player: 'dabc123', name: 'Ania', score: 450, night: 4, hp: 2, seed, log: 'b.0.-1,n' }, o);

test('saves, keeps the best and ranks', async () => {
  assert.equal((await (await call('POST', `/daily/${today}`, entry())).json()).status, 'saved');
  assert.equal((await (await call('POST', `/daily/${today}`, entry({ score: 300, night: 3 }))).json()).status, 'kept');
  assert.equal((await (await call('POST', `/daily/${today}`, entry({ score: 600, night: 5, hp: 3 }))).json()).status, 'saved');
  await call('POST', `/daily/${today}`, entry({ player: 'dxyz789', name: 'Bartek', score: 800, night: 7 }));
  const { rows } = await (await call('GET', `/daily/${today}`)).json();
  assert.deepEqual(rows.map((r) => [r.name, r.score]), [['Bartek', 800], ['Ania', 600]]);
});

test('rejects a wrong seed, a far date and an impossible score', async () => {
  assert.equal((await call('POST', `/daily/${today}`, entry({ seed: 123 }))).status, 400);
  assert.equal((await call('POST', '/daily/2001-01-01', entry())).status, 400);
  assert.equal((await call('POST', `/daily/${today}`, entry({ score: 2000, night: 2 }))).status, 400);
  assert.equal((await call('POST', `/daily/${today}`, entry({ player: 'x' }))).status, 400);
});

test('answers CORS preflight', async () => {
  const r = await call('OPTIONS', `/daily/${today}`);
  assert.equal(r.status, 204);
  assert.equal(r.headers.get('access-control-allow-origin'), '*');
});
