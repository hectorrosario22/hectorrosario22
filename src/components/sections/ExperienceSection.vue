<script setup>
// Experience timeline data
const experiences = [
  {
    id: 1,
    title: "Senior Backend Developer",
    company: "Tech Company A",
    period: "January 2022 - Present",
    location: "Your City, Country",
    description: [
      "Lead development of microservices architecture using .NET Core and Docker",
      "Designed and implemented RESTful APIs for enterprise applications",
      "Optimized database performance resulting in 40% faster query response times",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines using Azure DevOps",
    ],
    technologies: [
      ".NET Core",
      "C#",
      "Microservices",
      "Docker",
      "Azure",
      "SQL Server",
    ],
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Software Solutions Inc.",
    period: "June 2019 - December 2021",
    location: "Your City, Country",
    description: [
      "Developed and maintained ASP.NET Core Web APIs",
      "Integrated applications with third-party services via RESTful APIs",
      "Implemented authentication and authorization using Identity Server",
      "Wrote unit and integration tests for backend services",
      "Collaborated with frontend team to ensure seamless API integration",
    ],
    technologies: [
      ".NET Core",
      "C#",
      "ASP.NET Web API",
      "Entity Framework",
      "SQL Server",
      "Azure",
    ],
  },
  {
    id: 3,
    title: "Junior .NET Developer",
    company: "Digital Solutions Ltd.",
    period: "September 2017 - May 2019",
    location: "Your City, Country",
    description: [
      "Developed features for .NET Framework applications",
      "Created and maintained stored procedures and SQL queries",
      "Fixed bugs and improved application performance",
      "Participated in daily stand-ups and sprint planning",
      "Learned and implemented best practices in C# development",
    ],
    technologies: [
      ".NET Framework",
      "C#",
      "WinForms",
      "SQL Server",
      "Entity Framework",
    ],
  },
];
</script>

<template>
  <section id="experience" class="section">
    <h2 class="section-title">Work Experience</h2>
    <p class="section-subtitle">
      My professional journey and career highlights
    </p>

    <!-- Timeline -->
    <div class="relative">
      <!-- Timeline line -->
      <div
        class="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-secondary-200 dark:bg-secondary-700"
      ></div>

      <div>
        <div
          v-for="(experience, index) in experiences"
          :key="experience.id"
          class="mb-12 relative"
        >
          <!-- Timeline dot -->
          <div
            class="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary-500 border-4 border-white dark:border-secondary-900 z-10"
          ></div>

          <div
            class="md:w-5/12 mx-auto md:mx-0"
            :class="index % 2 === 0 ? 'md:ml-auto' : ''"
          >
            <div class="card p-6 hover:shadow-xl transition-all duration-300">
              <div
                class="flex flex-col md:flex-row justify-between md:items-center mb-4"
              >
                <h3
                  class="text-xl font-bold text-secondary-900 dark:text-white"
                >
                  {{ experience.title }}
                </h3>
                <span
                  class="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-sm font-medium rounded-full mt-2 md:mt-0"
                >
                  {{ experience.period }}
                </span>
              </div>

              <div class="mb-4">
                <div
                  class="flex items-center text-secondary-700 dark:text-secondary-300"
                >
                  <font-awesome-icon
                    icon="briefcase"
                    class="mr-2 text-primary-500"
                  />
                  <span class="font-medium">{{ experience.company }}</span>
                </div>
                <div
                  class="flex items-center text-secondary-600 dark:text-secondary-400 mt-1"
                >
                  <font-awesome-icon
                    icon="globe"
                    class="mr-2 text-primary-500"
                  />
                  <span>{{ experience.location }}</span>
                </div>
              </div>

              <ul class="space-y-2 mb-4">
                <li
                  v-for="(item, itemIndex) in experience.description"
                  :key="itemIndex"
                  class="flex"
                >
                  <span
                    class="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2"
                  ></span>
                  <span class="text-secondary-600 dark:text-secondary-300">{{
                    item
                  }}</span>
                </li>
              </ul>

              <div class="flex flex-wrap gap-2 mt-4">
                <span
                  v-for="(tech, techIndex) in experience.technologies"
                  :key="techIndex"
                  class="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 text-xs rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Education section -->
    <div class="mt-20">
      <h3
        class="text-2xl font-bold text-center text-secondary-900 dark:text-white mb-12"
      >
        Education
      </h3>

      <div class="max-w-2xl mx-auto">
        <div class="card p-6 hover:shadow-xl transition-all duration-300">
          <div class="flex justify-between items-start">
            <div>
              <h4 class="text-xl font-bold text-secondary-900 dark:text-white">
                Bachelor/Master of Computer Science
              </h4>
              <p class="text-secondary-600 dark:text-secondary-400">
                University Name
              </p>
            </div>
            <span
              class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-sm font-medium rounded-full"
            >
              2013 - 2017
            </span>
          </div>

          <p class="mt-4 text-secondary-600 dark:text-secondary-300">
            Graduated with honors. Specialized in software engineering with
            focus on enterprise application development. Completed thesis on
            "Optimizing Performance in Distributed Systems".
          </p>

          <div class="flex flex-wrap gap-2 mt-4">
            <span
              class="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 text-xs rounded-full"
            >
              Software Engineering
            </span>
            <span
              class="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 text-xs rounded-full"
            >
              Algorithms
            </span>
            <span
              class="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 text-xs rounded-full"
            >
              Database Systems
            </span>
            <span
              class="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 text-xs rounded-full"
            >
              Distributed Computing
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
