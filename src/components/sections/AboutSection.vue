<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

// Function to download CV based on current language
const downloadCV = () => {
  const cvFile =
    locale.value === "es" ? "/resumes/cv-es.pdf" : "/resumes/cv-en.pdf";
  const link = document.createElement("a");
  link.href = cvFile;
  link.download = `CV-Hector-Rosario-${locale.value.toUpperCase()}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<template>
  <section
    id="about"
    class="section bg-secondary-50 dark:bg-secondary-800/30 relative overflow-hidden"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-10 right-10 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl"
      ></div>
      <div
        class="absolute bottom-10 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl"
      ></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 class="section-title" data-aos="fade-up">{{ t("about.title") }}</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        {{ t("about.subtitle") }}
      </p>

      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Image Section -->
        <div class="order-2 lg:order-1 animate-slide-up">
          <div class="relative">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about/me.webp"
                alt="Profile Image"
                class="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              <!-- Overlay gradient -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              ></div>
            </div>

            <!-- Decorative elements -->
            <div
              class="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl -z-10 shadow-lg"
            ></div>
            <div
              class="absolute -top-6 -right-6 w-24 h-24 border-4 border-primary-500 rounded-2xl -z-10"
            ></div>
          </div>
        </div>

        <!-- Content Section -->
        <div class="order-1 lg:order-2 animate-slide-down">
          <h3
            class="text-3xl font-bold text-secondary-900 dark:text-white mb-6"
          >
            {{ t("about.whoAmI") }}
          </h3>
          <p
            class="text-lg text-secondary-700 dark:text-secondary-300 mb-8 leading-relaxed"
          >
            {{ t("personal.bio.long") }}
          </p>

          <!-- Info Grid -->
          <div class="grid grid-cols-1 gap-4 mb-8">
            <div
              class="card p-4 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div class="flex items-start">
                <div
                  class="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-3 flex-shrink-0"
                >
                  <font-awesome-icon
                    icon="envelope"
                    class="text-primary-600 dark:text-primary-400 text-lg"
                  />
                </div>
                <div class="min-w-0 flex-1">
                  <h4
                    class="font-bold text-secondary-900 dark:text-white mb-2 text-base"
                  >
                    {{ t("about.email") }}
                  </h4>
                  <p
                    class="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed"
                  >
                    {{ t("personal.email") }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="card p-4 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div class="flex items-start">
                <div
                  class="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-3 flex-shrink-0"
                >
                  <font-awesome-icon
                    icon="globe"
                    class="text-primary-600 dark:text-primary-400 text-lg"
                  />
                </div>
                <div class="min-w-0 flex-1">
                  <h4
                    class="font-bold text-secondary-900 dark:text-white mb-2 text-base"
                  >
                    {{ t("about.location") }}
                  </h4>
                  <p
                    class="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed"
                  >
                    {{ t("personal.location") }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="card p-4 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div class="flex items-start">
                <div
                  class="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-3 flex-shrink-0"
                >
                  <font-awesome-icon
                    icon="graduation-cap"
                    class="text-primary-600 dark:text-primary-400 text-lg"
                  />
                </div>
                <div class="min-w-0 flex-1">
                  <h4
                    class="font-bold text-secondary-900 dark:text-white mb-2 text-base"
                  >
                    {{ t("about.education") }}
                  </h4>
                  <p
                    class="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed"
                  >
                    {{ t("personal.education") }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="card p-4 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div class="flex items-start">
                <div
                  class="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-3 flex-shrink-0"
                >
                  <font-awesome-icon
                    icon="briefcase"
                    class="text-primary-600 dark:text-primary-400 text-lg"
                  />
                </div>
                <div class="min-w-0 flex-1">
                  <h4
                    class="font-bold text-secondary-900 dark:text-white mb-2 text-base"
                  >
                    {{ t("about.experience") }}
                  </h4>
                  <p
                    class="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed"
                  >
                    {{ t("personal.experience") }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4">
            <button @click="downloadCV" class="btn btn-primary">
              {{ t("experience.downloadCV") }}
              <font-awesome-icon icon="download" class="ml-2" />
            </button>
            <a href="#experience" class="btn btn-outline">
              {{ t("experience.title") }}
              <font-awesome-icon icon="briefcase" class="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom animations for cards */
.card {
  position: relative;
  overflow: hidden;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--primary-500),
    transparent
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover::before {
  opacity: 1;
}

/* Image hover effect */
img {
  filter: brightness(1.05);
}

img:hover {
  filter: brightness(1.1);
}

/* Decorative elements animation */
.absolute.-bottom-6.-left-6 {
  animation: float 6s ease-in-out infinite;
}

.absolute.-top-6.-right-6 {
  animation: float 6s ease-in-out infinite reverse;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Email text wrapping fix */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .card {
    padding: 0.75rem;
  }

  .card .text-xs {
    font-size: 0.7rem;
  }
}
</style>
