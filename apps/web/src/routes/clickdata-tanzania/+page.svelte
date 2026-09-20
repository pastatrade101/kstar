<script lang="ts">
  import {
    CtaBanner,
    FeatureCard,
    ListCheck,
    PageHero,
    Picture,
    Reveal,
    SectionHeading,
    Seo,
    StepList
  } from '@kstar/ui';
  import { clickdata } from '@kstar/content';
</script>

<Seo title={clickdata.seo.title} description={clickdata.seo.description} />

<div data-accent="data">
  <PageHero
    eyebrow={clickdata.hero.eyebrow}
    title={clickdata.hero.title}
    paragraphs={clickdata.hero.paragraphs}
    primary={clickdata.hero.primary}
    secondary={clickdata.hero.secondary}
    accent="data"
    photo="dataCharts"
    breadcrumb={[
      { label: 'Home', href: '/' },
      { label: 'Organizations', href: '/organizations' },
      { label: 'ClickData Tanzania' }
    ]}
  />

  <section class="section">
    <div class="container-k">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-5">
          <SectionHeading eyebrow={clickdata.intro.eyebrow} title={clickdata.intro.title} />
        </div>
        <div class="lg:col-span-7">
          <Reveal delay={100}>
            {#each clickdata.intro.paragraphs as paragraph}
              <p class="mb-5 text-lg leading-relaxed last:mb-0 sm:text-xl">{paragraph}</p>
            {/each}
          </Reveal>
          <Reveal delay={180}>
            <div class="mt-10 grid gap-5 sm:grid-cols-2">
              <Picture photo="dataDashboard" ratio="4/3" sizes="(max-width: 992px) 90vw, 30vw" />
              <Picture
                photo="dataScreens"
                ratio="4/3"
                sizes="(max-width: 992px) 90vw, 30vw"
                class="sm:mt-10"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>

  <section class="section-sm">
    <div class="container-k">
      <div class="grid gap-6 lg:grid-cols-3">
        {#each [clickdata.purpose, clickdata.vision, clickdata.mission] as block, i}
          <Reveal delay={i * 110}>
            <div class="panel h-full p-8">
              <span class="p-title">{block.eyebrow}</span>
              <h2 class="text-2xl font-semibold text-fg">{block.title}</h2>
              <span class="small-border sm-left"></span>
              <p class="leading-relaxed">{block.text}</p>
            </div>
          </Reveal>
        {/each}
      </div>
    </div>
  </section>

  <section class="section" id="services">
    <div class="container-k">
      <SectionHeading
        eyebrow={clickdata.services.eyebrow}
        title={clickdata.services.title}
        align="center"
      />
      <div class="counter-list mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each clickdata.services.items as service, i}
          <Reveal delay={(i % 3) * 100}>
            <FeatureCard title={service.title} text={service.text} icon={service.icon} numbered />
          </Reveal>
        {/each}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container-k">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-5">
          <SectionHeading
            eyebrow={clickdata.whoWeWorkWith.eyebrow}
            title={clickdata.whoWeWorkWith.title}
            lead={clickdata.whoWeWorkWith.lead}
          />
          <Reveal delay={80}>
            <ListCheck items={clickdata.whoWeWorkWith.items} class="mt-6" />
          </Reveal>
          <Reveal delay={140}>
            <Picture
              photo="office"
              ratio="5/4"
              sizes="(max-width: 992px) 90vw, 38vw"
              class="mt-10"
            />
          </Reveal>
        </div>
        <div class="lg:col-span-7">
          <SectionHeading
            eyebrow={clickdata.approach.eyebrow}
            title={clickdata.approach.title}
            border={false}
            class="mb-8"
          />
          <StepList steps={clickdata.approach.steps} />
        </div>
      </div>
    </div>
  </section>

  <CtaBanner
    eyebrow={clickdata.cta.eyebrow}
    title={clickdata.cta.title}
    text={clickdata.cta.text}
    primary={clickdata.cta.primary}
    secondary={clickdata.cta.secondary}
  />
</div>
