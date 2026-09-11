# OpenEcoGoods

A community effort to design open-source, ecologically-sound consumer goods
together. Everything here — the principles, the product shortlist, the
designs themselves — is meant to be debated and improved in the open.

- **Principles**: `src/content/principles/` (rendered at `/principles`) —
  what makes a design "ecological" here, v0.1, draft
- **Products**: `src/content/products/` (rendered at `/products`) — how we
  decide what to design first, and the current candidate shortlist
- **License**: designs and content are published under
  [CERN-OHL-S v2](./LICENSE), a strongly-reciprocal open hardware license

## How this repo is organized

```
src/content/principles/   one Markdown file per principle
src/content/products/     one Markdown file per candidate product category
src/pages/                the site itself (Astro)
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) — the short version is: everything
happens via GitHub Issues, Discussions, and Pull Requests. No account or
approval needed to propose something.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build to ./dist
```
