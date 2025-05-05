<script setup lang="ts">
import { ref, computed } from "vue";
import { projectsData } from "../../data/projects";

const selectedCategory = ref("all");

const filteredProjects = computed(() => {
  if (selectedCategory.value === "all") {
    return projectsData.projects;
  }
  return projectsData.projects.filter((project) =>
    project.category.includes(selectedCategory.value)
  );
});

const handleCategoryChange = (category: string) => {
  selectedCategory.value = category;
};
</script>

<template>
  <section id="projects" class="section">
    <h2 class="section-title">Featured Projects</h2>
    <p class="section-subtitle">A selection of my recent development work</p>

    <!-- Project Categories -->
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      <button
        v-for="category in projectsData.categories"
        :key="category.id"
        @click="handleCategoryChange(category.id)"
        class="px-4 py-2 rounded-full transition-all duration-300"
        :class="[
          selectedCategory === category.id
            ? 'bg-primary-500 text-white shadow-lg'
            : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-primary-900/20',
        ]"
      >
        {{ category.name }}
      </button>
    </div>

    <!-- Projects Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="card group"
      >
        <!-- Project Image -->
        <div class="relative overflow-hidden">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4"
          >
            <div
              class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary py-2 px-4 mr-2"
              >
                Live Demo
                <font-awesome-icon icon="arrow-right" />
              </a>
              <a
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-outline py-2 px-4 border-white text-white hover:bg-white hover:text-secondary-900"
              >
                View Code
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </div>
          </div>
        </div>

        <!-- Project Info -->
        <div class="p-6">
          <h3 class="text-xl font-bold text-secondary-900 dark:text-white mb-2">
            {{ project.title }}
          </h3>

          <p class="text-secondary-600 dark:text-secondary-300 mb-4">
            {{ project.description }}
          </p>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tech, index) in project.technologies"
              :key="index"
              class="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 text-sm rounded-full"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
