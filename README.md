# Ghost-Tears

Word-chain game with a [Convex](https://convex.dev) backend and a [Vite](https://vitejs.dev) + React client.

## Development

```bash
npm install
```

Terminal 1 — Convex:

```bash
npx convex dev
```

Terminal 2 — Vite (default [http://localhost:5173](http://localhost:5173)):

```bash
npm run dev
```

Set `VITE_CONVEX_URL` / `NEXT_PUBLIC_CONVEX_URL` in `.env.local` at the repo root.

## Build

```bash
npm run build
```

## Convex

- Backend code: `convex/`
- Auth: [Convex Auth](https://labs.convex.dev/auth) (`@convex-dev/auth`)

Agent skills for Convex live under `.agents/skills/`.
