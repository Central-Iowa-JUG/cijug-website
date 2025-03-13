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

   ```bash
   npm install
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

## Deployment

### GitHub Pages via GitHub Actions

This project is set up to automatically deploy to GitHub Pages whenever you push to the `main` branch. The workflow file is at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Here is an overview:

1. **Install dependencies** using `npm install --legacy-peer-deps`.
2. **Build** the Next.js project via `npm run build`.
3. **Deploy** the `out` directory to the `gh-pages` branch.

You can check the status of each deployment under the "Actions" tab in the GitHub repository.

## Contributing

1. Fork this repository.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

---

If you have any questions or run into issues, please [open an issue](https://github.com/<your-username>/<repo-name>/issues). Thank you for checking out the CIJUG website!

