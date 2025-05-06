<script setup lang="ts">
import { personalData } from "../../data/personal";
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

defineProps({
  isDarkMode: Boolean,
});

const emit = defineEmits(["toggle-dark-mode"]);

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

// Navigation items - make it computed to react to language changes
const navItems = computed(() => [
  { name: t("nav.home"), href: "#home", icon: "home" },
  { name: t("nav.about"), href: "#about", icon: "user" },
  { name: t("nav.skills"), href: "#skills", icon: "tools" },
  { name: t("nav.projects"), href: "#projects", icon: "project-diagram" },
  { name: t("nav.experience"), href: "#experience", icon: "briefcase" },
  { name: t("nav.contact"), href: "#contact", icon: "envelope" },
]);

// Toggle language
const toggleLanguage = () => {
  locale.value = locale.value === "en" ? "es" : "en";
  localStorage.setItem("language", locale.value);
};

// Handle scroll events
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// Close mobile menu when clicking a nav link
const handleNavLinkClick = () => {
  isMobileMenuOpen.value = false;
};

// Toggle dark mode
const toggleDarkMode = () => {
  emit("toggle-dark-mode");
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check initial scroll position
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-white dark:bg-secondary-900 shadow-md py-4'
        : 'bg-transparent py-6',
      isMobileMenuOpen ? 'bg-white dark:bg-secondary-900' : '',
    ]"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <a href="#" class="text-xl font-bold text-primary-500">
          <span
            class="inline-block transform transition-transform duration-300 hover:scale-105"
          >
            {{ personalData.name }}
          </span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-1">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            class="nav-link"
            @click="handleNavLinkClick"
          >
            <font-awesome-icon :icon="item.icon" class="mr-1" />
            {{ item.name }}
          </a>

          <!-- Language toggle -->
          <button
            @click="toggleLanguage"
            class="ml-2 p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors w-10 h-10 flex items-center justify-center"
            :title="locale === 'en' ? 'Cambiar a Español' : 'Switch to English'"
          >
            <span
              class="text-secondary-600 dark:text-secondary-200 font-medium"
            >
              {{ locale === "en" ? "ES" : "EN" }}
            </span>
          </button>

          <!-- Dark mode toggle -->
          <button
            @click="toggleDarkMode"
            class="ml-2 p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors w-10 h-10 flex items-center justify-center"
            :aria-label="
              isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
            "
          >
            <font-awesome-icon
              :icon="isDarkMode ? 'sun' : 'moon'"
              class="text-secondary-600 dark:text-secondary-200 text-xl"
            />
          </button>
        </nav>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <!-- Language toggle mobile -->
          <button
            @click="toggleLanguage"
            class="p-2 mr-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
          >
            <span
              class="text-secondary-600 dark:text-secondary-200 font-medium"
            >
              {{ locale === "en" ? "ES" : "EN" }}
            </span>
          </button>

          <button
            @click="toggleDarkMode"
            class="p-2 mr-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors w-10 h-10 flex items-center justify-center"
            :aria-label="
              isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
            "
          >
            <font-awesome-icon
              :icon="isDarkMode ? 'sun' : 'moon'"
              class="text-secondary-600 dark:text-secondary-200 text-xl"
            />
          </button>

          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2 rounded-md text-secondary-600 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
            aria-label="Toggle menu"
          >
            <font-awesome-icon
              :icon="isMobileMenuOpen ? 'xmark' : 'bars'"
              class="text-xl"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-secondary-900 shadow-lg animate-slide-down"
    >
      <div class="px-4 py-2 space-y-1">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="block py-3 px-4 text-secondary-600 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-md transition-colors"
          @click="handleNavLinkClick"
        >
          <font-awesome-icon :icon="item.icon" class="mr-2" />
          {{ item.name }}
        </a>
      </div>
    </div>
  </header>
</template>
