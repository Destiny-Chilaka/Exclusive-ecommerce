<script setup>
import { ref, computed } from 'vue';

const categories = [
  // Electronics
  {
    id: 'smartphones',
    name: 'Smartphones',
    icon: 'i-ph-device-mobile',
  },
  {
    id: 'laptops',
    name: 'Laptops',
    icon: 'i-ph-laptop',
  },
  // Fashion
  {
    id: 'womens-dresses',
    name: "Women's Dresses",
    icon: 'i-ph-dress',
  },
  {
    id: 'mens-shirts',
    name: "Men's Shirts",
    icon: 'i-ph-t-shirt',
  },
  // Accessories
  {
    id: 'womens-watches',
    name: "Women's Watches",
    icon: 'i-ph-watch',
  },
  {
    id: 'sunglasses',
    name: 'Sunglasses',
    icon: 'i-ph-sunglasses',
  },
  // Home
  {
    id: 'home-decoration',
    name: 'Home Decor',
    icon: 'i-ph-house',
  },
  {
    id: 'furniture',
    name: 'Furniture',
    icon: 'i-ph-couch',
  },
  // Beauty
  {
    id: 'fragrances',
    name: 'Fragrances',
    icon: 'i-ph-drop',
  },
  {
    id: 'skincare',
    name: 'Skincare',
    icon: 'i-ph-sparkle',
  },
  // Automotive
  {
    id: 'automotive',
    name: 'Automotive',
    icon: 'i-ph-car',
  },
  {
    id: 'motorcycle',
    name: 'Motorcycle',
    icon: 'i-ph-motorcycle',
  }
];

const currentIndex = ref(0);
const categoriesPerPage = 6; // Show 6 categories at a time

const displayedCategories = computed(() => {
  if (!categories.length) return [];
  
  // Calculate total number of categories
  const totalCategories = categories.length;
  
  // Create an array that wraps around
  const wrappedCategories = [...categories];
  
  return wrappedCategories.slice(currentIndex.value, currentIndex.value + categoriesPerPage)
    .concat(wrappedCategories.slice(0, Math.max(0, categoriesPerPage - (totalCategories - currentIndex.value))));
});

const slideLeft = () => {
  const totalCategories = categories.length;
  currentIndex.value = (currentIndex.value - 1 + totalCategories) % totalCategories;
};

const slideRight = () => {
  const totalCategories = categories.length;
  currentIndex.value = (currentIndex.value + 1) % totalCategories;
};
</script>

<template>
  <div class="container mx-auto  mt-4">
    <div class="w-full h-[1px] bg-gray-300"></div>
  </div>
  <section class="container mx-auto px-4 py-12 md:mt-14 sm:mt-10">
    <div class="flex items-center justify-between mb-8 ">
        <div class="flex items-center gap-4">
        <div class="bg-red-500 w-5 h-10 rounded"></div>
        <h2 class="text-sm font-semibold text-red-500">Categories</h2>
      </div>
      <div class="flex gap-2">
        <button 
          @click="slideLeft"
          class="p-2 border rounded-full hover:bg-gray-100" 
          aria-label="Previous"
        >
          <div class="i-ph-arrow-left text-xl"></div>
        </button>
        <button 
          @click="slideRight"
          class="p-2 border rounded-full hover:bg-gray-100" 
          aria-label="Next"
        >
          <div class="i-ph-arrow-right text-xl"></div>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <router-link
        v-for="category in displayedCategories"
        :key="category.id"
        :to="`/category/${category.id}`"
        class="flex flex-col items-center justify-center p-8 border rounded-lg hover:bg-red-500 text-black hover:text-white transition-colors cursor-pointer group"
      >
        <div :class="[category.icon, 'text-4xl mb-3 group-hover:text-white']"></div>
        <span class="text-sm font-medium">{{ category.name }}</span>
      </router-link>
    </div>
  </section>
  <div class="w-full h-[1px] bg-gray-300 mt-8"></div>
</template> 