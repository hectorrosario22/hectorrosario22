<template>
  <section class="bg-white py-16 px-4" id="projects">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-10 text-center">Proyectos</h2>
      <div class="grid gap-8 md:grid-cols-2">
        <ProjectCard v-for="proj in projects" :key="proj.id" :project="proj" />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "./ProjectCard.vue";

const projects = [
  {
    id: 1,
    name: "AuthCore",
    description: "Sistema de autenticación completo con .NET.",
    github: "https://github.com/tuusuario/authcore",
  },
];
</script>
