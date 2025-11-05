import { ref, watch, onMounted } from "vue";

export function useTheme() {
  const isDarkMode = ref(false);

  const updateTheme = () => {
    if (isDarkMode.value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
    updateTheme();
  };

  const initTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme) {
      isDarkMode.value = savedTheme === "dark";
    } else {
      isDarkMode.value = prefersDark;
    }

    updateTheme();

    // Watch for system theme changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
          isDarkMode.value = e.matches;
          updateTheme();
        }
      });
  };

  onMounted(() => {
    initTheme();
  });

  watch(isDarkMode, updateTheme);

  return {
    isDarkMode,
    toggleTheme,
  };
}
