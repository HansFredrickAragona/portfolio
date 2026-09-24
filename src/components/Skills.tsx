import { FloatingIcons } from "./FloatingIcons"

import { useState } from "react"

import { aboutSkillCategories } from "@/data/skills"

import { TechIcon } from "./icons/TechIcon"

import { techIconPaths, type TechIconId } from "./icons/techIconPaths"

const aliases: Record<string, string> = {
  nextjs: "nextdotjs",

  nodejs: "nodedotjs",

  tailwind: "tailwindcss",

  colab: "googlecolab",

  "android-studio": "androidstudio",

  "leaflet-gis": "leaflet",
}

export function Skills() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="skills" className="skills-section">
      <FloatingIcons seed={1} />
      <div className="skills-shell glass-panel">
        <h2 className="section-title">Skills</h2>
        <div className="skills-columns">
          {[
            aboutSkillCategories.slice(0, 5),

            aboutSkillCategories.slice(5),
          ].map((groups, index) => (
            <div key={index}>
              {groups.map((group) => (
                <details
                  className="skill-group hover-card"
                  key={group.id}
                  open={openId === group.id}
                  onToggle={(e) => {
                    const el = e.currentTarget

                    if (el.open) setOpenId(group.id)
                    else setOpenId((cur) => (cur === group.id ? null : cur))
                  }}
                >
                  <summary>
                    {group.label}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="skill-content">
                    <ul>
                      {group.entries.map((entry) => {
                        const id = aliases[entry.id] ?? entry.id

                        return (
                          <li key={entry.id}>
                            {id in techIconPaths ? (
                              <TechIcon
                                id={id as TechIconId}
                                className="skill-icon"
                              />
                            ) : (
                              <span
                                className="skill-fallback"
                                aria-hidden="true"
                              >
                                ◇
                              </span>
                            )}
                            <span>{entry.name}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
