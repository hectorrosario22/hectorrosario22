<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Create reactive skills data that updates with language changes
const skillsData = computed(() => ({
  categories: [
    {
      name: t("skills.categories.backend"),
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
      name: t("skills.categories.cloud"),
      icon: "cloud",
      skills: [
        { name: "Azure", icon: ["fab", "microsoft"] },
        { name: "Docker", icon: ["fab", "docker"] },
        { name: "CI/CD", icon: "code-branch" },
        { name: "Git", icon: ["fab", "git-alt"] },
      ],
    },
    {
      name: t("skills.categories.architecture"),
      icon: "project-diagram",
      skills: [
        { name: t("skills.technologies.microservices"), icon: "server" },
        { name: t("skills.technologies.ddd"), icon: "code" },
        { name: t("skills.technologies.cleanArchitecture"), icon: "code" },
        { name: t("skills.technologies.eventDriven"), icon: "code" },
      ],
    },
    {
      name: t("skills.categories.frontend"),
      icon: "laptop-code",
      skills: [
        { name: "HTML5", icon: ["fab", "html5"] },
        { name: "CSS3", icon: ["fab", "css3-alt"] },
        { name: "JavaScript", icon: ["fab", "js"] },
        { name: "Vue.js", icon: ["fab", "vuejs"] },
      ],
    },
  ],
}));
</script>

<template>
  <section id="skills" class="section relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-20 left-20 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl"
      ></div>
      <div
        class="absolute bottom-20 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl"
      ></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 class="section-title">{{ t("skills.title") }}</h2>
      <p class="section-subtitle">
        {{ t("skills.subtitle") }}
      </p>

      <div class="skills-grid">
        <div
          v-for="(category, index) in skillsData.categories"
          :key="index"
          class="skill-card group"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Category Header -->
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4 shadow-lg"
            >
              <font-awesome-icon
                :icon="category.icon"
                class="text-white text-xl"
              />
            </div>
            <div>
              <h3
                class="text-xl font-bold text-secondary-900 dark:text-white mb-1"
              >
                {{ category.name }}
              </h3>
              <div
                class="w-10 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
              ></div>
            </div>
          </div>

          <!-- Skills Grid -->
          <div class="grid grid-cols-1 gap-3">
            <div
              v-for="(skill, skillIndex) in category.skills"
              :key="skillIndex"
              class="skill-item group"
            >
              <div
                class="flex items-center p-3 bg-white/50 dark:bg-secondary-800/50 rounded-lg hover:bg-white/80 dark:hover:bg-secondary-700/80 transition-all duration-300 border border-secondary-200/50 dark:border-secondary-700/50"
              >
                <div
                  class="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                >
                  <font-awesome-icon
                    :icon="skill.icon"
                    class="text-primary-600 dark:text-primary-400 text-sm"
                  />
                </div>
                <span
                  class="font-medium text-secondary-800 dark:text-secondary-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  {{ skill.name }}
                </span>
              </div>
            </div>
          </div>

          <!-- Hover effect overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
          ></div>
        </div>
      </div>

      <!-- Additional info -->
      <div class="mt-12 text-center">
        <div
          class="inline-flex items-center space-x-2 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-secondary-200/50 dark:border-secondary-700/50"
        >
          <font-awesome-icon
            icon="lightbulb"
            class="text-primary-500 text-lg"
          />
          <span
            class="text-secondary-700 dark:text-secondary-300 font-medium text-sm"
          >
            {{ t("skills.subtitle") }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out both;
}

.skill-item {
  position: relative;
  overflow: hidden;
}

.skill-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(59, 130, 246, 0.1),
    transparent
  );
  transition: left 0.5s ease;
}

.skill-item:hover::before {
  left: 100%;
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .skill-card {
    padding: 1.5rem;
  }
}

/* Enhanced hover effects */
.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.25);
}

.skill-card:hover::before {
  transform: scaleX(1);
}

/* Gradient text effect for category names */
.skill-card h3 {
  background: linear-gradient(135deg, var(--primary-600), var(--primary-400));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
