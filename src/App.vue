<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useWindowScroll } from "@vueuse/core";
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";
import ScrollToTop from "./components/layout/ScrollToTop.vue";

// Dark mode setup
const isDarkMode = ref(false);

// Check user preference or previously saved mode
const checkDarkModePreference = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    isDarkMode.value = true;
    document.documentElement.classList.add("dark");
  } else {
    isDarkMode.value = false;
    document.documentElement.classList.remove("dark");
  }
};

// Toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
};

// Scroll position for animations
const { y: scrollY } = useWindowScroll();

onMounted(() => {
  checkDarkModePreference();
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar :is-dark-mode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />

    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <Footer />
    <ScrollToTop :scroll-y="scrollY" />
  </div>
</template>
