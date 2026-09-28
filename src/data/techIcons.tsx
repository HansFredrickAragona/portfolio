import type { ReactNode } from "react"

export const icons: { label: string; el: (color: string) => ReactNode }[] = [
  {
    label: "Python",
    el: (c) => (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
        <path
          d="M11.9 2C9.2 2 7.4 3.2 7.4 5.2V7h5v.5H5.7C3.5 7.5 2 9 2 11.9c0 2.9 1.6 4.6 3.7 4.6H7V14c0-2.3 1.6-3.5 3.7-3.5h5.5c2 0 3.3-1.3 3.3-3.3V5.2C19.5 3.2 17.6 2 14.5 2H11.9zm-1.2 1.8c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1z"
          fill={c}
        />
        <path
          d="M12.1 22c2.7 0 4.5-1.2 4.5-3.2V17h-5v-.5h6.7c2.2 0 3.7-1.5 3.7-4.4 0-2.9-1.6-4.6-3.7-4.6H17v2.5c0 2.3-1.6 3.5-3.7 3.5H7.8c-2 0-3.3 1.3-3.3 3.3v3c0 2 1.9 3.2 5 3.2H12.1zm1.2-1.8c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1z"
          fill="#3d6e8c"
        />
      </svg>
    ),
  },
  {
    label: "TypeScript",
    el: (c) => (
      <svg width="42" height="42" viewBox="0 0 24 24">
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="3"
          fill={c}
          opacity="0.85"
        />
        <text
          x="4.5"
          y="17"
          fontFamily="monospace"
          fontSize="10"
          fontWeight="bold"
          fill="#f5f0e8"
        >
          TS
        </text>
      </svg>
    ),
  },
  {
    label: "React",
    el: (c) => (
      <svg width="46" height="46" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2.5" fill={c} />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke={c}
          strokeWidth="1.3"
          fill="none"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke={c}
          strokeWidth="1.3"
          fill="none"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke={c}
          strokeWidth="1.3"
          fill="none"
          transform="rotate(120 12 12)"
        />
      </svg>
    ),
  },
  {
    label: "Next.js",
    el: (c) => (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="10"
          fill={c}
          opacity="0.15"
          stroke={c}
          strokeWidth="1.3"
        />
        <text
          x="5"
          y="16"
          fontFamily="monospace"
          fontSize="7.5"
          fontWeight="bold"
          fill={c}
        >
          N↗
        </text>
      </svg>
    ),
  },
  {
    label: "Node.js",
    el: (c) => (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z"
          fill="none"
          stroke={c}
          strokeWidth="1.4"
        />
        <text
          x="6.5"
          y="15.5"
          fontFamily="monospace"
          fontSize="6"
          fill={c}
          fontWeight="bold"
        >
          NODE
        </text>
      </svg>
    ),
  },
  {
    label: "JavaScript",
    el: (c) => (
      <svg width="40" height="40" viewBox="0 0 24 24">
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="3"
          fill="#c8a000"
          opacity="0.75"
        />
        <text
          x="5"
          y="17"
          fontFamily="monospace"
          fontSize="10"
          fontWeight="bold"
          fill="#1a1a18"
        >
          JS
        </text>
      </svg>
    ),
  },
  {
    label: "Python ML",
    el: (c) => (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="4"
          fill={c}
          opacity="0.2"
          stroke={c}
          strokeWidth="1.3"
        />
        <circle cx="12" cy="3" r="2" fill={c} opacity="0.55" />
        <circle cx="12" cy="21" r="2" fill={c} opacity="0.55" />
        <circle cx="3" cy="12" r="2" fill={c} opacity="0.55" />
        <circle cx="21" cy="12" r="2" fill={c} opacity="0.55" />
        <circle cx="5.5" cy="5.5" r="1.5" fill={c} opacity="0.35" />
        <circle cx="18.5" cy="18.5" r="1.5" fill={c} opacity="0.35" />
        <line
          x1="12"
          y1="5"
          x2="12"
          y2="8"
          stroke={c}
          strokeWidth="1.1"
          opacity="0.5"
        />
        <line
          x1="12"
          y1="16"
          x2="12"
          y2="19"
          stroke={c}
          strokeWidth="1.1"
          opacity="0.5"
        />
        <line
          x1="5"
          y1="12"
          x2="8"
          y2="12"
          stroke={c}
          strokeWidth="1.1"
          opacity="0.5"
        />
        <line
          x1="16"
          y1="12"
          x2="19"
          y2="12"
          stroke={c}
          strokeWidth="1.1"
          opacity="0.5"
        />
      </svg>
    ),
  },
  {
    label: "PostgreSQL",
    el: (c) => (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <ellipse
          cx="12"
          cy="7"
          rx="8"
          ry="4"
          fill={c}
          opacity="0.2"
          stroke={c}
          strokeWidth="1.3"
        />
        <path
          d="M4 7v10c0 2.2 3.6 4 8 4s8-1.8 8-4V7"
          stroke={c}
          strokeWidth="1.3"
          fill="none"
        />
        <line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          stroke={c}
          strokeWidth="0.8"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    label: "Docker",
    el: (c) => (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="10"
          width="20"
          height="8"
          rx="4"
          fill={c}
          opacity="0.15"
          stroke={c}
          strokeWidth="1.2"
        />
        <rect
          x="5"
          y="7"
          width="4"
          height="3.5"
          rx="1"
          fill={c}
          opacity="0.5"
        />
        <rect
          x="10"
          y="7"
          width="4"
          height="3.5"
          rx="1"
          fill={c}
          opacity="0.5"
        />
        <rect
          x="7.5"
          y="4.5"
          width="4"
          height="3"
          rx="1"
          fill={c}
          opacity="0.35"
        />
      </svg>
    ),
  },
]
