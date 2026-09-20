<script lang="ts">
  import { CtaBanner, OrgCard, PageHero, Reveal, Seo } from '@kstar/ui';
  import { organizations, home } from '@kstar/content';
</script>

<Seo title={organizations.seo.title} description={organizations.seo.description} />

<PageHero
  eyebrow={organizations.hero.eyebrow}
  title={organizations.hero.title}
  paragraphs={organizations.hero.paragraphs}
  breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Our Organizations' }]}
  photo="community"
/>

<section class="section">
  <div class="container-k">
    <div class="grid gap-8">
      {#each organizations.organizations as org, i}
        <Reveal delay={i * 120}>
          <OrgCard
            index={org.index}
            name={org.name}
            kicker={org.kicker}
            text={org.text}
            icon={org.icon}
            accent={org.accent}
            cta={org.cta}
            photo={org.photo}
          />
        </Reveal>
      {/each}
    </div>
  </div>
</section>

<CtaBanner
  eyebrow={home.getInvolvedCta.eyebrow}
  title={home.getInvolvedCta.title}
  paragraphs={home.getInvolvedCta.paragraphs}
  primary={home.getInvolvedCta.primary}
  secondary={home.getInvolvedCta.secondary}
/>
