import { useI18n } from "vue-i18n";

export const useProjectsData = () => {
  const { t } = useI18n();
  
  return {
    categories: [
      { id: "all", name: t("projects.all") },
      { id: "cli", name: "CLI" },
    ],
    projects: [
      {
        id: 1,
        title: t("projects.expenseTracker.title"),
        description: t("projects.expenseTracker.description"),
        image: "images/projects/expense-tracker.webp",
        category: ["cli"],
        technologies: ["C#", ".NET 9", "Cocona", "JSON", "CSV"],
        githubUrl: "https://github.com/hectorrosario22/ExpenseTracker",
        demoUrl: null,
      },
    ],
  };
};
