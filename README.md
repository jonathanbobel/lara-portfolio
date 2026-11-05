# Lara Bobel — Portfolio

Source for [larabobel.com](https://www.larabobel.com), the portfolio of Lara Bobel, creative director.

Built with [Astro](https://astro.build) as a fully static site and deployed on [Vercel](https://vercel.com). There's no CMS or database. Projects are markdown files and images that live in this repo.

## Tech stack

- **Astro 7**: static site generation, content collections, image optimization, view transitions
- **Plain CSS**: design tokens live in `src/styles/global.css`, and component styles are scoped in each `.astro` file
- **Fonts**: Rokkitt and Roboto Condensed, self-hosted via Fontsource
- **Contact form**: [Web3Forms](https://web3forms.com) (no backend needed)
- **Hosting**: Vercel, which builds and deploys automatically on push

## Getting started

Requires Node 20 or newer.

```sh
npm install
cp .env.example .env   # then add the Web3Forms key (see below)
npm run dev            # http://localhost:4321
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Builds the static site to `dist/` |
| `npm run preview` | Serves the built `dist/` locally |
| `npm run check` | Type-checks `.astro` and `.ts` files |

## Project structure

```
src/
├── assets/            # images (optimized at build time)
│   ├── work/<slug>/   # one folder per portfolio project
│   ├── about/
│   └── donations/
├── components/        # Header, Footer, ProjectCard, CaseStudyCard
├── content/
│   ├── work/          # one .md per portfolio project
│   └── case-studies/  # one .mdx per case study
├── layouts/Base.astro # <head>, header, footer, page transitions
├── lib/
│   ├── site.ts        # name, title, email, LinkedIn, nav links
│   └── content.ts     # sorted collection helpers
├── pages/             # routes: /, /work, /work/[slug], /case-studies, /about, /contact, /donations
├── styles/global.css  # colors, type, buttons, shared layout
└── content.config.ts  # frontmatter schemas for work + case studies
public/
└── 2019-annual/       # legacy FlowPaper flipbook, served as-is
```

## Editing content

### Add or update a project

1. Create `src/assets/work/<slug>/` and add a square `cover` image (ideally 800×800 or larger) plus the project images.
2. Add `src/content/work/<slug>.md`. The filename becomes the URL (`/work/<slug>`). Copy an existing project as a starting point:

   ```yaml
   ---
   title: Project name
   client: Client name
   year: '2024'                     # optional
   categories: [Branding, Print]    # Branding | Campaigns | Print | Annual Reports | Events
   deliverables: [Logo, Business cards]
   cover: ../../assets/work/<slug>/cover.jpg
   coverAlt: Short description of the cover image
   order: 16                        # lower = earlier in the grid
   featured: true                   # show on the home page (first 6)
   link:                            # optional button on the project page
     label: Visit the website
     href: https://example.com
   images:
     - src: ../../assets/work/<slug>/hero.jpg
       alt: What's in the image
       size: full                   # full | three-quarter | half | tile (two per row)
       border: false                # hairline frame for pieces on white
   ---

   Project description in markdown.
   ```

3. Run `npm run dev` to check it. If a required field is missing or a category is misspelled, the build fails and tells you which file.

### Add a case study

Case studies are MDX (markdown plus components), so you can drop in figures (`<Figure>`) and linked PDF cards (`<DocumentCard>`). See `src/content/case-studies/fathom-brand-audit.mdx` for a full example and `README.md.txt` in that folder for a template. Images go in `src/assets/case-studies/<name>/` and PDFs in `public/case-studies/<name>/`. Set `draft: true` while writing. Drafts show up in `npm run dev` but not in production. The Case Studies page and the home page section switch from "coming soon" to cards as soon as one is published.

### Site-wide details

The name, title, email, LinkedIn URL, and nav links are all in `src/lib/site.ts`.

## Contact form

The form on `/contact` posts to Web3Forms, which emails each submission to **lara.schmida@gmail.com**.

1. Get an access key at [web3forms.com](https://web3forms.com) using that email address.
2. Set it as `PUBLIC_WEB3FORMS_KEY`:
   - **Locally:** in `.env`
   - **On Vercel:** Project → Settings → Environment Variables (Production and Preview), then redeploy

The key is meant to be public, so it's fine that it ends up in the page. Without a key, the form still renders but tells visitors to email directly. Spam is filtered with a honeypot field.

## Deployment

Vercel builds every push:

- `main` deploys to production (larabobel.com)
- Other branches and pull requests get preview URLs

Vercel auto-detects the build settings: Astro, `npm run build`, output in `dist/`. No adapter is needed because the site is fully static.

Old AngularJS-era URLs (`/portfolio/<name>`) redirect to `/work/<name>`. The mapping is in `astro.config.mjs`.

## Notes

- **2019 annual report:** `public/2019-annual/` is an old FlowPaper flipbook (jQuery + three.js). It's isolated from the rest of the site. If a PDF of the report turns up, link to that instead and delete the folder.
- **Thumbnails:** most project covers are 289px squares from the old site. Replacing them with larger exports will sharpen the grid on retina screens.
