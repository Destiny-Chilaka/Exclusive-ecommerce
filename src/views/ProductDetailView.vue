<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCartItems } from '@/store/addToCart';

const route = useRoute();
const productId = route.params.id;
const source = route.query.source || 'fakestore'; // Default to 'fakestore' if no source is provided
const product = ref(null);
const selectedSize = ref(null); // Define selectedSize
const quantity = ref(1); // Define quantity

const { addToCartlist } = useCartItems();

const fetchProductDetails = async () => {
  try {
    let response;
    if (source === 'fakestore') {
      response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    } else if (source === 'dummyjson') {
      response = await fetch(`https://dummyjson.com/products/${productId}`);
    }
    product.value = await response.json();
  } catch (error) {
    console.error('Failed to fetch product details:', error);
  }
  console.log(product.value.images[0])
};


const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const increaseQuantity = () => {
  quantity.value++;
};

const addToCart = () => {
  const productToAdd = {
    id: product.value.id,
    title: product.value.title || product.value.name,
    price: product.value.price,
    image: Array.isArray(product.value.images) ? product.value.images[0] : product.value.image,
    quantity: quantity.value,
    selectedSize: selectedSize.value,
  };
  addToCartlist(productToAdd);
};

onMounted(() => {
  fetchProductDetails();
});
</script>

<template>
  <div v-if="product" class="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Left Section: Image Carousel -->
    <div class="flex flex-col">
      <div class="w-full h-auto">
        <img :src="Array.isArray(product.images) ? product.images[0] : product.image" alt="Product Image" class="rounded-md shadow-md" />
      </div>
      <div class="flex space-x-4 mt-4">
        <img
          v-for="(image, index) in product.images || [product.image]"
          :key="index"
          :src="image"
          @click="activeImage = image"
          alt="Product thumbnail"
          class="w-16 h-16 rounded-md cursor-pointer border-2 border-gray-200 hover:border-blue-500"
        />
      </div>
    </div>

    <!-- Right Section: Product Info -->
    <div class="flex flex-col">
      <h1 class="text-2xl font-semibold">{{ product.title || product.name }}</h1>
      <div class="flex items-center space-x-2 mt-2">
        <div class="flex text-yellow-400">
          <i class="i-ph-star" v-for="n in Math.round(product.rating.rate || product.rating)" :key="n"></i>
        </div>
        <span class="text-gray-600">({{  product.rating.count || product.rating }} Reviews) </span>
      </div>
      <p class="text-3xl  mt-4">${{ product.price }}</p>
      <p class="text-gray-600 mt-2">{{ product.description }}</p>
      <div class="h-[1px] w-full bg-gray-500 my-5"></div>
      <!-- Colors -->
      <div class="mt-2">
        <p class="font-medium">Colours:</p>
        <div class="flex space-x-4 mt-2">
            <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  class="radio-1 h-6 w-6 border-gray-300 focus:ring-red-500"
                  checked
                />
            <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  class="radio-2 h-6 w-6 border-gray-300 focus:ring-red-500"
                  checked
                />
          
        </div>
      </div>

      <!-- Sizes -->
      <div class="mt-6">
        <p class="font-medium">Size:</p>
        <div class="flex space-x-2 mt-2">
          <button
            v-for="size in ['S', 'M', 'L', 'XL']"
            :key="size"
            @click="selectedSize = size"
            :class="{
              'bg-red-500 text-white': selectedSize === size,
              'bg-gray-200': selectedSize !== size
            }"
            class="px-4 py-2 rounded-md text-sm font-medium cursor-pointer"
          >
            {{ size }}
          </button>
        </div>
      </div>

      <!-- Quantity and Buy Button -->
      <div class="flex items-center space-x-4 mt-6">
        <div class="flex items-center border border-gray-300 rounded-md">
          <button @click="decreaseQuantity" class="px-3 py-2">-</button>
          <input
            type="number"
            v-model="quantity"
            class="w-12 text-center border-l border-r border-gray-300 focus:outline-none"
          />
          <button @click="increaseQuantity" class="px-3 py-2">+</button>
        </div>
        <button @click="addToCart" class="bg-red-500 text-white px-6 py-3 rounded-md font-medium hover:bg-red-600">
          Buy Now
        </button>
      </div>

      <!-- Delivery Info -->
      <!-- <div class="mt-8 space-y-4">
        <div class="flex items-center space-x-2">
          <i class="i-ph-truck text-xl text-gray-500">truck</i>
          <p class="text-sm text-gray-600">
            Free Delivery <span class="underline cursor-pointer">Enter your postal code</span> for Delivery Availability
          </p>
        </div>
        <div class="flex items-center space-x-2">
          <i class="i-ph-arrow-counter-clockwise text-xl text-gray-500"></i>
          <p class="text-sm text-gray-600">
            Return Delivery <span class="underline cursor-pointer">Free 30 Days Delivery Returns</span>. <span class="text-blue-500 cursor-pointer">Details</span>
          </p>
        </div>
      </div> -->
  <div class="border border-black/50 rounded-lg divide-y divide-black/50 mt-6">
    <!-- Free Delivery Section -->
    <div class="flex items-center p-4">
      <div class="text-2xl text-gray-800 mr-4">
        <i class="i-ph-truck text-xl text-black">truck</i>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-800">Free Delivery</h3>
        <p class="text-sm text-gray-600">
          <a href="#" class="text-black underline">Enter your postal code for Delivery Availability</a>
        </p>
      </div>
    </div>

    <!-- Return Delivery Section -->
    <div class="flex items-center p-4">
      <div class="text-2xl text-gray-800 mr-4">
        <i class="i-ph-arrow-counter-clockwise text-xl text-black">Retui</i>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-800">Return Delivery</h3>
        <p class="text-sm text-black">
          Free 30 Days Delivery Returns. 
          <a href="#" class="text-black underline">Details</a>
        </p>
      </div>
    </div>
  </div>
    </div>
  </div>
  <div v-else class="text-center py-24">
    <p>Loading product details...</p>
  </div>
</template>

<style scoped>
.radio-1:checked {
  accent-color: #ff5858;
  mix-blend-mode: multiply;
}
.radio-2:checked {
  accent-color: gray;
  mix-blend-mode: multiply;
}
</style>