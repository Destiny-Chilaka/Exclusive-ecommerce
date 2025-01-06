// src/store/wishlist.js
import { ref } from 'vue';

const wishlist = ref([]);

const addToWishlist = (product) => {
  if (!wishlist.value.includes(product)) {
    wishlist.value.push(product);
    
  }
};

const removeFromWishlist = (product) => {
  wishlist.value = wishlist.value.filter(item => item.id !== product.id);
  
};

export const useWishlist = () => {
  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
  };
};