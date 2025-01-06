<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import iphoneImage from '@/assets/images/iphone-img.png';
import appleImage from '@/assets/images/apple-image.png'

const currentSlide = ref(0);
const slides = [
  {
    image: iphoneImage,
    logo: appleImage,
    title: 'iPhone 14 Series',
    discount: 'Up to 10% off Voucher',
    buttonText: 'Shop Now',
    buttonLink: '#'
  },
  {
    image: 'https://placehold.co/600x400/000000/FFFFFF/png?text=Samsung+S23',
    logo: 'https://placehold.co/100x100/000000/FFFFFF/png?text=Samsung',
    title: 'Samsung S23 Ultra',
    discount: 'Special 15% Discount',
    buttonText: 'Buy Now',
    buttonLink: '#'
  },
  {
    image: 'https://placehold.co/600x400/000000/FFFFFF/png?text=Google+Pixel',
    logo: 'https://placehold.co/100x100/000000/FFFFFF/png?text=Google',
    title: 'Google Pixel 7 Pro',
    discount: 'Save $200 Today',
    buttonText: 'Learn More',
    buttonLink: '#'
  },
  {
    image: 'https://placehold.co/600x400/000000/FFFFFF/png?text=OnePlus',
    logo: 'https://placehold.co/100x100/000000/FFFFFF/png?text=OnePlus',
    title: 'OnePlus 11',
    discount: 'Free Buds with Purchase',
    buttonText: 'Shop Now',
    buttonLink: '#'
  }
];

const goToSlide = (index) => {
  currentSlide.value = index;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1;
};

// Auto-advance slides
onMounted(() => {
  const interval = setInterval(nextSlide, 5000);
  
  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<template>
  <div class="relative rounded-lg overflow-hidden bg-black">
    <!-- Navigation Buttons - Hide on small screens -->
    <button 
      @click="previousSlide" 
      class="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="sr-only">Previous slide</span>
    </button>

    <button 
      @click="nextSlide" 
      class="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="sr-only">Next slide</span>
    </button>

    <!-- Slides -->
    <div class="relative h-[250px] sm:h-[300px] md:h-[400px]">
      <transition-group name="fade">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          v-show="currentSlide === index"
          class="absolute inset-0"
        >
          <div class="flex flex-col md:flex-row h-full">
            <!-- Text Content -->
            <div class="w-full md:w-1/2 p-4 sm:p-8 md:p-12 text-white">
              <div class="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                <img 
                  :src="slide.logo" 
                  alt="Brand Logo" 
                  class="w-8 sm:w-12 h-auto"
                >
                <h2 class="text-lg sm:text-xl font-thin">{{ slide.title }}</h2>
              </div>
              <p class="text-2xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-8 leading-tight">{{ slide.discount }}</p>
              <a
                :href="slide.buttonLink"
                class="inline-flex items-center px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium border-b hover:bg-white hover:text-black transition-colors"
              >
                {{ slide.buttonText }}
                <svg 
                  class="w-4 h-4 sm:w-5 sm:h-5 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </a>
            </div>

            <!-- Image - Hidden on small screens, shown from medium screens -->
            <div class="hidden md:block w-full md:w-1/2 h-full">
              <img 
                :src="slide.image" 
                :alt="slide.title" 
                class="w-full h-full object-contain"
              >
            </div>
          </div>
        </div>
      </transition-group>
    </div>

    <!-- Dots Navigation -->
    <div class="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors"
        :class="currentSlide === index ? 'bg-white' : 'bg-white/50'"
      >
        <span class="sr-only">Go to slide {{ index + 1 }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 