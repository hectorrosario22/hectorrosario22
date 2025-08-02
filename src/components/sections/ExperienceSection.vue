<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Create reactive experience data that updates with language changes
const experienceData = computed(() => ({
  work: [
    {
      title: t("work.seniorAnalyst.title"),
      company: t("work.seniorAnalyst.company"),
      period: t("work.seniorAnalyst.period"),
      description: [
        t("work.seniorAnalyst.description.0"),
        t("work.seniorAnalyst.description.1"),
        t("work.seniorAnalyst.description.2"),
      ],
      technologies: ["C#", ".NET Core", "SQL Server", "Azure", "REST API"],
    },
    {
      title: t("work.fullStackDeveloper.title"),
      company: t("work.fullStackDeveloper.company"),
      period: t("work.fullStackDeveloper.period"),
      description: [
        t("work.fullStackDeveloper.description.0"),
        t("work.fullStackDeveloper.description.1"),
        t("work.fullStackDeveloper.description.2"),
      ],
      technologies: [
        "C#",
        ".NET Core",
        "SignalR",
        "Azure Functions",
        "SendGrid",
      ],
    },
    {
      title: t("work.juniorAnalyst.title"),
      company: t("work.juniorAnalyst.company"),
      period: t("work.juniorAnalyst.period"),
      description: [
        t("work.juniorAnalyst.description.0"),
        t("work.juniorAnalyst.description.1"),
        t("work.juniorAnalyst.description.2"),
      ],
      technologies: ["C#", "ASP.NET", "Entity Framework", "SQL Server", "Git"],
    },
    {
      title: t("work.webDeveloper.title"),
      company: t("work.webDeveloper.company"),
      period: t("work.webDeveloper.period"),
      description: [
        t("work.webDeveloper.description.0"),
        t("work.webDeveloper.description.1"),
      ],
      technologies: [
        "C#",
        ".NET Framework",
        "ASP.NET MVC",
        "SQL Server",
        "MongoDB",
      ],
    },
  ],
  education: [
    {
      title: t("education.technical.title"),
      institution: t("education.technical.institution"),
      period: t("education.technical.period"),
      description: t("education.technical.description"),
    },
  ],
}));
</script>

<template>
  <section
    id="experience"
    class="section bg-secondary-50 dark:bg-secondary-800/30 relative overflow-hidden"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-10 left-10 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl"
      ></div>
      <div
        class="absolute bottom-10 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl"
      ></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 class="section-title">{{ t("experience.title") }}</h2>
      <p class="section-subtitle">
        {{ t("experience.subtitle") }}
      </p>

      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Work Experience -->
        <div class="animate-slide-up">
          <div class="flex items-center mb-8">
            <div
              class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg"
            >
              <font-awesome-icon icon="briefcase" class="text-white text-2xl" />
            </div>
            <div>
              <h3
                class="text-3xl font-bold text-secondary-900 dark:text-white mb-1"
              >
                {{ t("experience.workExperience") }}
              </h3>
              <div
                class="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
              ></div>
            </div>
          </div>

          <div class="space-y-8">
            <div
              v-for="(job, index) in experienceData.work"
              :key="index"
              class="timeline-item"
              :style="{ animationDelay: `${index * 0.2}s` }"
            >
              <div
                class="card p-8 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div
                  class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6"
                >
                  <div>
                    <h4
                      class="text-xl font-bold text-secondary-900 dark:text-white mb-2"
                    >
                      {{ job.title }}
                    </h4>
                    <p
                      class="text-primary-600 dark:text-primary-400 font-semibold"
                    >
                      {{ job.company }}
                    </p>
                  </div>
                  <div class="mt-2 sm:mt-0">
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200"
                    >
                      {{ job.period }}
                    </span>
                  </div>
                </div>

                <ul class="space-y-3 mb-6">
                  <li
                    v-for="(item, itemIndex) in job.description"
                    :key="itemIndex"
                    class="flex items-start"
                  >
                    <div
                      class="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"
                    ></div>
                    <span
                      class="text-secondary-700 dark:text-secondary-300 leading-relaxed"
                    >
                      {{ item }}
                    </span>
                  </li>
                </ul>

                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in job.technologies"
                    :key="tech"
                    class="inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium bg-secondary-100 dark:bg-secondary-700/50 text-secondary-700 dark:text-secondary-300 border border-secondary-200/50 dark:border-secondary-600/50"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div class="animate-slide-down">
          <div class="flex items-center mb-8">
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg"
            >
              <font-awesome-icon
                icon="graduation-cap"
                class="text-white text-2xl"
              />
            </div>
            <div>
              <h3
                class="text-3xl font-bold text-secondary-900 dark:text-white mb-1"
              >
                {{ t("experience.education") }}
              </h3>
              <div
                class="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
              ></div>
            </div>
          </div>

          <div class="space-y-8">
            <div
              v-for="(edu, index) in experienceData.education"
              :key="index"
              class="timeline-item"
              :style="{ animationDelay: `${index * 0.2}s` }"
            >
              <div
                class="card p-8 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div
                  class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6"
                >
                  <div>
                    <h4
                      class="text-xl font-bold text-secondary-900 dark:text-white mb-2"
                    >
                      {{ edu.title }}
                    </h4>
                    <p
                      class="text-purple-600 dark:text-purple-400 font-semibold"
                    >
                      {{ edu.institution }}
                    </p>
                  </div>
                  <div class="mt-2 sm:mt-0">
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200"
                    >
                      {{ edu.period }}
                    </span>
                  </div>
                </div>

                <p
                  class="text-secondary-700 dark:text-secondary-300 leading-relaxed"
                >
                  {{ edu.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Timeline styling */
.timeline-item {
  position: relative;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -2rem;
  top: 2rem;
  width: 12px;
  height: 12px;
  background: var(--primary-500);
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px var(--primary-200);
  z-index: 10;
}

.timeline-item::after {
  content: "";
  position: absolute;
  left: -0.5rem;
  top: 2.5rem;
  width: 2px;
  height: calc(100% + 2rem);
  background: linear-gradient(to bottom, var(--primary-300), transparent);
}

.timeline-item:last-child::after {
  display: none;
}

.dark .timeline-item::before {
  border-color: var(--secondary-800);
  box-shadow: 0 0 0 3px var(--primary-900);
}

/* Card enhancements */
.card {
  position: relative;
  overflow: hidden;
}

.card::before {
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

.card:hover::before {
  opacity: 1;
}

/* Technology tags */
.card span {
  transition: all 0.3s ease;
}

.card:hover span {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .timeline-item::before,
  .timeline-item::after {
    display: none;
  }
}

/* Animation delays */
.timeline-item:nth-child(1) {
  animation-delay: 0.1s;
}
.timeline-item:nth-child(2) {
  animation-delay: 0.3s;
}
.timeline-item:nth-child(3) {
  animation-delay: 0.5s;
}
</style>
