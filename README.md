# food-picture-01 — Best-Looking Food Picture

Three freshly generated food photographs; `main.ts` (Node 22 stdlib only)
copies the selected candidate to `/output/entry.png`, byte-for-byte and
deterministically.

## Candidates

- **1 — Steaming tonkotsu ramen** (strongest): creamy broth, noodles lifted
  with chopsticks, jammy soft egg, charred chashu, wisps of steam, warm
  window light on dark wood.
- **2 — Chocolate lava cake**: molten chocolate flowing from the cracked
  centre, melting vanilla ice cream, mint leaf, moody cafe light.
- **3 — Fresh fruit tart**: glazed strawberries, kiwi, blueberries and
  mango over vanilla custard in a golden shell, bright daylight on marble.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Set `CANDIDATE` at the top of `main.ts` to 1, 2 or 3 to pick the picture.
All candidates are JPEG, 1024×683, well under 1 MiB.
