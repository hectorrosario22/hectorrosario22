<script setup>
// Your personal information
const personalInfo = {
  name: "Your Name",
  email: "your.email@example.com",
  location: "Your City, Country",
  education: "Bachelor/Master in Computer Science",
  experience: "5+ years in .NET development",
  interests: [
    "Cloud Computing",
    "Microservices",
    "Software Architecture",
    "DevOps",
  ],
};
</script>

<template>
  <section id="about" class="section bg-secondary-50 dark:bg-secondary-800/30">
    <h2 class="section-title" data-aos="fade-up">About Me</h2>
    <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
      Get to know more about me and my professional journey
    </p>

    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Profile Image -->
      <div class="order-2 md:order-1">
        <div class="relative">
          <!-- Using a placeholder image - replace with your own image when deploying -->
          <div
            class="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Profile Image"
              class="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
          </div>

          <!-- Decorative elements -->
          <div
            class="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-500 rounded-lg -z-10"
          ></div>
          <div
            class="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary-500 rounded-lg -z-10"
          ></div>
        </div>
      </div>

      <!-- Bio Content -->
      <div class="order-1 md:order-2">
        <h3 class="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
          Who am I?
        </h3>

        <p class="text-secondary-700 dark:text-secondary-300 mb-6">
          I'm a specialized backend developer with expertise in .NET
          technologies including C#, ASP.NET Core, Entity Framework, and SQL
          Server. With a strong foundation in designing, developing and
          maintaining robust, scalable applications, I focus on creating
          efficient, high-quality solutions for complex business problems.
        </p>

        <p class="text-secondary-700 dark:text-secondary-300 mb-6">
          My approach combines technical expertise with a deep understanding of
          business needs, allowing me to build applications that deliver real
          value. I'm passionate about clean architecture, performance
          optimization, and following best practices in software development.
        </p>

        <!-- Personal details -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div class="flex items-start">
            <font-awesome-icon
              icon="envelope"
              class="mt-1 mr-3 text-primary-500"
            />
            <div>
              <h4 class="font-semibold text-secondary-900 dark:text-white">
                Email
              </h4>
              <p class="text-secondary-600 dark:text-secondary-400">
                {{ personalInfo.email }}
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
                Location
              </h4>
              <p class="text-secondary-600 dark:text-secondary-400">
                {{ personalInfo.location }}
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
                Education
              </h4>
              <p class="text-secondary-600 dark:text-secondary-400">
                {{ personalInfo.education }}
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
                Experience
              </h4>
              <p class="text-secondary-600 dark:text-secondary-400">
                {{ personalInfo.experience }}
              </p>
            </div>
          </div>
        </div>

        <a href="#contact" class="btn btn-primary">
          Get In Touch
          <font-awesome-icon icon="arrow-right" />
        </a>
      </div>
    </div>
  </section>
</template>
