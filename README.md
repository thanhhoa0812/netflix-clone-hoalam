# Netflix Clone (Next.js + TypeScript + Tailwind)

A lightweight Netflix-style UI that fetches live data from TMDb.

## ✅ Quick Start

```bash
# 1) Create project directory and init
mkdir next-netflix-clone && cd $_

# 2) Paste the files from this starter into the folder
# 3) Install dependencies
pnpm install  # or: npm install / yarn

# 4) Configure environment
cp .env.local
# edit .env.local and set TMDB_API_KEY

# 5) Run
pnpm dev  # or: npm run dev / yarn dev
```

Open http://localhost:3000

## Features
- Main page with **Popular / Now Playing / Top Rated** rows
- Click a poster to open the **Movie Detail** page
- **Trailer** embed (YouTube) and **Related movies**
- Responsive and image-optimized

## Tech
- **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**
- **Server Components** with **ISR**
- `next/image` for optimization

## Scripts
- `dev` – local dev server
- `build` – production build
- `start` – run production server
- `type-check` – TypeScript only

## Notes
- Make sure your `.env.local` contains a valid `TMDB_API_KEY` from https://developer.themoviedb.org/
- If images do not load, check `next.config.mjs > images.remotePatterns`.

## Project Structure
See [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) for component and data flow details.
