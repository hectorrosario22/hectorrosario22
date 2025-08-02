import type { Experience } from "../types";
import { useI18n } from "vue-i18n";

export const useExperienceData = (): Experience => {
  const { t } = useI18n();

  return {
    work: [
      {
        id: 1,
        title: t("work.seniorAnalyst.title"),
        company: t("work.seniorAnalyst.company"),
        period: t("work.seniorAnalyst.period"),
        location: t("work.seniorAnalyst.location"),
        description: t("work.seniorAnalyst.description") as unknown as string[],
        technologies: [
          "C#",
          ".NET Core",
          "ASP.NET Core",
          "Entity Framework Core",
          "Microservices",
          "Azure",
          "SQL Server",
          "JavaScript",
        ],
      },
      {
        id: 2,
        title: t("work.juniorAnalyst.title"),
        company: t("work.juniorAnalyst.company"),
        period: t("work.juniorAnalyst.period"),
        location: t("work.juniorAnalyst.location"),
        description: t("work.juniorAnalyst.description") as unknown as string[],
        technologies: [
          "C#",
          ".NET Core",
          "ASP.NET Core",
          "Entity Framework Core",
          "Microservices",
          "Azure",
          "SQL Server",
          "JavaScript",
        ],
      },
      {
        id: 3,
        title: t("work.fullStackDeveloper.title"),
        company: t("work.fullStackDeveloper.company"),
        period: t("work.fullStackDeveloper.period"),
        location: t("work.fullStackDeveloper.location"),
        description: t(
          "work.fullStackDeveloper.description",
        ) as unknown as string[],
        technologies: [
          "C#",
          ".NET Core",
          "ASP.NET Core",
          "SQL Server",
          "Entity Framework Core",
          "SignalR",
          "Azure Functions",
          "Azure Service Bus",
          "SendGrid",
          "C3ntro",
          "React",
          "JavaScript",
          "TypeScript",
        ],
      },
      {
        id: 4,
        title: t("work.webDeveloper.title"),
        company: t("work.webDeveloper.company"),
        period: t("work.webDeveloper.period"),
        location: t("work.webDeveloper.location"),
        description: t("work.webDeveloper.description") as unknown as string[],
        technologies: [
          "C#",
          ".NET Framework",
          "ASP.NET MVC",
          "SQL Server",
          "MongoDB",
          "Entity Framework",
          "JavaScript",
        ],
      },
    ],
    education: {
      degree: t("education.degree"),
      institution: t("education.institution"),
      period: t("education.period"),
      description: t("education.description"),
      skills: t("education.skills") as unknown as string[],
    },
  };
};
