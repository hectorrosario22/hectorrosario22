<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const titles = [
  ".NET Developer",
  "Backend Specialist",
  "C# Expert",
  "Software Architect",
];
const currentTitle = ref(titles[0]);
const currentIndex = ref(0);
const isDeleting = ref(false);
const typingSpeed = ref(100);
const deletingSpeed = ref(50);
const pauseDelay = 1500;

const typeText = () => {
  const current = titles[currentIndex.value];

  if (isDeleting.value) {
    currentTitle.value = current.substring(0, currentTitle.value.length - 1);
  } else {
    currentTitle.value = current.substring(0, currentTitle.value.length + 1);
  }

  let typeSpeed = isDeleting.value ? deletingSpeed.value : typingSpeed.value;

  if (!isDeleting.value && currentTitle.value === current) {
    typeSpeed = pauseDelay;
    isDeleting.value = true;
  } else if (isDeleting.value && currentTitle.value === "") {
    isDeleting.value = false;
    currentIndex.value = (currentIndex.value + 1) % titles.length;
  }

  setTimeout(typeText, typeSpeed);
};

onMounted(() => {
  setTimeout(typeText, typingSpeed.value);
});
</script>

<template>
  <section
    id="home"
    class="min-h-screen flex items-center relative overflow-hidden"
  >
    <!-- Background pattern with dark mode support -->
    <div
      class="absolute inset-0 opacity-10 dark:opacity-5 bg-gradient-to-br from-primary-500 to-secondary-500 pointer-events-none"
    ></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
      <div class="max-w-4xl">
        <p
          class="text-primary-500 font-medium text-lg md:text-xl mb-4 animate-fade-in"
        >
          Hello, my name is
        </p>
        <h1
          class="text-4xl md:text-6xl font-bold text-secondary-900 dark:text-white mb-4 animate-slide-up"
        >
          Your Name
        </h1>

        <div
          class="text-2xl md:text-4xl text-secondary-700 dark:text-secondary-200 font-semibold mb-6 h-12"
        >
          {{ currentTitle }}<span class="animate-pulse">|</span>
        </div>

        <p
          class="text-lg md:text-xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-2xl animate-slide-up"
          style="animation-delay: 0.2s"
        >
          I'm a passionate backend developer specializing in .NET technologies,
          creating robust, scalable solutions for complex business problems.
        </p>

        <div
          class="flex flex-wrap gap-4 animate-slide-up"
          style="animation-delay: 0.4s"
        >
          <a href="#projects" class="btn btn-primary">
            View My Work
            <font-awesome-icon icon="arrow-right" />
          </a>
          <a href="#contact" class="btn btn-outline"> Contact Me </a>
        </div>
      </div>
    </div>

    <!-- Decorative elements -->
    <div
      class="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce"
    >
      <a href="#about" class="text-secondary-400 dark:text-secondary-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </div>
  </section>
</template>
