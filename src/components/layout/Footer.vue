<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer
    class="bg-secondary-900 dark:bg-secondary-800 relative overflow-hidden"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-10 left-10 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl"
      ></div>
      <div
        class="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"
      ></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="py-16">
        <!-- Main Footer Content -->
        <div class="grid lg:grid-cols-3 gap-12 mb-12">
          <!-- Brand Section -->
          <div class="text-center lg:text-left">
            <div class="flex items-center justify-center lg:justify-start mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
              >
                <span class="text-2xl font-bold text-white">HR</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white mb-1">
                  {{ t("personal.name") }}
                </h3>
                <p class="text-secondary-400 text-sm">
                  {{ t("footer.tagline") }}
                </p>
              </div>
            </div>
            <p
              class="text-secondary-400 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              {{ t("footer.description") }}
            </p>
          </div>

          <!-- Quick Links -->
          <div class="text-center lg:text-left">
            <h4 class="text-xl font-bold text-white mb-6">
              {{ t("footer.quickLinks") }}
            </h4>
            <div class="space-y-3">
              <a
                href="#about"
                class="block text-secondary-400 hover:text-primary-400 transition-colors duration-300"
              >
                {{ t("nav.about") }}
              </a>
              <a
                href="#experience"
                class="block text-secondary-400 hover:text-primary-400 transition-colors duration-300"
              >
                {{ t("nav.experience") }}
              </a>
              <a
                href="#skills"
                class="block text-secondary-400 hover:text-primary-400 transition-colors duration-300"
              >
                {{ t("nav.skills") }}
              </a>
              <a
                href="#projects"
                class="block text-secondary-400 hover:text-primary-400 transition-colors duration-300"
              >
                {{ t("nav.projects") }}
              </a>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="text-center lg:text-left">
            <h4 class="text-xl font-bold text-white mb-6">
              {{ t("footer.contact") }}
            </h4>
            <div class="space-y-4">
              <div class="flex items-center justify-center lg:justify-start">
                <div
                  class="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mr-3"
                >
                  <font-awesome-icon
                    icon="envelope"
                    class="text-primary-400 text-lg"
                  />
                </div>
                <div class="text-left">
                  <p class="text-secondary-400 text-sm">
                    {{ t("footer.email") }}
                  </p>
                  <p class="text-white font-medium">
                    {{ t("personal.email") }}
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-center lg:justify-start">
                <div
                  class="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mr-3"
                >
                  <font-awesome-icon
                    icon="globe"
                    class="text-primary-400 text-lg"
                  />
                </div>
                <div class="text-left">
                  <p class="text-secondary-400 text-sm">
                    {{ t("footer.location") }}
                  </p>
                  <p class="text-white font-medium">
                    {{ t("personal.location") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="border-t border-secondary-700 pt-8">
          <div class="flex justify-center">
            <div class="flex space-x-6">
              <a
                href="https://github.com/hectorrosario22"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-secondary-800 hover:bg-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="GitHub"
              >
                <font-awesome-icon
                  :icon="['fab', 'github']"
                  class="text-white text-xl"
                />
              </a>
              <a
                href="https://linkedin.com/in/hector-rosario"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-secondary-800 hover:bg-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <font-awesome-icon
                  :icon="['fab', 'linkedin']"
                  class="text-white text-xl"
                />
              </a>
              <a
                href="mailto:hectorjuniorrosario22@gmail.com"
                class="w-12 h-12 bg-secondary-800 hover:bg-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Email"
              >
                <font-awesome-icon icon="envelope" class="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-secondary-700 pt-8 mt-8 text-center">
          <p class="text-secondary-400 text-sm">
            © {{ currentYear }} {{ t("personal.name") }}.
            {{ t("footer.rightsReserved") }}
          </p>
          <p class="text-secondary-500 text-xs mt-2">
            {{ t("footer.builtWith") }}
            <span class="text-primary-400">Vue.js</span>,
            <span class="text-primary-400">TypeScript</span>,
            <span class="text-primary-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Enhanced social link hover effects */
a[href^="http"],
a[href^="mailto"] {
  position: relative;
  overflow: hidden;
}

a[href^="http"]::before,
a[href^="mailto"]::before {
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

a[href^="http"]:hover::before,
a[href^="mailto"]:hover::before {
  left: 100%;
}

/* Footer link hover effects */
a[href^="#"] {
  position: relative;
  transition: all 0.3s ease;
}

a[href^="#"]::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--primary-400);
  transition: width 0.3s ease;
}

a[href^="#"]:hover::after {
  width: 100%;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .grid {
    gap: 2rem;
  }
}

/* Animation for social icons */
.w-12.h-12 {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.w-12.h-12:hover {
  transform: translateY(-4px) scale(1.1);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
}
</style>
