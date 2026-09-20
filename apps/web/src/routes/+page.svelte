<script lang="ts">
  import {
    Button,
    CtaBanner,
    FeatureCard,
    Hero,
    Icon,
    ListCheck,
    Marquee,
    MaskCard,
    OrgCard,
    Picture,
    Reveal,
    SectionHeading,
    Seo
  } from '@kstar/ui';
  import { home, organizations, site } from '@kstar/content';
</script>

<Seo title={home.seo.title} description={home.seo.description} />

<!-- 02. Hero -->
<Hero
  eyebrow={home.hero.eyebrow}
  title={home.hero.title}
  text={home.hero.text}
  primary={home.hero.primary}
  secondary={home.hero.secondary}
  supportingLink={home.hero.supportingLink}
  stats={home.hero.stats}
  photo="hero"
/>

<!-- 03. Short brand introduction -->
<section class="section">
  <div class="container-k">
    <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-5">
        <SectionHeading eyebrow={home.intro.eyebrow} title={home.intro.title} />
        <Button
          href={home.intro.cta.href}
          label={home.intro.cta.label}
          variant="primary"
          size="sm"
        />
      </div>
      <div class="lg:col-span-7">
        <Reveal delay={100}>
          {#each home.intro.paragraphs as paragraph}
            <p class="mb-5 text-lg leading-relaxed last:mb-0 sm:text-xl">{paragraph}</p>
          {/each}
        </Reveal>
        <Reveal delay={180}>
          <div class="mt-10 grid gap-5 sm:grid-cols-2">
            <Picture photo="collaboration" ratio="4/3" sizes="(max-width: 992px) 90vw, 30vw" />
            <Picture
              photo="workshop"
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

<Marquee items={[site.brand.tagline, 'Creativity', 'Sports', 'Music', 'Talent', 'Innovation']} />

<!-- 04. Brand statement + promise -->
<section class="section">
  <div class="container-k">
    <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-6">
        <Reveal>
          <div class="panel panel-glass h-full p-8 lg:p-12">
            <Icon name="quote" size={40} class="text-primarylight" />
            <h2 class="headline-md mt-6">{home.brandStatement.title}</h2>
            {#each home.brandStatement.paragraphs as paragraph}
              <p class="mt-4 text-lg leading-relaxed">{paragraph}</p>
            {/each}
          </div>
        </Reveal>
      </div>
      <div class="lg:col-span-6">
        <SectionHeading
          eyebrow={home.promise.eyebrow}
          title={home.promise.title}
          lead={home.promise.lead}
        />
        <Reveal delay={120}>
          <ListCheck items={home.promise.items} class="mt-6" />
        </Reveal>
      </div>
    </div>
  </div>
</section>

<!-- 05. Departments -->
<section class="section">
  <div class="container-k">
    <SectionHeading
      eyebrow={home.departments.eyebrow}
      title={home.departments.title}
      lead={home.departments.lead}
      align="center"
    />
    <div class="mt-14 grid gap-6 md:grid-cols-3">
      {#each home.departments.items as department, i}
        <Reveal delay={i * 120}>
          <MaskCard
            index={`0${i + 1}`}
            name={department.name}
            kicker={department.kicker}
            text={department.text}
            icon={department.icon}
            cta={department.cta}
            photo={department.photo}
          />
        </Reveal>
      {/each}
    </div>
  </div>
</section>

<!-- 06. What we do -->
<section class="section">
  <div class="container-k">
    <div class="flex flex-wrap items-end justify-between gap-8">
      <SectionHeading
        eyebrow={home.whatWeDo.eyebrow}
        title={home.whatWeDo.title}
        lead={home.whatWeDo.lead}
        class="max-w-2xl"
      />
      <Button
        href={home.whatWeDo.cta.href}
        label={home.whatWeDo.cta.label}
        variant="outline"
        size="sm"
        class="mb-2"
      />
    </div>
    <div class="counter-list mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each home.whatWeDo.items as item, i}
        <Reveal delay={(i % 3) * 100}>
          <FeatureCard title={item.title} text={item.text} icon={item.icon} numbered />
        </Reveal>
      {/each}
    </div>
  </div>
</section>

<!-- 07. Our organizations -->
<section class="section">
  <div class="container-k">
    <SectionHeading
      eyebrow={home.ecosystem.eyebrow}
      title={home.ecosystem.title}
      lead={home.ecosystem.lead}
      align="center"
    />
    <div class="mt-14 grid gap-6 lg:grid-cols-2">
      {#each organizations.organizations as org, i}
        <Reveal delay={i * 120}>
          <OrgCard
            index={org.index}
            name={org.name}
            kicker={org.cardKicker}
            text={org.cardText}
            icon={org.icon}
            accent={org.accent}
            cta={org.cardCta}
            photo={org.photo}
            class="h-full"
          />
        </Reveal>
      {/each}
    </div>
  </div>
</section>

<!-- 08. Why Kstar exists -->
<section class="section">
  <div class="container-k">
    <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-5">
        <SectionHeading
          eyebrow={home.whyKstar.eyebrow}
          title={home.whyKstar.title}
          paragraphs={home.whyKstar.paragraphs}
        />
        <Reveal delay={140}>
          <Picture
            photo="mentorship"
            ratio="5/4"
            sizes="(max-width: 992px) 90vw, 38vw"
            class="mt-10"
          />
        </Reveal>
      </div>
      <div class="lg:col-span-7">
        <div class="grid gap-5 sm:grid-cols-2">
          {#each home.whyKstar.items as item, i}
            <Reveal delay={i * 90}>
              <div class="panel h-full p-7 transition-colors hover:border-primary/40">
                <h3 class="text-xl font-semibold text-fg">{item.title}</h3>
                <span class="mt-3 block h-0.5 w-8 rounded bg-primary"></span>
                <p class="mt-4 leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 09. Values -->
<section class="section">
  <div class="container-k">
    <SectionHeading eyebrow={home.values.eyebrow} title={home.values.title} align="center" />
    <div class="counter-list mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each home.values.items as value, i}
        <Reveal delay={(i % 3) * 100}>
          <div class="feature-card counter-card">
            <h3 class="text-2xl font-semibold text-fg">{value.title}</h3>
            <span class="mt-4 block h-0.5 w-10 rounded bg-primary"></span>
            <p class="mt-4 leading-relaxed">{value.text}</p>
          </div>
        </Reveal>
      {/each}
    </div>
  </div>
</section>

<!-- 10. Direction / impact -->
<section class="section">
  <div class="container-k">
    <Reveal>
      <div
        class="panel on-dark relative overflow-hidden px-6 py-14 text-center sm:px-12 lg:px-24 lg:py-20"
      >
        <Picture
          photo="stage"
          ratio="21/9"
          rounded="rounded-none"
          overlay={false}
          sizes="100vw"
          class="pointer-events-none absolute inset-0 !aspect-auto opacity-20"
        />
        <div
          class="pointer-events-none absolute inset-0"
          style="background: linear-gradient(180deg, rgba(5, 12, 34,0.85) 0%, rgba(5, 12, 34,0.96) 100%);"
        ></div>
        <div
          class="pointer-events-none absolute inset-0 opacity-70"
          style="background: radial-gradient(80% 120% at 50% 120%, rgba(91, 138, 240,0.18) 0%, rgba(91, 138, 240,0) 60%);"
        ></div>
        <div class="relative mx-auto max-w-3xl">
          <span class="p-title">{home.impact.eyebrow}</span>
          <h2 class="headline-lg">{home.impact.title}</h2>
          <span class="small-border"></span>
          {#each home.impact.paragraphs as paragraph}
            <p class="mt-4 text-lg leading-relaxed first:mt-0">{paragraph}</p>
          {/each}
          <p class="mt-6 text-2xl font-semibold text-primarylight">{home.impact.highlight}</p>
        </div>
      </div>
    </Reveal>
  </div>
</section>

<!-- 11. Get involved -->
<CtaBanner
  eyebrow={home.getInvolvedCta.eyebrow}
  title={home.getInvolvedCta.title}
  paragraphs={home.getInvolvedCta.paragraphs}
  primary={home.getInvolvedCta.primary}
  secondary={home.getInvolvedCta.secondary}
/>

<!-- 12. Contact -->
<section class="section-sm">
  <div class="container-k">
    <Reveal>
      <div
        class="on-dark flex flex-col items-center justify-between gap-8 rounded-4xl bg-primary px-8 py-12 lg:flex-row lg:px-16"
      >
        <div class="max-w-xl">
          <span class="p-title !text-fg/70">{home.contactCta.eyebrow}</span>
          <h2 class="headline-md text-fg">{home.contactCta.title}</h2>
          <p class="mt-4 text-lg leading-relaxed text-fg/85">{home.contactCta.text}</p>
        </div>
        <Button href={home.contactCta.cta.href} label={home.contactCta.cta.label} variant="dark" />
      </div>
    </Reveal>
  </div>
</section>
