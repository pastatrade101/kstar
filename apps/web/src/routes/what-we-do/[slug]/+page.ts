import { error } from '@sveltejs/kit';
import { whatWeDo } from '@kstar/content';

export const prerender = true;

export function entries() {
  return whatWeDo.departments.map((d) => ({ slug: d.slug }));
}

export function load({ params }) {
  const department = whatWeDo.departments.find((d) => d.slug === params.slug);
  if (!department) error(404, 'Department not found');
  return { department };
}
