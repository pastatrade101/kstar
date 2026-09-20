<script lang="ts">
  import Icon from './Icon.svelte';

  let {
    href = undefined,
    label = '',
    variant = 'primary',
    size = 'md',
    icon = 'arrowUp',
    type = 'button',
    disabled = false,
    external = false,
    class: klass = '',
    onclick = undefined
  }: {
    href?: string;
    label?: string;
    variant?: 'primary' | 'light' | 'outline' | 'dark';
    size?: 'md' | 'sm';
    icon?: string | null;
    type?: 'button' | 'submit';
    disabled?: boolean;
    external?: boolean;
    class?: string;
    onclick?: (e: MouseEvent) => void;
  } = $props();

  const cls = $derived(
    ['btn', `btn-${variant}`, size === 'sm' ? 'btn-sm' : '', klass].filter(Boolean).join(' ')
  );
</script>

{#if href}
  <a
    {href}
    class={cls}
    target={external ? '_blank' : undefined}
    rel={external ? 'noreferrer noopener' : undefined}
  >
    <span class="btn-label">{label}</span>
    {#if icon}
      <span class="btn-capsule"><Icon name={icon} size={18} /></span>
    {/if}
  </a>
{:else}
  <button {type} {disabled} {onclick} class={cls}>
    <span class="btn-label">{label}</span>
    {#if icon}
      <span class="btn-capsule"><Icon name={icon} size={18} /></span>
    {/if}
  </button>
{/if}
