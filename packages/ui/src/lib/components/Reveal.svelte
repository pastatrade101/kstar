<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    delay = 0,
    as = 'div',
    class: klass = '',
    children
  }: { delay?: number; as?: string; class?: string; children?: Snippet } = $props();

  let visible = $state(false);

  /** Intersection-based fade-up — the templates' WOW.js effect without the dependency. */
  function reveal(node: HTMLElement) {
    if (typeof IntersectionObserver === 'undefined') {
      visible = true;
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible = true;
            io.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    );
    io.observe(node);
    return { destroy: () => io.disconnect() };
  }
</script>

<svelte:element
  this={as}
  use:reveal
  class={`reveal ${visible ? 'is-visible' : ''} ${klass}`}
  style={`transition-delay:${delay}ms`}
>
  {@render children?.()}
</svelte:element>
