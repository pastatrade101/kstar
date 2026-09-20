<script lang="ts">
  import Button from './Button.svelte';
  import Icon from './Icon.svelte';
  import { photos, unsplash } from '@kstar/content';
  import type { Photo, PhotoName } from '@kstar/content';

  let {
    eyebrow = '',
    title = '',
    text = '',
    paragraphs = [] as string[],
    breadcrumb = [] as { label: string; href?: string }[],
    primary = undefined,
    secondary = undefined,
    accent = undefined,
    photo = undefined
  }: {
    eyebrow?: string;
    title?: string;
    text?: string;
    paragraphs?: string[];
    breadcrumb?: { label: string; href?: string }[];
    primary?: { label: string; href: string };
    secondary?: { label: string; href: string };
    accent?: 'foundation' | 'data';
    photo?: PhotoName | Photo;
  } = $props();

  const body = $derived(paragraphs.length ? paragraphs : text ? [text] : []);
  const p = $derived(photo ? (typeof photo === 'string' ? photos[photo] : photo) : undefined);
</script>

<!-- PRIVA subheader, rebuilt on the Plexify rounded panel. -->
<section data-accent={accent} class="px-3 pt-24 sm:px-6 lg:pt-28">
  <div
    class="on-dark relative overflow-hidden rounded-4xl border border-fg/10 bg-band px-4 py-16 sm:px-8 lg:py-24"
  >
    {#if p}
      <img
        src={unsplash(p.id, 1600, 700)}
        srcset={`${unsplash(p.id, 900, 400)} 900w, ${unsplash(p.id, 1600, 700)} 1600w, ${unsplash(p.id, 2000, 875)} 2000w`}
        sizes="100vw"
        alt={p.alt}
        fetchpriority="high"
        decoding="async"
        class="absolute inset-0 size-full object-cover opacity-45"
      />
      <span
        class="pointer-events-none absolute inset-0"
        style="background: linear-gradient(100deg, rgba(5, 12, 34,0.96) 18%, rgba(5, 12, 34,0.72) 55%, rgba(5, 12, 34,0.45) 100%);"
      ></span>
    {/if}
    <div
      class="pointer-events-none absolute inset-0"
      style="background:
        radial-gradient(60% 70% at 85% 10%, color-mix(in srgb, var(--primary) 18%, transparent) 0%, transparent 65%),
        radial-gradient(70% 60% at 0% 100%, rgba(26, 59, 143,0.85) 0%, rgba(5, 12, 34,0) 70%);"
    ></div>

    <div class="container-k relative">
      {#if breadcrumb.length}
        <nav aria-label="Breadcrumb" class="mb-7">
          <ol class="flex flex-wrap items-center gap-2 text-[13px] uppercase tracking-[2px]">
            {#each breadcrumb as crumb, i}
              <li class="flex items-center gap-2">
                {#if crumb.href}
                  <a href={crumb.href} class="text-fg/50 transition-colors hover:text-primarylight">
                    {crumb.label}
                  </a>
                {:else}
                  <span class="text-primarylight">{crumb.label}</span>
                {/if}
                {#if i < breadcrumb.length - 1}
                  <Icon name="arrow" size={12} class="text-fg/25" />
                {/if}
              </li>
            {/each}
          </ol>
        </nav>
      {/if}

      {#if eyebrow}
        <span class="p-title">{eyebrow}</span>
      {/if}
      <h1 class="headline-xl max-w-4xl text-fg">{title}</h1>
      <span class="small-border sm-left"></span>
      {#each body as paragraph}
        <p class="mt-4 max-w-2xl text-lg leading-relaxed first:mt-0 sm:text-xl">{paragraph}</p>
      {/each}

      {#if primary || secondary}
        <div class="mt-10 flex flex-wrap items-center gap-4">
          {#if primary}
            <Button href={primary.href} label={primary.label} variant="primary" />
          {/if}
          {#if secondary}
            <Button href={secondary.href} label={secondary.label} variant="outline" />
          {/if}
        </div>
      {/if}
    </div>
  </div>
</section>
