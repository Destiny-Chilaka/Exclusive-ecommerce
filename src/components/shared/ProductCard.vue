<script setup>
import { ref, inject } from 'vue';
import { useCartItems } from '@/store/addToCart';
import { RouterLink } from 'vue-router';

const props = defineProps({
  product: {
    type: Object,
    required: true,
    validator: (product) => {
      return [
        'id',
        'name',
        'originalPrice',
        'discountedPrice',
        'discount',
        'rating',
        'reviewCount',
        'image',
       
      ].every(prop => prop in product);
    }
  }
});

const wishlist = inject('wishlist');
const isWishlisted = ref(props.product.isWishlisted || false);

const { addToCartlist } = useCartItems() 

const toggleWishlist = () => {
  isWishlisted.value = !isWishlisted.value;
  if (isWishlisted.value) {
    wishlist.addToWishlist(props.product);
  } else {
    wishlist.removeFromWishlist(props.product);
  }
};

const addToCart = () => {
  addToCartlist(props.product);
};

// Helper function to render stars
const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => index < rating);
};
</script>

<template>
  <div class="relative group">
    <!-- Product Image Container -->
    <div class="relative bg-gray-100 aspect-square rounded-lg overflow-hidden">
      <!-- Discount Badge -->
      <div 
        v-if="product.discount" 
        class="absolute top-3 left-3 bg-red-500 text-white text-sm px-3 py-1 rounded"
      >
        -{{ product.discount }}%
      </div>
      <!-- Wishlist Button -->
      <button 
        @click="toggleWishlist"
        class="absolute top-3 right-3 p-2 rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors"
      >
        <svg 
          class="w-5 h-5" 
          :class="{ 'text-red-500 fill-red-500': isWishlisted }"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
          />
        </svg>
      </button>

      <!-- Product Image -->
       <RouterLink :to="`/ProductDetailView/${product.id}?source=${product.source || 'fakestore'}`">
      <img
      :src="product.image" 
      :alt="product.name"
      class="w-full h-full object-contain">
      </RouterLink>

      <!-- Add to Cart Button (Shows on Hover) -->
      <div class="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-80 translate-y-full group-hover:translate-y-0 transition-transform">
        <button 
          @click="addToCart"
          class="w-full text-white text-sm font-medium hover:text-gray-200 transition-colors"
        >
          Add To Cart
        </button>
      </div>
    </div>

    <!-- Product Info -->
    <div class="mt-4 space-y-2">
      <!-- Product Name -->
      <RouterLink :to="`/ProductDetailView/${product.id}?source=${product.source || 'fakestore'}`" class="font-medium text-base block">
        {{ product.name }}
      </RouterLink>
      <!-- Price -->
      <div class="flex items-center gap-3">
        <span class="text-red-500 font-medium">${{ product.discountedPrice }}</span>
        <span class="text-gray-400 line-through">${{ product.originalPrice }}</span>
      </div>

      <!-- Rating -->
      <div class="flex items-center gap-2">
        <div class="flex items-center">
          <template v-for="(isFilled, index) in renderStars(product.rating)" :key="index">
            <svg 
              class="w-4 h-4" 
              :class="isFilled ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
              />
            </svg>
          </template>
        </div>
        <span class="text-gray-500 text-sm">({{ product.reviewCount }})</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.group:hover .group-hover\:translate-y-0 {
  transform: translateY(0);
}
</style>