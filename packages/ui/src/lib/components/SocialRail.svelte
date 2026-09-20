<script lang="ts">
  let {
    socials = [] as { label: string; href: string; icon: string }[]
  }: { socials?: { label: string; href: string; icon: string }[] } = $props();
</script>

<!-- Plexify vertical social rail -->
<div class="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 2xl:block">
  <ul class="flex flex-col items-center gap-7 [writing-mode:vertical-rl]">
    {#each socials as social}
      <li>
        <a
          href={social.href}
          target="_blank"
          rel="noreferrer noopener"
          class="text-sm font-medium tracking-wide text-fg/35 transition-colors hover:text-primarylight"
        >
          {social.label}
        </a>
      </li>
    {/each}
    <li aria-hidden="true" class="h-16 w-px bg-gradient-to-b from-primary/60 to-transparent"></li>
  </ul>
</div>
