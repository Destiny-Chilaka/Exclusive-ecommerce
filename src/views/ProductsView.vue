<script setup>
import { ref, onMounted } from 'vue';
import ProductCard from '../components/shared/ProductCard.vue';

const products = ref([]);
const isLoading = ref(true);
const error = ref(null);

const fetchProducts = async () => {
  try {
    isLoading.value = true;
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    
    const mappedProducts = data.map(item => ({
      id: item.id,
      name: item.title,
      originalPrice: Math.round(item.price * 1.2),
      discountedPrice: item.price,
      discount: Math.round(((Math.round(item.price * 1.2) - item.price) / (item.price * 1.2)) * 100),
      rating: Math.round(item.rating.rate),
      reviewCount: item.rating.count,
      image: item.image,
      isWishlisted: false,
      category: item.category
    }));

    products.value = mappedProducts;
  } catch (err) {
    error.value = 'Failed to load products. Please try again later.';
    console.error('Error fetching products:', err);
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchProducts);
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 mt-6">All Flash Sales</h1>
    
    <!-- Loading State -->
    <div v-if="isLoading" class="text-center mt-10">
      <p>Loading products...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center mt-10 text-red-500">
      {{ error }}
    </div>

    <!-- Products Grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product"
      />
    </div>
  </div>
</template> 