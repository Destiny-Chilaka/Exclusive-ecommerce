<script setup>
import { ref, onMounted } from 'vue';
import { useCartItems } from '@/store/addToCart';
import { useToast } from 'vue-toastification';

const { cartItems, removeFromCartlist } = useCartItems();
const toast = useToast();

// Calculate subtotal for an item
const calculateSubtotal = (item) => {
  return item.discountedPrice * item.quantity || item.price * item.quantity;
};

// Calculate total price of the cart
const calculateTotal = () => {
  return cartItems.value.reduce((total, item) => total + calculateSubtotal(item), 0);
};

// Increase quantity
const increaseQuantity = (index) => {
  cartItems.value[index].quantity++;
  updateLocalStorage();
};

// Decrease quantity
const decreaseQuantity = (index) => {
  if (cartItems.value[index].quantity > 1) {
    cartItems.value[index].quantity--;
    updateLocalStorage();
  }
};

// Remove item from cart
const removeFromCart = (index) => {
  cartItems.value.splice(index, 1);
  updateLocalStorage();
  toast.success('Product removed from cart');
}
// Update local storage with the current cart items
const updateLocalStorage = () => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems.value));
};

// Proceed to checkout
const proceedToCheckout = () => {
  console.log('Proceeding to checkout with items:', cartItems.value);
  // Add your checkout logic here
};
</script>


<template>
  <div class="min-h-screen bg-white p-6 md:p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-2xl font-bold mb-6">Shopping Cart ({{ cartItems.length }})</h1>

      <!-- Empty Cart Message -->
      <div v-if="cartItems.length === 0" class="text-center py-10">
        <p class="text-[30px]">Your cart is currently empty.</p>
        <RouterLink to="/" class="text-grey-700 hover:underline">Continue Shopping</RouterLink>
      </div>

      <!-- Cart Items List -->
      <div v-else>
        <div class="hidden md:grid md:grid-cols-5 gap-4 pb-4 border-b text-sm font-medium text-gray-600">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
          <div>Action</div>
        </div>
        <div class="space-y-6 md:space-y-4 mt-6">
          <div v-for="(item, index) in cartItems" :key="index" 
               class="grid grid-cols-2 md:grid-cols-5 gap-4 items-center border-b pb-6 md:pb-4">
            <!-- Product -->
            <div class="flex items-center space-x-4">
              <img :src="Array.isArray(item.image) ? item.image[0] : item.image" :alt="item.name || item.title" class="w-16 h-16 object-cover rounded-md"/>
              <span class="font-medium">{{ item.name || item.title }}</span>
            </div>
            
            <!-- Price -->
            <div class="text-right md:text-left">
              <span class="md:hidden text-gray-600 mr-2">Price:</span>
              ${{ item.discountedPrice || item.price }}
            </div>
            
            <!-- Quantity -->
            <div class="col-span-2 md:col-span-1">
              <div class="flex items-center justify-end md:justify-start">
                <span class="md:hidden text-gray-600 mr-2">Quantity:</span>
                <div class="flex items-center border rounded-md">
                  <button 
                    @click="decreaseQuantity(index)"
                    class="px-3 py-1 hover:bg-gray-100 transition-colors"
                    :disabled="item.quantity <= 1"
                  >-</button>
                  <input 
                    type="number" 
                    v-model="item.quantity"
                    class="w-12 text-center border-x py-1"
                    min="1"
                  />
                  <button 
                    @click="increaseQuantity(index)"
                    class="px-3 py-1 hover:bg-gray-100 transition-colors"
                  >+</button>
                </div>
              </div>
            </div>

            
            <!-- Subtotal -->
            <div class="text-right md:text-left">
              <span class="md:hidden text-gray-600 mr-2">Subtotal:</span>
              ${{ calculateSubtotal(item) }}
            </div>

            <!-- Remove Button -->
            <div class="text-right">
              <button @click="removeFromCart(index)" class="text-red-500 hover:text-red-700">
                <i class="i-ph-trash">remove</i>
              </button>
            </div>
          </div>
        </div>

        <!-- Cart Summary
        <div class="mt-8 border-t pt-4">
          <div class="flex justify-between items-center">
            <span class="text-lg font-medium">Total:</span>
            <span class="text-lg font-medium">${{ calculateTotal() }}</span>
          </div>
          <button 
            @click="proceedToCheckout"
            class="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div> -->
        <div class="w-full max-w-6xl mx-auto p-4 mt-12">
    <div class="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
      <!-- Coupon Section -->
      <div class="w-full md:w-1/2">
        <div class="flex flex-col sm:flex-row gap-2">
          <input
            v-model="couponCode"
            type="text"
            placeholder="Coupon Code"
            class="flex-grow px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <button
            @click="applyCoupon"
            class="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
          >
            Apply Coupon
          </button>
        </div>
      </div>

      <!-- Cart Total Section -->
      <div class="w-full md:w-1/2 ">
        <div class="border border-gray-200 rounded p-6">
          <h2 class="text-xl font-semibold mb-4">Cart Total</h2>
          
          <div class="space-y-4">
            
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Shipping:</span>
              <span class="text-gray-600">Free</span>
            </div>
            
            <div class="flex justify-between items-center pt-4 border-t border-gray-200">
              <span class="font-semibold">Total:</span>
              <span class="font-semibold">${{ calculateTotal() }}</span>
            </div>

            <div class="w-full mt-4 px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200">
              <RouterLink
              to="/CheckoutView"
              class="block w-full text-center"
            >
              Proceed to checkout
            </RouterLink>
            </div>
             </div>
            </div>
          </div>
         </div>
       </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
/* Add any additional styles here */
</style>