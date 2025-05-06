<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { experienceData } from "../../data/experience";

const { t } = useI18n();
</script>

<template>
  <section id="experience" class="section">
    <h2 class="section-title">{{ t("experience.title") }}</h2>
    <p class="section-subtitle">
      {{ t("experience.subtitle") }}
    </p>

    <div class="relative">
      <div
        class="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-secondary-200 dark:bg-secondary-700"
      ></div>

      <div>
        <div
          v-for="(experience, index) in experienceData.work"
          :key="experience.id"
          class="mb-12 relative"
        >
          <div
            class="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary-500 border-4 border-white dark:border-secondary-900 z-10"
          ></div>

          <div
            class="md:w-5/12 mx-auto md:mx-0"
            :class="index % 2 === 0 ? 'md:ml-auto' : ''"
          >
            <div class="card p-6 hover:shadow-xl transition-all duration-300">
              <div
                class="flex flex-col md:flex-row justify-between md:items-center mb-4"
              >
                <h3
                  class="text-xl font-bold text-secondary-900 dark:text-white"
                >
                  {{ experience.title }}
                </h3>
                <span
                  class="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-sm font-medium rounded-full mt-2 md:mt-0"
                >
                  {{ experience.period }}
                </span>
              </div>

              <div class="mb-4">
                <div
                  class="flex items-center text-secondary-700 dark:text-secondary-300"
                >
                  <font-awesome-icon
                    icon="briefcase"
                    class="mr-2 text-primary-500"
                  />
                  <span class="font-medium">{{ experience.company }}</span>
                </div>
                <div
                  class="flex items-center text-secondary-600 dark:text-secondary-400 mt-1"
                >
                  <font-awesome-icon
                    icon="globe"
                    class="mr-2 text-primary-500"
                  />
                  <span>{{ experience.location }}</span>
                </div>
              </div>

              <ul class="space-y-2 mb-4">
                <li
                  v-for="(item, itemIndex) in experience.description"
                  :key="itemIndex"
                  class="flex"
                >
                  <span
                    class="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2"
                  ></span>
                  <span class="text-secondary-600 dark:text-secondary-300">{{
                    item
                  }}</span>
                </li>
              </ul>

              <div class="flex flex-wrap gap-2 mt-4">
                <span
                  v-for="(tech, techIndex) in experience.technologies"
                  :key="techIndex"
                  class="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 text-xs rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-20">
      <h3
        class="text-2xl font-bold text-center text-secondary-900 dark:text-white mb-12"
      >
        {{ t("experience.education") }}
      </h3>

      <div class="max-w-2xl mx-auto">
        <div class="card p-6 hover:shadow-xl transition-all duration-300">
          <div class="flex justify-between items-start">
            <div>
              <h4 class="text-xl font-bold text-secondary-900 dark:text-white">
                {{ experienceData.education.degree }}
              </h4>
              <p class="text-secondary-600 dark:text-secondary-400">
                {{ experienceData.education.institution }}
              </p>
            </div>
            <span
              class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-sm font-medium rounded-full"
            >
              {{ experienceData.education.period }}
            </span>
          </div>

          <p class="mt-4 text-secondary-600 dark:text-secondary-300">
            {{ experienceData.education.description }}
          </p>

          <div class="flex flex-wrap gap-2 mt-4">
            <span
              v-for="(skill, index) in experienceData.education.skills"
              :key="index"
              class="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 text-xs rounded-full"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
