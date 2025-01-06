<script setup>
import HeroSection from '@/components/hero/HeroSection.vue';
import PromoBanner from '@/components/promo/PromoBanner.vue';
import NewArrival from '@/components/new-arrival/NewArrival.vue';
import FlashSales from '@/components/flash-sales/FlashSales.vue';
import BrowseCategories from '@/components/category/BrowseCategories.vue';
import Service from '@/components/service/Service.vue';
</script>

<template>
  <main>
    <HeroSection />
    <div class="container mx-auto max-w-[1200px] px-4 mt-8">

      <FlashSales />
      <BrowseCategories />
      <PromoBanner />
      <NewArrival />
      <Service />
    </div>
  </main>
</template>
