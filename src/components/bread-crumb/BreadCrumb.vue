<template>
    <nav aria-label="Breadcrumb" class="text-sm py-10 px-4">
      <ol class="flex flex-wrap space-x-2">
        <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
          <span v-if="index !== breadcrumbs.length - 1">
            <router-link
              :to="crumb.path"
              class="text-black/60 hover:underline"
            >
              {{ crumb.label }}
            </router-link>
            <span class="mx-2 text-black/60">/</span>
          </span>
          <span v-else class="text-gray-500 font-semibold">{{ crumb.label }}</span>
        </li>
      </ol>
    </nav>
  </template>
  
  <script>
  import { defineComponent, toRefs } from "vue";
  
  export default defineComponent({
    name: "Breadcrumb",
    props: {
      breadcrumbs: {
        type: Array,
        required: true,
      },
    },
    setup(props) {
      const { breadcrumbs } = toRefs(props);
      return { breadcrumbs };
    },
  });
  </script>
  