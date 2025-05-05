import type { ProjectCategory, Project } from "../types";

export const projectsData: {
  categories: ProjectCategory[];
  projects: Project[];
} = {
  categories: [
    { id: "all", name: "All" },
    { id: "web-api", name: "Web API" },
    { id: "microservices", name: "Microservices" },
    { id: "azure", name: "Azure" },
    { id: "desktop", name: ".NET Desktop" },
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Microservices",
      description:
        "A scalable e-commerce platform built with microservices architecture using .NET Core and Docker.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: ["web-api", "microservices", "azure"],
      technologies: [
        ".NET Core",
        "Docker",
        "Kubernetes",
        "RabbitMQ",
        "SQL Server",
        "Redis",
      ],
      githubUrl: "https://github.com/yourusername/ecommerce-microservices",
      demoUrl: "#",
    },
    {
      id: 2,
      title: "Task Management API",
      description:
        "RESTful API for task management with features like authentication, task creation, assignment, and tracking.",
      image:
        "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=800",
      category: ["web-api", "azure"],
      technologies: [
        ".NET Core",
        "Entity Framework",
        "JWT Auth",
        "SQL Server",
        "Azure App Service",
      ],
      githubUrl: "https://github.com/yourusername/task-management-api",
      demoUrl: "#",
    },
    {
      id: 3,
      title: "Inventory Management System",
      description:
        "Desktop application for inventory tracking with barcode scanning integration and reporting.",
      image:
        "https://images.pexels.com/photos/7654543/pexels-photo-7654543.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: ["desktop"],
      technologies: [
        ".NET WPF",
        "MVVM",
        "SQLite",
        "Dapper",
        "Reporting Services",
      ],
      githubUrl: "https://github.com/yourusername/inventory-system",
      demoUrl: null,
    },
    {
      id: 4,
      title: "Real-time Chat Application",
      description:
        "Real-time chat application with SignalR, user presence, and persistent chat history.",
      image:
        "https://images.pexels.com/photos/4198370/pexels-photo-4198370.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: ["web-api", "azure"],
      technologies: [
        ".NET Core",
        "SignalR",
        "Azure Web Apps",
        "Cosmos DB",
        "Vue.js",
      ],
      githubUrl: "https://github.com/yourusername/realtime-chat",
      demoUrl: "#",
    },
    {
      id: 5,
      title: "Microservices Monitoring Dashboard",
      description:
        "Centralized dashboard for monitoring distributed microservices health, logs, and metrics.",
      image:
        "https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: ["microservices", "azure"],
      technologies: [
        ".NET Core",
        "Azure Application Insights",
        "Grafana",
        "Prometheus",
        "Vue.js",
      ],
      githubUrl: "https://github.com/yourusername/monitoring-dashboard",
      demoUrl: "#",
    },
    {
      id: 6,
      title: "Document Management System",
      description:
        "Enterprise document management with version control, workflows, and search capabilities.",
      image:
        "https://images.pexels.com/photos/6956433/pexels-photo-6956433.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: ["web-api", "azure"],
      technologies: [
        ".NET Core",
        "Azure Blob Storage",
        "Elasticsearch",
        "Identity Server",
        "Entity Framework",
      ],
      githubUrl: "https://github.com/yourusername/document-management",
      demoUrl: null,
    },
  ],
};
