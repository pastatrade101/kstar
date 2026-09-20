# Kstar International — website monorepo

SvelteKit monorepo for **Kstar International** and its organizations (Kstar Malezi Foundation,
ClickData Tanzania). Every line of copy comes from `kstar-website-copy.md`; the visual language is
a merge of two HTML templates, rebuilt as Svelte components and Tailwind v4 tokens.

```
kstar-website/
├── apps/
│   └── web/                 # @kstar/web — the SvelteKit site (all routes, forms, SEO)
└── packages/
    ├── ui/                  # @kstar/ui — theme tokens + shared Svelte components
    └── content/             # @kstar/content — all website copy + photo catalogue as typed data
```

## Getting started

```bash
npm install
npm run dev
```

| Command           | What it does                                                        |
| ----------------- | ------------------------------------------------------------------- |
| `npm run dev`     | Dev server on http://localhost:5173                                 |
| `npm run build`   | Production build (all pages prerendered except the two form routes) |
| `npm run preview` | Preview the production build                                        |
| `npm run check`   | `svelte-check` across the app and shared packages                   |
| `npm run format`  | Prettier                                                            |

Node 20+ and npm workspaces (no pnpm/yarn needed).

## The theme core

`packages/ui/src/lib/styles/theme.css` is the single source of truth, merging the two templates:

| From **Plexify** (consulting/agency Tailwind template)                                 | From **PRIVA** (insurance template)                                       |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Deep-green canvas `#001F17`, secondary `#1B4C40`, lime primary `#B3E719`               | Eyebrow `.p-title` (uppercase, 3px tracking) + `.small-border` accent bar |
| Tailwind v4 `@theme` token block (colours, type scale, radii, breakpoints, animations) | `.mask` / `.cover` photo cards that reveal body copy on hover             |
| Pill `.btn` with a circular icon capsule, four variants                                | Counters (`Counter.svelte`) and the numbered step timeline (`.step-line`) |
| Rounded `rounded-4xl` section panels, `.panel-glass` backdrop-blur chips               | Warm accent `#FA6A2E`, reused as the Kstar Malezi Foundation accent       |
| Vertical social rail, marquee strip, display type scale                                | Section rhythm and the heading → border → lead ordering                   |
| Red Hat Display                                                                        | Red Hat Display (both templates ship it)                                  |

Per-organization accents are a data attribute, not a second theme:

```html
<div data-accent="foundation">…</div>
<!-- orange  -->
<div data-accent="data">…</div>
<!-- blue    -->
```

`--primary` is redefined inside that subtree, so every button, eyebrow and border follows.

## Content

All copy is typed data in `packages/content/src` — one module per page (`home.ts`, `about.ts`,
`foundation.ts`, `clickdata.ts`, …) plus `site.ts` for navigation, footer, button copy and form
microcopy. Pages read from it; nothing is hard-coded in markup, so text edits never touch layout.

Photography lives in `packages/content/src/images.ts` as Unsplash photo ids, rendered through
`Picture.svelte` with a srcset, lazy loading and the brand tint. See [CREDITS.md](CREDITS.md).

## Brand mark

The Kstar logo lives in `apps/web/static/` and is generated from the supplied artwork:
`logo.png` (transparent master, used by `Logo.svelte` in the header and footer), `logo-512.png`,
`icon-192.png`, `apple-touch-icon.png`, `favicon-32.png`, `favicon-16.png` and a multi-size
`favicon.ico`. The mark sits on a white `.logo-chip` so it stays legible on the dark canvas; to
regenerate the set after an artwork change, re-run the Pillow snippet in the commit that added
them (trim to bounding box → square canvases at 512/192/180/32/16).

## Routes

```
/                        /organizations              /careers
/about                   /kstar-malezi-foundation    /get-involved      (form action)
/what-we-do              /clickdata-tanzania         /partner-with-us
/what-we-do/creativity   /updates                    /contact           (form action)
/what-we-do/sports       /privacy-policy             /sitemap.xml
/what-we-do/music        /terms-of-use               + 404 page
```

## Forms

`/get-involved` and `/contact` post to SvelteKit actions with server-side validation
(`apps/web/src/lib/validate.ts`) using the microcopy from the copy deck, progressively enhanced
with `use:enhance` (so they also work with JavaScript off). Both carry a hidden `botcheck`
honeypot: a filled one is accepted and silently dropped, never forwarded.

### Web3Forms (contact form)

`/contact` delivers through [Web3Forms](https://web3forms.com) via
`apps/web/src/lib/web3forms.ts`. The request is made **server-side**, so the access key never
reaches the browser.

```bash
cp .env.example .env
# then paste the access key from web3forms.com
```

```
WEB3FORMS_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

`.env` is read from the monorepo root (`kit.env.dir` in `svelte.config.js`). On a host, set the
same variable in the project's environment settings instead of shipping the file.

What Web3Forms receives: a `subject` of `Kstar website — <Enquiry Type>: <Subject>`, `from_name`
and `replyto` from the enquirer, and every field under its copy-deck label ("Full Name",
"Email Address", …) so the email body reads cleanly.

Failure handling: a missing key, a rejected request or a network error logs the reason on the
server and returns the deck's error microcopy ("We couldn't send your message. Please try
again.") with the submitted values preserved — nothing is silently swallowed.

`/get-involved` still logs its submission to the server console; point it at the same helper when
you want those going to an inbox too.

## Before launch

- Set `WEB3FORMS_ACCESS_KEY` in the host's environment so the contact form delivers.
- Replace `info@kstar.com` in `packages/content/src/site.ts` with the live domain address.
- Point `ORIGIN` in `apps/web/src/routes/sitemap.xml/+server.ts` and `static/robots.txt` at the
  production domain.
- Swap `@sveltejs/adapter-auto` for the adapter of your host (`adapter-vercel`, `adapter-netlify`,
  `adapter-node`, …).
- Add real vacancies (`careers.ts`) and updates (`misc.ts`) — both render an empty state until then.
- Review the privacy policy against the analytics and form tooling actually used.
