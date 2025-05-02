<script setup>
import { ref } from "vue";

// Form data
const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

// Form status
const isSubmitting = ref(false);
const isSubmitted = ref(false);
const submitError = ref(null);

// Handle form submit
const handleSubmit = async (e) => {
  e.preventDefault();
  isSubmitting.value = true;
  submitError.value = null;

  try {
    // In a real implementation, you would send this data to a backend service
    // For now, we'll just simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    isSubmitted.value = true;
    formData.value = { name: "", email: "", subject: "", message: "" };
  } catch (error) {
    submitError.value =
      "There was an error sending your message. Please try again.";
  } finally {
    isSubmitting.value = false;
  }
};

// Contact information
const contactInfo = [
  {
    icon: "envelope",
    title: "Email",
    value: "your.email@example.com",
    link: "mailto:your.email@example.com",
  },
  {
    icon: ["fab", "github"],
    title: "GitHub",
    value: "github.com/yourusername",
    link: "https://github.com/yourusername",
  },
  {
    icon: ["fab", "linkedin"],
    title: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    link: "https://linkedin.com/in/yourusername",
  },
];
</script>

<template>
  <section
    id="contact"
    class="section bg-secondary-50 dark:bg-secondary-800/30"
  >
    <h2 class="section-title">Get In Touch</h2>
    <p class="section-subtitle">
      Feel free to reach out for collaborations or just a friendly chat
    </p>

    <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
      <!-- Contact information -->
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

      <!-- Contact form -->
      <div class="md:col-span-2">
        <div class="card p-8 hover:shadow-xl transition-all duration-300">
          <h3 class="text-xl font-bold text-secondary-900 dark:text-white mb-6">
            Send Me a Message
          </h3>

          <form @submit="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                  class="w-full p-3 border border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  class="w-full p-3 border border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div class="mb-6">
              <label
                for="subject"
                class="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                required
                class="w-full p-3 border border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Project Inquiry"
              />
            </div>

            <div class="mb-6">
              <label
                for="message"
                class="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="5"
                class="w-full p-3 border border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <div class="text-right">
              <button
                type="submit"
                class="btn btn-primary"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Send Message</span>
                <font-awesome-icon icon="arrow-right" v-if="!isSubmitting" />
              </button>
            </div>

            <!-- Success message -->
            <div
              v-if="isSubmitted"
              class="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md"
            >
              Thank you! Your message has been sent successfully.
            </div>

            <!-- Error message -->
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
