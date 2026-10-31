import { cp, mkdir, rm } from 'node:fs/promises';

// This template uses ordered classic scripts and relative CSS/font URLs.
// Preserve their paths instead of bundling only Vite's module dependencies.
const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(new URL('index.html', root), new URL('index.html', output));
await cp(new URL('assets/', root), new URL('assets/', output), { recursive: true });

console.log('Built static template in dist/ with all runtime assets.');
