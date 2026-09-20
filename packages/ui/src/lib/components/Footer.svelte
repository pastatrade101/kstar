<script lang="ts">
  import Icon from './Icon.svelte';
  import Logo from './Logo.svelte';

  let {
    footer,
    socials = [] as { label: string; href: string; icon: string }[],
    email = 'info@kstar.com',
    brandName = 'Kstar (T) Group'
  }: {
    footer: any;
    socials?: { label: string; href: string; icon: string }[];
    email?: string;
    brandName?: string;
  } = $props();
</script>

<footer class="on-dark relative mt-10 border-t border-white/10 bg-[var(--footer-bg)]">
  <div class="container-k">
    <div class="grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
      <div class="lg:col-span-4">
        <Logo size={56} label={brandName} showTagline={false} />
        <p class="mt-6 text-xl font-semibold text-primarylight">{footer.intro.tagline}</p>
        <p class="mt-3 max-w-sm leading-relaxed">{footer.intro.text}</p>
        <div class="mt-8">
          <span class="field-label">Contact</span>
          <a
            href={`mailto:${email}`}
            class="inline-flex items-center gap-2 text-lg text-fg transition-colors hover:text-primarylight"
          >
            <Icon name="mail" size={18} />
            {email}
          </a>
        </div>
      </div>

      <div class="grid gap-10 sm:grid-cols-3 lg:col-span-5">
        {#each footer.columns as column}
          <div>
            <h3 class="text-lg font-semibold text-fg">{column.title}</h3>
            <span class="mt-4 block h-0.5 w-8 rounded bg-primary"></span>
            <ul class="mt-5 space-y-3">
              {#each column.links as link}
                <li>
                  <a
                    href={link.href}
                    class="text-[15px] leading-relaxed transition-colors hover:text-primarylight"
                  >
                    {link.label}
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>

      <div class="lg:col-span-3">
        <h3 class="text-lg font-semibold text-fg">{footer.follow.title}</h3>
        <span class="mt-4 block h-0.5 w-8 rounded bg-primary"></span>
        <p class="mt-5 leading-relaxed">{footer.follow.text}</p>
        <ul class="mt-6 flex flex-wrap gap-3">
          {#each socials as social}
            <li>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
                class="inline-flex size-11 items-center justify-center rounded-full border border-fg/12 text-fg/80 transition-all hover:border-primary hover:bg-primary hover:text-fg"
              >
                <Icon name={social.icon} set="social" size={18} />
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <div
      class="flex flex-col items-center justify-between gap-4 border-t border-fg/10 py-7 sm:flex-row"
    >
      <p class="text-[15px]">{footer.bottom.copyright}</p>
      <ul class="flex items-center gap-6">
        {#each footer.bottom.links as link}
          <li>
            <a href={link.href} class="text-[15px] transition-colors hover:text-primarylight">
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</footer>
