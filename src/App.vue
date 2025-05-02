<template>
  <main class="min-h-screen bg-gray-50 text-gray-800 font-sans">
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
  </main>
</template>

<script setup>
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ContactSection from "./components/ContactSection.vue";
</script>
