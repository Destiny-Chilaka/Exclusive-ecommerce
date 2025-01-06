<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted, inject } from 'vue';
import { useCartItems } from '@/store/addToCart'; // Assuming you have a cart store

const cartItems  = useCartItems();
console.log(cartItems.cartItems.value.length)
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Add this to track announcement visibility
const isAnnouncementVisible = ref(true);

const updateAnnouncementVisibility = () => {
  isAnnouncementVisible.value = document.documentElement.classList.contains('has-announcement');
};

onMounted(() => {
  updateAnnouncementVisibility();
  window.addEventListener('announcementChange', updateAnnouncementVisibility);
});

onUnmounted(() => {
  window.removeEventListener('announcementChange', updateAnnouncementVisibility);
});

const wishlist = inject('wishlist');





</script>

<template>
  <nav class="bg-white shadow-sm fixed w-full z-20">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="text-2xl font-bold">Exclusive</RouterLink>

        <!-- Navigation Links - Center -->
        <div class="hidden lg:flex items-center space-x-12">
          <RouterLink 
            to="/" 
            class="text-base hover:text-black/70 transition-colors pb-1"
            :class="{ 'border-b border-b-gray-400': $route.path === '/' }"
          >
            Home
          </RouterLink>
          <RouterLink 
            to="/contact" 
            class="text-base hover:text-black/70 transition-colors pb-1"
            :class="{ 'border-b border-b-gray-400': $route.path === '/contact' }"
          >
            Contact
          </RouterLink>
          <RouterLink 
            to="/about" 
            class="text-base hover:text-black/70 transition-colors pb-1"
            :class="{ 'border-b border-b-gray-400': $route.path === '/about' }"
          >
            About
          </RouterLink>
          <RouterLink 
            to="/signup" 
            class="text-base hover:text-black/70 transition-colors pb-1"
            :class="{ 'border-b border-b-gray-400': $route.path === '/signup' }"
          >
            Sign Up
          </RouterLink>
        </div>

        <!-- Right Side Icons -->
        <div class="flex items-center space-x-6">
          <!-- Search Bar -->
          <div class="hidden lg:flex items-center bg-gray-100 rounded-md">
            <input 
              type="text" 
              placeholder="What are you looking for?"
              class="bg-gray-100 px-4 py-2 rounded-l-md focus:outline-none text-sm w-64"
            >
            <button class="px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          <!-- Wishlist Icon with Count -->
          <div class="relative">
            <RouterLink to="/wishlistView" class="hover:text-black/70 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span v-if="wishlist.wishlist.value.length > 0" class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">
                {{wishlist.wishlist.value.length}}
              </span>
            </RouterLink>
          </div>

          <!-- Cart Icon -->
          <div class="relative">
            <RouterLink to="/cartView" class="hover:text-black/70 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span v-if="cartItems.cartItems.value.length > 0" class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">
                {{ cartItems.cartItems.value.length }}
              </span>
            </RouterLink>
          </div>

          
          
          <!-- Mobile Menu Button (only visible on mobile) -->
          <button 
            @click="toggleMobileMenu"
            class="lg:hidden hover:text-black/70 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              :class="{ 'hidden': isMobileMenuOpen }"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Close Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              :class="{ 'hidden': !isMobileMenuOpen }"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-show="isMobileMenuOpen"
        class="lg:hidden"
      >
        <!-- Mobile Search -->
        <div class="mt-4 relative">
          <input 
            type="text" 
            placeholder="What are you looking for?"
            class="w-full bg-gray-100 px-4 py-2 rounded-md focus:outline-none text-sm"
          >
          <button class="absolute right-2 top-1/2 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation Links -->
        <div class="mt-4 space-y-4 pb-4">
          <RouterLink 
            v-for="link in ['Home', 'Contact', 'About', 'Sign Up']"
            :key="link"
            :to="link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '')}`"
            class="block text-base hover:text-black/70 transition-colors"
            :class="{
              // Desktop styles (lg and up)
              'lg:border-b lg:border-b-gray-400': $route.path === (link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '')}`),
              // Mobile styles
              'pl-4 border-l-2 border-black font-medium': $route.path === (link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '')}`)
            }"
            @click="isMobileMenuOpen = false">
            {{ link }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  transition: top 0.3s;
  top: 0;
}

/* Position navbar below announcement when it's visible */
:root.has-announcement nav {
  top: var(--announcement-height);
}
</style>
