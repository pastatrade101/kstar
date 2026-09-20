<script lang="ts">
  import {
    CtaBanner,
    FeatureCard,
    PageHero,
    Reveal,
    Picture,
    SectionHeading,
    Seo,
    StepList
  } from '@kstar/ui';
  import { about } from '@kstar/content';
</script>

<Seo title={about.seo.title} description={about.seo.description} />

<PageHero
  eyebrow={about.hero.eyebrow}
  title={about.hero.title}
  text={about.hero.text}
  breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
  photo="collaboration"
/>

<section class="section">
  <div class="container-k">
    <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-5">
        <SectionHeading eyebrow={about.story.eyebrow} title={about.story.title} />
      </div>
      <div class="lg:col-span-7">
        <Reveal delay={100}>
          {#each about.story.paragraphs as paragraph}
            <p class="mb-5 text-lg leading-relaxed last:mb-0 sm:text-xl">{paragraph}</p>
          {/each}
        </Reveal>
        <Reveal delay={180}>
          <div class="mt-10 grid gap-5 sm:grid-cols-2">
            <Picture photo="community" ratio="4/3" sizes="(max-width: 992px) 90vw, 30vw" />
            <Picture
              photo="mentorship"
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
    <div class="grid gap-6 lg:grid-cols-2">
      {#each [about.vision, about.mission] as block, i}
        <Reveal delay={i * 120}>
          <div class="panel h-full p-8 lg:p-12">
            <span class="p-title">{block.eyebrow}</span>
            <h2 class="headline-md">{block.title}</h2>
            <span class="small-border sm-left"></span>
            <p class="text-lg leading-relaxed">{block.text}</p>
          </div>
        </Reveal>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="container-k">
    <SectionHeading eyebrow={about.beliefs.eyebrow} title={about.beliefs.title} align="center" />
    <div class="counter-list mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each about.beliefs.items as belief, i}
        <Reveal delay={(i % 3) * 100}>
          <FeatureCard title={belief.title} text={belief.text} icon="check" numbered />
        </Reveal>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="container-k">
    <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-5">
        <SectionHeading eyebrow={about.approach.eyebrow} title={about.approach.title} />
        <Reveal delay={120}>
          <Picture
            photo="workshop"
            ratio="5/4"
            sizes="(max-width: 992px) 90vw, 38vw"
            class="mt-8"
          />
        </Reveal>
      </div>
      <div class="lg:col-span-7">
        <StepList steps={about.approach.steps} />
      </div>
    </div>
  </div>
</section>

<CtaBanner
  eyebrow={about.closing.eyebrow}
  title={about.closing.title}
  text={about.closing.text}
  primary={about.closing.primary}
  secondary={about.closing.secondary}
/>
