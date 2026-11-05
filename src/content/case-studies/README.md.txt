How to add a case study
=======================

See fathom-brand-audit.mdx in this folder for a complete, real example.

1. Create a file here, e.g. `ymca-campaign.mdx`. The file name becomes the URL:
   /case-studies/ymca-campaign
2. Put images in src/assets/case-studies/<name>/ and PDFs in public/case-studies/<name>/.

---
title: Rebranding the YMCA membership campaign
client: YMCA
summary: One or two sentences shown on cards and as the page intro.
year: '2018'                       # optional
role: Creative Director            # optional
disciplines: [Brand Strategy, Creative Direction]   # shown above the title
cover: ../../assets/case-studies/ymca-campaign/cover.jpg
coverAlt: Describe the cover image
order: 1                           # lower numbers show first
draft: true                        # drafts only show up in `npm run dev`
---

import DocumentCard from '../../components/DocumentCard.astro';
import Figure from '../../components/Figure.astro';
import deckPreview from '../../assets/case-studies/ymca-campaign/deck-cover.jpg';
import photo from '../../assets/case-studies/ymca-campaign/photo.jpg';

## The brief
Write the story in normal markdown.

<Figure src={photo} alt="What's in the image" caption="Optional caption" wide />

<DocumentCard
  href="/case-studies/ymca-campaign/deck.pdf"
  title="Campaign Deck"
  description="What the document is."
  preview={deckPreview}
  meta="12 pages"
/>

> Pull quotes start with a ">".

Tip: to make a preview image of a PDF's first page on a Mac, open it in Preview,
then File → Export… → JPEG.
