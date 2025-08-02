<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const titles = computed(() => [
  t("hero.titles.t1"),
  t("hero.titles.t2"),
  t("hero.titles.t3"),
]);
const currentTitle = ref(titles.value[0]);
const currentIndex = ref(0);
const isDeleting = ref(false);
const typingSpeed = ref(100);
const deletingSpeed = ref(50);
const pauseDelay = 1500;

const typeText = () => {
  const current = titles.value[currentIndex.value];

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
    currentIndex.value = (currentIndex.value + 1) % titles.value.length;
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
    class="min-h-screen flex items-center relative overflow-hidden hero-gradient"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
      ></div>
      <div
        class="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"
      ></div>
      <div
        class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"
      ></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Greeting -->
        <p
          class="text-primary-600 font-semibold text-lg md:text-xl mb-6 animate-fade-in"
        >
          {{ t("hero.greeting") }}
        </p>

        <!-- Name -->
        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-900 dark:text-white mb-6 animate-slide-up"
        >
          {{ t("personal.name") }}
        </h1>

        <!-- Animated title -->
        <div
          class="text-2xl md:text-4xl lg:text-5xl text-secondary-700 dark:text-secondary-200 font-semibold mb-8 h-16 md:h-20 flex items-center justify-center"
        >
          <span class="typing-text">{{ currentTitle }}</span>
          <span class="animate-pulse ml-2">|</span>
        </div>

        <!-- Bio -->
        <p
          class="text-lg md:text-xl text-secondary-600 dark:text-secondary-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up"
          style="animation-delay: 0.2s"
        >
          {{ t("personal.bio.short") }}
        </p>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
          style="animation-delay: 0.4s"
        >
          <a href="#projects" class="btn btn-primary text-lg px-8 py-4">
            {{ t("projects.title") }}
            <font-awesome-icon icon="arrow-right" class="ml-2" />
          </a>
          <a href="#about" class="btn btn-outline text-lg px-8 py-4">
            {{ t("about.title") }}
            <font-awesome-icon icon="user" class="ml-2" />
          </a>
        </div>

        <!-- Social links -->
        <div
          class="flex justify-center space-x-6 mt-12 animate-fade-in"
          style="animation-delay: 0.6s"
        >
          <a
            href="https://github.com/hectorrosario22"
            target="_blank"
            rel="noopener noreferrer"
            class="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <font-awesome-icon :icon="['fab', 'github']" class="text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/hector-rosario"
            target="_blank"
            rel="noopener noreferrer"
            class="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" class="text-2xl" />
          </a>
          <a
            href="mailto:hectorjuniorrosario22@gmail.com"
            class="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            aria-label="Email"
          >
            <font-awesome-icon icon="envelope" class="text-2xl" />
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce"
    >
      <a
        href="#about"
        class="text-secondary-400 dark:text-secondary-500 hover:text-primary-500 transition-colors duration-300"
      >
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

<style scoped>
.typing-text {
  min-height: 1.2em;
  display: inline-block;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Custom gradient for hero section */
.hero-gradient {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
}

.dark .hero-gradient {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
}

/* Enhanced button styles */
.btn {
  position: relative;
  overflow: hidden;
}

.btn::after {
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

.btn:hover::after {
  left: 100%;
}
</style>
