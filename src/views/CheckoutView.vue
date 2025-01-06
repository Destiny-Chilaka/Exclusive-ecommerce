<script setup>
import { ref } from 'vue';
import { useCartItems } from '@/store/addToCart';
import Breadcrumb from '@/components/bread-crumb/BreadCrumb.vue';

const { cartItems } = useCartItems();

const breadcrumbs = ref([
  { label: 'Product', path: '/products' },
  { label: 'View Cart', path: '/cartView' },
  { label: 'CheckOut', path: '/CheckoutView' },
]);

const calculateSubtotal = (item) => {
  return item.discountedPrice * item.quantity || item.price * item.quantity;
};

const calculateTotal = () => {
  return cartItems.value.reduce((total, item) => total + calculateSubtotal(item), 0);
};
</script>

<template>
  <div class="container mx-auto">
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <!-- Page content -->
    <h1 class="text-3xl font-semibold mb-5 px-4 ">Billing Details</h1>

    <div class="min-h-screen pb-10 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- Left Section: Checkout Form -->
        <div class="bg-white p-6">
          <form class="space-y-4">
            <div>
              <label for="firstName" class="block text-sm text-gray-400 mb-3">First Name <span class="text-red-200">*</span> </label>
              <input
                id="firstName"
                type="text"
                class="mt-1 block w-full bg-gray-100  rounded-md  p-3 focus:outline-gray-300 "
                placeholder="John"
              />
            </div>
            <div>
              <label for="companyName" class="block text-sm text-gray-400 mb-3">Company Name</label>
              <input
                id="companyName"
                type="text"
                class="mt-1 block w-full bg-gray-100 rounded-md p-3 focus:outline-gray-300"
                placeholder="Company XYZ"
              />
            </div>
            <div>
              <label for="streetAddress" class="block text-sm text-gray-400 mb-3">Street Address <span class="text-red-200">*</span></label>
              <input
                id="streetAddress"
                type="text"
                class="mt-1 block w-full bg-gray-100 rounded-md p-3 focus:outline-gray-300"
                placeholder="123 Main St"
              />
            </div>
            <div>
              <label for="apartment" class="block text-sm text-gray-400 mb-3">Apartment, floor, etc. (optional)</label>
              <input
                id="apartment"
                type="text"
                class="mt-1 block w-full bg-gray-100 rounded-md p-3 focus:outline-gray-300"
                placeholder="Apartment 4B"
              />
            </div>
            <div>
              <label for="city" class="block text-sm text-gray-400 mb-3">Town/City <span class="text-red-200">*</span></label>
              <input
                id="city"
                type="text"
                class="mt-1 block w-full bg-gray-100 rounded-md p-3 focus:outline-gray-300"
                placeholder="New York"
              />
            </div>
            <div>
              <label for="phoneNumber" class="block text-sm text-gray-400 mb-3">Phone Number <span class="text-red-200">*</span></label>
              <input
                id="phoneNumber"
                type="tel"
                class="mt-1 block w-full bg-gray-100 rounded-md p-3 focus:outline-gray-300"
                placeholder="+1234567890" 
              />
            </div>
            <div>
              <label for="emailAddress" class="block text-sm text-gray-400 mb-3">Email Address <span class="text-red-200">*</span></label>
              <input
                id="emailAddress"
                type="email"
                class="mt-1 block w-full bg-gray-100 rounded-md p-3 focus:outline-gray-300"
                placeholder="example@email.com"
              />
            </div>
            <div class="flex items-center">
              <input
                id="saveInfo"
                type="checkbox"
                class=" h-4 w-4 text-red-600 bg-gray-100 rounded focus:ring-red-500"
              />
              <label for="saveInfo" class="ml-2 block text-sm ">Save this information for faster check-out next time</label>
            </div>
          </form>
        </div>

        <!-- Right Section: Order Summary -->
        <div class="bg-white p-6">
          <h2 class="text-lg font-semibold mb-4">Your Order</h2>
          <div class="space-y-4">
            <!-- Products List -->
            <div v-for="(item, index) in cartItems" :key="index" class="flex justify-between">
              <div class="flex items-center space-x-4">
                <img :src="item.image" :alt="item.name" class="w-12 h-12 rounded" />
                <span>{{ item.name }}</span>
              </div>
              <span>${{ calculateSubtotal(item) }}</span>
            </div>
            <hr class="my-4" />
            <!-- Subtotal -->
            <div class="flex justify-between">
              <span>Subtotal:</span>
              <span>${{ calculateTotal() }}</span>
            </div>
            <!-- Shipping -->
            <div class="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr class="my-4" />
            <!-- Total -->
            <div class="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>${{ calculateTotal() }}</span>
            </div>
          </div>
          <div class="mt-6 space-y-4">
            <!-- Payment Method -->
            <div class="space-y-6">
              <label class="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span>Bank</span>
              </label>
              <label class="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  checked
                />
                <span>Cash on delivery</span>
              </label>
            </div>
            <!-- Coupon Code -->
            <div class="w-full">
              <div class="w-full flex flex-col sm:flex-row gap-2">
                <input
                  v-model="couponCode"
                  type="text"
                  placeholder="Coupon Code"
                  class="flex-grow px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <button
                  @click="applyCoupon"
                  class="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
                >
                  Apply Coupon
                </button>
              </div>
            </div>
            <!-- Place Order Button -->
            <button class="w-1/3 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type=checkbox] {
  accent-color: #ff5858;
  mix-blend-mode: multiply;
}
input[type=radio] {
  accent-color: #000;
  mix-blend-mode: multiply;
}
</style>