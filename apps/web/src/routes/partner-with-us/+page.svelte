<script lang="ts">
  import { CtaBanner, ListCheck, PageHero, Picture, Reveal, SectionHeading, Seo } from '@kstar/ui';
  import { partner } from '@kstar/content';
</script>

<Seo title={partner.seo.title} description={partner.seo.description} />

<PageHero
  eyebrow={partner.hero.eyebrow}
  title={partner.hero.title}
  paragraphs={partner.hero.paragraphs}
  photo="pitch"
  breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Partner With Us' }]}
/>

<section class="section">
  <div class="container-k">
    <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-5">
        <SectionHeading eyebrow="Scope" title="Partnerships May Involve" />
      </div>
      <div class="lg:col-span-7">
        <Reveal delay={100}>
          <Picture photo="team" ratio="16/9" sizes="(max-width: 992px) 90vw, 55vw" class="mb-6" />
          <div class="panel p-8 lg:p-10">
            <ListCheck items={partner.areas} columns={2} />
          </div>
        </Reveal>
      </div>
    </div>
  </div>
</section>

<CtaBanner
  eyebrow={partner.cta.eyebrow}
  title={partner.cta.title}
  text={partner.cta.text}
  primary={partner.cta.primary}
  secondary={partner.cta.secondary}
/>
