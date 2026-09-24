import { icons } from "./techIcons"

export function FloatingIcons({
  color = "var(--primary)",
  seed = 0,
}: {
  color?: string
  seed?: number
}) {
  const placements = [
    { idx: seed % icons.length, top: "8%", left: "1%", delay: "0s", size: 0.8 },
    {
      idx: (seed + 2) % icons.length,
      top: "50%",
      left: "0%",
      delay: "1.1s",
      size: 0.85,
    },
    {
      idx: (seed + 4) % icons.length,
      top: "82%",
      left: "2%",
      delay: "0.5s",
      size: 0.75,
    },
    {
      idx: (seed + 1) % icons.length,
      top: "12%",
      right: "1%",
      delay: "0.8s",
      size: 0.85,
    },
    {
      idx: (seed + 3) % icons.length,
      top: "55%",
      right: "0%",
      delay: "0.3s",
      size: 0.8,
    },
    {
      idx: (seed + 5) % icons.length,
      top: "80%",
      right: "2%",
      delay: "1.4s",
      size: 0.75,
    },
  ]
  return (
    <>
      {placements.map((p, i) => {
        const icon = icons[p.idx]
        return (
          <div
            key={i}
            className="animate-float absolute hidden lg:flex flex-col items-center pointer-events-none"
            style={{
              top: p.top,
              left: (p as any).left,
              right: (p as any).right,
              animationDelay: p.delay,
              opacity: 0.16,
              transform: `scale(${p.size})`,
            }}
          >
            {icon.el(color)}
            <span
              className="mt-1 text-[9px] font-semibold tracking-wide"
              style={{ color: "var(--muted-foreground)" }}
            >
              {icon.label}
            </span>
          </div>
        )
      })}
    </>
  )
}
