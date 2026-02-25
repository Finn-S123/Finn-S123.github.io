<template>
  <div class="smooth-scroll">
    <!-- Floating Bubbles Background -->
    <div class="bubbles-container">
      <div class="bubble bubble-1"></div>
      <div class="bubble bubble-2"></div>
      <div class="bubble bubble-3"></div>
      <div class="bubble bubble-4"></div>
      <div class="bubble bubble-5"></div>
      <div class="bubble bubble-6"></div>
      <div class="bubble bubble-7"></div>
      <div class="bubble bubble-8"></div>
    </div>

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
      <div class="bg-white bg-opacity-50 rounded-lg shadow-md p-8">
        <div class="flex flex-col md:flex-row gap-8">
          <div class="flex-1">
            <h1 class="text-6xl font-bold gradient-text mb-8">Finn Skattum</h1>
            <p class="bg-blue-light text-blue-primary font-bold text-lg p-3 rounded-lg shadow-sm max-w-2xl">
              I am a 19-year-old student with a passion for programming and technology. I have been coding for a couple of years and have experience in various programming languages and frameworks. I am always eager to learn new technologies and take on new challenges. My goal is to create innovative and impactful projects that can make a difference in the world.
            </p>
          </div>
          <div class="flex-1 flex justify-center mt-11">
            <img src="/pfp.jpg" alt="portrait of Finn Skattum" class="w-60 h-60 object-cover rounded-lg shadow-lg border-4 border-blue-accent">
          </div>
        </div>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-blue-extra p-5 rounded-lg shadow-md">
            <p class="text-blue-primary font-bold text-lg mb-3">Goals:</p>
            <div class="text-blue-primary text-sm space-y-2">
              <p>I am passionate about continuous learning and always eager to explore new technologies and programming concepts.</p>
              <p>My main goal is to constantly improve my programming skills and become a better developer through hands-on projects and real-world experience.</p>
            </div>
          </div>
          <div class="bg-blue-extra p-5 rounded-lg shadow-md">
            <p class="text-blue-primary font-bold text-lg mb-3">Knowledge:</p>
            <div class="text-blue-primary text-sm space-y-2">
              <div>
                <p class="font-bold">Programming Languages:</p>
                <p>Java, JavaScript, TypeScript, HTML and CSS</p>
              </div>
              <div>
                <p class="font-bold">Frameworks:</p>
                <p>React, Vue and Tailwind CSS</p>
              </div>
              <div>
                <p class="font-bold">Databases:</p>
                <p>SQLite</p>
              </div>
              <div>
                <p class="font-bold">Other:</p>
                <p>Solid knowledge in Unity, C# and MCP-servers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="mx-auto max-w-6xl px-4 mb-6">
      <div class="bg-white bg-opacity-50 rounded-lg shadow-md p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.id" class="group bg-blue-light rounded-lg shadow-lg p-6 hover:bg-blue-500 transition-all duration-200">
            <h2 class="text-xl font-bold text-blue-primary mb-4 group-hover:text-white transition-colors duration-200">Project: {{ project.id }}</h2>
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
      <p>&copy; 2026 Finn Skattum. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const projects = ref([
  { id: 'Portfolio', image: '/Portfolio.png', video: '/videos/project-1.mp4', description: 'My personal portfolio website built with Vue.js and Tailwind CSS. Showcasing my skills, projects, and experience in web development.' },
  { id: 'Webbshopen', image: '/FidgetShop.png', video: '/videos/project-2.mp4', description: 'A fidget shop built with modern web technologies. Features product browsing, shopping cart functionality, and secure checkout.' },
  { id: 'Api-Page', image: '/WebbShop.png', video: 'WebbShopVid.mp4', description: 'A web application that integrates Steam API with Azure backend. Demonstrates API integration, cloud services, and dynamic content fetching from external data sources.' },
  { id: 'Game', image: '/Game.png', video: 'GameVid.mp4', description: 'An interactive game built with Unity. Features engaging game mechanics, cool animations, and immersive gameplay experience.' },
  { id: 'Ai-Camera', image: '/Ai.png', video: 'AiVid.mp4', description: 'An AI-powered hand sign detection application built with a pre-trained machine learning model and Jetson Nano. Enables real-time hand gesture recognition for interactive applications.' },
  { id: 'Coming-Soon', image: '/Comingsoon.png', video: '/videos/project-6.mp4', description: 'Exciting new project in development. Stay tuned for updates!' },
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

  // Disable copying
  document.addEventListener('copy', (e) => {
    e.preventDefault()
  })
  
  document.addEventListener('cut', (e) => {
    e.preventDefault()
  })
  
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
  })
  
  document.addEventListener('selectstart', (e) => {
    e.preventDefault()
  })
  
  document.addEventListener('mousedown', (e) => {
    if (e.button === 2) {
      e.preventDefault()
    }
  })
})
</script>

<style scoped>
* {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

/* Bubbles Background */
.bubbles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.bubble {
  position: absolute;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(88, 128, 255, 0.2));
  border-radius: 50%;
  opacity: 0.6;
  bottom: -100px;
}

.bubble-1 {
  width: 60px;
  height: 60px;
  left: 10%;
  animation: float 8s infinite ease-in-out;
}

.bubble-2 {
  width: 40px;
  height: 40px;
  left: 20%;
  animation: float 10s infinite ease-in-out 1s;
}

.bubble-3 {
  width: 80px;
  height: 80px;
  left: 30%;
  animation: float 12s infinite ease-in-out 0.5s;
}

.bubble-4 {
  width: 50px;
  height: 50px;
  left: 45%;
  animation: float 9s infinite ease-in-out 2s;
}

.bubble-5 {
  width: 70px;
  height: 70px;
  left: 60%;
  animation: float 11s infinite ease-in-out 1.5s;
}

.bubble-6 {
  width: 45px;
  height: 45px;
  left: 75%;
  animation: float 8.5s infinite ease-in-out 0.8s;
}

.bubble-7 {
  width: 65px;
  height: 65px;
  left: 85%;
  animation: float 10.5s infinite ease-in-out 2.2s;
}

.bubble-8 {
  width: 55px;
  height: 55px;
  left: 50%;
  animation: float 9.5s infinite ease-in-out 1.2s;
}

@keyframes float {
  0% {
    bottom: -100px;
    opacity: 0;
    transform: translateX(0);
  }
  10% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.6;
    transform: translateX(30px);
  }
  90% {
    opacity: 0.6;
  }
  100% {
    bottom: 100vh;
    opacity: 0;
    transform: translateX(0);
  }
}

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
  border-bottom: 3px solid #4666cc;
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
