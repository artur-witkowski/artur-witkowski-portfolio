// Builds www/index.html from the artifact prototype (../index.html).
// The artifact is published without <!doctype>/<head>, because claude.ai wraps it in its own skeleton.
// Here we add that skeleton ourselves: head tags go to <head>, the rest to <body>,
// plus the safe-area padding the artifact viewer normally provides.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const src = resolve(here, '../../index.html');
const outDir = resolve(here, '../www');

const html = readFileSync(src, 'utf8');
const split = html.indexOf('<div id="wall"');
if (split < 0) throw new Error('Could not find <div id="wall"> in ../index.html; update the split point in scripts/build.mjs');

const head = html.slice(0, split).trim();
const body = html.slice(split).trim();

// MP_API=https://midnight-pantry-api.<account>.workers.dev npm run sync  -> online daily leaderboard in the app
const api = process.env.MP_API ? `<script>window.MP_API=${JSON.stringify(process.env.MP_API.replace(/\/$/, ''))};</script>\n` : '';
const page = `<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover,user-scalable=no">
<meta name="format-detection" content="telephone=no">
<style>
:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px);box-sizing:border-box;color-scheme:dark}
html,body{margin:0;height:100%;overscroll-behavior:none}
img{max-width:100%}
[hidden]{display:none!important}
</style>
${api}${head}
</head>
<body>
${body}
</body>
</html>
`;

mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, 'index.html'), page);
console.log(`www/index.html written (${(page.length / 1024).toFixed(1)} KB)`);
