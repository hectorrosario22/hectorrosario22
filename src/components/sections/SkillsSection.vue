<script setup>
const skillCategories = [
  {
    name: "Backend Development",
    icon: "server",
    skills: [
      { name: "C#", level: 95, icon: ["fab", "microsoft"] },
      { name: ".NET Core", level: 90, icon: ["fab", "dot-net"] },
      { name: "ASP.NET Web API", level: 90, icon: "code" },
      { name: "Entity Framework", level: 85, icon: "database" },
      { name: "SQL Server", level: 80, icon: "database" },
      { name: "REST API Design", level: 85, icon: "server" },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      { name: "Azure", level: 75, icon: ["fab", "microsoft"] },
      { name: "Docker", level: 80, icon: ["fab", "docker"] },
      { name: "CI/CD", level: 75, icon: "code-branch" },
      { name: "Git", level: 85, icon: ["fab", "git-alt"] },
    ],
  },
  {
    name: "Architecture",
    icon: "project-diagram",
    skills: [
      { name: "Microservices", level: 80, icon: "server" },
      { name: "Domain-Driven Design", level: 75, icon: "code" },
      { name: "Clean Architecture", level: 80, icon: "code" },
      { name: "Event-Driven Architecture", level: 70, icon: "code" },
    ],
  },
  {
    name: "Frontend",
    icon: "laptop-code",
    skills: [
      { name: "HTML5", level: 70, icon: ["fab", "html5"] },
      { name: "CSS3", level: 65, icon: ["fab", "css3-alt"] },
      { name: "JavaScript", level: 75, icon: ["fab", "js"] },
      { name: "Vue.js", level: 60, icon: ["fab", "vuejs"] },
    ],
  },
];

function mapLevelToLabel(level) {
  if (level >= 90) return "Expert";
  if (level >= 75) return "Advanced";
  if (level >= 60) return "Intermediate";
  return "Beginner";
}

function getBadgeClass(level) {
  if (level >= 90)
    return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
  if (level >= 75)
    return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
  if (level >= 60)
    return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
  return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
}
</script>

<template>
  <section id="skills" class="section">
    <h2 class="section-title">My Skills</h2>
    <p class="section-subtitle">
      Here are the technologies and methodologies I specialize in
    </p>

    <div class="grid md:grid-cols-2 gap-8">
      <div
        v-for="(category, index) in skillCategories"
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

        <div class="space-y-5">
          <div v-for="(skill, skillIndex) in category.skills" :key="skillIndex">
            <div class="flex justify-between items-center mb-1">
              <div class="flex items-center">
                <font-awesome-icon
                  :icon="skill.icon"
                  class="mr-2 text-primary-500"
                />
                <span
                  class="font-medium text-secondary-800 dark:text-secondary-200"
                  >{{ skill.name }}</span
                >
              </div>
              <span
                class="text-xs font-semibold px-2 py-1 rounded-full"
                :class="getBadgeClass(skill.level)"
              >
                {{ mapLevelToLabel(skill.level) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
