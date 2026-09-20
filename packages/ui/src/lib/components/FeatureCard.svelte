<script lang="ts">
  import Icon from './Icon.svelte';

  let {
    title = '',
    text = '',
    icon = 'spark',
    href = undefined,
    numbered = false,
    class: klass = ''
  }: {
    title?: string;
    text?: string;
    icon?: string;
    href?: string;
    numbered?: boolean;
    class?: string;
  } = $props();
</script>

<svelte:element
  this={href ? 'a' : 'div'}
  href={href ?? undefined}
  class={`feature-card block ${numbered ? 'counter-card' : ''} ${klass}`}
>
  <span class="icon-box"><Icon name={icon} size={28} /></span>
  <h3 class="mt-7 text-2xl font-semibold text-fg">{title}</h3>
  <p class="mt-3 leading-relaxed">{text}</p>
  {#if href}
    <span class="btn-line mt-6">
      Discover
      <Icon name="arrow" size={16} />
    </span>
  {/if}
</svelte:element>
