<script lang="ts">
  import { Icon, PageHero, Reveal, SectionHeading, Seo } from '@kstar/ui';
  import { contact, site } from '@kstar/content';
  import FormBlock from '$lib/FormBlock.svelte';

  let { form } = $props();
</script>

<Seo title={contact.seo.title} description={contact.seo.description} />

<PageHero
  eyebrow={contact.hero.eyebrow}
  title={contact.hero.title}
  paragraphs={contact.hero.paragraphs}
  photo="office"
  breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
  primary={{ label: 'Send a Message', href: '#form' }}
  secondary={{ label: 'Get Involved', href: '/get-involved' }}
/>

<section class="section">
  <div class="container-k">
    <SectionHeading
      eyebrow={contact.options.eyebrow}
      title={contact.options.title}
      align="center"
    />
    <div class="mt-12 grid gap-6 lg:grid-cols-3">
      {#each contact.options.items as option, i}
        <Reveal delay={i * 110}>
          <div class="feature-card h-full">
            <span class="icon-box"><Icon name={option.icon} size={28} /></span>
            <h3 class="mt-7 text-2xl font-semibold text-fg">{option.title}</h3>
            <p class="mt-3 leading-relaxed">{option.text}</p>
            {#if option.meta}
              <a
                href={option.href}
                class="mt-4 inline-flex items-center gap-2 text-lg text-fg transition-colors hover:text-primarylight"
              >
                <Icon name="mail" size={18} />
                {option.meta}
              </a>
            {/if}
            <a href={option.cta.href} class="btn-line mt-6">
              {option.cta.label}
              <Icon name="arrow" size={16} />
            </a>
          </div>
        </Reveal>
      {/each}
    </div>
  </div>
</section>

<div id="form">
  <FormBlock
    eyebrow={contact.formIntro.eyebrow}
    title={contact.formIntro.title}
    text={contact.formIntro.text}
    fields={contact.fields}
    submitLabel={contact.submitLabel}
    success={contact.success}
    {form}
  />
</div>

<section class="section-sm">
  <div class="container-k">
    <Reveal>
      <div class="panel panel-glass flex flex-wrap items-center justify-between gap-6 px-8 py-10">
        <div>
          <span class="p-title">Follow Kstar</span>
          <p class="text-lg text-fg">{site.footer.follow.text}</p>
        </div>
        <ul class="flex flex-wrap gap-3">
          {#each site.socials as social}
            <li>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
                class="inline-flex size-12 items-center justify-center rounded-full border border-fg/12 text-fg/80 transition-all hover:border-primary hover:bg-primary hover:text-fg"
              >
                <Icon name={social.icon} set="social" size={18} />
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </Reveal>
  </div>
</section>
