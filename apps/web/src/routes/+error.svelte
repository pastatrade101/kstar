<script lang="ts">
  import { page } from '$app/state';
  import { Button, Seo } from '@kstar/ui';
  import { site } from '@kstar/content';

  const notFound = site.notFound;
  const is404 = $derived(page.status === 404);
</script>

<Seo
  title={is404
    ? `${notFound.title} | Kstar International`
    : 'Something went wrong | Kstar International'}
  description={notFound.text}
/>

<section class="on-dark section flex min-h-[80vh] items-center bg-band pt-32">
  <div class="container-k">
    <div class="mx-auto max-w-3xl text-center">
      <span class="p-title">{is404 ? notFound.eyebrow : `Error ${page.status}`}</span>
      <span class="headline-xl block text-primarylight/20">{page.status}</span>
      <h1 class="headline-lg mt-4">
        {is404 ? notFound.title : (page.error?.message ?? 'Something went wrong.')}
      </h1>
      <span class="small-border"></span>
      <p class="mx-auto max-w-xl text-lg">{notFound.text}</p>
      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button href={notFound.primary.href} label={notFound.primary.label} variant="primary" />
        <Button href={notFound.secondary.href} label={notFound.secondary.label} variant="outline" />
      </div>
    </div>
  </div>
</section>
