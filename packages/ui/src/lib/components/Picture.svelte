<script lang="ts">
  import { photos, unsplash } from '@kstar/content';
  import type { PhotoName, Photo } from '@kstar/content';

  let {
    photo,
    ratio = '4/3',
    sizes = '(max-width: 992px) 100vw, 50vw',
    rounded = 'rounded-2xl',
    overlay = true,
    priority = false,
    class: klass = ''
  }: {
    photo: PhotoName | Photo;
    ratio?: string;
    sizes?: string;
    rounded?: string;
    overlay?: boolean;
    priority?: boolean;
    class?: string;
  } = $props();

  const p = $derived(typeof photo === 'string' ? photos[photo] : photo);
  const [rw, rh] = $derived(ratio.split('/').map(Number));
  const widths = [480, 720, 960, 1280, 1600];

  const srcset = $derived(
    widths.map((w) => `${unsplash(p.id, w, Math.round((w * rh) / rw))} ${w}w`).join(', ')
  );
  const src = $derived(unsplash(p.id, 1280, Math.round((1280 * rh) / rw)));
</script>

<figure
  class={`relative overflow-hidden ${rounded} bg-surface2 ${klass}`}
  style={`aspect-ratio: ${rw} / ${rh};`}
>
  <img
    {src}
    {srcset}
    {sizes}
    alt={p.alt}
    loading={priority ? 'eager' : 'lazy'}
    fetchpriority={priority ? 'high' : 'auto'}
    decoding="async"
    class="size-full object-cover transition-transform duration-700 ease-out"
  />
  {#if overlay}
    <!-- Brand tint so photography sits inside the dark-green canvas. -->
    <span
      class="pointer-events-none absolute inset-0"
      style="background: linear-gradient(180deg, rgba(5, 12, 34,0.15) 0%, rgba(5, 12, 34,0.72) 100%);"
    ></span>
    <span
      class="pointer-events-none absolute inset-0 mix-blend-soft-light"
      style="background: linear-gradient(140deg, rgba(91, 138, 240,0.45) 0%, rgba(26, 59, 143,0.2) 60%);"
    ></span>
  {/if}
</figure>
