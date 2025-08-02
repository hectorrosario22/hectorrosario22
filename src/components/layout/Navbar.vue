<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useI18n } from "vue-i18n";

// Define emits
const emit = defineEmits<{
  "toggle-theme": [];
}>();

const { t, locale } = useI18n();

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const toggleLanguage = () => {
  locale.value = locale.value === "en" ? "es" : "en";
  localStorage.setItem("locale", locale.value);
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const navItems = computed(() => [
  { href: "#home", label: t("nav.home") },
  { href: "#about", label: t("nav.about") },
  { href: "#experience", label: t("nav.experience") },
  { href: "#skills", label: t("nav.skills") },
  { href: "#projects", label: t("nav.projects") },
]);
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md shadow-lg border-b border-secondary-200/50 dark:border-secondary-700/50'
        : 'bg-transparent',
    ]"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <a
            href="#home"
            class="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent hover:from-primary-700 hover:to-primary-500 transition-all duration-300"
          >
            HR
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="nav-link relative group"
          >
            {{ item.label }}
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"
            ></span>
          </a>

          <!-- Language Toggle -->
          <button
            @click="toggleLanguage"
            class="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-all duration-300 font-medium"
          >
            <font-awesome-icon icon="globe" class="text-sm" />
            <span class="text-sm font-semibold">{{
              locale.toUpperCase()
            }}</span>
          </button>

          <!-- Theme Toggle -->
          <button
            @click="emit('toggle-theme')"
            class="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-all duration-300 theme-toggle-btn"
            :aria-label="t('nav.toggleTheme')"
          >
            <font-awesome-icon icon="moon" class="dark:hidden theme-icon" />
            <font-awesome-icon
              icon="sun"
              class="hidden dark:block theme-icon"
            />
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <button
            @click="toggleMenu"
            class="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-all duration-300"
            :aria-label="t('nav.toggleMenu')"
          >
            <font-awesome-icon
              :icon="isMenuOpen ? 'xmark' : 'bars'"
              class="text-xl"
            />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-secondary-900/95 backdrop-blur-md border-b border-secondary-200/50 dark:border-secondary-700/50 shadow-lg"
      >
        <div class="px-4 py-6 space-y-4">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            @click="closeMenu"
            class="block py-3 px-4 rounded-lg text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 font-medium"
          >
            {{ item.label }}
          </a>

          <!-- Mobile Language and Theme Toggles -->
          <div
            class="flex items-center justify-between pt-4 border-t border-secondary-200/50 dark:border-secondary-700/50"
          >
            <button
              @click="toggleLanguage"
              class="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-all duration-300 font-medium"
            >
              <font-awesome-icon icon="globe" class="text-sm" />
              <span class="text-sm font-semibold">{{
                locale.toUpperCase()
              }}</span>
            </button>

            <button
              @click="$emit('toggle-theme')"
              class="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-all duration-300 theme-toggle-btn"
              :aria-label="t('nav.toggleTheme')"
            >
              <font-awesome-icon icon="moon" class="dark:hidden theme-icon" />
              <font-awesome-icon
                icon="sun"
                class="hidden dark:block theme-icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- Backdrop for mobile menu -->
  <div
    v-if="isMenuOpen"
    @click="closeMenu"
    class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
  ></div>
</template>

<style scoped>
/* Enhanced nav-link styles */
.nav-link {
  position: relative;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--primary-600);
}

.dark .nav-link:hover {
  color: var(--primary-400);
}

/* Mobile menu animations */
.lg\:hidden {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Glass morphism effect for scrolled navbar */
nav {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Enhanced button hover effects */
button {
  position: relative;
  overflow: hidden;
}

button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s ease;
}

button:hover::before {
  left: 100%;
}

/* Logo hover effect */
a[href="#home"] {
  position: relative;
  overflow: hidden;
}

a[href="#home"]::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-600), var(--primary-400));
  transition: width 0.3s ease;
}

a[href="#home"]:hover::after {
  width: 100%;
}

/* Theme toggle button icon normalization */
.theme-toggle-btn .theme-icon {
  width: 1rem;
  height: 1rem;
}

/* Specific adjustments for sun icon to maintain consistency */
.theme-toggle-btn .fa-sun {
  transform: scale(0.9, 0.9);
}

/* Ensure moon icon has consistent dimensions */
.theme-toggle-btn .fa-moon {
  display: block;
}

/* Hide moon icon in dark mode */
.dark .theme-toggle-btn .fa-moon {
  display: none;
}
</style>
