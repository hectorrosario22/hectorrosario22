<template>
  <section class="py-16 px-4 bg-gray-50" id="contactme">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">Contacto</h2>
      <p class="mb-4">
        ¿Te interesa trabajar conmigo o tienes alguna pregunta? Puedes
        escribirme a:
      </p>
      <p class="font-semibold text-blue-600">hectorjuniorrosario22@gmail.com</p>
      <div class="flex justify-center gap-6 mt-6">
        <a
          :href="github"
          target="_blank"
          class="text-gray-600 hover:text-blue-600"
          >GitHub</a
        >
        <a
          :href="linkedin"
          target="_blank"
          class="text-gray-600 hover:text-blue-600"
          >LinkedIn</a
        >
        <!-- <a href="#" class="text-gray-600 hover:text-blue-600">CV</a> -->
      </div>
    </div>
  </section>
</template>

<script setup>
const github = "https://github.com/hectorrosario22";
const linkedin = "https://www.linkedin.com/in/hector-rosario";
</script>
