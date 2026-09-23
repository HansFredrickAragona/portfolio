export type SkillGroup = {
  id: string;
  label: string;
  items: readonly string[];
};

export const skillGroups = [
  {
    id: "build",
    label: "Build",
    items: [
      "Full-stack web applications",
      "RESTful APIs and API integration",
      "SPA development",
      "Deployment and troubleshooting",
      "Mobile dashboards and card UIs",
    ],
  },
  {
    id: "intelligence",
    label: "Intelligence",
    items: [
      "Supervised and unsupervised learning",
      "Random Forest, XGBoost, SVM",
      "NLP and rule-based checking",
      "RAG pipelines and vector databases",
      "Model evaluation (MSE, RMSE, MAE)",
    ],
  },
  {
    id: "insights",
    label: "Insights",
    items: [
      "GIS hazard mapping",
      "Leaflet, GeoJSON, OpenStreetMap",
      "Overpass API and OSRM routing",
      "Power BI and Excel reporting",
      "Soil sample labeling and analysis",
    ],
  },
  {
    id: "improve",
    label: "Improve",
    items: [
      "Prompt and context engineering",
      "Multi-agent workflows",
      "Debugging, testing, refactoring",
      "Git, Jira, Postman workflows",
      "Docker and CI-ready tooling habits",
    ],
  },
] as const satisfies readonly SkillGroup[];
