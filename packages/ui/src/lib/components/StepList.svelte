<script lang="ts">
  import Reveal from './Reveal.svelte';

  let {
    steps = [] as { title: string; text: string }[],
    class: klass = ''
  }: { steps?: { title: string; text: string }[]; class?: string } = $props();
</script>

<div class={`space-y-8 ${klass}`}>
  {#each steps as step, i}
    <Reveal delay={i * 80}>
      <div class="step-line">
        <span class="step-dot">{String(i + 1).padStart(2, '0')}</span>
        <h3 class="text-2xl font-semibold text-fg">{step.title}</h3>
        <p class="mt-2 max-w-xl leading-relaxed">{step.text}</p>
      </div>
    </Reveal>
  {/each}
</div>
