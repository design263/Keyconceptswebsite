# Key Concepts Website

The frontend lives in **`nextjs-keyconcepts`** (Next.js App Router with SEO metadata per route).

The API lives in **`backend`**.

## Run locally

From the repo root:

```bash
yarn install:web
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

Or run directly inside the Next app:

```bash
cd nextjs-keyconcepts
yarn install
yarn dev
```

## API

```bash
yarn install:api
yarn dev:api
```

Set `NEXT_PUBLIC_API_BASE_URL` in `nextjs-keyconcepts/.env.local` (see `.env.example` at repo root).
