<script setup lang="ts">
import { computed } from "vue";
import { personalData } from "../../data/personal";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Social links
const socialLinks = computed(() => [
  {
    name: "Github",
    icon: ["fab", "github"],
    url: personalData.social.github,
  },
  {
    name: "LinkedIn",
    icon: ["fab", "linkedin"],
    url: personalData.social.linkedin,
  },
  {
    name: t("about.email"),
    icon: "envelope",
    url: `mailto:${personalData.email}`,
  },
]);
</script>

<template>
  <footer
    class="bg-secondary-100 dark:bg-secondary-800 py-12 transition-colors duration-300"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0">
          <h2 class="text-2xl font-bold text-primary-500">
            {{ personalData.name }}
          </h2>
          <p class="mt-2 text-secondary-600 dark:text-secondary-300">
            {{ personalData.title }}
          </p>
        </div>

        <div class="flex space-x-4">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            :aria-label="link.name"
            :title="link.name"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-full bg-white dark:bg-secondary-700 text-secondary-800 dark:text-white hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors duration-300 flex"
          >
            <font-awesome-icon :icon="link.icon" class="text-lg" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
