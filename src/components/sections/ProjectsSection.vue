<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Create reactive projects data that updates with language changes
const projectsData = computed(() => ({
  projects: [
    {
      title: t("projects.expenseTracker.title"),
      description: t("projects.expenseTracker.description"),
      image: "images/projects/expense-tracker.webp",
      technologies: ["C#", ".NET 9", "Cocona", "JSON", "CSV"],
      github: "https://github.com/hectorrosario22/ExpenseTracker",
      demo: null,
    },
  ],
}));
</script>

<template>
  <section id="projects" class="section relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-20 right-20 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl"
      ></div>
      <div
        class="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl"
      ></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 class="section-title">{{ t("projects.title") }}</h2>
      <p class="section-subtitle">
        {{ t("projects.subtitle") }}
      </p>

      <div class="grid lg:grid-cols-2 gap-12">
        <div
          v-for="(project, index) in projectsData.projects"
          :key="index"
          class="project-card group animate-scale-in"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <!-- Project Image -->
          <div class="relative overflow-hidden rounded-t-2xl">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              @error="
                (event: Event) => {
                  const target = event.target as HTMLImageElement;
                  target.style.display = 'none';
                }
              "
            />
            <!-- Fallback for missing image -->
            <div
              v-if="!project.image"
              class="w-full h-64 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center"
            >
              <div class="text-center text-white">
                <font-awesome-icon icon="code" class="text-4xl mb-4" />
                <h3 class="text-xl font-bold">{{ project.title }}</h3>
              </div>
            </div>
            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div
                class="absolute bottom-4 left-4 right-4 flex justify-center space-x-4"
              >
                <a
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-secondary-900 font-medium hover:bg-white transition-all duration-300 transform hover:scale-105"
                >
                  <font-awesome-icon :icon="['fab', 'github']" class="mr-2" />
                  {{ t("projects.viewCode") }}
                </a>
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-4 py-2 bg-primary-500/90 backdrop-blur-sm rounded-lg text-white font-medium hover:bg-primary-600 transition-all duration-300 transform hover:scale-105"
                >
                  <font-awesome-icon icon="external-link-alt" class="mr-2" />
                  {{ t("projects.liveDemo") }}
                </a>
              </div>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-8">
            <h3
              class="text-2xl font-bold text-secondary-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
            >
              {{ project.title }}
            </h3>

            <p
              class="text-secondary-700 dark:text-secondary-300 mb-6 leading-relaxed"
            >
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium bg-secondary-100 dark:bg-secondary-700/50 text-secondary-700 dark:text-secondary-300 border border-secondary-200/50 dark:border-secondary-600/50 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Project Stats -->
            <div
              class="grid grid-cols-2 gap-4 pt-6 border-t border-secondary-200/50 dark:border-secondary-700/50"
            >
              <div class="text-center">
                <div
                  class="text-2xl font-bold text-primary-600 dark:text-primary-400"
                >
                  100%
                </div>
                <div class="text-sm text-secondary-600 dark:text-secondary-400">
                  {{ t("projects.completion") }}
                </div>
              </div>
              <div class="text-center">
                <div
                  class="text-2xl font-bold text-primary-600 dark:text-primary-400"
                >
                  {{ project.technologies.length }}
                </div>
                <div class="text-sm text-secondary-600 dark:text-secondary-400">
                  {{ t("projects.technologies") }}
                </div>
              </div>
            </div>
          </div>

          <!-- Hover effect overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
          ></div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center">
        <div
          class="inline-flex items-center space-x-4 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg border border-secondary-200/50 dark:border-secondary-700/50"
        >
          <div
            class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center"
          >
            <font-awesome-icon
              :icon="['fab', 'github']"
              class="text-white text-xl"
            />
          </div>
          <div class="text-left">
            <h4
              class="text-lg font-bold text-secondary-900 dark:text-white mb-1"
            >
              {{ t("projects.moreProjects") }}
            </h4>
            <p class="text-secondary-600 dark:text-secondary-400">
              {{ t("projects.checkGitHub") }}
            </p>
          </div>
          <a
            href="https://github.com/hectorrosario22"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
          >
            {{ t("projects.viewGitHub") }}
            <font-awesome-icon icon="arrow-right" class="ml-2" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out both;
}

.project-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--primary-500),
    transparent
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover::before {
  opacity: 1;
}

/* Image hover effects */
.project-card img {
  filter: brightness(1.05);
}

.project-card:hover img {
  filter: brightness(1.1);
}

/* Technology tags hover effect */
.project-card span {
  transition: all 0.3s ease;
}

.project-card:hover span {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .project-card {
    margin-bottom: 2rem;
  }
}

/* Enhanced hover effects */
.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Gradient text effect for project titles */
.project-card h3 {
  background: linear-gradient(135deg, var(--primary-600), var(--primary-400));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.project-card:hover h3 {
  background: linear-gradient(135deg, var(--primary-700), var(--primary-500));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
