<script setup>
import ps5Image from '@/assets/images/ps5.png'
import womensCollectionImage from '@/assets/images/womens-collection.png'
import speakersImage from '@/assets/images/speaker.png'
import perfumeImage from '@/assets/images/perfume.png'
</script>

<template>
  <div class="container mx-auto md:my-30 my-10">
    <div class="space-y-6 ">
      <div class="flex items-center gap-2">
        <div class="h-10 w-5 bg-red-500 rounded"></div>
        <span class="text-red-500 font-medium">Featured</span>
      </div>
      
      <h2 class="text-3xl font-bold">New Arrival</h2>
      
      <div class="grid lg:grid-cols-2 gap-4">
        <!-- PlayStation Card -->
        <div class="relative overflow-hidden bg-black">
          <img
            :src="ps5Image"
            alt="PlayStation 5 Black and White versions"
            class="w-full h-[400px] p-5"
          />
          <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h3 class="text-2xl font-bold text-white mb-2">PlayStation 5</h3>
            <p class="text-gray-200 mb-4">Black and White version of the PS5 coming out on sale.</p>
            <button class="text-white hover:underline">Shop Now</button>
          </div>
        </div>

        <!-- Right Column Grid -->
        <div class="grid gap-4">
          <!-- Women's Collections Card -->
          <div class="relative overflow-hidden bg-black">
            <img
              :src="womensCollectionImage"
              alt="Women's Collections"
              class="w-full h-[200px] object-cover"
            />
            <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 class="text-xl font-bold text-white mb-2">Women's Collections</h3>
              <p class="text-gray-200 text-sm mb-4">Featured women collections that give you another vibe.</p>
              <button class="text-white hover:underline">Shop Now</button>
            </div>
          </div>

          <!-- Bottom Grid -->
          <div class="grid grid-cols-2 gap-4">
            <!-- Speakers Card -->
            <div class="relative overflow-hidden bg-black">
              <img
                :src="speakersImage"
                alt="Amazon wireless speakers"
                class="w-full h-[180px] object-cover "
              />
              <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 class="text-lg font-bold text-white mb-1">Speakers</h3>
                <p class="text-gray-200 text-xs mb-2">Amazon wireless speakers</p>
                <button class="text-white hover:underline text-sm">Shop Now</button>
              </div>
            </div>

            <!-- Perfume Card -->
            <div class="relative overflow-hidden bg-black">
              <img
                :src="perfumeImage"
                alt="GUCCI INTENSE OUD EDP"
                class="w-full h-[180px] object-cover"
              />
              <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 class="text-lg font-bold text-white mb-1">Perfume</h3>
                <p class="text-gray-200 text-xs mb-2">GUCCI INTENSE OUD EDP</p>
                <button class="text-white hover:underline text-sm">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
