import { icons } from "./techIcons"

export function FloatingIcons({
  color = "var(--primary)",
  seed = 0,
}: {
  color?: string
  seed?: number
}) {
  return (
    <div
      className="section-icon-frame absolute inset-0 pointer-events-none hidden lg:block"
      aria-hidden="true"
    >
      {[0, 1, 2, 3, 4, 5].map((index) => {
        const icon = icons[(seed + index) % icons.length]

        return (
          <div
            key={index}
            className={`section-edge-icon edge-${
              index < 3 ? "left" : "right"
            } edge-row-${index % 3}`}
          >
            <div
              className="animate-float flex flex-col items-center"
              style={{ animationDelay: `${index * 0.25}s`, opacity: 0.7 }}
            >
              {icon.el(color)}
              <span
                className="mt-1 text-[9px] font-semibold tracking-wide"
                style={{ color: "var(--muted-foreground)" }}
              >
                {icon.label}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
