<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  scrollY: {
    type: Number,
    default: 0,
  },
});

const isVisible = ref(false);

// Show button when user scrolls down 500px
watch(
  () => props.scrollY,
  (newVal) => {
    isVisible.value = newVal > 500;
  }
);

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <button
    @click="scrollToTop"
    class="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary-500 text-white shadow-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-110"
    :class="
      isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10 pointer-events-none'
    "
    aria-label="Scroll to top"
  >
    <font-awesome-icon icon="chevron-up" class="text-lg" />
  </button>
</template>
