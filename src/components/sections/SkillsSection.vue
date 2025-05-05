<script setup lang="ts">
import { skillsData } from "../../data/skills";
</script>

<template>
  <section id="skills" class="section">
    <h2 class="section-title">My Skills</h2>
    <p class="section-subtitle">
      Here are the technologies and methodologies I specialize in
    </p>

    <div class="grid md:grid-cols-2 gap-8">
      <div
        v-for="(category, index) in skillsData.categories"
        :key="index"
        class="card p-6 transition-all hover:translate-y-[-5px]"
      >
        <div class="flex items-center mb-6">
          <div
            class="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-500 mr-4"
          >
            <font-awesome-icon :icon="category.icon" class="text-xl" />
          </div>
          <h3 class="text-xl font-bold text-secondary-900 dark:text-white">
            {{ category.name }}
          </h3>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="(skill, skillIndex) in category.skills"
            :key="skillIndex"
            class="flex items-center p-2 rounded-lg bg-secondary-50 dark:bg-secondary-700/50 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
          >
            <font-awesome-icon
              :icon="skill.icon"
              class="mr-2 text-primary-500"
            />
            <span
              class="font-medium text-secondary-800 dark:text-secondary-200"
              >{{ skill.name }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
