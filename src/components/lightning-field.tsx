export function LightningField() {
  return (
    <svg
      aria-hidden
      className="lightning-svg pointer-events-none fixed inset-0 z-20 h-full w-full text-accent mix-blend-screen"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <g className="lightning-bolt lightning-bolt-a">
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="0.35"
          points="8,0 18,18 12,22 28,48 22,52 40,100"
        />
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="0.12"
          opacity="0.85"
          points="8,0 18,18 12,22 28,48 22,52 40,100"
        />
      </g>
      <g className="lightning-bolt lightning-bolt-b">
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="0.28"
          points="92,4 78,26 84,30 64,58 70,62 52,100"
        />
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="0.1"
          opacity="0.85"
          points="92,4 78,26 84,30 64,58 70,62 52,100"
        />
      </g>
      <g className="lightning-bolt lightning-bolt-c">
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="0.22"
          points="0,62 22,58 28,64 48,60 54,68 100,72"
        />
      </g>
    </svg>
  );
}
