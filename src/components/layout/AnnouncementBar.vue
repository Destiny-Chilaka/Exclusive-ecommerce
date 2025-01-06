<script setup>
import { ref, watch, onMounted } from 'vue';

const isVisible = ref(true);

const closeAnnouncement = () => {
  isVisible.value = false;
  document.documentElement.classList.remove('has-announcement');
  window.dispatchEvent(new Event('announcementChange'));
};

watch(isVisible, (newValue) => {
  if (newValue) {
    document.documentElement.classList.add('has-announcement');
  } else {
    document.documentElement.classList.remove('has-announcement');
  }
}, { immediate: true });

onMounted(() => {
  document.documentElement.classList.add('has-announcement');
  window.dispatchEvent(new Event('announcementChange'));
});
</script>

<template>
  <div 
    v-if="isVisible" 
    class="fixed top-0 left-0 right-0 z-30 bg-black backdrop-blur-sm text-white text-sm"
  >
    <div 
      class="container mx-auto px-4"
      data-announcement-visible="true"
    >
      <div class="flex items-center justify-between py-2">
        <!-- Mobile View -->
        <div class="lg:hidden flex items-center justify-between w-full">
          <div class="flex items-center space-x-4">
            <span class="text-[10px] md:text-sm">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
            <select 
              class="bg-black font-light text-white text-xs focus:outline-none cursor-pointer"
              aria-label="Select language"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
          <button 
            @click="closeAnnouncement"
            class="text-white hover:text-gray-200 ml-2"
          >
            <span class="sr-only">Close</span>
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Desktop View -->
        <div class="hidden lg:flex items-center justify-center w-full">
          <p class="text-center">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="#" class="underline ml-2 font-semibold hover:text-gray-200">
              ShopNow
            </a>
          </p>
          
          <!-- Language Selector for Desktop -->
          <div class="absolute right-12 flex items-center">
            <select 
              class="bg-black font-light text-white text-sm focus:outline-none cursor-pointer"
              aria-label="Select language"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
          
          <!-- Close Button -->
          <button 
            @click="closeAnnouncement"
            class="absolute right-4 text-white hover:text-gray-200"
          >
            <span class="sr-only">Close</span>
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --announcement-height: 40px;
}

@media (max-width: 1024px) {
  :root {
    --announcement-height: 48px;
  }
}
</style>     