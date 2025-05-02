<script setup>
import { ref } from "vue";

const currentYear = new Date().getFullYear();

// Social links
const socialLinks = [
  {
    name: "Github",
    icon: ["fab", "github"],
    url: "https://github.com/hectorrosario22",
  },
  {
    name: "LinkedIn",
    icon: ["fab", "linkedin"],
    url: "https://linkedin.com/in/hector-rosario",
  },
  {
    name: "Email",
    icon: "envelope",
    url: "mailto:hectorjuniorrosario22@gmail.com",
  },
];
</script>

<template>
  <footer
    class="bg-secondary-100 dark:bg-secondary-800 py-12 transition-colors duration-300"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0">
          <h2 class="text-2xl font-bold text-primary-500">Héctor Rosario</h2>
          <p class="mt-2 text-secondary-600 dark:text-secondary-300">
            .NET Backend Developer
          </p>
        </div>

        <div class="flex space-x-4">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            :aria-label="link.name"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-full bg-white dark:bg-secondary-700 text-secondary-800 dark:text-white hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors duration-300 flex items-center p-[11px]"
          >
            <font-awesome-icon :icon="link.icon" class="text-lg" />
          </a>
        </div>
      </div>

      <div
        class="mt-8 pt-8 border-t border-secondary-200 dark:border-secondary-700 text-center text-secondary-600 dark:text-secondary-400"
      >
        <p>&copy; {{ currentYear }} Héctor Rosario. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
