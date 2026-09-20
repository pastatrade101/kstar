<script lang="ts">
  import { PageHero, Reveal, Seo } from '@kstar/ui';
  import { terms } from '@kstar/content';
</script>

<Seo title={terms.seo.title} description={terms.seo.description} />

<PageHero
  eyebrow={terms.eyebrow}
  title={terms.title}
  breadcrumb={[{ label: 'Home', href: '/' }, { label: terms.title }]}
/>

<section class="section">
  <div class="container-k">
    <Reveal>
      <div class="panel mx-auto max-w-3xl p-8 lg:p-12">
        {#each terms.paragraphs as paragraph}
          <p class="mb-5 text-lg leading-relaxed last:mb-0">{paragraph}</p>
        {/each}
      </div>
    </Reveal>
  </div>
</section>
