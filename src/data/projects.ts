import type { ProjectCategory, Project } from "../types";

export const projectsData: {
  categories: ProjectCategory[];
  projects: Project[];
} = {
  categories: [
    { id: "all", name: "All" },
    { id: "cli", name: "CLI" },
  ],
  projects: [
    {
      id: 1,
      title: "Expense Tracker",
      description:
        "A command-line application built with .NET 9 and Cocona to manage personal expenses. It supports categorization, CSV export, budget tracking, and local JSON persistence.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: ["cli"],
      technologies: ["C#", ".NET 9", "Cocona", "JSON", "CSV"],
      githubUrl: "https://github.com/hectorrosario22/ExpenseTracker",
      demoUrl: null,
    },
  ],
};
