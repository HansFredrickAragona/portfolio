import { icons } from "./techIcons"
import { RandomPattern } from "./RandomPattern"
import { HeroSocialButtons, HeroContactLines } from "./HeroSocial"

// Floating icon placement — (top%, left%) pairs
const ICON_POSITIONS = [
  { top: "8%", left: "5%", delay: "0s", size: 1 },
  { top: "22%", left: "2%", delay: "0.8s", size: 0.85 },
  { top: "42%", left: "0%", delay: "1.4s", size: 0.95 },
  { top: "62%", left: "3%", delay: "0.4s", size: 0.8 },
  { top: "78%", left: "1%", delay: "1.1s", size: 0.9 },
  { top: "10%", right: "3%", delay: "0.6s", size: 0.9 },
  { top: "30%", right: "0%", delay: "1.2s", size: 1 },
  { top: "52%", right: "2%", delay: "0.2s", size: 0.85 },
  { top: "72%", right: "4%", delay: "0.9s", size: 0.8 },
]

export function Hero({ dark }: { dark: boolean }) {
  const iconColor = dark ? "#5a9e7a" : "#1d3a2f"

  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden pt-16"
      style={{ minHeight: "100dvh" }}
    >
      {/* Background radials */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: dark
            ? "radial-gradient(ellipse at 30% 50%, rgba(90,158,122,0.07) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(106,173,204,0.05) 0%, transparent 50%)"
            : "radial-gradient(ellipse at 30% 50%, rgba(29,58,47,0.06) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(61,110,140,0.05) 0%, transparent 50%)",
        }}
      />

      {/* Floating icons — scattered around both halves */}
      {ICON_POSITIONS.map((pos, i) => {
        const icon = icons[i % icons.length]
        return (
          <div
            key={i}
            className="animate-float absolute hidden lg:flex flex-col items-center"
            style={{
              top: pos.top,
              left: (pos as any).left,
              right: (pos as any).right,
              animationDelay: pos.delay,
              opacity: 0.28,
              transform: `scale(${pos.size})`,
              transition: "opacity 0.4s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.28")}
            aria-label={icon.label}
          >
            {icon.el(iconColor)}
            <span
              className="mt-1 text-[9px] font-semibold tracking-wide"
              style={{ color: "var(--muted-foreground)" }}
            >
              {icon.label}
            </span>
          </div>
        )
      })}

      {/* Main 2-col grid — constrained and centered */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT — large portrait */}
          <div className="animate-fade-in flex justify-center lg:justify-center">
            <div className="relative">
              {/* Portrait */}
              <div
                className="w-60 h-72 md:w-80 md:h-[380px] lg:w-[360px] lg:h-[440px] rounded-3xl overflow-hidden"
                style={{
                  boxShadow: dark
                    ? "0 0 0 1px rgba(90,158,122,0.2), 0 32px 64px rgba(0,0,0,0.5)"
                    : "0 0 0 1px rgba(29,58,47,0.12), 0 32px 64px rgba(29,58,47,0.2)",
                }}
              >
                <img
                  src="/assets/hans-portrait2.jpg"
                  alt="Hans Fredrick O. Aragona"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Accent ring */}
              <div
                className="absolute -inset-2 rounded-3xl pointer-events-none"
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: "28px",
                }}
              />
            </div>
          </div>

          {/* RIGHT — bare column, vertically centered */}
          <div className="animate-fade-up flex flex-col gap-4 justify-center">
            {/* Name — uniform treatment throughout */}
            <div className="animate-fade-up delay-100">
              <h1
                className="font-serif leading-[1.05] tracking-tight"
                style={{
                  color: "var(--primary)",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 600,
                }}
              >
                Hans Fredrick O. Aragona
              </h1>
            </div>

            {/* Role chips */}
            <div className="animate-fade-up delay-200 flex flex-wrap gap-2">
              {["Full-Stack Developer", "AI & ML Engineer", "Team Leader"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: "var(--secondary)",
                      color: "var(--secondary-foreground)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            {/* Short bio */}
            <p
              className="animate-fade-up delay-300 text-sm md:text-base leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              Building complete software products from database to interface,
              combining full-stack engineering with machine learning, clear
              communication, and collaborative leadership.
            </p>

            {/* Decorative pattern */}
            <div className="animate-fade-up delay-400">
              <RandomPattern dark={dark} />
            </div>

            {/* Separate GitHub + Email entries */}
            <div className="animate-fade-up delay-500">
              <HeroContactLines />
            </div>

            {/* LinkedIn, GitHub, Email as buttons */}
            <div className="animate-fade-up delay-550">
              <HeroSocialButtons />
            </div>

            {/* CTAs */}
            <div className="animate-fade-up delay-600 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="flex-1 text-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.88"
                  e.currentTarget.style.transform = "translateY(-2px)"
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(29,58,47,0.3)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1"
                  e.currentTarget.style.transform = ""
                  e.currentTarget.style.boxShadow = ""
                }}
              >
                Let's get in touch
              </a>
              <a
                href="#projects"
                className="flex-1 text-center px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-200"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                  backgroundColor: "var(--secondary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--primary)"
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)"
                  e.currentTarget.style.transform = ""
                }}
              >
                View my work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
