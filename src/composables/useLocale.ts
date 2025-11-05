import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

export function useLocale() {
  const { locale } = useI18n();

  const initLocale = () => {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) {
      locale.value = savedLocale;
    }

    // Update HTML lang attribute when locale changes
    document.documentElement.lang = locale.value;
  };

  const toggleLanguage = () => {
    locale.value = locale.value === "en" ? "es" : "en";
    localStorage.setItem("locale", locale.value);
    document.documentElement.lang = locale.value;
  };

  onMounted(() => {
    initLocale();
  });

  return {
    locale,
    toggleLanguage,
  };
}
