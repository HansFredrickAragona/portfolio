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
  return (
    <section id="skills" className="skills-section">
      <div className="skills-shell glass-panel">
        <h2 className="section-title">Skills</h2>
        <div className="skills-columns">
          {[
            aboutSkillCategories.slice(0, 5),
            aboutSkillCategories.slice(5),
          ].map((groups, index) => (
            <div key={index}>
              {groups.map((group) => (
                <details className="skill-group" key={group.id}>
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
