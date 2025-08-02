<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";
import ScrollToTop from "./components/layout/ScrollToTop.vue";
import HeroSection from "./components/sections/HeroSection.vue";
import AboutSection from "./components/sections/AboutSection.vue";
import ExperienceSection from "./components/sections/ExperienceSection.vue";
import SkillsSection from "./components/sections/SkillsSection.vue";
import ProjectsSection from "./components/sections/ProjectsSection.vue";

const { locale } = useI18n();

const isDarkMode = ref(false);

// Theme management
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
  updateTheme();
};

const updateTheme = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

// Initialize theme and locale
onMounted(() => {
  // Theme initialization
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    isDarkMode.value = savedTheme === "dark";
  } else {
    isDarkMode.value = prefersDark;
  }

  updateTheme();

  // Locale initialization
  const savedLocale = localStorage.getItem("locale");
  if (savedLocale) {
    locale.value = savedLocale;
  }

  // Watch for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        isDarkMode.value = e.matches;
        updateTheme();
      }
    });
});

// Watch for theme changes
watch(isDarkMode, updateTheme);
</script>

<template>
  <div
    class="min-h-screen bg-secondary-50 dark:bg-secondary-900 transition-all duration-300"
    :class="{ dark: isDarkMode }"
  >
    <!-- Navigation -->
    <Navbar @toggle-theme="toggleTheme" />

    <!-- Main Content -->
    <main class="relative">
      <!-- Hero Section -->
      <HeroSection />

      <!-- About Section -->
      <AboutSection />

      <!-- Experience Section -->
      <ExperienceSection />

      <!-- Skills Section -->
      <SkillsSection />

      <!-- Projects Section -->
      <ProjectsSection />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Scroll to Top Button -->
    <ScrollToTop />
  </div>
</template>

<style>
/* Global styles */
html {
  scroll-behavior: smooth;
}

body {
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
  line-height: 1.6;
  color: var(--secondary-700);
  background-color: var(--secondary-50);
  transition: all 0.3s ease;
}

.dark body {
  color: var(--secondary-200);
  background-color: var(--secondary-900);
}

/* Smooth transitions for theme changes */
* {
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--secondary-100);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-400);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary-500);
}

.dark ::-webkit-scrollbar-track {
  background: var(--secondary-800);
}

/* Focus styles for accessibility */
button:focus,
a:focus {
  outline: 2px solid var(--primary-500);
  outline-offset: 2px;
}

/* Loading states */
.loading {
  opacity: 0.7;
  pointer-events: none;
}

/* Glass morphism effect */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.dark .glass {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Animation utilities */
.animate-fade-in {
  animation: fadeInUp 0.6s ease-out;
}

.animate-slide-up {
  animation: slideInLeft 0.6s ease-out;
}

.animate-slide-down {
  animation: slideInRight 0.6s ease-out;
}

.animate-scale-in {
  animation: scaleIn 0.6s ease-out;
}

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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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
</style>
