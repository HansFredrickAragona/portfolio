export function RandomPattern({ dark }: { dark: boolean }) {
  const WEEKS = 52

  const DAYS = 7

  const MONTHS = [
    "Jan",

    "Feb",

    "Mar",

    "Apr",

    "May",

    "Jun",

    "Jul",

    "Aug",

    "Sep",

    "Oct",

    "Nov",

    "Dec",
  ]

  const DAY_LABELS = ["Mon", "", "Wed", "", "Fri", "", ""]

  // Realistic contribution pattern: sprints, weekends dip, rare quiet weeks

  function pseudo(w: number, d: number) {
    const isWeekend = d >= 5

    // Week-level intensity via overlapping waves: always positive base

    const weekNoise =
      Math.sin(w * 0.31 + 0.5) * 0.35 +
      Math.sin(w * 0.97 + 1.1) * 0.25 +
      Math.sin(w * 1.85 + 2.0) * 0.15

    const weekIntensity = 0.55 + weekNoise * 0.45 // range ~0.15-0.95

    // Per-cell deterministic jitter

    const jitter =
      ((((w * 31 + d * 17 + w * d + 1) * 1234567) >>> 0) % 1000) / 1000

    let score = weekIntensity * 0.6 + jitter * 0.4

    // Weekend dip

    if (isWeekend) score *= 0.5

    // Rare quiet week (only ~1 in 8, not clustering in same region)

    if (Math.sin(w * 0.41 + 3.7) > 0.78) score *= 0.18

    score = Math.min(score, 1)

    if (score < 0.14) return 0

    if (score < 0.34) return 1

    if (score < 0.56) return 2

    if (score < 0.76) return 3

    return 4
  }

  const levels = dark
    ? ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"]
    : ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"]

  // Spread month labels evenly across 52 weeks

  const monthPositions = MONTHS.map((m, i) => ({
    label: m,

    week: Math.round((i / 12) * WEEKS),
  }))

  const CELL = 22

  const GAP = 5

  const DAY_LABEL_W = 36

  const MONTH_LABEL_H = 20

  const totalW = DAY_LABEL_W + WEEKS * (CELL + GAP)

  const totalH = MONTH_LABEL_H + DAYS * (CELL + GAP)

  const visibleH = Math.round(totalH * 0.5)

  return (
    <div
      style={{
        overflow: "hidden",

        maxWidth: "100%",

        height: visibleH,
      }}
    >
      <svg
        viewBox={`0 0 ${totalW} ${totalH}`}
        role="img"
        aria-label="Decorative GitHub-inspired contribution squares"
        width="100%"
        style={{
          display: "block",

          height: "auto",

          fontFamily: "Outfit, sans-serif",
        }}
      >
        {/* Month labels */}
        {monthPositions.map(({ label, week }) => (
          <text
            key={label}
            x={DAY_LABEL_W + week * (CELL + GAP)}
            y={13}
            fontSize="13"
            fill={dark ? "#8b949e" : "#57606a"}
          >
            {label}
          </text>
        ))}

        {/* Day labels + cells */}
        {Array.from({ length: DAYS }).map((_, d) => (
          <g key={d}>
            {DAY_LABELS[d] && (
              <text
                x={0}
                y={MONTH_LABEL_H + d * (CELL + GAP) + CELL - 2}
                fontSize="13"
                fill={dark ? "#8b949e" : "#57606a"}
              >
                {DAY_LABELS[d]}
              </text>
            )}
            {Array.from({ length: WEEKS }).map((_, w) => (
              <rect
                key={w}
                x={DAY_LABEL_W + w * (CELL + GAP)}
                y={MONTH_LABEL_H + d * (CELL + GAP)}
                width={CELL}
                height={CELL}
                rx="3"
                fill={levels[pseudo(w, d)]}
              />
            ))}
          </g>
        ))}
      </svg>
    </div>
  )
}
