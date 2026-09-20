<script lang="ts">
  import {
    CtaBanner,
    FeatureCard,
    PageHero,
    Picture,
    Reveal,
    SectionHeading,
    Seo,
    StepList
  } from '@kstar/ui';
  import { foundation } from '@kstar/content';
</script>

<Seo title={foundation.seo.title} description={foundation.seo.description} />

<div data-accent="foundation">
  <PageHero
    eyebrow={foundation.hero.eyebrow}
    title={foundation.hero.title}
    paragraphs={foundation.hero.paragraphs}
    primary={foundation.hero.primary}
    secondary={foundation.hero.secondary}
    accent="foundation"
    photo="youth"
    breadcrumb={[
      { label: 'Home', href: '/' },
      { label: 'Organizations', href: '/organizations' },
      { label: 'Kstar Malezi Foundation' }
    ]}
  />

  <section class="section">
    <div class="container-k">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-5">
          <SectionHeading eyebrow={foundation.intro.eyebrow} title={foundation.intro.title} />
        </div>
        <div class="lg:col-span-7">
          <Reveal delay={100}>
            {#each foundation.intro.paragraphs as paragraph}
              <p class="mb-5 text-lg leading-relaxed last:mb-0 sm:text-xl">{paragraph}</p>
            {/each}
          </Reveal>
          <Reveal delay={180}>
            <div class="mt-10 grid gap-5 sm:grid-cols-2">
              <Picture photo="classroom" ratio="4/3" sizes="(max-width: 992px) 90vw, 30vw" />
              <Picture
                photo="guidance"
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
        {#each [foundation.purpose, foundation.vision, foundation.mission] as block, i}
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

  <section class="section" id="objectives">
    <div class="container-k">
      <SectionHeading
        eyebrow={foundation.objectives.eyebrow}
        title={foundation.objectives.title}
        align="center"
      />
      <div class="counter-list mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each foundation.objectives.items as item, i}
          <Reveal delay={(i % 3) * 100}>
            <FeatureCard title={item.title} text={item.text} icon={item.icon} numbered />
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
            eyebrow={foundation.whoWeSupport.eyebrow}
            title={foundation.whoWeSupport.title}
            paragraphs={foundation.whoWeSupport.paragraphs}
          />
          <Reveal delay={120}>
            <Picture
              photo="community"
              ratio="5/4"
              sizes="(max-width: 992px) 90vw, 38vw"
              class="mt-8"
            />
          </Reveal>
        </div>
        <div class="lg:col-span-7">
          <SectionHeading
            eyebrow={foundation.approach.eyebrow}
            title={foundation.approach.title}
            border={false}
            class="mb-8"
          />
          <StepList steps={foundation.approach.steps} />
        </div>
      </div>
    </div>
  </section>

  <CtaBanner
    eyebrow={foundation.communityCta.eyebrow}
    title={foundation.communityCta.title}
    paragraphs={foundation.communityCta.paragraphs}
    primary={foundation.communityCta.primary}
    secondary={foundation.communityCta.secondary}
  />

  <section class="section-sm">
    <div class="container-k">
      <Reveal>
        <div
          class="flex flex-col items-center justify-between gap-8 rounded-4xl border border-fg/10 bg-surface px-8 py-12 lg:flex-row lg:px-16"
        >
          <div class="max-w-xl">
            <span class="p-title">{foundation.contactCta.eyebrow}</span>
            <h2 class="headline-md">{foundation.contactCta.title}</h2>
            <p class="mt-4 text-lg leading-relaxed">{foundation.contactCta.text}</p>
          </div>
          <a href={foundation.contactCta.cta.href} class="btn btn-primary">
            <span class="btn-label">{foundation.contactCta.cta.label}</span>
            <span class="btn-capsule">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9" /></svg
              >
            </span>
          </a>
        </div>
      </Reveal>
    </div>
  </section>
</div>
