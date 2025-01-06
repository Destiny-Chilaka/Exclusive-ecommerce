<script setup>
import { ref } from 'vue';

const props = defineProps({
  categories: {
    type: Array,
    default: () => ([
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
    ])
  }
});

const activeCategory = ref(null);
const activeSubcategory = ref(null);

const toggleCategory = (index) => {
  activeCategory.value = activeCategory.value === index ? null : index;
  activeSubcategory.value = null;
};

const toggleSubcategory = (categoryIndex, subIndex) => {
  if (activeCategory.value === categoryIndex) {
    activeSubcategory.value = activeSubcategory.value === subIndex ? null : subIndex;
  }
};
</script>

<template>
  <nav class="py-4 border-r border-gray-200">
    <ul class="space-y-2">
      <li v-for="(category, index) in categories" :key="index" class="relative">
        <button
          @click="toggleCategory(index)"
          class="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center justify-between group"
          :class="{ 'bg-gray-50': activeCategory === index }"
        >
          <span class="text-sm text-gray-600 group-hover:text-gray-900">{{ category.name }}</span>
          <svg
            v-if="category.hasDropdown"
            class="w-4 h-4 transition-transform"
            :class="{ 'rotate-180': activeCategory === index }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <!-- Dropdown Menu -->
        <div
          v-if="category.hasDropdown && activeCategory === index"
          class="pl-4"
        >
          <ul class="space-y-1 py-2">
            <li v-for="(subcat, subIndex) in category.subcategories" :key="subIndex">
              <router-link
                :to="subcat.link"
                class="block px-4 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                :class="{ 'bg-gray-50': activeSubcategory === subIndex }"
                @click="toggleSubcategory(index, subIndex)"
              >
                {{ subcat.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template> 