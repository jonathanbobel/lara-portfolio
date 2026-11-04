import { getCollection } from 'astro:content';

export async function getWork() {
  const items = await getCollection('work');
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getCaseStudies() {
  const items = await getCollection('case-studies', ({ data }) => import.meta.env.DEV || !data.draft);
  return items.sort((a, b) => a.data.order - b.data.order);
}
