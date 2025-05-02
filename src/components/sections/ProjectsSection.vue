<script setup>
import { ref, computed } from "vue";

// Project categories
const categories = [
  { id: "all", name: "All" },
  { id: "web-api", name: "Web API" },
  { id: "microservices", name: "Microservices" },
  { id: "azure", name: "Azure" },
  { id: "desktop", name: ".NET Desktop" },
];

// Sample portfolio projects with details
const projects = [
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
];

// Active category filter
const activeCategory = ref("all");

// Filtered projects based on active category
const filteredProjects = computed(() => {
  if (activeCategory.value === "all") {
    return projects;
  }
  return projects.filter((project) =>
    project.category.includes(activeCategory.value)
  );
});

// Set active category
const setActiveCategory = (categoryId) => {
  activeCategory.value = categoryId;
};
</script>

<template>
  <section
    id="projects"
    class="section bg-secondary-50 dark:bg-secondary-800/30"
  >
    <h2 class="section-title">My Projects</h2>
    <p class="section-subtitle">Check out some of my recent work</p>

    <!-- Category filters -->
    <div class="flex flex-wrap justify-center gap-3 mb-12">
      <button
        v-for="category in categories"
        :key="category.id"
        :class="[
          'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
          activeCategory === category.id
            ? 'bg-primary-500 text-white shadow-md'
            : 'bg-white dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-secondary-600',
        ]"
        @click="setActiveCategory(category.id)"
      >
        {{ category.name }}
      </button>
    </div>

    <!-- Projects grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="card group overflow-hidden"
      >
        <!-- Project image -->
        <div class="aspect-w-16 aspect-h-9 relative overflow-hidden">
          <img
            :src="project.image"
            :alt="project.title"
            class="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
          >
            <div
              class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <div class="flex flex-wrap gap-2 mb-3">
                <span
                  v-for="(tech, index) in project.technologies.slice(0, 3)"
                  :key="index"
                  class="px-2 py-1 bg-primary-500/80 text-white text-xs rounded"
                >
                  {{ tech }}
                </span>
                <span
                  v-if="project.technologies.length > 3"
                  class="px-2 py-1 bg-secondary-500/80 text-white text-xs rounded"
                >
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>

              <div class="flex gap-3">
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                >
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
                <a
                  v-if="project.demoUrl"
                  :href="project.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                >
                  <font-awesome-icon icon="link" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Project details -->
        <div class="p-6">
          <h3 class="text-xl font-bold text-secondary-900 dark:text-white mb-2">
            {{ project.title }}
          </h3>
          <p class="text-secondary-600 dark:text-secondary-400 mb-4">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="(cat, index) in project.category"
              :key="index"
              class="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 text-xs rounded-full"
            >
              {{ categories.find((c) => c.id === cat)?.name }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- View more link -->
    <div class="text-center mt-12">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
      >
        View More Projects on GitHub
        <font-awesome-icon icon="arrow-right" class="ml-2" />
      </a>
    </div>
  </section>
</template>
