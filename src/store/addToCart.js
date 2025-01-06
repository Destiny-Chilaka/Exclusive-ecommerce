import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const cartItems = ref(JSON.parse(localStorage.getItem('cartItems')) || []);
const toast = useToast();

const updateLocalStorage = () => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems.value));
};

const addToCartlist = (product) => {
  const existingProduct = cartItems.value.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cartItems.value.push({ ...product, quantity: 1 });
  }
  updateLocalStorage();
  toast.success('Product added to cart');
};

const removeFromCartlist = (product) => {
  cartItems.value = cartItems.value.filter(item => item.id !== product.id);
  updateLocalStorage();
  toast.success('Product removed from cart');
};

export const useCartItems = () => {
  return {
    cartItems,
    addToCartlist,
    removeFromCartlist,
  };
};