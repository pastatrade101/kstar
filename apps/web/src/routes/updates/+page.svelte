<script lang="ts">
  import { CtaBanner, Icon, PageHero, Reveal, SectionHeading, Seo } from '@kstar/ui';
  import { updates, home } from '@kstar/content';

  let active = $state('All');
  const categories = ['All', ...updates.categories];
  const visible = $derived(
    active === 'All' ? updates.items : updates.items.filter((item) => item.category === active)
  );
</script>

<Seo title={updates.seo.title} description={updates.seo.description} />

<PageHero
  eyebrow={updates.hero.eyebrow}
  title={updates.hero.title}
  text={updates.hero.text}
  photo="events"
  breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Updates' }]}
/>

<section class="section">
  <div class="container-k">
    <SectionHeading eyebrow="Categories" title="Browse by Topic." />

    <div class="flex flex-wrap gap-3">
      {#each categories as category}
        <button
          type="button"
          onclick={() => (active = category)}
          class={`rounded-full border px-5 py-2.5 text-[15px] font-medium transition-all ${
            active === category
              ? 'on-dark border-primary bg-primary text-fg'
              : 'border-fg/12 text-fg/75 hover:border-primary hover:text-primarylight'
          }`}
        >
          {category}
        </button>
      {/each}
    </div>

    {#if visible.length}
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each visible as item, i}
          <Reveal delay={(i % 3) * 100}>
            <a href={item.href} class="feature-card block h-full">
              <span class="p-title">{item.category}</span>
              <h3 class="text-2xl font-semibold text-fg">{item.title}</h3>
              <p class="mt-3 leading-relaxed">{item.excerpt}</p>
              <span class="btn-line mt-6">Read update <Icon name="arrow" size={16} /></span>
            </a>
          </Reveal>
        {/each}
      </div>
    {:else}
      <Reveal delay={80}>
        <div class="panel mt-12 flex flex-col items-center gap-5 px-8 py-16 text-center">
          <span class="icon-box"><Icon name="megaphone" size={28} /></span>
          <p class="max-w-xl text-lg leading-relaxed">{updates.empty}</p>
        </div>
      </Reveal>
    {/if}
  </div>
</section>

<CtaBanner
  eyebrow={home.getInvolvedCta.eyebrow}
  title={home.getInvolvedCta.title}
  paragraphs={home.getInvolvedCta.paragraphs}
  primary={home.getInvolvedCta.primary}
  secondary={home.getInvolvedCta.secondary}
/>
