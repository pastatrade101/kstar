<script lang="ts">
  import type { Snippet } from 'svelte';
  import Reveal from './Reveal.svelte';

  let {
    eyebrow = '',
    title = '',
    lead = '',
    paragraphs = [],
    align = 'left',
    size = 'lg',
    border = true,
    class: klass = '',
    children
  }: {
    eyebrow?: string;
    title?: string;
    lead?: string;
    paragraphs?: string[];
    align?: 'left' | 'center';
    size?: 'lg' | 'md';
    border?: boolean;
    class?: string;
    children?: Snippet;
  } = $props();
</script>

<Reveal class={`${align === 'center' ? 'text-center mx-auto max-w-3xl' : ''} ${klass}`}>
  {#if eyebrow}
    <span class="p-title">{eyebrow}</span>
  {/if}
  {#if title}
    <h2 class={size === 'lg' ? 'headline-lg' : 'headline-md'}>{title}</h2>
  {/if}
  {#if border}
    <span class={`small-border ${align === 'center' ? '' : 'sm-left'}`}></span>
  {/if}
  {#if lead}
    <p class="max-w-2xl text-lg leading-relaxed">{lead}</p>
  {/if}
  {#each paragraphs as paragraph}
    <p class="mt-4 max-w-2xl text-lg leading-relaxed first:mt-0">{paragraph}</p>
  {/each}
  {@render children?.()}
</Reveal>
