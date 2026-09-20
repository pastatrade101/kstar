<script lang="ts">
  import Icon from './Icon.svelte';
  import Logo from './Logo.svelte';
  import Button from './Button.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  import type { NavItem } from '@kstar/content';

  let {
    nav = [] as NavItem[],
    cta = { label: 'Get Involved', href: '/get-involved' },
    pathname = '/',
    brandName = 'Kstar (T) Group',
    brandTagline = 'Turn Your Desires Into Reality'
  }: {
    nav?: NavItem[];
    cta?: { label: string; href: string };
    pathname?: string;
    brandName?: string;
    brandTagline?: string;
  } = $props();

  let open = $state(false);
  let scrolled = $state(false);
  let expanded = $state<string | null>(null);

  const isActive = (item: NavItem) =>
    item.href === '/'
      ? pathname === '/'
      : pathname === item.href ||
        pathname.startsWith(`${item.href}/`) ||
        (item.children ?? []).some((c) => c.href === pathname);

  function onScroll() {
    scrolled = window.scrollY > 24;
  }

  let lastPath: string | null = null;
  $effect(() => {
    // Close the drawer only when navigation actually changes the path —
    // an unconditional reset here would swallow the toggle click.
    if (lastPath !== null && pathname !== lastPath) open = false;
    lastPath = pathname;
  });

  $effect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  });
</script>

<svelte:window on:scroll={onScroll} />

<header
  class={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
    scrolled ? 'header-solid backdrop-blur-xl' : 'on-dark'
  }`}
>
  <div class="container-k">
    <div
      class={`flex items-center justify-between gap-4 transition-all ${scrolled ? 'py-3' : 'py-5'}`}
    >
      <Logo label={brandName} tagline={brandTagline} />

      <nav class="hidden xl:block" aria-label="Main">
        <ul class="flex items-center">
          {#each nav as item}
            <li class="group relative">
              <a
                href={item.href}
                class="nav-link"
                aria-current={isActive(item) ? 'page' : undefined}
              >
                {item.label}
                {#if item.children}
                  <Icon
                    name="chevron"
                    size={14}
                    class="transition-transform group-hover:rotate-180"
                  />
                {/if}
              </a>
              {#if item.children}
                <ul
                  class="panel invisible absolute left-0 top-full w-64 translate-y-3 overflow-hidden p-2 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {#each item.children as child}
                    <li>
                      <a
                        href={child.href}
                        class="block rounded-xxl px-4 py-2.5 text-[15px] font-medium text-fg/80 transition-colors hover:bg-fg/5 hover:text-primarylight"
                        aria-current={pathname === child.href ? 'page' : undefined}
                      >
                        {child.label}
                      </a>
                    </li>
                  {/each}
                </ul>
              {/if}
            </li>
          {/each}
        </ul>
      </nav>

      <div class="flex items-center gap-3">
        <ThemeToggle class="max-sm:hidden" />
        <Button href={cta.href} label={cta.label} size="sm" class="max-sm:hidden" />
        <button
          type="button"
          class="inline-flex size-11 items-center justify-center rounded-full border border-fg/15 text-fg xl:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onclick={() => (open = !open)}
        >
          <span class="relative block h-3 w-5">
            <span
              class={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all duration-300 ${open ? 'top-1.5 rotate-45' : ''}`}
            ></span>
            <span
              class={`absolute left-0 top-1.5 h-0.5 bg-current transition-all duration-300 ${open ? 'w-0 opacity-0' : 'w-3.5'}`}
            ></span>
            <span
              class={`absolute left-0 top-3 h-0.5 w-5 bg-current transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : ''}`}
            ></span>
          </span>
        </button>
      </div>
    </div>
  </div>
</header>

<!-- Mobile drawer (Plexify full-sidenav) -->
<div
  class={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-500 xl:hidden ${
    open ? 'visible opacity-100' : 'invisible opacity-0'
  }`}
  onclick={() => (open = false)}
  onkeydown={(e) => e.key === 'Escape' && (open = false)}
  role="presentation"
></div>
<aside
  class={`on-dark fixed right-0 top-0 z-50 h-dvh w-[320px] max-w-[85vw] overflow-y-auto bg-secondary px-6 pb-10 pt-6 transition-transform duration-500 xl:hidden ${
    open ? 'translate-x-0' : 'translate-x-full'
  }`}
  aria-hidden={!open}
>
  <div class="mb-8 flex items-center justify-between">
    <Logo label={brandName} tagline={brandTagline} />
    <button
      type="button"
      class="inline-flex size-10 items-center justify-center rounded-full border border-fg/15 text-fg"
      aria-label="Close menu"
      onclick={() => (open = false)}
    >
      <Icon name="x" set="social" size={16} />
    </button>
  </div>

  <nav aria-label="Mobile">
    <ul class="divide-y divide-white/10">
      {#each nav as item}
        <li class="py-1">
          <div class="flex items-center justify-between">
            <a
              href={item.href}
              class="block py-3 text-lg font-medium text-fg transition-colors hover:text-primarylight"
              aria-current={isActive(item) ? 'page' : undefined}
            >
              {item.label}
            </a>
            {#if item.children}
              <button
                type="button"
                class="inline-flex size-8 items-center justify-center rounded-full text-fg/70"
                aria-label={`Toggle ${item.label} submenu`}
                aria-expanded={expanded === item.label}
                onclick={() => (expanded = expanded === item.label ? null : item.label)}
              >
                <Icon
                  name="chevron"
                  size={16}
                  class={expanded === item.label
                    ? 'rotate-180 transition-transform'
                    : 'transition-transform'}
                />
              </button>
            {/if}
          </div>
          {#if item.children && expanded === item.label}
            <ul class="mb-3 ml-1 border-l border-fg/10 pl-4">
              {#each item.children as child}
                <li>
                  <a
                    href={child.href}
                    class="block py-2 text-[15px] text-fg/75 transition-colors hover:text-primarylight"
                  >
                    {child.label}
                  </a>
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>

  <Button href={cta.href} label={cta.label} class="mt-8 w-full justify-between" />
  <ThemeToggle withLabel class="mt-4 w-full justify-center" />
</aside>
