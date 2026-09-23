export const baguioReadyGisCaseStudy = {
  slug: "baguioreadygis",
  title: "BaguioReadyGIS",
  subtitle: "Full-stack GIS and disaster-preparedness web application",
  status: "completed" as const,
  sections: {
    problem:
      "Residents and responders need a single view of hazard layers, emergency facilities, and nearest-facility routes for Baguio City.",
    role: "Full-stack developer. I architected the monorepo and integrated map, routing, and hazard data services as the primary technical contribution on the project.",
    process:
      "I built a React, TypeScript, Express, and Leaflet monorepo, integrated Overpass API and OSRM routing with a Haversine fallback, and applied point-in-polygon hazard detection before deploying through Vercel and Render.",
    solution:
      "A disaster-preparedness web application that serves interactive hazard maps, emergency facility data, and nearest-facility lookup in one interface.",
    results:
      "Delivered interactive hazard maps, emergency facility data, and real-time nearest-facility lookup for Baguio City, deployed on Vercel and Render. The public site was live when verified on 2026-09-23.",
  },
  stack: [
    "React",
    "TypeScript",
    "Express",
    "Leaflet",
    "Overpass API",
    "OSRM",
    "Vercel",
    "Render",
  ],
  actions: [
    {
      kind: "live" as const,
      href: "https://baguio-ready-gis-web.vercel.app/",
      label: "View live",
      note: "Public BaguioReadyGIS deployment (verified 2026-09-23).",
    },
  ],
  illustration: {
    src: "/images/artwork-baguioreadygis.svg",
    alt: "Illustrative artwork for BaguioReadyGIS: abstract map grid and route lines",
    illustrative: true,
  },
  claims: [
    "React, TypeScript, Express, Leaflet monorepo",
    "Hazard maps, emergency facility data, nearest-facility lookup",
    "Overpass API, OSRM with Haversine fallback, point-in-polygon hazard detection",
    "Deployed on Vercel and Render",
    "Public site live at baguio-ready-gis-web.vercel.app (verified 2026-09-23)",
  ],
} as const;
