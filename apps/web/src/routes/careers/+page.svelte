<script lang="ts">
  import {
    CtaBanner,
    Icon,
    ListCheck,
    PageHero,
    Picture,
    Reveal,
    SectionHeading,
    Seo
  } from '@kstar/ui';
  import { careers } from '@kstar/content';
</script>

<Seo title={careers.seo.title} description={careers.seo.description} />

<PageHero
  eyebrow={careers.hero.eyebrow}
  title={careers.hero.title}
  paragraphs={careers.hero.paragraphs}
  photo="team"
  breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
  primary={{ label: 'View Opportunities', href: '#vacancies' }}
/>

<section class="section">
  <div class="container-k">
    <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-5">
        <SectionHeading
          eyebrow={careers.working.eyebrow}
          title={careers.working.title}
          paragraphs={careers.working.paragraphs}
        />
      </div>
      <div class="lg:col-span-7">
        <Reveal delay={100}>
          <Picture
            photo="dialogue"
            ratio="16/9"
            sizes="(max-width: 992px) 90vw, 55vw"
            class="mb-6"
          />
          <div class="panel p-8 lg:p-10">
            <ListCheck items={careers.working.areas} columns={2} />
          </div>
        </Reveal>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container-k">
    <SectionHeading eyebrow={careers.valued.eyebrow} title={careers.valued.title} align="center" />
    <div class="counter-list mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each careers.valued.items as item, i}
        <Reveal delay={(i % 3) * 100}>
          <div class="feature-card counter-card">
            <h3 class="text-2xl font-semibold text-fg">{item.title}</h3>
            <span class="mt-4 block h-0.5 w-10 rounded bg-primary"></span>
            <p class="mt-4 leading-relaxed">{item.text}</p>
          </div>
        </Reveal>
      {/each}
    </div>
  </div>
</section>

<section class="section" id="vacancies">
  <div class="container-k">
    <SectionHeading
      eyebrow={careers.vacancies.eyebrow}
      title={careers.vacancies.title}
      lead={careers.vacancies.lead}
    />
    {#if careers.vacancies.items.length}
      <div class="mt-10 grid gap-5">
        {#each careers.vacancies.items as vacancy}
          <a
            href={vacancy.href}
            class="panel flex flex-wrap items-center justify-between gap-6 p-7 transition-colors hover:border-primary/40"
          >
            <div>
              <h3 class="text-2xl font-semibold text-fg">{vacancy.title}</h3>
              <p class="mt-2 text-[15px]">{vacancy.type} · {vacancy.location}</p>
            </div>
            <span class="btn-line">Apply <Icon name="arrow" size={16} /></span>
          </a>
        {/each}
      </div>
    {:else}
      <Reveal delay={80}>
        <div class="panel mt-10 flex flex-col items-center gap-5 px-8 py-16 text-center">
          <span class="icon-box"><Icon name="search" size={28} /></span>
          <p class="max-w-xl text-lg leading-relaxed">{careers.vacancies.empty}</p>
        </div>
      </Reveal>
    {/if}
  </div>
</section>

<CtaBanner
  eyebrow={careers.cta.eyebrow}
  title={careers.cta.title}
  text={careers.cta.text}
  primary={careers.cta.primary}
  secondary={careers.cta.secondary}
/>
