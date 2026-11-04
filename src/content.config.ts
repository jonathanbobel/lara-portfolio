import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const categories = ['Branding', 'Campaigns', 'Print', 'Annual Reports', 'Events'] as const;

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      year: z.string().optional(),
      categories: z.array(z.enum(categories)).min(1),
      deliverables: z.array(z.string()).default([]),
      /** Square thumbnail used in grids. */
      cover: image(),
      coverAlt: z.string(),
      /** Lower numbers sort first. */
      order: z.number(),
      featured: z.boolean().default(false),
      link: z.object({ label: z.string(), href: z.string() }).optional(),
      images: z.array(
        z.object({
          src: image(),
          alt: z.string(),
          /** full = column width; three-quarter / half = narrower, centered (good for tall pieces); tile = two per row. */
          size: z.enum(['full', 'three-quarter', 'half', 'tile']).default('full'),
          /** Adds a hairline frame — useful for pieces on a white background. */
          border: z.boolean().default(false),
        }),
      ),
    }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      summary: z.string(),
      year: z.string().optional(),
      role: z.string().optional(),
      cover: image(),
      coverAlt: z.string(),
      order: z.number().default(100),
      /** Drafts are skipped in production builds. */
      draft: z.boolean().default(false),
    }),
});

export const collections = { work, 'case-studies': caseStudies };
