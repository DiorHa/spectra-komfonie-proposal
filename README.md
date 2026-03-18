# Spectra x Komfonie Proposal Microsite

Premium one-page Next.js microsite presenting a tailored partnership proposal for Komfonie Engineering AG.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react

## Run locally

1. Install dependencies:
   `npm install`
2. Start dev server:
   `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

## Build for production

1. `npm run build`
2. `npm run start`

## Vercel deployment

- Import the repository in Vercel.
- Framework preset: Next.js.
- No extra configuration required.

## Suggested file structure

- `app/layout.tsx` - root layout and metadata
- `app/page.tsx` - one-page composition
- `app/globals.css` - global styles and design tokens
- `components/*` - reusable sections and UI pieces
- `lib/content.ts` - copy blocks and reusable data
- `lib/utils.ts` - helper utilities
