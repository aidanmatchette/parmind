# ParMind

A production-style, iPhone-first, decision-first golf scoring PWA.

## Stack
Next.js App Router, TypeScript, Tailwind, Zustand, Zod, localStorage repository, PWA manifest, service worker, CSV export.

## Run
```bash
npm install
npm run dev
```

## Deploy for iPhone install
Push to GitHub and deploy to Vercel or Cloudflare Pages. iOS requires a real HTTPS website for **Share → Add to Home Screen**. After deployment, open the URL in Safari on your iPhone.

## Architecture
- `domain/round`: pure domain types, factory, scoring logic, validation
- `features/round`: UI, store, export service
- `infrastructure/storage`: local-first repository
- `ui`: reusable primitives

Data stays local unless you export CSV.
