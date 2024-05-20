import projects from "../projects";

export const fetchPortfolioDetails = (slug) => {
  return projects.find((p) => p.slug === slug);
};
