<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import AnnouncementBar from '@/components/layout/AnnouncementBar.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/layout/Footer.vue';

const isAnnouncementVisible = ref(true);
const route = useRoute();

// const hideNavbarFooter = computed(() => route.meta.hideNavbarFooter);
// const hideAnnouncementBar = computed(() => route.meta.hideAnnouncementBar);

onMounted(() => {
  const updateAnnouncementVisibility = () => {
    isAnnouncementVisible.value = document.documentElement.classList.contains('has-announcement');
  };

  updateAnnouncementVisibility();
  window.addEventListener('announcementChange', updateAnnouncementVisibility);
});
</script>

<template>
  <AnnouncementBar v-if="!$route.meta.hideAnnouncementBar" />
  <header>
    <Navbar v-if="!$route.meta.hideNavbarFooter" />
  </header>
  <main :class="[
    'pt-[calc(var(--navbar-height)+var(--announcement-height))]',
    {'pt-[var(--navbar-height)]': !isAnnouncementVisible}
  ]">
    <RouterView />
    <Footer v-if="!$route.meta.hideNavbarFooter" />
  </main>
</template>

<style>
:root {
  --navbar-height: 72px;
  --announcement-height: 40px;
}

main {
  min-height: 100vh;
}
</style>
