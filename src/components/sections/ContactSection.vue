<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { personalData } from "../../data/personal";

const { t } = useI18n();

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const formData = ref<FormData>({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);
const submitError = ref<string | null>(null);

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  isSubmitting.value = true;
  submitError.value = null;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    isSubmitted.value = true;
    formData.value = { name: "", email: "", subject: "", message: "" };
  } catch (error) {
    submitError.value = t("contact.form.error");
  } finally {
    isSubmitting.value = false;
  }
};

const contactInfo = computed(() => [
  {
    icon: "envelope",
    title: t("about.email"),
    value: personalData.email,
    link: `mailto:${personalData.email}`,
  },
  {
    icon: ["fab", "github"],
    title: "GitHub",
    value: personalData.social.github.replace("https://", ""),
    link: personalData.social.github,
  },
  {
    icon: ["fab", "linkedin"],
    title: "LinkedIn",
    value: personalData.social.linkedin.replace("https://", ""),
    link: personalData.social.linkedin,
  },
]);
</script>

<template>
  <section
    id="contact"
    class="section bg-secondary-50 dark:bg-secondary-800/30"
  >
    <h2 class="section-title">{{ t("contact.title") }}</h2>
    <p class="section-subtitle">
      {{ t("contact.subtitle") }}
    </p>

    <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
      <div>
        <div
          v-for="item in contactInfo"
          :key="item.title"
          class="card p-6 mb-6 hover:shadow-xl transition-all duration-300"
        >
          <div class="flex items-start">
            <div
              class="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-500 mr-4"
            >
              <font-awesome-icon :icon="item.icon" class="text-xl" />
            </div>
            <div>
              <h3
                class="text-lg font-semibold text-secondary-900 dark:text-white mb-1"
              >
                {{ item.title }}
              </h3>
              <a
                :href="item.link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-secondary-600 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {{ item.value }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="md:col-span-2">
        <div class="card p-8 hover:shadow-xl transition-all duration-300">
          <h3 class="text-xl font-bold text-secondary-900 dark:text-white mb-6">
            {{ t("contact.title") }}
          </h3>

          <form @submit="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                >
                  {{ t("contact.form.name") }}
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                  class="w-full p-3 border border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  :placeholder="t('contact.form.name')"
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                >
                  {{ t("contact.form.email") }}
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  class="w-full p-3 border border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  :placeholder="t('contact.form.email')"
                />
              </div>
            </div>

            <div class="mb-6">
              <label
                for="subject"
                class="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
              >
                {{ t("contact.form.subject") }}
              </label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                required
                class="w-full p-3 border border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                :placeholder="t('contact.form.subject')"
              />
            </div>

            <div class="mb-6">
              <label
                for="message"
                class="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
              >
                {{ t("contact.form.message") }}
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="5"
                class="w-full p-3 border border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                :placeholder="t('contact.form.message')"
              ></textarea>
            </div>

            <div class="text-right">
              <button
                type="submit"
                class="btn btn-primary"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">{{ t("contact.form.sending") }}</span>
                <span v-else>{{ t("contact.form.send") }}</span>
                <font-awesome-icon icon="arrow-right" v-if="!isSubmitting" />
              </button>
            </div>

            <div
              v-if="isSubmitted"
              class="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md"
            >
              {{ t("contact.form.success") }}
            </div>

            <div
              v-if="submitError"
              class="mt-4 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-md"
            >
              {{ submitError }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
