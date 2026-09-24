import { useState, useRef, type TouchEvent } from "react"

import { FloatingIcons } from "./FloatingIcons"

export interface Project {
  id: string

  title: string

  summary: string

  status: "completed" | "development"

  problem: string

  role: string

  outcome: string

  tech: string[]

  liveUrl?: string

  caseStudy?: boolean
}

const PROJECTS: Project[] = [
  {
    id: "soilscan",

    title: "Soil Scan — Fertilizer Recommendation System",

    summary:
      "An AI-powered web platform that analyzes soil data to generate precise fertilizer recommendations for farmers.",

    status: "completed",

    problem:
      "Farmers lacked accessible, data-driven fertilizer guidance, leading to over-application and soil degradation.",

    role: "Lead developer — designed the ML pipeline, built the full-stack app, handled deployment.",

    outcome:
      "Deployed tool now accessible online, enabling evidence-based decisions for smallholder farmers.",

    tech: ["Python", "FastAPI", "React", "TensorFlow", "PostgreSQL", "Vercel"],

    liveUrl: "https://frontend-delta-rust-70.vercel.app/",

    caseStudy: true,
  },

  {
    id: "baguiogis",

    title: "BaguioReady GIS",

    summary:
      "A geospatial web application providing real-time disaster preparedness information for Baguio City.",

    status: "completed",

    problem:
      "Emergency response lacked a centralized digital tool for spatial hazard mapping and public access.",

    role: "Full-stack developer — built the GIS data layer, interactive map UI, and backend API.",

    outcome:
      "Publicly available platform supporting community disaster preparedness decisions.",

    tech: ["React", "PostGIS", "Node.js", "Leaflet", "PostgreSQL", "Render"],

    liveUrl: "https://baguio-ready-gis-web.vercel.app/",

    caseStudy: true,
  },

  {
    id: "grammar",

    title: "Grammar Checker",

    summary:
      "An NLP-based grammar correction tool providing contextual writing feedback in real time.",

    status: "development",

    problem:
      "Existing tools miss contextual issues relevant to Filipino English writers.",

    role: "Lead developer — designing the NLP pipeline and building the editor interface.",

    outcome: "[In progress — not yet deployed]",

    tech: ["Python", "React", "FastAPI", "spaCy", "TypeScript"],
  },

  {
    id: "tracker",

    title: "Résumé Job Tracker",

    summary:
      "A productivity app for managing job applications, tracking stages, and organizing résumé versions.",

    status: "development",

    problem:
      "Job seekers lack a purpose-built tool connecting application history with résumé variants.",

    role: "Solo developer — designing the data model, UI system, and automation features.",

    outcome: "[In progress — not yet deployed]",

    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
]

function ConceptArt({ id }: { id: string }) {
  if (id === "grammar") {
    return (
      <svg
        viewBox="0 0 640 480"
        className="w-full h-full"
        role="img"
        aria-label="Concept illustration of Grammar Checker editor"
      >
        <rect width="640" height="480" fill="#f7f5fb" />
        <rect width="640" height="48" fill="#2c2a4a" />
        <text
          x="20"
          y="31"
          fill="#efeaff"
          fontFamily="Outfit,sans-serif"
          fontSize="17"
          fontWeight="600"
        >
          Grammar Checker
        </text>
        <rect x="500" y="12" width="120" height="24" rx="12" fill="#6a5acd" />
        <text
          x="560"
          y="29"
          textAnchor="middle"
          fill="#fff"
          fontFamily="Outfit,sans-serif"
          fontSize="11"
        >
          Check text
        </text>
        <rect
          x="24"
          y="68"
          width="380"
          height="380"
          rx="12"
          fill="#fff"
          stroke="#ddd6f3"
        />
        <text
          x="44"
          y="100"
          fontFamily="Outfit,sans-serif"
          fontSize="13"
          fill="#6b6558"
        >
          Draft
        </text>
        <text
          x="44"
          y="140"
          fontFamily="Outfit,sans-serif"
          fontSize="16"
          fill="#1a1a18"
        >
          The team{" "}
          <tspan fill="#c1121f" textDecoration="underline">
            have finish
          </tspan>{" "}
          the report
        </text>
        <text
          x="44"
          y="168"
          fontFamily="Outfit,sans-serif"
          fontSize="16"
          fill="#1a1a18"
        >
          yesterday and{" "}
          <tspan fill="#c1121f" textDecoration="underline">
            send
          </tspan>{" "}
          it to the client.
        </text>
        <text
          x="44"
          y="210"
          fontFamily="Outfit,sans-serif"
          fontSize="16"
          fill="#1a1a18"
        >
          We{" "}
          <tspan fill="#b08900" textDecoration="underline">
            is excited
          </tspan>{" "}
          to share results
        </text>
        <text
          x="44"
          y="238"
          fontFamily="Outfit,sans-serif"
          fontSize="16"
          fill="#1a1a18"
        >
          with the{" "}
          <tspan fill="#c1121f" textDecoration="underline">
            stakeholders
          </tspan>
          .
        </text>
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x="44"
            y={270 + i * 36}
            width={320 - i * 40}
            height="10"
            rx="5"
            fill="#e8e4f4"
          />
        ))}
        <rect
          x="424"
          y="68"
          width="192"
          height="380"
          rx="12"
          fill="#fff"
          stroke="#ddd6f3"
        />
        <text
          x="444"
          y="100"
          fontFamily="Outfit,sans-serif"
          fontSize="13"
          fill="#6a5acd"
          fontWeight="600"
        >
          Suggestions
        </text>
        <rect x="440" y="120" width="160" height="88" rx="10" fill="#f3e8ff" />
        <text
          x="456"
          y="146"
          fontFamily="Outfit,sans-serif"
          fontSize="12"
          fill="#2c2a4a"
          fontWeight="600"
        >
          Subject–verb
        </text>
        <text
          x="456"
          y="168"
          fontFamily="Outfit,sans-serif"
          fontSize="13"
          fill="#6a5acd"
        >
          has finished
        </text>
        <rect x="456" y="180" width="72" height="18" rx="9" fill="#6a5acd" />
        <text
          x="492"
          y="193"
          textAnchor="middle"
          fill="#fff"
          fontFamily="Outfit,sans-serif"
          fontSize="10"
        >
          Apply
        </text>
        <rect x="440" y="224" width="160" height="88" rx="10" fill="#f3e8ff" />
        <text
          x="456"
          y="250"
          fontFamily="Outfit,sans-serif"
          fontSize="12"
          fill="#2c2a4a"
          fontWeight="600"
        >
          Tense
        </text>
        <text
          x="456"
          y="272"
          fontFamily="Outfit,sans-serif"
          fontSize="13"
          fill="#6a5acd"
        >
          sent
        </text>
        <rect x="456" y="284" width="72" height="18" rx="9" fill="#6a5acd" />
        <text
          x="492"
          y="297"
          textAnchor="middle"
          fill="#fff"
          fontFamily="Outfit,sans-serif"
          fontSize="10"
        >
          Apply
        </text>
        <text
          x="444"
          y="360"
          fontFamily="Outfit,sans-serif"
          fontSize="12"
          fill="#6b6558"
        >
          Score
        </text>
        <text
          x="444"
          y="400"
          fontFamily="Outfit,sans-serif"
          fontSize="36"
          fill="#6a5acd"
          fontWeight="700"
        >
          78
        </text>
      </svg>
    )
  }
  return (
    <svg
      viewBox="0 0 640 480"
      className="w-full h-full"
      role="img"
      aria-label="Concept illustration of Resume Job Tracker board"
    >
      <rect width="640" height="480" fill="#f6f1ea" />
      <rect width="640" height="48" fill="#3d2f1f" />
      <text
        x="20"
        y="31"
        fill="#f5f0e8"
        fontFamily="Outfit,sans-serif"
        fontSize="17"
        fontWeight="600"
      >
        Résumé Job Tracker
      </text>
      <rect x="500" y="12" width="120" height="24" rx="12" fill="#8c6a3d" />
      <text
        x="560"
        y="29"
        textAnchor="middle"
        fill="#fff"
        fontFamily="Outfit,sans-serif"
        fontSize="11"
      >
        Add application
      </text>
      {[
        { x: 16, title: "Applied", cards: ["Frontend role", "Data intern"] },
        { x: 176, title: "Interview", cards: ["AI engineer"] },
        { x: 336, title: "Offer", cards: ["Junior FS"] },
        { x: 496, title: "Closed", cards: [] },
      ].map((col) => (
        <g key={col.title}>
          <rect
            x={col.x}
            y="68"
            width="144"
            height="388"
            rx="12"
            fill="#ebe3d6"
          />
          <text
            x={col.x + 14}
            y="96"
            fontFamily="Outfit,sans-serif"
            fontSize="13"
            fill="#3d2f1f"
            fontWeight="600"
          >
            {col.title}
          </text>
          {col.cards.map((c, i) => (
            <g key={c}>
              <rect
                x={col.x + 10}
                y={112 + i * 88}
                width="124"
                height="72"
                rx="10"
                fill="#fff"
                stroke="#d9d0c2"
              />
              <rect
                x={col.x + 22}
                y={128 + i * 88}
                width="80"
                height="8"
                rx="4"
                fill="#8c6a3d"
                opacity=".7"
              />
              <rect
                x={col.x + 22}
                y={146 + i * 88}
                width="96"
                height="6"
                rx="3"
                fill="#d9d0c2"
              />
              <rect
                x={col.x + 22}
                y={160 + i * 88}
                width="64"
                height="6"
                rx="3"
                fill="#d9d0c2"
              />
            </g>
          ))}
        </g>
      ))}
    </svg>
  )
}

