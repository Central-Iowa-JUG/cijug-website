# CIJUG Website

This repository contains the Central Iowa Java Users Group (CIJUG) [website](https://www.cijug.net), built with Next.js and deployed as a static site to GitHub Pages.

## Overview

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/central-iowa-jug/cijug-website.git
   cd cijug-website
   ```

2. **Install dependencies**:

   Use the Node version in [`.nvmrc`](.nvmrc) (`nvm use`), then:

   ```bash
   npm ci
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

4. **Build & Export**:

   ```bash
   npm run build
   ```

   This will create your production build and place the statically exported files into the `out` folder.

## Where to change things

| To change... | Edit |
| --- | --- |
| Meetup, Sessionize, email and social links | [`lib/site.ts`](lib/site.ts) |
| Sponsors (name, link, logo) | `sponsors` in [`lib/site.ts`](lib/site.ts), logo file in [`public/logos/`](public/logos) |
| Page text and sections | [`app/page.tsx`](app/page.tsx) |
| The Java code in the hero window | `lines` in [`components/CodeWindow.tsx`](components/CodeWindow.tsx) |
| Page title, description, security header | [`app/layout.tsx`](app/layout.tsx) |
| Link-preview image (1200x630) | [`app/opengraph-image.png`](app/opengraph-image.png) |
| Brand colors and fonts | [`app/globals.css`](app/globals.css) |
| The 404 page | [`app/not-found.tsx`](app/not-found.tsx) |
| Domain name | [`public/CNAME`](public/CNAME) |

## Deployment

### GitHub Pages via GitHub Actions

This project is set up to automatically deploy to GitHub Pages whenever you push to the `main` branch. The workflow file is at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Here is an overview:

1. **Install dependencies** using `npm ci`.
2. **Build** the Next.js project via `npm run build`.
3. **Deploy** the `out` directory to the `gh-pages` branch.

You can check the status of each deployment under the "Actions" tab in the GitHub repository.

Every pull request is also built by [`.github/workflows/ci.yml`](.github/workflows/ci.yml), so a change that breaks the build is caught before it is merged. Dependabot opens monthly update PRs ([`.github/dependabot.yml`](.github/dependabot.yml)).

## Contributing

1. Create a branch (`git checkout -b my-change`).
2. Commit your changes.
3. Push the branch (`git push -u origin my-change`).
4. Open a pull request against `main`. The build check must pass, and a code owner (see [`CODEOWNERS`](CODEOWNERS)) reviews it.

Merging to `main` deploys the site.

---

If you have any questions or run into issues, please [open an issue](https://github.com/central-iowa-jug/cijug-website/issues). Thank you for checking out the CIJUG website!

