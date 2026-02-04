<template>
  <div class="smooth-scroll">
    <!-- Navigation Header -->
    <nav class="fixed top-0 w-full h-20 bg-gradient-to-r from-blue-light via-blue-sky to-blue-light border-b-2 border-gray-400 rounded-b-lg z-50 shadow-md">
      <div class="flex items-center justify-center gap-2.5 mt-6 ml-2.5">
        <router-link to="/" class="nav-btn">About Me</router-link>
        <router-link to="/projects" class="nav-btn">My Projects</router-link>
        <router-link to="/contact" class="nav-btn">Contact Me</router-link>
      </div>
    </nav>

    <!-- Home Section -->
    <div class="pt-40 pb-20 text-center">
      <h1 class="text-6xl font-bold gradient-text">Hello, my name is Finn Skattum 👋</h1>
    </div>

    <!-- About Section -->
    <section id="about" class="mx-auto max-w-6xl px-4 mb-6">
      <div class="bg-white bg-opacity-80 rounded-lg shadow-md p-8">
        <div class="flex flex-col md:flex-row gap-8">
          <div class="flex-1">
            <h1 class="text-6xl font-bold gradient-text mb-8">Finn Skattum</h1>
            <p class="bg-blue-light text-blue-primary font-bold text-lg p-3 rounded-lg shadow-sm max-w-2xl">
              nsrnreuonhwroibnwrjobnwroibguerbjergbe qorubnadkjbnekjbwke jbn ujerbhkejrbnoueqrbnejq wbhoieqbnelwjbhujqebnuqerbhljewrbnoiuewtbnlwej tbhlejwtbnuioqetbgnweljbnhoiewjbn lswjertbjhoi
            </p>
          </div>
          <div class="flex-1 flex justify-center">
            <img src="/portrait.jpg" alt="portrait of Finn Skattum" class="w-48 h-auto rounded-lg shadow-lg border-4 border-blue-accent">
          </div>
        </div>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-blue-extra p-5 rounded-lg shadow-md">
            <p class="text-blue-primary font-bold text-lg">Goals:</p>
          </div>
          <div class="bg-blue-extra p-5 rounded-lg shadow-md">
            <p class="text-blue-primary font-bold text-lg">Knowledge:</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="mx-auto max-w-6xl px-4 mb-6">
      <div class="bg-white bg-opacity-80 rounded-lg shadow-md p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.id" class="bg-blue-light rounded-lg shadow-lg p-6 hover:bg-blue-500 transition-all duration-200 cursor-pointer">
            <h2 class="text-xl font-bold text-blue-primary mb-4">Projekt: {{ project.id }}</h2>
            <div class="flex flex-col gap-4">
              <img :src="project.image" alt="Project image" class="w-full h-40 object-cover rounded-lg shadow-md hover:blur-sm transition-all duration-200">
              <div class="bg-white p-3 rounded-lg shadow-md hover:bg-gray-200 hover:text-blue-primary transition-all duration-200">
                <p class="text-blue-500 font-bold text-sm">{{ project.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="mx-auto max-w-6xl px-4 mb-6">
      <div class="bg-gradient-to-b from-blue-gradient to-blue-light rounded-lg shadow-lg p-8">
        <h2 class="text-6xl font-bold gradient-text mb-12">Contact Me</h2>
        <form action="https://formspree.io/f/mrblwldb" method="POST" class="max-w-2xl">
          <div class="mb-6">
            <input 
              type="text" 
              name="name" 
              required 
              placeholder="Write your name here:" 
              class="w-full bg-blue-lighter border-2 border-blue-primary rounded-lg p-3 font-bold text-blue-primary shadow-md placeholder-blue-primary focus:outline-none focus:ring-2 focus:ring-blue-primary"
            >
          </div>
          <div class="mb-6">
            <input 
              type="email" 
              name="_replyto" 
              required 
              placeholder="write your email here:" 
              class="w-full bg-blue-lighter border-2 border-blue-primary rounded-lg p-3 font-bold text-blue-primary shadow-md placeholder-blue-primary focus:outline-none focus:ring-2 focus:ring-blue-primary"
            >
          </div>
          <div class="mb-8">
            <textarea 
              name="message" 
              rows="5" 
              required 
              placeholder="Write your message here:" 
              class="w-full bg-blue-lighter border-2 border-blue-primary rounded-lg p-3 font-bold text-blue-primary shadow-md placeholder-blue-primary focus:outline-none focus:ring-2 focus:ring-blue-primary"
            ></textarea>
          </div>
          <button 
            type="submit" 
            class="bg-blue-primary text-blue-pale font-bold py-2 px-6 rounded-full border-b-4 border-blue-dark shadow-md hover:bg-blue-dark hover:shadow-inner transition-all duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-blue-500 text-blue-pale text-center font-bold py-5 mt-6 rounded-t-lg">
      <p>&copy; 2023 Finn Skattum. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  { id: 1, image: '/hemsida.png', description: 'This a project where i made a niqfq fqfq sqfqf sqfqwqs fqwfqs qfqdq qefqcs qefqcq qvevqvqd qevqevdqev vqevdqvd qwfwef wefwfd fwefdwv fwfwfwf fwefwfdf fwfwwdwe' },
  { id: 2, image: '/hemsida.png', description: 'This a project where i made a niqfq fqfq sqfqf sqfqwqs fqwfqs qfqdq qefqcs qefqcq qvevqvqd qevqevdqev vqevdqvd qwfwef wefwfd fwefdwv fwfwfwf fwefwfdf fwfwwdwe' },
  { id: 3, image: '/hemsida.png', description: 'This a project where i made a niqfq fqfq sqfqf sqfqwqs fqwfqs qfqdq qefqcs qefqcq qvevqvqd qevqevdqev vqevdqvd qwfwef wefwfd fwefdwv fwfwfwf fwefwfdf fwfwwdwe' },
  { id: 4, image: '/hemsida.png', description: 'This a project where i made a niqfq fqfq sqfqf sqfqwqs fqwfqs qfqdq qefqcs qefqcq qvevqvqd qevqevdqev vqevdqvd qwfwef wefwfd fwefdwv fwfwfwf fwefwfdf fwfwwdwe' },
  { id: 5, image: '/hemsida.png', description: 'This a project where i made a niqfq fqfq sqfqf sqfqwqs fqwfqs qfqdq qefqcs qefqcq qvevqvqd qevqevdqev vqevdqvd qwfwef wefwfd fwefdwv fwfwfwf fwefwfdf fwfwwdwe' },
  { id: 6, image: '/hemsida.png', description: 'This a project where i made a niqfq fqfq sqfqf sqfqwqs fqwfqs qfqdq qefqcs qefqcq qvevqvqd qevqevdqev vqevdqvd qwfwef wefwfd fwefdwv fwfwfwf fwefwfdf fwfwwdwe' },
])

// Smooth scroll navigation
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.nav-btn {
  @apply bg-blue-primary text-blue-pale font-bold py-2 px-5 rounded-lg border-b-4 border-blue-dark mx-1 transition-all duration-200 no-underline;
}

.nav-btn:first-child {
  @apply rounded-l-full rounded-r-lg;
}

.nav-btn:last-child {
  @apply rounded-r-full rounded-l-lg;
}

.nav-btn:hover {
  @apply bg-blue-dark shadow-inner border-b-0;
}
</style>
