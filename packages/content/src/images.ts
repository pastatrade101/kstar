/**
 * Photography — hotlinked from the Unsplash CDN.
 * `id` is the Unsplash photo id; credits live in CREDITS.md at the repo root.
 */
export type Photo = {
  id: string;
  alt: string;
};

const BASE = 'https://images.unsplash.com/';

/** Build a cropped, auto-formatted Unsplash URL. */
export function unsplash(id: string, width = 1200, height?: number, quality = 78): string {
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    w: String(width),
    q: String(quality)
  });
  if (height) params.set('h', String(height));
  return `${BASE}${id}?${params.toString()}`;
}

export const photos = {
  hero: {
    id: 'photo-1522202176988-66273c2fd55f',
    alt: 'Three people laughing together around a table while working on an idea'
  },
  collaboration: {
    id: 'photo-1521737852567-6949f3f9f2b5',
    alt: 'A group of people gathered around a table in a working session'
  },
  mentorship: {
    id: 'photo-1564130987042-acbca1b51e8d',
    alt: 'A mentor in conversation with a young person'
  },
  workshop: {
    id: 'photo-1524178232363-1fb2b075b655',
    alt: 'People seated in a room during a learning workshop'
  },
  creativity: {
    id: 'photo-1757085242652-f8cd4d3de889',
    alt: 'People painting together at a table during an art class'
  },
  creativeStudio: {
    id: 'photo-1758522276267-b3472583e954',
    alt: 'An artist guiding a student painting at an easel in a studio'
  },
  sports: {
    id: 'photo-1652665314612-c48e10a01598',
    alt: 'A group of young men playing a game of football'
  },
  sportsYouth: {
    id: 'photo-1485110168560-69d4ac37b23e',
    alt: 'A smiling young player sitting with a football'
  },
  music: {
    id: 'photo-1604513843888-824303218a45',
    alt: 'Musicians playing instruments together in a room'
  },
  musicStudio: {
    id: 'photo-1598488035139-bdbb2231ce04',
    alt: 'A recording studio with guitars on the wall and a mixing desk'
  },
  events: {
    id: 'photo-1540575467063-178a50c2df87',
    alt: 'An audience seated at an event'
  },
  stage: {
    id: 'photo-1587825140708-dfaf72ae4b04',
    alt: 'A speaker on stage addressing a large audience'
  },
  dialogue: {
    id: 'photo-1568992688065-536aad8a12f6',
    alt: 'People in conversation beside a table'
  },
  team: {
    id: 'photo-1622675363311-3e1904dc1885',
    alt: 'Four colleagues working on laptops and listening to a teammate'
  },
  pitch: {
    id: 'photo-1556761175-5973dc0f32e7',
    alt: 'A person presenting an idea to a small group'
  },
  community: {
    id: 'photo-1781263378197-9ea12f94b827',
    alt: 'A large group of people raising their hands together'
  },
  youth: {
    id: 'photo-1710093072215-65070f9cf93e',
    alt: 'A group of young children standing together'
  },
  classroom: {
    id: 'photo-1744809482817-9a9d4fc280af',
    alt: 'A teacher instructing students in a classroom'
  },
  guidance: {
    id: 'photo-1632215861513-130b66fe97f4',
    alt: 'A woman standing in front of a group of children'
  },
  dataDashboard: {
    id: 'photo-1551288049-bebda4e38f71',
    alt: 'Performance analytics charts on a laptop screen'
  },
  dataCharts: {
    id: 'photo-1516383274235-5f42d6c6426d',
    alt: 'A close-up of a graph on a computer screen'
  },
  dataScreens: {
    id: 'photo-1686061592689-312bbfb5c055',
    alt: 'A screen showing a bar chart of results'
  },
  office: {
    id: 'photo-1542744095-fcf48d80b0fd',
    alt: 'People seated at a table with a laptop during a meeting'
  }
} satisfies Record<string, Photo>;

export type PhotoName = keyof typeof photos;
