<script lang="ts">
  import { iconPaths, socialPaths } from '../icons/paths';

  let {
    name = 'spark',
    size = 24,
    stroke = 1.6,
    set = 'line',
    class: klass = ''
  }: {
    name?: string;
    size?: number;
    stroke?: number;
    set?: 'line' | 'social';
    class?: string;
  } = $props();

  const d = $derived(set === 'social' ? socialPaths[name] : (iconPaths[name] ?? iconPaths.spark));
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width={stroke}
  stroke-linecap="round"
  stroke-linejoin="round"
  class={klass}
  aria-hidden="true"
>
  <path {d} />
</svg>
