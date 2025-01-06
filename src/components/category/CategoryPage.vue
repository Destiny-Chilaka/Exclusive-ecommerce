<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import ProductCard from '../shared/ProductCard.vue';

const route = useRoute();
const products = ref([]);
const loading = ref(true);
const error = ref(null);

const categoryId = computed(() => route.params.categoryId);
const categoryTitle = computed(() => {
  const titles = {
    'smartphones': 'Smartphones',
    'laptops': 'Laptops',
    'fragrances': 'Fragrances',
    'skincare': 'Skincare',
    'groceries': 'Groceries',
    'home-decoration': 'Home Decoration',
    'furniture': 'Furniture',
    'tops': 'Tops',
    'womens-dresses': "Women's Dresses",
    'womens-shoes': "Women's Shoes",
    'mens-shirts': "Men's Shirts",
    'mens-shoes': "Men's Shoes",
    'mens-watches': "Men's Watches",
    'womens-watches': "Women's Watches",
    'womens-bags': "Women's Bags",
    'womens-jewellery': "Women's Jewellery",
    'sunglasses': 'Sunglasses',
    'automotive': 'Automotive',
    'motorcycle': 'Motorcycle',
    'lighting': 'Lighting'
  };
  return titles[categoryId.value] || 'Category Not Found';
});

const fetchProducts = async () => {
  try {
    loading.value = true;
    const response = await fetch(`https://dummyjson.com/products/category/${categoryId.value}`);
    const data = await response.json();
    
    // Map the API data to match ProductCard's expected format exactly
    products.value = data.products.map(item => ({
      id: item.id,
      name: item.title,
      originalPrice: Math.round(item.price * 1.2), // Original price 20% higher
      discountedPrice: item.price,
      discount: Math.round(((item.price * 1.2 - item.price) / (item.price * 1.2)) * 100),
      rating: Math.round(item.rating), // DummyJSON provides rating
      reviewCount: Math.floor(Math.random() * (500 - 100) + 100), // Random review count between 100-500
      image: item.thumbnail,
      isWishlisted: false, // Default to not wishlisted
      source: 'dummyjson' // Add source to distinguish the API
    }));
  } catch (err) {
    error.value = 'Failed to load products';
    console.error(err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">{{ categoryTitle }}</h1>

    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-red-500 text-center py-8">
      {{ error }}
    </div>

    <!-- Products Grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product"
      />
    </div>
  </div>
</template>