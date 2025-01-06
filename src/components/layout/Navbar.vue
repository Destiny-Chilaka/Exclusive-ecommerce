<template>
  <nav class="bg-white shadow-sm sticky w-full z-20">
    <!-- Your existing navbar content -->
  </nav>
</template>

<style scoped>
nav {
  transition: top 0.3s;
  top: 0;
}

/* This will position the navbar correctly when announcement is present */
:root.has-announcement nav {
  top: var(--announcement-height);
}
</style> 