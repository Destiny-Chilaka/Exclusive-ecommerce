<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import Breadcrumb from '@/components/bread-crumb/BreadCrumb.vue';
import ladiesImg from "@/assets/images/ladies-img-about.png";
import emmaWatson from "@/assets/images/emma-watson-about.png";
import tomCruise from "@/assets/images/tom-cruise-about.png";
import willSmith from "@/assets/images/will-smith-about.png";
import Service from '@/components/service/Service.vue';
import { TwitterIcon, InstagramIcon, LinkedinIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next'
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

const breadcrumbs = ref([
  { label: 'Home', path: '/' },
  { label: 'About', path: '/AboutView' },
]);



const currentSlide = ref(0)

const teamMembers = [
  {
    id: 1,
    name: 'Tom Cruise',
    position: 'Founder & Chairman',
    image: tomCruise,
    socials: [
      { name: 'Twitter', icon: TwitterIcon, url: '#' },
      { name: 'Instagram', icon: InstagramIcon, url: '#' },
      { name: 'LinkedIn', icon: LinkedinIcon, url: '#' }
    ]
  },
  {
    id: 2,
    name: 'Emma Watson',
    position: 'Managing Director',
    image: emmaWatson,
    socials: [
      { name: 'Twitter', icon: TwitterIcon, url: '#' },
      { name: 'Instagram', icon: InstagramIcon, url: '#' },
      { name: 'LinkedIn', icon: LinkedinIcon, url: '#' }
    ]
  },
  {
    id: 3,
    name: 'Will Smith',
    position: 'Product Designer',
    image: willSmith,
    socials: [
      { name: 'Twitter', icon: TwitterIcon, url: '#' },
      { name: 'Instagram', icon: InstagramIcon, url: '#' },
      { name: 'LinkedIn', icon: LinkedinIcon, url: '#' }
    ]
  }
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % teamMembers.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + teamMembers.length) % teamMembers.length
}


let intervalId
onMounted(() => {
  intervalId = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})

</script>

<template>
  <div class="container mx-auto">
    <Breadcrumb :breadcrumbs="breadcrumbs" />
  </div>

  <div class="about-us-page py-10">
    <!-- Hero Section -->
    <div class="hero-section max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
      <div class="text-content">
        <h2 class="text-4xl font-semibold text-black mb-4">Our Story</h2>
        <p class="text-black leading-relaxed mb-4">
          Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
        </p>
      </div>
      <div class="image-content">
        <img
          :src="ladiesImg"
          alt="Shopping Experience"
          class="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
    </div>

    <section class="py-20">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- Card 1 -->
        <div
          class="group flex flex-col items-center justify-center border rounded-lg p-4 bg-white shadow-sm hover:bg-red-500 hover:text-white transition"
        >
        <div class="bg-gray-300 rounded-full p-3 mb-4 group-hover:bg-red-400">
          <div class="bg-black text-white rounded-full p-4 group-hover:bg-white">
            <div class="i-ph-house w-8 h-8 group-hover:text-black"></div>
          </div>
        </div>
          <div class="text-4xl font-bold text-black mt-4 group-hover:text-white">10.5k</div>
          <div class="text-sm text-black mt-2 text-center group-hover:text-white">
            Sellers active in our site
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="group flex flex-col items-center justify-center border rounded-lg p-4 bg-white shadow-sm hover:bg-red-500 hover:text-white transition"
        >
        <div class="bg-gray-300 rounded-full p-3 mb-4 group-hover:bg-red-400">
          <div class="bg-black text-white rounded-full p-4 group-hover:bg-white">
            <div class="i-ph-currency-dollar w-8 h-8 group-hover:text-black"></div>
          </div>
        </div>
          <div class="text-4xl font-bold text-black mt-4 group-hover:text-white">33k</div>
          <div class="text-sm text-black mt-2 text-center group-hover:text-white">
            Monthly Product Sale
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="group flex flex-col items-center justify-center border rounded-lg p-4 bg-white shadow-sm hover:bg-red-500 hover:text-white transition"
        >
        <div class="bg-gray-300 rounded-full p-3 mb-4 group-hover:bg-red-400">
          <div class="bg-black text-white rounded-full p-4 group-hover:bg-white">
            <div class="i-ph-shopping-bag w-8 h-8 group-hover:text-black"></div>
          </div>
        </div>
          <div class="text-4xl font-bold text-black mt-4 group-hover:text-white">45.5k</div>
          <div class="text-sm text-black mt-2 text-center group-hover:text-white">
            Customers active in our site
          </div>
        </div>

        <!-- Card 4 -->
        <div
          class="group flex flex-col items-center justify-center border rounded-lg p-4 bg-white shadow-sm hover:bg-red-500 hover:text-white transition"
        >
        <div class="bg-gray-300 rounded-full p-3 mb-4 group-hover:bg-red-400">
          <div class="bg-black text-white rounded-full p-4 group-hover:bg-white">
            <div class="i-ph-money  w-8 h-8 group-hover:text-black"></div>
          </div>
        </div>
          <div class="text-4xl font-bold text-black mt-4 group-hover:text-white">25k</div>
          <div class="text-sm text-black mt-2 text-center group-hover:text-white">
            Annual gross sale in our site
          </div>
        </div>
      </div>
    </div>
  </section>

    <!-- Team Section -->
    <div class="container max-w-[1200px] mx-auto px-4 py-16">
    <div class="relative">
      <!-- Team Members Carousel -->
      <div class="overflow-hidden">
        <div class="flex transition-transform duration-300 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div v-for="member in teamMembers" :key="member.id" class="w-full flex-shrink-0 px-4">
            <div class="max-w-sm mx-auto text-center">
              <img :src="member.image" :alt="member.name" class="w-full h-full object-cover object-center mb-6 rounded-lg">
              <h3 class="text-3xl font-bold text-black mb-2">{{ member.name }}</h3>
              <p class="text-black mb-4">{{ member.position }}</p>
              <div class="flex justify-center space-x-4">
                <a v-for="social in member.socials" 
                   :key="social.name" 
                   :href="social.url" 
                   class="text-black hover:text-gray-900 transition-colors duration-300"
                   target="_blank"
                   rel="noopener noreferrer">
                  <component :is="social.icon" class="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Dots -->
      <div class="flex justify-center space-x-2 mt-8">
        <button
          v-for="(_, index) in teamMembers"
          :key="index"
          @click="currentSlide = index"
          class="w-2 h-2 rounded-full transition-colors duration-300"
          :class="currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>

      <!-- Navigation Arrows -->
      <button
        @click="prevSlide"
        class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full p-2 text-gray-800 hover:text-gray-600"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon class="h-6 w-6" />
      </button>
      <button
        @click="nextSlide"
        class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full p-2 text-gray-800 hover:text-gray-600"
        aria-label="Next slide"
      >
        <ChevronRightIcon class="h-6 w-6" />
      </button>
    </div>
  </div>
  </div>

  <Service />
</template>


<style scoped>

</style>
