<script lang="ts">
  let {
    title = '',
    description = '',
    url = '',
    siteName = 'Kstar International'
  }: { title?: string; description?: string; url?: string; siteName?: string } = $props();
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  {#if url}<meta property="og:url" content={url} />{/if}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
</svelte:head>
