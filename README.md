# Tlholohelo Geneva Mokoena — Portfolio

A modern, animated, single-page portfolio for a **Business & Data Analyst**. Built with plain HTML, CSS and JavaScript — no frameworks, no build step, no dependencies to install. Open `index.html` and it works.

**Sections:** Home · Featured Projects · Core Capabilities & Tools · Analysis Process · About & Experience · Education & Certifications · Contact

---

## Features

- Dark, editorial design with a large metallic display headline and a portrait that fades into the page
- Scroll-reveal animations, animated stat counters, floating sparkle accents and hover micro-interactions
- Two spotlight projects with real Power BI dashboard screenshots
- Fully responsive (desktop, tablet, mobile) with a slide-out mobile menu
- Downloadable CV (nav button and hero button)
- Respects `prefers-reduced-motion` for accessibility
- Fast: one HTML file with inline CSS/JS, plus a handful of images

---

## Project structure

```
portfolio/
├── index.html                      # The entire site (HTML + CSS + JS)
├── README.md                       # This file
└── assets/
    ├── hero-photo.png              # Hero portrait (edges blended into the dark background)
    ├── churn-dashboard.png         # Project 1 screenshot
    ├── superstore-dashboard.png    # Project 2 screenshot
    └── Tlholohelo_Mokoena_CV.pdf   # Downloadable CV
```

Keep the `assets/` folder next to `index.html` — all paths are relative.

---

## Run locally

No setup required. Either:

- Double-click `index.html` to open it in your browser, or
- Serve the folder for a more realistic preview:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

Fonts (Anton, Space Grotesk, Inter) load from Google Fonts, so you need an internet connection for the intended typography. Offline, the site falls back to system fonts.

---

## Before you publish — update these placeholders

| What | Where in `index.html` | Action |
|------|-----------------------|--------|
| LinkedIn URL | Footer social icons | Replace `linkedin.com/in/tlholohelo-geneva-mokoena` with your real profile URL |
| GitHub URL | Footer social icons | Replace `github.com/tlholohelo-mokoena` with your real profile, or delete the link |
| Dashboard count | Hero stats bar | "10+ Dashboards Delivered" is an estimate — set it to your real figure |
| Internship dates | Experience timeline | The CV lists the Future Interns internship as Mar–Jun 2026; confirm these are correct |

Tip: search for `linkedin.com` and `github.com` in `index.html` to find the links quickly.

---

## Customising content

Everything lives in `index.html`.

- **Colours and fonts** — edit the CSS variables at the top of the `<style>` block (`:root { --ink, --panel, --accent, ... }`).
- **Hero headline** — the `<h1>` inside the hero section.
- **Stats** — the `data-target` attribute on each `.count` element sets the number it counts up to.
- **Projects** — spotlight projects are `.spot-card` blocks; smaller projects are `.work-card` blocks. Copy an existing block to add another.
- **Replacing a screenshot** — overwrite the file in `assets/` using the same filename, or update the `<img src>`.
- **Updating your CV** — replace `assets/Tlholohelo_Mokoena_CV.pdf` (keep the filename, or update the `href`s that point to it).
- **Skills and tools** — edit the `.cap-item` and `.tool-box` blocks in the Capabilities section.

---

## Deploying (free hosting)

### GitHub Pages
1. Create a new repository (for example `portfolio`).
2. Upload `index.html` and the `assets/` folder to the repository root.
3. Go to **Settings → Pages**, choose the `main` branch and `/ (root)` folder, then save.
4. Your site goes live at `https://<your-username>.github.io/portfolio/`.

> For a clean URL (`https://<your-username>.github.io/`), name the repository `<your-username>.github.io`.

### Netlify
1. Open [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the whole `portfolio` folder into the page.
3. Netlify gives you a live URL immediately; rename it or add a custom domain in Site settings.

### Vercel
1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repository (or use the CLI: `npx vercel`).
2. Vercel detects a static site automatically — leave all build settings empty.

---

## Browser support

Current versions of Chrome, Edge, Firefox and Safari. The metallic headline uses `background-clip: text`, which all of these support.

---

## Credits

- Typography: [Anton](https://fonts.google.com/specimen/Anton), [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) and [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- Dashboards built in Microsoft Power BI during projects with [Future Interns](https://www.linkedin.com/company/future-interns/)

## Contact

**Tlholohelo Geneva Mokoena** — Business & Data Analyst
tlholohelo.geneva@gmail.com · +27 67 235 3206 · Gauteng, South Africa

© 2026 Tlholohelo Geneva Mokoena. All rights reserved.