// Browser mockup frame wrapping an iframe or placeholder

function BrowserMockup({ project }: { project: Project }) {
  const [loaded, setLoaded] = useState(false)

  const emoji =
    project.id === "soilscan"
      ? "🌱"
      : project.id === "baguiogis"
        ? "🗺️"
        : project.id === "grammar"
          ? "✍️"
          : "📋"

  return (
    <div
      className="w-full rounded-xl overflow-hidden"
      style={{
        border: "1px solid var(--border)",

        boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
      }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{
          backgroundColor: "var(--secondary)",

          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="flex gap-1.5">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "#ff5f57" }}
          />
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "#febc2e" }}
          />
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "#28c840" }}
          />
        </div>
        <div className="flex-1 mx-3">
          <div
            className="rounded-md px-3 py-1 text-xs truncate"
            style={{
              backgroundColor: "var(--muted)",

              color: "var(--muted-foreground)",
            }}
          >
            {project.liveUrl ?? `localhost:3000/${project.id}`}
          </div>
        </div>
      </div>
      {/* Preview area */}
      <div
        className="relative w-full"
        style={{ height: "378px", backgroundColor: "var(--muted)" }}
      >
        {project.liveUrl ? (
          <>
            {!loaded && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                style={{ color: "var(--muted-foreground)" }}
              >
                <span className="text-4xl opacity-30">{emoji}</span>
                <span className="text-xs opacity-50">Loading preview…</span>
              </div>
            )}
            <iframe
              src={project.liveUrl}
              title={project.title}
              onLoad={() => setLoaded(true)}
              className="w-full h-full border-0"
              style={{
                transform: "scale(0.75)",

                transformOrigin: "top left",

                width: "133.33%",

                height: "133.33%",

                opacity: loaded ? 1 : 0,

                transition: "opacity 0.4s ease",
              }}
            />
          </>
        ) : (
          <div className="relative w-full h-full">
            <ConceptArt id={project.id} />
            <span
              className="absolute bottom-2 left-2 right-2 text-center text-[10px] px-2 py-1 rounded"
              style={{
                backgroundColor: "rgba(0,0,0,0.55)",
                color: "#fff",
              }}
            >
              In development
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export function Projects() {
  const [idx, setIdx] = useState(0)

  const [dir, setDir] = useState<1 | -1>(1)

  const [animKey, setAnimKey] = useState(0)

  const go = (d: 1 | -1) => {
    setDir(d)

    setAnimKey((k) => k + 1)

    setIdx((i) => (i + d + PROJECTS.length) % PROJECTS.length)
  }

  // Swipe support

  const touchStartX = useRef(0)

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current

    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
  }

  const p = PROJECTS[idx]

  return (
    <section
      id="projects"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--card)" }}
    >
      <FloatingIcons seed={0} />
      <style>{`
        @keyframes slideInRight { from { opacity:0; transform:translateX(36px); } to { opacity:1; transform:translateX(0); } }
        @keyframes slideInLeft  { from { opacity:0; transform:translateX(-36px); } to { opacity:1; transform:translateX(0); } }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-[10px] md:py-[92px]">
        {/* Section header */}
        <div className="flex items-center justify-between mb-7">
          <h2 className="section-title mb-0">Projects</h2>
          <div className="flex items-center gap-3">
            <span
              className="text-sm font-medium tabular-nums"
              style={{ color: "var(--muted-foreground)" }}
            >
              {String(idx + 1).padStart(2, "0")} /{" "}
              {String(PROJECTS.length).padStart(2, "0")}
            </span>
            {/* Mobile arrows — visible only on small screens */}
            <div className="flex gap-2 lg:hidden">
              <button
                onClick={() => go(-1)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-200"
                style={{
                  backgroundColor: "var(--secondary)",

                  color: "var(--primary)",

                  border: "2px solid var(--border)",
                }}
                aria-label="Previous project"
              >
                ←
              </button>
              <button
                onClick={() => go(1)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-200"
                style={{
                  backgroundColor: "var(--secondary)",

                  color: "var(--primary)",

                  border: "2px solid var(--border)",
                }}
                aria-label="Next project"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Main carousel — swipeable on mobile */}
        <div
          key={animKey}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{
            animation: `${
              dir === 1 ? "slideInRight" : "slideInLeft"
            } 0.4s cubic-bezier(0.22,1,0.36,1) both`,

            touchAction: "pan-y",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-center">
            {/* Left arrow */}
            <button
              onClick={() => go(-1)}
              className="hidden lg:flex w-14 h-14 rounded-full items-center justify-center text-2xl font-bold transition-all duration-200 shrink-0 lg:col-span-1"
              style={{
                backgroundColor: "var(--secondary)",

                color: "var(--primary)",

                border: "2px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--primary)"

                e.currentTarget.style.color = "var(--primary-foreground)"

                e.currentTarget.style.transform = "scale(1.1)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--secondary)"

                e.currentTarget.style.color = "var(--primary)"

                e.currentTarget.style.transform = ""
              }}
              aria-label="Previous project"
            >
              ←
            </button>

            {/* Browser preview — ~4.5 cols */}
            <div className="lg:col-span-4">
              <BrowserMockup project={p} />
            </div>

            {/* Project info — ~6 cols */}
            <div className="hover-card project-info-card lg:col-span-6 flex flex-col gap-3">
              <h3
                className="font-serif text-2xl md:text-3xl font-semibold leading-snug"
                style={{ color: "var(--primary)" }}
              >
                {p.title}
              </h3>

              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                {p.summary}
              </p>

              <div
                className="space-y-2 border-t pt-3"
                style={{ borderColor: "var(--border)" }}
              >
                {[
                  ["Problem", p.problem],

                  ["Role", p.role],

                  ["Outcome", p.outcome],
                ].map(([label, val]) => (
                  <div key={label}>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-0.5"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--foreground)" }}
                    >
                      {val}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--secondary)",

                      color: "var(--secondary-foreground)",

                      border: "1px solid var(--border)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.liveUrl && (
                <div className="pt-1">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full sm:w-auto sm:inline-flex text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-200"
                    style={{
                      backgroundColor: "var(--primary)",

                      color: "var(--primary-foreground)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "0.85"

                      e.currentTarget.style.transform = "translateY(-1px)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "1"

                      e.currentTarget.style.transform = ""
                    }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    View live
                  </a>
                </div>
              )}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => go(1)}
              className="hidden lg:flex w-14 h-14 rounded-full items-center justify-center text-2xl font-bold transition-all duration-200 shrink-0 lg:col-span-1"
              style={{
                backgroundColor: "var(--secondary)",

                color: "var(--primary)",

                border: "2px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--primary)"

                e.currentTarget.style.color = "var(--primary-foreground)"

                e.currentTarget.style.transform = "scale(1.1)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--secondary)"

                e.currentTarget.style.color = "var(--primary)"

                e.currentTarget.style.transform = ""
              }}
              aria-label="Next project"
            >
              →
            </button>
          </div>
        </div>

        {/* Mobile arrows + dots */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => go(-1)}
            className="lg:hidden w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
            style={{
              backgroundColor: "var(--secondary)",

              color: "var(--primary)",

              border: "2px solid var(--border)",
            }}
          >
            ←
          </button>

          <div className="flex gap-2">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDir(i > idx ? 1 : -1)

                  setAnimKey((k) => k + 1)

                  setIdx(i)
                }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === idx ? "24px" : "8px",

                  height: "8px",

                  backgroundColor:
                    i === idx ? "var(--primary)" : "var(--muted)",
                }}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="lg:hidden w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
            style={{
              backgroundColor: "var(--secondary)",

              color: "var(--primary)",

              border: "2px solid var(--border)",
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
