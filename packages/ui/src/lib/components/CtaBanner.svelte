<script lang="ts">
  import Button from './Button.svelte';
  import Reveal from './Reveal.svelte';

  let {
    eyebrow = '',
    title = '',
    text = '',
    paragraphs = [] as string[],
    primary = undefined,
    secondary = undefined,
    tone = 'dark',
    class: klass = ''
  }: {
    eyebrow?: string;
    title?: string;
    text?: string;
    paragraphs?: string[];
    primary?: { label: string; href: string };
    secondary?: { label: string; href: string };
    tone?: 'dark' | 'primary';
    class?: string;
  } = $props();

  const body = $derived(paragraphs.length ? paragraphs : text ? [text] : []);
</script>

<section class={`section ${klass}`}>
  <div class="container-k">
    <Reveal>
      <div
        class={`relative overflow-hidden rounded-4xl px-6 py-14 text-center sm:px-12 lg:px-20 lg:py-20 ${
          tone === 'primary' ? 'on-dark bg-primary' : 'panel panel-glass'
        }`}
      >
        {#if tone !== 'primary'}
          <div
            class="pointer-events-none absolute inset-0 opacity-80"
            style="background: radial-gradient(90% 120% at 50% 0%, rgba(91, 138, 240,0.16) 0%, rgba(91, 138, 240,0) 60%);"
          ></div>
        {/if}
        <div class="relative mx-auto max-w-3xl">
          {#if eyebrow}
            <span class="p-title" class:!text-fg={tone === 'primary'}>{eyebrow}</span>
          {/if}
          <h2 class="headline-lg" class:text-fg={tone === 'primary'}>{title}</h2>
          <span class="small-border" class:!bg-white={tone === 'primary'}></span>
          {#each body as paragraph}
            <p
              class="mx-auto mt-4 max-w-2xl text-lg leading-relaxed first:mt-0"
              class:text-fg={tone === 'primary'}
            >
              {paragraph}
            </p>
          {/each}
          {#if primary || secondary}
            <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
              {#if primary}
                <Button
                  href={primary.href}
                  label={primary.label}
                  variant={tone === 'primary' ? 'dark' : 'primary'}
                />
              {/if}
              {#if secondary}
                <Button
                  href={secondary.href}
                  label={secondary.label}
                  variant={tone === 'primary' ? 'light' : 'outline'}
                />
              {/if}
            </div>
          {/if}
        </div>
      </div>
    </Reveal>
  </div>
</section>
