<script setup lang="ts">
import HeroSection from "../components/sections/HeroSection.vue";
import AboutSection from "../components/sections/AboutSection.vue";
import SkillsSection from "../components/sections/SkillsSection.vue";
import ProjectsSection from "../components/sections/ProjectsSection.vue";
import ExperienceSection from "../components/sections/ExperienceSection.vue";
import ContactSection from "../components/sections/ContactSection.vue";
</script>

<template>
  <div>
    <HeroSection id="home" />
    <AboutSection id="about" />
    <SkillsSection id="skills" />
    <ProjectsSection id="projects" />
    <ExperienceSection id="experience" />
    <ContactSection id="contact" />
  </div>
</template>
