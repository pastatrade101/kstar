<script lang="ts">
  import { PageHero, Reveal, Seo } from '@kstar/ui';
  import { privacy } from '@kstar/content';
</script>

<Seo title={privacy.seo.title} description={privacy.seo.description} />

<PageHero
  eyebrow={privacy.eyebrow}
  title={privacy.title}
  breadcrumb={[{ label: 'Home', href: '/' }, { label: privacy.title }]}
/>

<section class="section">
  <div class="container-k">
    <Reveal>
      <div class="panel mx-auto max-w-3xl p-8 lg:p-12">
        {#each privacy.paragraphs as paragraph}
          <p class="mb-5 text-lg leading-relaxed last:mb-0">{paragraph}</p>
        {/each}
        <p class="mt-8 border-l-2 border-primary pl-5 text-[15px] italic">{privacy.note}</p>
      </div>
    </Reveal>
  </div>
</section>
