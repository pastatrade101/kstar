<script lang="ts">
  import Icon from './Icon.svelte';

  let {
    items = [] as string[],
    columns = 1,
    class: klass = ''
  }: { items?: string[]; columns?: 1 | 2 | 3; class?: string } = $props();

  const grid = $derived(
    columns === 3
      ? 'sm:grid-cols-2 lg:grid-cols-3'
      : columns === 2
        ? 'sm:grid-cols-2'
        : 'grid-cols-1'
  );
</script>

<ul class={`grid gap-x-8 gap-y-3 ${grid} ${klass}`}>
  {#each items as item}
    <li class="flex items-start gap-3 text-lg leading-relaxed">
      <span
        class="mt-1 inline-flex size-6 flex-none items-center justify-center rounded-full bg-primary/15 text-primarylight"
      >
        <Icon name="check" size={14} stroke={2.2} />
      </span>
      <span>{item}</span>
    </li>
  {/each}
</ul>
