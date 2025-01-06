<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import FlashSalesHeader from './FlashSalesHeader.vue';
import ProductCard from '../shared/ProductCard.vue';
import { flashSalesApi } from '../../services/api/flashSales';

const router = useRouter();
const products = ref([]);
const isLoading = ref(true);
const error = ref(null);

// Fetch products from our mock API
const fetchProducts = async () => {
  try {
    isLoading.value = true;
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    
    console.log('Raw API Response:', data);
    
    // Map the API data to match our component's expected format
    const mappedProducts = data.map(item => {
      const originalPrice = Math.round(item.price * 1.2); // Original price 20% higher
      const discountedPrice = item.price;
      // Calculate the actual discount percentage for each product
      const discount = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);

      return {
        id: item.id,
        name: item.title,
        originalPrice,
        discountedPrice,
        discount, // This will now be unique for each product
        rating: Math.round(item.rating.rate),
        reviewCount: item.rating.count,
        image: item.image,
        isWishlisted: false,
        category: item.category,
      };
    });

    console.log('Mapped Products:', mappedProducts);
    products.value = mappedProducts;
  } catch (err) {
    error.value = 'Failed to load products. Please try again later.';
    console.error('Error fetching products:', err);
  } finally {
    isLoading.value = false;
  }
};

const timeRemaining = ref({
  days: 3,
  hours: 23,
  minutes: 19,
  seconds: 56,
});

// This will handle the countdown timer
const startCountdown = () => {
  const timer = setInterval(() => {
    if (timeRemaining.value.seconds > 0) {
      timeRemaining.value.seconds--;
    } else {
      timeRemaining.value.seconds = 59;
      if (timeRemaining.value.minutes > 0) {
        timeRemaining.value.minutes--;
      } else {
        timeRemaining.value.minutes = 59;
        if (timeRemaining.value.hours > 0) {
          timeRemaining.value.hours--;
        } else {
          timeRemaining.value.hours = 23;
          if (timeRemaining.value.days > 0) {
            timeRemaining.value.days--;
          } else {
            clearInterval(timer);
          }
        }
      }
    }
  }, 1000);

  // Return the timer for cleanup
  return timer;
};

// Store timer reference
const timerRef = ref(null);

// Fetch products when component mounts
onMounted(async () => {
  timerRef.value = startCountdown();
  await fetchProducts();
});

// Clean up timer
onUnmounted(() => {
  if (timerRef.value) {
    clearInterval(timerRef.value);
  }
});

const currentIndex = ref(0);
const productsPerPage = 4;

// Modified displayedProducts computed property
const displayedProducts = computed(() => {
  if (!products.value.length) return [];
  
  // Calculate total number of products
  const totalProducts = products.value.length;
  
  // Create an array that wraps around
  const wrappedProducts = [...products.value];
  
  return wrappedProducts.slice(currentIndex.value, currentIndex.value + productsPerPage)
    .concat(wrappedProducts.slice(0, Math.max(0, productsPerPage - (totalProducts - currentIndex.value))));
});

const slideLeft = () => {
  const totalProducts = products.value.length;
  currentIndex.value = (currentIndex.value - 1 + totalProducts) % totalProducts;
};

const slideRight = () => {
  const totalProducts = products.value.length;
  currentIndex.value = (currentIndex.value + 1) % totalProducts;
};

// Replace toggleShowAll with navigation function
const viewAllProducts = () => {
  router.push('/products'); // Navigate to products page
};
</script>

<template>
  <section class="container mx-auto px-4 py-6">
    <div class=" mx-auto">
      <FlashSalesHeader 
        :timeRemaining="timeRemaining" 
        class="mt-2"
        @slide-left="slideLeft"
        @slide-right="slideRight"
      />
      
      <!-- Loading State -->
      <div v-if="isLoading" class="text-center mt-10">
        <p>Loading products...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center mt-10 text-red-500">
        {{ error }}
      </div>

      <!-- Products Grid -->
      <div v-else class="relative mt-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div 
            v-for="product in displayedProducts" 
            :key="product.id"
            class="transition-transform duration-300 max-w-[300px] mx-auto w-full"
          >
            <ProductCard 
              :product="product"
            />
          </div>
        </div>
      </div>

      <!-- View All Products Button -->
      <div class="text-center mt-12">
        <button
          @click="viewAllProducts"
          class="bg-red-500 text-white px-16 py-4 rounded-md font-medium text-lg hover:bg-red-600 transition-colors duration-300"
        >
          View All Products
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.transition-transform {
  transition: transform 0.3s ease-in-out;
}
</style> 