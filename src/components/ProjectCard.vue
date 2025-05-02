<template>
  <div class="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
    <h3 class="text-xl font-semibold mb-2">{{ project.name }}</h3>
    <p class="text-sm mb-4">{{ project.description }}</p>
    <div class="mt-4 text-blue-600">
      <a :href="project.github" target="_blank">Ver en GitHub →</a>
    </div>
  </div>
</template>

<script setup>
defineProps({ project: Object });
</script>
