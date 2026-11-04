# larabobel.com

Lara Bobel's portfolio — a static [Astro](https://astro.build) site.

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static files to dist/
npm run preview   # serve the built site locally
```

## Where things live

| What | Where |
| --- | --- |
| Portfolio projects | `src/content/work/*.md` (one file per project; images in `src/assets/work/<project>/`) |
| Case studies | `src/content/case-studies/*.md` — see `README.md.txt` in that folder for a template |
| Pages (home, about, contact, donations) | `src/pages/` |
| Nav, footer, cards | `src/components/` |
| Colors, fonts, shared styles | `src/styles/global.css` |
| Name, email, LinkedIn, nav links | `src/lib/site.ts` |
| 2019 annual report flipbook (legacy, self-contained) | `public/2019-annual/` |

### Adding a project

1. Make a folder in `src/assets/work/` with a square `cover` image and the project images.
2. Copy one of the files in `src/content/work/`, rename it (the file name becomes the URL, e.g. `/work/my-project`), and update the frontmatter.
3. `order` controls position; `featured: true` puts it on the home page (first six are shown).
   Image `size` can be `full`, `three-quarter`, `half`, or `tile` (two per row). `border: true` adds a hairline frame.

## Contact form

The form sends through [Web3Forms](https://web3forms.com) (free, no server needed):

1. Go to web3forms.com, enter **lara.schmida@gmail.com**, and confirm — you'll be emailed an access key.
2. Create a `.env` file (see `.env.example`):
   ```
   PUBLIC_WEB3FORMS_KEY=your-key-here
   ```
3. Rebuild. Without a key the form still renders but tells visitors to email directly.

## Deploy

Upload the contents of `dist/` to the web root (it includes `.htaccess` for the 404 page).
Old `/portfolio/<name>` URLs redirect to `/work/<name>` automatically.
