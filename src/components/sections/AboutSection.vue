<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section id="about" class="section bg-secondary-50 dark:bg-secondary-800/30">
    <h2 class="section-title" data-aos="fade-up">{{ t("about.title") }}</h2>
    <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
      {{ t("about.subtitle") }}
    </p>

    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="order-2 md:order-1">
        <div class="relative">
          <div
            class="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="/images/about/me.webp"
              alt="Profile Image"
              class="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div
            class="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-500 rounded-lg -z-10"
          ></div>
          <div
            class="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary-500 rounded-lg -z-10"
          ></div>
        </div>
      </div>

      <div class="order-1 md:order-2">
        <h3 class="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
          {{ t("about.whoAmI") }}
        </h3>

        <p class="text-secondary-700 dark:text-secondary-300 mb-6">
          {{ t("personal.bio.long") }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div class="flex items-start">
            <font-awesome-icon
              icon="envelope"
              class="mt-1 mr-3 text-primary-500"
            />
            <div>
              <h4 class="font-semibold text-secondary-900 dark:text-white">
                {{ t("about.email") }}
              </h4>
              <p class="text-secondary-600 dark:text-secondary-400">
                {{ t("personal.email") }}
              </p>
            </div>
          </div>

          <div class="flex items-start">
            <font-awesome-icon
              icon="globe"
              class="mt-1 mr-3 text-primary-500"
            />
            <div>
              <h4 class="font-semibold text-secondary-900 dark:text-white">
                {{ t("about.location") }}
              </h4>
              <p class="text-secondary-600 dark:text-secondary-400">
                {{ t("personal.location") }}
              </p>
            </div>
          </div>

          <div class="flex items-start">
            <font-awesome-icon
              icon="graduation-cap"
              class="mt-1 mr-3 text-primary-500"
            />
            <div>
              <h4 class="font-semibold text-secondary-900 dark:text-white">
                {{ t("about.education") }}
              </h4>
              <p class="text-secondary-600 dark:text-secondary-400">
                {{ t("personal.education") }}
              </p>
            </div>
          </div>

          <div class="flex items-start">
            <font-awesome-icon
              icon="briefcase"
              class="mt-1 mr-3 text-primary-500"
            />
            <div>
              <h4 class="font-semibold text-secondary-900 dark:text-white">
                {{ t("about.experience") }}
              </h4>
              <p class="text-secondary-600 dark:text-secondary-400">
                {{ t("personal.experience") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
