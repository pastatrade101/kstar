<script lang="ts">
  let {
    items = [] as string[],
    separator = '✦',
    class: klass = ''
  }: { items?: string[]; separator?: string; class?: string } = $props();

  const loop = $derived([...items, ...items]);
</script>

<div class={`marquee-wrap overflow-hidden border-y border-fg/10 py-6 ${klass}`}>
  <div class="marquee items-center gap-10">
    {#each loop as item, i}
      <span class="flex items-center gap-10" aria-hidden={i >= items.length ? 'true' : undefined}>
        <span
          class="headline-md whitespace-nowrap font-semibold uppercase tracking-tight text-fg/90"
        >
          {item}
        </span>
        <span class="text-2xl text-primarylight">{separator}</span>
      </span>
    {/each}
  </div>
</div>
