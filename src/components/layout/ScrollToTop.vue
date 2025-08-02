<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const isVisible = ref(false);

const toggleVisibility = () => {
  isVisible.value = window.pageYOffset > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", toggleVisibility);
});

onUnmounted(() => {
  window.removeEventListener("scroll", toggleVisibility);
});
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 scale-75 translate-y-4"
    enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="opacity-100 scale-100 translate-y-0"
    leave-to-class="opacity-0 scale-75 translate-y-4"
  >
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-[9999] w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-2xl shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
      :aria-label="t('ui.scrollToTop')"
      style="margin: 0; padding: 0; bottom: 2rem; right: 2rem"
    >
      <!-- Shine effect -->
      <div
        class="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
      ></div>

      <!-- Icon -->
      <div class="relative z-10 flex items-center justify-center w-full h-full">
        <font-awesome-icon
          icon="arrow-up"
          class="text-xl group-hover:animate-bounce"
        />
      </div>

      <!-- Pulse effect -->
      <div
        class="absolute inset-0 rounded-2xl bg-primary-500/30 animate-ping"
      ></div>
    </button>
  </Transition>
</template>

<style scoped>
/* Custom pulse animation */
@keyframes ping {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

/* Enhanced hover effects */
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
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.6s ease;
}

button:hover::before {
  left: 100%;
}

/* Custom bounce animation for icon */
@keyframes custom-bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
}

.group:hover .group-hover\:animate-bounce {
  animation: custom-bounce 1s ease-in-out;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  button {
    bottom: 1rem !important;
    right: 1rem !important;
    width: 3rem;
    height: 3rem;
    margin: 0 !important;
    padding: 0 !important;
  }
}

/* Enhanced shadow on hover */
button:hover {
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4);
}

/* Smooth transition for all properties */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: fixed !important;
  bottom: 2rem !important;
  right: 2rem !important;
  z-index: 9999 !important;
  margin: 0 !important;
  padding: 0 !important;
}
</style>
