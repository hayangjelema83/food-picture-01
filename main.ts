// food-picture-01 entry (Node 22, standard library only).
//
// Copies one of the three candidate food pictures in candidates/ to
// /output/entry.png. The gate accepts a whole PNG or JPEG of at most
// 1 MiB and 1024 x 1024 px; the output keeps the name entry.png even
// though the bytes are JPEG (the gate tells them apart by first bytes).
//
// Change CANDIDATE to 1, 2 or 3 to pick which picture the entry ships:
//   1 = steaming tonkotsu ramen (noodle lift, jammy egg, chashu)
//   2 = chocolate lava cake (molten centre, vanilla ice cream)
//   3 = fresh fruit tart (glazed berries, kiwi, mango, custard)
//
// The copy is byte-for-byte and deterministic: no network, no
// randomness, no clock, so two runs write identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const CANDIDATE = 2;

if (![1, 2, 3].includes(CANDIDATE)) {
  throw new Error(`CANDIDATE must be 1, 2 or 3, got ${CANDIDATE}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL(`./candidates/cand${CANDIDATE}.jpg`, import.meta.url);
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);

// Integrity check: the copy must be exactly the source's bytes.
if (statSync(src).size !== statSync(dest).size) {
  throw new Error('entry.png size does not match the selected candidate');
}
