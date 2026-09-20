<script lang="ts">
  import {
    CtaBanner,
    FeatureCard,
    PageHero,
    Picture,
    Reveal,
    SectionHeading,
    Seo
  } from '@kstar/ui';
  import { whatWeDo } from '@kstar/content';
</script>

<Seo title={whatWeDo.seo.title} description={whatWeDo.seo.description} />

<PageHero
  eyebrow={whatWeDo.hero.eyebrow}
  title={whatWeDo.hero.title}
  text={whatWeDo.hero.text}
  breadcrumb={[{ label: 'Home', href: '/' }, { label: 'What We Do' }]}
  photo="creativity"
/>

<section class="section">
  <div class="container-k">
    <SectionHeading
      eyebrow={whatWeDo.focusAreas.eyebrow}
      title={whatWeDo.focusAreas.title}
      align="center"
    />
    <div class="counter-list mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {#each whatWeDo.focusAreas.items as item, i}
        <Reveal delay={(i % 4) * 90}>
          <FeatureCard
            title={item.title}
            text={item.text}
            icon={item.icon}
            href={item.href}
            numbered
          />
        </Reveal>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="container-k">
    <SectionHeading eyebrow="Our Departments" title="Explore Each Department." align="center" />
    <div class="mt-12 grid gap-6 md:grid-cols-3">
      {#each whatWeDo.departments as department, i}
        <Reveal delay={i * 110}>
          <a href={`/what-we-do/${department.slug}`} class="feature-card block h-full">
            <span class="p-title">{department.eyebrow}</span>
            <h3 class="headline-md">{department.title}</h3>
            <span class="small-border sm-left"></span>
            <Picture
              photo={department.photo}
              ratio="16/9"
              sizes="(max-width: 768px) 90vw, 30vw"
              class="mb-6"
            />
            <p class="leading-relaxed">{department.paragraphs[0]}</p>
            <span class="btn-line mt-6">{department.cta.label}</span>
          </a>
        </Reveal>
      {/each}
    </div>
  </div>
</section>

<CtaBanner
  eyebrow={whatWeDo.cta.eyebrow}
  title={whatWeDo.cta.title}
  text={whatWeDo.cta.text}
  primary={whatWeDo.cta.primary}
  secondary={whatWeDo.cta.secondary}
/>
