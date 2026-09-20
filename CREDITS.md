# Image credits

All photography is served from the Unsplash CDN (`images.unsplash.com`) and used under the
[Unsplash License](https://unsplash.com/license). Photo ids are defined in
[`packages/content/src/images.ts`](packages/content/src/images.ts); each entry maps to
`https://unsplash.com/photos/<id>`.

| Key              | Unsplash photo id                | Used for                     |
| ---------------- | -------------------------------- | ---------------------------- |
| `hero`           | photo-1522202176988-66273c2fd55f | Home hero                    |
| `collaboration`  | photo-1521737852567-6949f3f9f2b5 | Home intro, About hero       |
| `mentorship`     | photo-1564130987042-acbca1b51e8d | Why Kstar, About story       |
| `workshop`       | photo-1524178232363-1fb2b075b655 | Home intro, About approach   |
| `creativity`     | photo-1757085242652-f8cd4d3de889 | Creativity department        |
| `creativeStudio` | photo-1758522276267-b3472583e954 | Creativity detail page       |
| `sports`         | photo-1652665314612-c48e10a01598 | Sports department            |
| `sportsYouth`    | photo-1485110168560-69d4ac37b23e | Sports detail page           |
| `music`          | photo-1604513843888-824303218a45 | Music department             |
| `musicStudio`    | photo-1598488035139-bdbb2231ce04 | Music detail page            |
| `events`         | photo-1540575467063-178a50c2df87 | Updates hero                 |
| `stage`          | photo-1587825140708-dfaf72ae4b04 | Impact band                  |
| `dialogue`       | photo-1568992688065-536aad8a12f6 | Careers                      |
| `team`           | photo-1622675363311-3e1904dc1885 | Careers hero, Partnerships   |
| `pitch`          | photo-1556761175-5973dc0f32e7    | Partnerships hero            |
| `community`      | photo-1781263378197-9ea12f94b827 | Get Involved, Organizations  |
| `youth`          | photo-1710093072215-65070f9cf93e | Kstar Malezi Foundation hero |
| `classroom`      | photo-1744809482817-9a9d4fc280af | Foundation intro             |
| `guidance`       | photo-1632215861513-130b66fe97f4 | Foundation card + intro      |
| `dataDashboard`  | photo-1551288049-bebda4e38f71    | ClickData card               |
| `dataCharts`     | photo-1516383274235-5f42d6c6426d | ClickData hero               |
| `dataScreens`    | photo-1686061592689-312bbfb5c055 | ClickData intro              |
| `office`         | photo-1542744095-fcf48d80b0fd    | Contact hero, ClickData      |

Swap any photo by editing its entry in `packages/content/src/images.ts` — every page picks the
change up automatically. To self-host instead, download the files into `apps/web/static/images/`
and point `unsplash()` at the local path.

## Design sources

The theme is a merge of two purchased HTML templates:

- **Plexify** (Business Consultant & Agency Tailwind CSS template) — Tailwind v4 `@theme` token
  structure, pill buttons with icon capsules, rounded section panels, glass stat chips, vertical
  social rail, display type scale. Its green/lime palette was recoloured to the Kstar blue
  (`#1A3B8F`) and red (`#C6112F`).
- **PRIVA** (Insurance company website template) — eyebrow + `small-border` heading unit,
  mask/cover hover cards, counters, step timeline, and its accent-led heading treatment (now
  carried by the Kstar red).

No template markup, CSS, images or fonts were copied into this repository; the components are
re-implemented in Svelte and the tokens re-declared in `packages/ui/src/lib/styles/theme.css`.
