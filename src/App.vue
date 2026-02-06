<template>
  <div class="smooth-scroll">
    <!-- Navigation Header -->
    <nav class="fixed top-0 w-full h-15 bg-gradient-to-r from-blue-light via-blue-sky to-blue-light border-b-2 border-gray-400 rounded-b-lg z-50 shadow-md">
      <div class="flex items-center justify-center gap-2.5 mt-3 ml-2.5 mb-2.5">
        <button @click="scrollToSection('about')" class="nav-btn">About Me</button>
        <button @click="scrollToSection('projects')" class="nav-btn">My Projects</button>
        <button @click="scrollToSection('contact')" class="nav-btn">Contact Me</button>
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
          <div v-for="project in projects" :key="project.id" class="bg-blue-light rounded-lg shadow-lg p-6 hover:bg-blue-500 transition-all duration-200">
            <h2 class="text-xl font-bold text-blue-primary mb-4">Projekt: {{ project.id }}</h2>
            <div class="flex flex-col gap-4">
              <img :src="project.image" alt="Project image" class="w-full h-40 object-cover rounded-lg shadow-md hover:blur-sm transition-all duration-200 cursor-pointer" @click="openProject(project, 'video')">
              <div class="bg-white p-3 rounded-lg shadow-md hover:bg-gray-200 hover:text-blue-primary transition-all duration-200 cursor-pointer" @click="openProject(project, 'text')">
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

    <!-- Project Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" @click.self="closeModal">
      <div class="w-full max-w-3xl bg-white bg-opacity-90 rounded-lg shadow-lg border-2 border-blue-light overflow-hidden">
        <div class="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-light via-blue-sky to-blue-light border-b-2 border-gray-200">
          <h3 class="text-2xl font-bold text-blue-primary">Projekt: {{ selectedProject?.id }}</h3>
          <button class="modal-close" @click="closeModal">Close</button>
        </div>
        <div class="p-6">
          <div class="bg-blue-extra rounded-lg p-4 shadow-md">
            <template v-if="modalMode === 'video'">
              <video v-if="selectedProject?.video" :src="selectedProject.video" controls class="w-full rounded-lg shadow-md"></video>
              <div v-else class="text-blue-primary font-bold">Add a video URL to this project to show it here.</div>
            </template>
            <template v-else>
              <p class="text-blue-primary font-bold">{{ selectedProject?.description }}</p>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-blue-500 text-blue-pale text-center font-bold py-5 mt-6 rounded-t-lg">
      <p>&copy; 2023 Finn Skattum. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const projects = ref([
  { id: 1, image: '/hemsida.png', video: '/videos/project-1.mp4', description: 'This a project where i made a niqfq fqfq sqfqf sqfqwqs fqwfqs qfqdq qefqcs qefqcq qvevqvqd qevqevdqev vqevdqvd qwfwef wefwfd fwefdwv fwfwfwf fwefwfdf fwfwwdwe' },
  { id: 2, image: '/hemsida.png', video: '/videos/project-2.mp4', description: 'This a project where i made a niqfq fqfq sqfqf sqfqwqs fqwfqs qfqdq qefqcs qefqcq qvevqvqd qevqevdqev vqevdqvd qwfwef wefwfd fwefdwv fwfwfwf fwefwfdf fwfwwdwe' },
  { id: 3, image: '/hemsida.png', video: '/videos/project-3.mp4', description: 'This a project where i made a niqfq fqfq sqfqf sqfqwqs fqwfqs qfqdq qefqcs qefqcq qvevqvqd qevqevdqev vqevdqvd qwfwef wefwfd fwefdwv fwfwfwf fwefwfdf fwfwwdwe' },
  { id: 4, image: '/hemsida.png', video: '/videos/project-4.mp4', description: 'This a project where i made a niqfq fqfq sqfqf sqfqwqs fqwfqs qfqdq qefqcs qefqcq qvevqvqd qevqevdqev vqevdqvd qwfwef wefwfd fwefdwv fwfwfwf fwefwfdf fwfwwdwe' },
  { id: 5, image: '/hemsida.png', video: '/videos/project-5.mp4', description: 'This a project where i made a niqfq fqfq sqfqf sqfqwqs fqwfqs qfqdq qefqcs qefqcq qvevqvqd qevqevdqev vqevdqvd qwfwef wefwfd fwefdwv fwfwfwf fwefwfdf fwfwwdwe' },
  { id: 6, image: '/hemsida.png', video: '/videos/project-6.mp4', description: 'This a project where i made a niqfq fqfq sqfqf sqfqwqs fqwfqs qfqdq qefqcs qefqcq qvevqvqd qevqevdqev vqevdqvd qwfwef wefwfd fwefdwv fwfwfwf fwefwfdf fwfwwdwe' },
])

const isModalOpen = ref(false)
const selectedProject = ref(null)
const modalMode = ref('video')

const openProject = (project, mode) => {
  selectedProject.value = project
  modalMode.value = mode
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
  modalMode.value = 'video'
}

// Smooth scroll navigation
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.scrollY
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    const duration = 1200 // Duration in milliseconds
    let start = null

    const animation = (currentTime) => {
      if (start === null) start = currentTime
      const elapsed = currentTime - start
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth acceleration/deceleration
      const easeInOutCubic = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2
      
      window.scrollTo(0, startPosition + distance * easeInOutCubic)
      
      if (progress < 1) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }
}

// Intersection Observer for scroll animations
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1
  })

  document.querySelectorAll('section, .pt-40').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
@keyframes buttonClick {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-btn {
  background-color: #5880ff;
  color: #e4f2fd;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  text-decoration: none;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 3px solid #4666cc;
  margin: 0 5px;
}

.nav-btn:first-child {
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.nav-btn:last-child {
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.nav-btn:hover {
  background-color: #4666cc;
  box-shadow: inset 0 0 5px #1c2f6d;
  border-bottom: none;
  transform: translateY(-2px);
}

.nav-btn:active {
  animation: buttonClick 0.3s ease;
}

.modal-close {
  background-color: #5880ff;
  color: #e4f2fd;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  text-decoration: none;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease, box-shadow 0.2s ease;
  border-bottom: 3px solid #4666cc;
}

.modal-close:hover {
  background-color: #4666cc;
  box-shadow: inset 0 0 5px #1c2f6d;
  border-bottom: none;
}

section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0s, transform 0s;
}

section.animate-in {
  animation: fadeInUp 0.6s ease-out forwards;
}

.pt-40 {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0s, transform 0s;
}

.pt-40.animate-in {
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>
