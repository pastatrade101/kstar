<script lang="ts">
  import Icon from './Icon.svelte';
  import { photos, unsplash } from '@kstar/content';
  import type { Photo, PhotoName } from '@kstar/content';

  let {
    name = '',
    kicker = '',
    text = '',
    icon = 'spark',
    cta = undefined,
    index = '',
    photo = undefined,
    class: klass = ''
  }: {
    name?: string;
    kicker?: string;
    text?: string;
    icon?: string;
    cta?: { label: string; href: string };
    index?: string;
    photo?: PhotoName | Photo;
    class?: string;
  } = $props();

  const p = $derived(photo ? (typeof photo === 'string' ? photos[photo] : photo) : undefined);
</script>

<!-- PRIVA mask/cover card: art-directed panel that reveals its body copy on hover. -->
<article class={`mask on-dark group min-h-[460px] bg-surface2 ${klass}`}>
  {#if p}
    <img
      src={unsplash(p.id, 800, 1000)}
      srcset={`${unsplash(p.id, 480, 600)} 480w, ${unsplash(p.id, 800, 1000)} 800w, ${unsplash(p.id, 1100, 1375)} 1100w`}
      sizes="(max-width: 768px) 100vw, 33vw"
      alt={p.alt}
      loading="lazy"
      decoding="async"
      class="absolute inset-0 size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
    />
  {/if}
  <div
    class="absolute inset-0 opacity-70"
    style="background:
      radial-gradient(120% 80% at 80% 0%, rgba(91, 138, 240,0.18) 0%, rgba(91, 138, 240,0) 60%),
      radial-gradient(90% 70% at 0% 100%, rgba(26, 59, 143,0.85) 0%, rgba(10, 20, 51,0) 70%);"
  ></div>
  <div class="cover">
    <div class="c-inner w-full">
      {#if index}
        <span class="mb-4 block text-sm font-bold tracking-[3px] text-fg/30">{index}</span>
      {/if}
      <span class="icon-box"><Icon name={icon} size={28} /></span>
      <h3 class="mt-6 text-2xl font-semibold text-fg">{name}</h3>
      {#if kicker}
        <p class="mt-2 text-lg font-medium text-primarylight">{kicker}</p>
      {/if}
      <div class="c-reveal">
        <p class="mt-4 leading-relaxed">{text}</p>
      </div>
      {#if cta}
        <a href={cta.href} class="btn-line mt-6">
          {cta.label}
          <Icon name="arrow" size={16} />
        </a>
      {/if}
    </div>
  </div>
</article>
