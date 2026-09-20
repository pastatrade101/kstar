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
  import { whatWeDo } from '@kstar/content';

  let { data } = $props();
  const department = $derived(data.department);
  const others = $derived(whatWeDo.departments.filter((d) => d.slug !== department.slug));
</script>

<Seo title={department.seo.title} description={department.seo.description} />

<PageHero
  eyebrow={department.eyebrow}
  title={department.title}
  paragraphs={department.paragraphs}
  breadcrumb={[
    { label: 'Home', href: '/' },
    { label: 'What We Do', href: '/what-we-do' },
    { label: department.name }
  ]}
  primary={department.cta}
  secondary={{ label: 'Contact Us', href: '/contact' }}
  photo={department.photo}
/>

<section class="section">
  <div class="container-k">
    <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-5">
        <SectionHeading eyebrow="Focus" title={department.listTitle} />
        <Reveal>
          <span class="icon-box"><Icon name={department.icon} size={30} /></span>
        </Reveal>
        <Reveal delay={120}>
          <Picture
            photo={department.photoSecondary}
            ratio="4/3"
            sizes="(max-width: 992px) 90vw, 38vw"
            class="mt-8"
          />
        </Reveal>
      </div>
      <div class="lg:col-span-7">
        <Reveal delay={100}>
          <div class="panel p-8 lg:p-10">
            <ListCheck items={department.list} columns={2} />
          </div>
        </Reveal>
      </div>
    </div>
  </div>
</section>

<section class="section-sm">
  <div class="container-k">
    <SectionHeading eyebrow="Other Departments" title="Different Passions. One Purpose." />
    <div class="mt-8 grid gap-6 md:grid-cols-2">
      {#each others as other, i}
        <Reveal delay={i * 100}>
          <a href={`/what-we-do/${other.slug}`} class="feature-card block">
            <Picture
              photo={other.photo}
              ratio="16/9"
              sizes="(max-width: 768px) 90vw, 45vw"
              class="mb-6"
            />
            <span class="icon-box"><Icon name={other.icon} size={26} /></span>
            <h3 class="mt-6 text-2xl font-semibold text-fg">{other.name}</h3>
            <p class="mt-3 leading-relaxed">{other.paragraphs[0]}</p>
            <span class="btn-line mt-6">{other.cta.label}</span>
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
