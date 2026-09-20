<script lang="ts">
  import Button from './Button.svelte';
  import Counter from './Counter.svelte';
  import HeroArt from './HeroArt.svelte';
  import Icon from './Icon.svelte';
  import Picture from './Picture.svelte';
  import type { Photo, PhotoName } from '@kstar/content';

  let {
    eyebrow = '',
    title = '',
    text = '',
    primary = undefined,
    secondary = undefined,
    supportingLink = undefined,
    stats = [] as { value: number; suffix?: string; label: string }[],
    photo = undefined
  }: {
    eyebrow?: string;
    title?: string;
    text?: string;
    primary?: { label: string; href: string };
    secondary?: { label: string; href: string };
    supportingLink?: { label: string; href: string };
    stats?: { value: number; suffix?: string; label: string }[];
    photo?: PhotoName | Photo;
  } = $props();
</script>

<!-- Full-bleed band: the fixed header floats over it. -->
<section class="on-dark relative overflow-hidden bg-band pb-14 pt-32 lg:pb-24 lg:pt-44">
  <div
    class="pointer-events-none absolute inset-0"
    style="background:
        radial-gradient(70% 55% at 12% 0%, rgba(91, 138, 240,0.18) 0%, rgba(91, 138, 240,0) 60%),
        radial-gradient(60% 60% at 95% 30%, rgba(26, 59, 143,0.9) 0%, rgba(5, 12, 34,0) 70%);"
  ></div>
  <div
    class="pointer-events-none absolute inset-0 opacity-[0.07]"
    style="background-image: linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px); background-size: 84px 84px;"
  ></div>

  <div class="container-k relative">
    <div class="grid items-center gap-12 lg:grid-cols-12">
      <div class="lg:col-span-7">
        {#if eyebrow}
          <span
            class="panel-glass inline-flex rounded-2lg px-4 py-2 text-[13px] font-bold uppercase tracking-[3px] text-primarylight"
          >
            {eyebrow}
          </span>
        {/if}
        <h1 class="headline-xl mt-6 text-fg">{title}</h1>
        <p class="mt-6 max-w-xl text-lg leading-relaxed sm:text-xl">{text}</p>

        <div class="mt-10 flex flex-wrap items-center gap-4">
          {#if primary}
            <Button href={primary.href} label={primary.label} variant="light" />
          {/if}
          {#if secondary}
            <Button href={secondary.href} label={secondary.label} variant="outline" />
          {/if}
        </div>

        {#if supportingLink}
          <a href={supportingLink.href} class="btn-line mt-8">
            {supportingLink.label}
            <Icon name="arrow" size={16} />
          </a>
        {/if}
      </div>

      <div class="lg:col-span-5">
        {#if photo}
          <div class="relative mx-auto max-w-md">
            <span
              class="pointer-events-none absolute left-1/2 top-1/2 w-[135%] -translate-x-1/2 -translate-y-1/2 opacity-60"
            >
              <HeroArt />
            </span>
            <Picture
              {photo}
              ratio="4/5"
              rounded="rounded-4xl"
              priority
              sizes="(max-width: 992px) 88vw, 38vw"
              class="relative border border-fg/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            />
          </div>
        {:else}
          <HeroArt class="mx-auto max-w-md" />
        {/if}
      </div>
    </div>

    {#if stats.length}
      <div class="mt-14 grid gap-px overflow-hidden rounded-2xl sm:grid-cols-3">
        {#each stats as stat, i}
          <div
            class={`flex items-center gap-4 px-6 py-6 ${
              i === 1 ? 'bg-accent text-fg' : 'panel-glass'
            }`}
          >
            <span class="text-4xl font-bold text-fg">
              <Counter value={stat.value} suffix={stat.suffix ?? ''} />
            </span>
            <p class={`text-[15px] font-medium ${i === 1 ? 'text-fg' : 'text-fg/85'}`}>
              {stat.label}
            </p>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>
