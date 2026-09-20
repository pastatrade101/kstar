<script lang="ts">
  import Icon from './Icon.svelte';
  import Button from './Button.svelte';
  import Picture from './Picture.svelte';
  import type { Photo, PhotoName } from '@kstar/content';

  let {
    index = '',
    name = '',
    kicker = '',
    text = '',
    icon = 'seed',
    accent = 'foundation',
    cta = { label: '', href: '' },
    photo = undefined,
    class: klass = ''
  }: {
    index?: string;
    name?: string;
    kicker?: string;
    text?: string;
    icon?: string;
    accent?: 'foundation' | 'data';
    cta?: { label: string; href: string };
    photo?: PhotoName | Photo;
    class?: string;
  } = $props();
</script>

<article data-accent={accent} class={`panel relative overflow-hidden p-8 lg:p-12 ${klass}`}>
  <div
    class="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full opacity-25 blur-2xl"
    style="background: var(--primary);"
  ></div>
  <div class="relative">
    {#if photo}
      <Picture
        {photo}
        ratio="16/9"
        rounded="rounded-2xl"
        sizes="(max-width: 992px) 90vw, 45vw"
        class="mb-8"
      />
    {/if}
    <div class="flex items-center justify-between">
      <span class="icon-box"><Icon name={icon} size={30} /></span>
      {#if index}
        <span class="text-sm font-bold tracking-[4px] text-fg/25">{index}</span>
      {/if}
    </div>
    <h3 class="mt-8 text-3xl font-semibold text-fg">{name}</h3>
    <p class="mt-2 text-xl font-medium" style="color: var(--primary);">{kicker}</p>
    <span class="small-border sm-left"></span>
    <p class="max-w-xl text-lg leading-relaxed">{text}</p>
    {#if cta.href}
      <Button href={cta.href} label={cta.label} variant="primary" size="sm" class="mt-8" />
    {/if}
  </div>
</article>
