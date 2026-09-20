<script lang="ts">
  import { CtaBanner, FeatureCard, PageHero, Reveal, SectionHeading, Seo } from '@kstar/ui';
  import { getInvolved, home } from '@kstar/content';
  import FormBlock from '$lib/FormBlock.svelte';

  let { form } = $props();
</script>

<Seo title={getInvolved.seo.title} description={getInvolved.seo.description} />

<PageHero
  eyebrow={getInvolved.hero.eyebrow}
  title={getInvolved.hero.title}
  paragraphs={getInvolved.hero.paragraphs}
  photo="community"
  breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Get Involved' }]}
  primary={{ label: 'Submit Interest', href: '#form' }}
/>

<section class="section">
  <div class="container-k">
    <SectionHeading
      eyebrow={getInvolved.ways.eyebrow}
      title={getInvolved.ways.title}
      align="center"
    />
    <div class="counter-list mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each getInvolved.ways.items as way, i}
        <Reveal delay={(i % 3) * 100}>
          <FeatureCard title={way.title} text={way.text} icon={way.icon} numbered />
        </Reveal>
      {/each}
    </div>
  </div>
</section>

<div id="form">
  <FormBlock
    eyebrow={getInvolved.formIntro.eyebrow}
    title={getInvolved.formIntro.title}
    paragraphs={getInvolved.formIntro.paragraphs}
    fields={getInvolved.fields}
    submitLabel={getInvolved.submitLabel}
    success={getInvolved.success}
    {form}
  />
</div>

<CtaBanner
  eyebrow={home.contactCta.eyebrow}
  title={home.contactCta.title}
  text={home.contactCta.text}
  primary={home.contactCta.cta}
  tone="primary"
/>
