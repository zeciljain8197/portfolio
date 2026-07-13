# Zecil Jain — Portfolio

Personal portfolio site for Zecil Jain, Analytics Engineer. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

🔗 **Live:** [zecil-portfolio.vercel.app](https://zecil-portfolio.vercel.app)

## Tech stack

- [Next.js 15](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev) for animation
- [lucide-react](https://lucide.dev) for icons
- [Web3Forms](https://web3forms.com) for the contact form (no backend required)

## Features

- **Single source of truth for content** — everything on the page (profile, experience, projects, skills, leadership, nav links, section copy) lives in [`data/portfolio.ts`](data/portfolio.ts). Nothing is hardcoded in components, so adding a job, project, or skill is a one-file edit.
- Light/dark theme with persisted preference and no flash-of-wrong-theme on load
- Animated intro loader, scroll-triggered reveals, and interactive hover/tap states throughout
- Fully responsive, from mobile through desktop

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Almost everything on the site is driven by [`data/portfolio.ts`](data/portfolio.ts) — profile info, work history, education, projects, skills, leadership entries, nav links, and section headers/subtitles all live there. Edit that file and the relevant components pick it up automatically.

## Build & run in production

```bash
npm run build
npm run start
```

## Deployment

Deployed on [Vercel](https://vercel.com), auto-detected as a Next.js app with zero extra config. Pushes to `main` deploy automatically.

## License

GPL-3.0 — see [LICENSE](LICENSE).
