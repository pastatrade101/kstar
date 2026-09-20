<script lang="ts">
  let { class: klass = '' }: { class?: string } = $props();
</script>

<!-- Abstract brand visual: orbiting "stars" around a core — stands in for the
     stock photography the source templates shipped. -->
<div class={`relative aspect-square w-full ${klass}`} aria-hidden="true">
  <div
    class="absolute inset-[12%] rounded-full opacity-60 blur-3xl"
    style="background: radial-gradient(circle at 50% 50%, rgba(91, 138, 240,0.35) 0%, rgba(26, 59, 143,0.25) 55%, rgba(5, 12, 34,0) 75%);"
  ></div>

  <svg viewBox="0 0 520 520" class="relative size-full">
    <defs>
      <linearGradient id="k-ring" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#5B8AF0" stop-opacity="0.9" />
        <stop offset="60%" stop-color="#5B8AF0" stop-opacity="0.1" />
        <stop offset="100%" stop-color="#5B8AF0" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="k-core" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#5B8AF0" />
        <stop offset="100%" stop-color="#1A3B8F" />
      </linearGradient>
    </defs>

    <g class="origin-center animate-rotate-slow">
      <circle cx="260" cy="260" r="235" fill="none" stroke="url(#k-ring)" stroke-width="1.5" />
      <circle cx="260" cy="25" r="7" fill="#5B8AF0" />
      <circle cx="460" cy="380" r="4" fill="#ffffff" opacity="0.6" />
    </g>

    <g
      class="origin-center animate-rotate-slow [animation-direction:reverse] [animation-duration:32s]"
    >
      <circle
        cx="260"
        cy="260"
        r="180"
        fill="none"
        stroke="rgba(255,255,255,0.14)"
        stroke-width="1"
        stroke-dasharray="6 10"
      />
      <circle cx="80" cy="260" r="5" fill="#5B8AF0" />
    </g>

    <circle
      cx="260"
      cy="260"
      r="128"
      fill="rgba(255,255,255,0.03)"
      stroke="rgba(255,255,255,0.1)"
    />

    <g transform="translate(260 260)">
      <path
        d="M0 -92L24 -26L92 0L24 26L0 92L-24 26L-92 0L-24 -26Z"
        fill="url(#k-core)"
        opacity="0.95"
      />
    </g>

    <g fill="none" stroke="rgba(91, 138, 240,0.35)" stroke-width="1">
      <path d="M260 132V32" />
      <path d="M352 260h100" />
      <path d="M260 388v100" />
      <path d="M168 260H68" />
    </g>
  </svg>
</div>
