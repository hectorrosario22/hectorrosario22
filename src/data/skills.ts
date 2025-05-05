import type { SkillCategory } from "../types";

export const skillsData: { categories: SkillCategory[] } = {
  categories: [
    {
      name: "Backend Development",
      icon: "server",
      skills: [
        { name: "C#", icon: ["fab", "microsoft"] },
        { name: ".NET Core", icon: "code" },
        { name: "ASP.NET Web API", icon: "code" },
        { name: "Entity Framework", icon: "database" },
        { name: "SQL Server", icon: "database" },
        { name: "REST API Design", icon: "server" },
      ],
    },
    {
      name: "Cloud & DevOps",
      icon: "cloud",
      skills: [
        { name: "Azure", icon: ["fab", "microsoft"] },
        { name: "Docker", icon: ["fab", "docker"] },
        { name: "CI/CD", icon: "code-branch" },
        { name: "Git", icon: ["fab", "git-alt"] },
      ],
    },
    {
      name: "Architecture",
      icon: "project-diagram",
      skills: [
        { name: "Microservices", icon: "server" },
        { name: "Domain-Driven Design", icon: "code" },
        { name: "Clean Architecture", icon: "code" },
        { name: "Event-Driven Architecture", icon: "code" },
      ],
    },
    {
      name: "Frontend",
      icon: "laptop-code",
      skills: [
        { name: "HTML5", icon: ["fab", "html5"] },
        { name: "CSS3", icon: ["fab", "css3-alt"] },
        { name: "JavaScript", icon: ["fab", "js"] },
        { name: "Vue.js", icon: ["fab", "vuejs"] },
      ],
    },
  ],
};
