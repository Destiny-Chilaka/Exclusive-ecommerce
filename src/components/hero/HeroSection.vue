<script setup>
import { ref } from 'vue';
import HeroCarousel from './HeroCarousel.vue';
import SidebarNav from './SidebarNav.vue';

const categories = [
  {
    name: 'Electronics',
    hasDropdown: true,
    subcategories: [
      { name: 'Smartphones', link: '/category/smartphones' },
      { name: 'Laptops', link: '/category/laptops' },
    ]
  },
  {
    name: 'Fashion',
    hasDropdown: true,
    subcategories: [
      { name: "Women's Dresses", link: '/category/womens-dresses' },
      { name: "Women's Shoes", link: '/category/womens-shoes' },
      { name: "Men's Shirts", link: '/category/mens-shirts' },
      { name: "Men's Shoes", link: '/category/mens-shoes' },
      { name: 'Tops', link: '/category/tops' },
    ]
  },
  {
    name: 'Accessories',
    hasDropdown: true,
    subcategories: [
      { name: "Men's Watches", link: '/category/mens-watches' },
      { name: "Women's Watches", link: '/category/womens-watches' },
      { name: "Women's Bags", link: '/category/womens-bags' },
      { name: "Women's Jewellery", link: '/category/womens-jewellery' },
      { name: 'Sunglasses', link: '/category/sunglasses' },
    ]
  },
  {
    name: 'Home & Living',
    hasDropdown: true,
    subcategories: [
      { name: 'Home Decoration', link: '/category/home-decoration' },
      { name: 'Furniture', link: '/category/furniture' },
      { name: 'Lighting', link: '/category/lighting' },
    ]
  },
  {
    name: 'Beauty & Personal Care',
    hasDropdown: true,
    subcategories: [
      { name: 'Fragrances', link: '/category/fragrances' },
      { name: 'Skincare', link: '/category/skincare' },
    ]
  },
  {
    name: 'Automotive',
    hasDropdown: true,
    subcategories: [
      { name: 'Automotive', link: '/category/automotive' },
      { name: 'Motorcycle', link: '/category/motorcycle' },
    ]
  },
  {
    name: 'Groceries',
    hasDropdown: true,
    subcategories: [
      { name: 'Groceries', link: '/category/groceries' },
    ]
  }
];
</script>

<template>
  <div class="container mx-auto max-w-[1200px] px-4 mt-6">
    <div class="flex flex-col lg:flex-row gap-4 lg:gap-6">
      <div class="w-full lg:w-1/4 bg-white">
        <SidebarNav :categories="categories" />
      </div>
      <div class="w-full lg:w-3/4">
        <HeroCarousel />
      </div>
    </div>
  </div>
</template> 