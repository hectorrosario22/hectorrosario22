import type { Experience } from "../types";

export const experienceData: Experience = {
  work: [
    {
      id: 1,
      title: "Senior Application Development Analyst",
      company: "Dirección General de Aduanas",
      period: "September 2019 - Present",
      location: "Santo Domingo, Dominican Republic",
      description: [
        "Led the development of an internal applications portal, increasing team productivity by 35% and optimizing the management of key tools",
        "Improved database performance, reducing response times from 15s to 1s through SQL query optimization",
        " Implemented CI/CD with Azure DevOps, automating deployments and enhancing system stability",
      ],
      technologies: [
        "C#",
        ".NET Core",
        "ASP.NET Core",
        "Microservices",
        "Azure",
        "SQL Server",
      ],
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Software Solutions Inc.",
      period: "June 2019 - December 2021",
      location: "Your City, Country",
      description: [
        "Developed and maintained ASP.NET Core Web APIs",
        "Integrated applications with third-party services via RESTful APIs",
        "Implemented authentication and authorization using Identity Server",
        "Wrote unit and integration tests for backend services",
        "Collaborated with frontend team to ensure seamless API integration",
      ],
      technologies: [
        ".NET Core",
        "C#",
        "ASP.NET Web API",
        "Entity Framework",
        "SQL Server",
        "Azure",
      ],
    },
    {
      id: 3,
      title: "Junior .NET Developer",
      company: "Digital Solutions Ltd.",
      period: "September 2017 - May 2019",
      location: "Your City, Country",
      description: [
        "Developed features for .NET Framework applications",
        "Created and maintained stored procedures and SQL queries",
        "Fixed bugs and improved application performance",
        "Participated in daily stand-ups and sprint planning",
        "Learned and implemented best practices in C# development",
      ],
      technologies: [
        ".NET Framework",
        "C#",
        "WinForms",
        "SQL Server",
        "Entity Framework",
      ],
    },
  ],
  education: {
    degree: "Bachelor/Master of Computer Science",
    institution: "University Name",
    period: "2013 - 2017",
    description:
      'Graduated with honors. Specialized in software engineering with focus on enterprise application development. Completed thesis on "Optimizing Performance in Distributed Systems".',
    skills: [
      "Software Engineering",
      "Algorithms",
      "Database Systems",
      "Distributed Computing",
    ],
  },
};
