<script lang="ts">
  import '../app.css';
  import { page } from '$app/state';
  import { Footer, Header } from '@kstar/ui';
  import { site } from '@kstar/content';

  let { children } = $props();
</script>

<Header
  nav={site.nav}
  cta={site.primaryCta}
  pathname={page.url.pathname}
  brandName={site.brand.group}
  brandTagline={site.brand.tagline.replace(/\.$/, '')}
/>

<main id="main">
  {@render children()}
</main>

<Footer
  footer={site.footer}
  socials={site.socials}
  email={site.brand.email}
  brandName={site.brand.group}
/>
