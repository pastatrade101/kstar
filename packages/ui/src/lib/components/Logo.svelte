<script lang="ts">
  let {
    href = '/',
    src = '/logo.png',
    label = 'Kstar (T) Group',
    tagline = 'Turn Your Desires Into Reality',
    showTagline = true,
    compact = false,
    size = 44
  }: {
    href?: string;
    src?: string;
    label?: string;
    tagline?: string;
    showTagline?: boolean;
    compact?: boolean;
    size?: number;
  } = $props();
</script>

<a {href} class="group inline-flex items-center gap-3" aria-label={`${label} — home`}>
  <span class="logo-chip" style={`--logo-size:${size}px`}>
    <img {src} alt="" width={size} height={size} class="block size-full object-contain" />
  </span>
  {#if !compact}
    <span class="leading-none">
      <span class="block text-lg font-bold tracking-tight text-fg sm:text-xl">{label}</span>
      {#if showTagline}
        <span
          class="mt-1 block text-[9px] font-semibold uppercase leading-[1.35] tracking-[1.5px] text-primarylight sm:text-[10px] sm:tracking-[2px]"
        >
          {tagline}
        </span>
      {/if}
    </span>
  {/if}
</a>
