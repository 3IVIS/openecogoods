# Contributing

OpenEcoGoods is designed to be argued with. Everything happens on GitHub —
there's no separate account system or approval gate.

## Propose a change to the principles

Open an issue using the **"Propose a principle change"** template. Make the
case for what should change and why. Discussion happens on the issue (or
move to a Discussion thread if it gets long); once there's rough consensus,
open a PR editing the relevant file in `src/content/principles/`.

## Propose or re-rank a product

Open an issue using the **"Propose a product"** template — argue for a
product category using the same rubric described on `/products` (impact,
feasibility, ubiquity, community interest). To adjust an existing entry's
score, open a PR against its file in `src/content/products/` and explain
the reasoning in the PR description.

## Submit an actual design

Once a product category has rough consensus, design work (CAD, BOM, impact
estimate) gets its own directory and PR. Design files must be in formats
that don't require paid software to open, and must comply with the
[full lifecycle transparency](./src/content/principles/full-lifecycle-transparency.md)
and [material honesty](./src/content/principles/material-honesty.md)
principles — bill of materials and end-of-life plan are not optional.

## Licensing

By contributing, you agree your contribution is published under
[CERN-OHL-S v2](./LICENSE) (designs) or the site's content license, as
applicable. Don't submit anything you don't have the right to license this
way.

## Code changes to the site itself

Standard PR flow. Run `npm install && npm run dev` locally, `npm run build`
before opening a PR to make sure it builds cleanly.
