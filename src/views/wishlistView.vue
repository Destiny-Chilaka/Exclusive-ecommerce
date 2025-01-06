<script setup>
  import { ref, inject, onMounted } from 'vue';
  import { useCartItems } from '@/store/addToCart';

  const wishlist = inject('wishlist');

  // Use injected Wishlist data
  const wishlistItems = wishlist.wishlist.value;
  console.log(wishlistItems);

  // Initialize quantity for each item
  onMounted(() => {
    wishlistItems.forEach(item => {
      if (!item.hasOwnProperty('quantity')) {
        item.quantity = 1; // Default quantity
      }
    });
    console.log('Wishlist items after initializing quantity:', wishlistItems[0]);
  });

  // Calculate subtotal for an item
  const calculateSubtotal = (item) => {
    return item.discountedPrice * item.quantity;
  };

  // Increase quantity
  const increaseQuantity = (index) => {
    wishlistItems[index].quantity++;
  };

  // Decrease quantity
  const decreaseQuantity = (index) => {
    if (wishlistItems[index].quantity > 1) {
      wishlistItems[index].quantity--;
    }
  };

  // Import cart items and functions
  const { cartItems, addToCartlist } = useCartItems();

 

  // Update cart action
  const updateCart = () => {
    wishlistItems.forEach(item => {
      const existingProduct = cartItems.value.find(cartItem => cartItem.id === item.id);
      if (!existingProduct) {
        addToCartlist(item);
      }
    });
    console.log('Updating cart...', cartItems.value);
  };

  // Remove item from wishlist
  const removeFromWishlist = (index) => {
    wishlistItems.splice(index, 1);
  };
</script>

<template>
  <div v-if="wishlistItems.length === 0" class="text-center py-24">
    <p class="text-[30px]">Your Wishlist is currently empty.</p>
    <RouterLink to="/" class="text-gray-700 hover:underline">Take a look at our Products!</RouterLink>
  </div>

  <div v-else>
    <div class="min-h-screen bg-white p-6 md:p-8">
      <div class="max-w-4xl mx-auto">
        <!-- Table Header -->
        <div class="hidden md:grid md:grid-cols-5 gap-4 pb-4 border-b text-sm font-medium text-gray-600">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
          <div>Action</div>
        </div>

        <!-- Products List -->
        <div class="space-y-6 md:space-y-4 mt-6">
          <div v-for="(item, index) in wishlistItems" :key="index" 
               class="grid grid-cols-2 md:grid-cols-5 gap-4 items-center border-b pb-6 md:pb-4">
            <!-- Product -->
            <div class="flex items-center space-x-4">
              <img :src="item.image" :alt="item.name" class="w-16 h-16 object-cover rounded-md"/>
              <span class="font-medium">{{ item.name }}</span>
            </div>
            
            <!-- Price -->
            <div class="text-right md:text-left">
              <span class="md:hidden text-gray-600 mr-2">Price:</span>
              ${{ item.discountedPrice }}
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
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    v-model="item.quantity"
                    class="w-12 text-center border-x py-1"
                    min="1"
                  />
                  <button 
                    @click="increaseQuantity(index)"
                    class="px-3 py-1 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
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
              <button @click="removeFromWishlist(index)" class="text-red-500 hover:text-red-700">
                <i class="i-ph-trash">remove</i>
              </button>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="mt-8 flex justify-between items-center gap-2">
          <RouterLink 
            to="/"
            class="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Return To Shop
          </RouterLink>
          <button 
            @click="updateCart"
            class="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Update Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>