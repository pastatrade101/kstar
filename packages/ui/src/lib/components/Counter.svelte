<script lang="ts">
  let {
    value = 0,
    suffix = '',
    prefix = '',
    duration = 1400,
    class: klass = ''
  }: {
    value?: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    class?: string;
  } = $props();

  let shown = $state(0);

  function count(node: HTMLElement) {
    const run = () => {
      const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        shown = value;
        return;
      }
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        shown = Math.round(value * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (typeof IntersectionObserver === 'undefined') {
      shown = value;
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return { destroy: () => io.disconnect() };
  }
</script>

<span use:count class={klass}>{prefix}{shown}{suffix}</span>
