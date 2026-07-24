# Portfolio

A responsive developer portfolio built with Next.js (App Router) and Tailwind CSS,
with a terminal / "code rain" theme.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 2. Personalize the content

Almost everything on the site is pulled from **`lib/data.js`** — open that file
and edit:

- `profile` — your name, designation, tagline, email, phone, WhatsApp, resume
  path, and social links
- `about` — your About Me paragraphs
- `skills` — your skill categories and levels
- `education` — your educational background
- `experience` — your work/project experience
- `projects` — your project cards + detail pages (stack, description, live
  link, GitHub link, challenges, future plans)

You generally won't need to touch any component files just to update content.

## 3. Add your real assets

- Replace `public/profile.jpg` with your own photo (same aspect ratio works
  best: portrait, ~4:5).
- Replace the images in `public/projects/` with real screenshots of each
  project (used as `image` in `lib/data.js`).
- Add your real resume as `public/resume.pdf` — the "Download Resume" button
  already points at `/resume.pdf`. If you don't have one ready yet, the
  button stays visible and clickable; it'll just 404 until the file exists.

## 4. Deploy (for your live link)

The easiest path is Vercel, since this is a Next.js app:

1. Push this project to a GitHub repository.
2. Go to https://vercel.com → **New Project** → import that repo.
3. Leave the default settings (Vercel auto-detects Next.js) and click
   **Deploy**.
4. Vercel gives you a live `https://your-project.vercel.app` URL — that's
   your submission link.

Every time you push to the repo's main branch afterward, Vercel redeploys
automatically.

## Tech

Next.js 16 (App Router) · Tailwind CSS v4 · lucide-react · self-hosted
JetBrains Mono / IBM Plex Mono / Inter via @fontsource
