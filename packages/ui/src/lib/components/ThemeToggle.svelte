<script lang="ts">
  import Icon from './Icon.svelte';

  type Theme = 'light' | 'dark';

  let { class: klass = '', withLabel = false }: { class?: string; withLabel?: boolean } = $props();

  // The no-flash script in app.html has already set data-theme before hydration.
  let theme = $state<Theme>('dark');

  $effect(() => {
    const current = document.documentElement.dataset.theme;
    theme = current === 'light' ? 'light' : 'dark';
  });

  function toggle() {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem('kstar-theme', theme);
    } catch {
      // Storage can be blocked; the choice still applies for this visit.
    }
  }
</script>

<button
  type="button"
  onclick={toggle}
  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
  aria-pressed={theme === 'light'}
  title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
  class={`inline-flex items-center gap-2 rounded-full border border-fg/15 px-3 text-fg/80 transition-all duration-300 hover:border-primary hover:text-primarylight ${
    withLabel ? 'h-11' : 'size-11 justify-center !px-0'
  } ${klass}`}
>
  <span class="relative inline-flex size-5 items-center justify-center">
    <span
      class={`absolute transition-all duration-500 ${theme === 'dark' ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
    >
      <Icon name="sun" size={18} />
    </span>
    <span
      class={`absolute transition-all duration-500 ${theme === 'dark' ? 'scale-50 opacity-0' : 'scale-100 opacity-100'}`}
    >
      <Icon name="moon" size={18} />
    </span>
  </span>
  {#if withLabel}
    <span class="text-[15px] font-medium">{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
  {/if}
</button>
