<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import speaker from '@/assets/images/jbl-speaker.png'

const countdownData = ref({
  days: 5,
  hours: 23,
  minutes: 59,
  seconds: 35,
});

let countdownInterval;

const updateCountdown = () => {
  if (countdownData.value.seconds > 0) {
    countdownData.value.seconds--;
  } else {
    countdownData.value.seconds = 59;
    if (countdownData.value.minutes > 0) {
      countdownData.value.minutes--;
    } else {
      countdownData.value.minutes = 59;
      if (countdownData.value.hours > 0) {
        countdownData.value.hours--;
      } else {
        countdownData.value.hours = 23;
        if (countdownData.value.days > 0) {
          countdownData.value.days--;
        } else {
          clearInterval(countdownInterval);
        }
      }
    }
  }
};

onMounted(() => {
  countdownInterval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(countdownInterval);
});

</script>

<template>
  <div class="bg-black text-white max-w-[1200px] mx-auto overflow-hidden md:my-14 sm:10">
    <div class="container mx-auto  p-8 flex justify-around items-center">
      <div class="space-y-6 max-w-lg">
        <p class="text-[#00ff66] text-sm font-medium">Categories</p>
        
        <h2 class="text-4xl font-bold leading-tight">
          Enhance Your<br />Music Experience
        </h2>
        
        <div class="flex space-x-6">
          <div class="text-center">
            <div class="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center font-bold">
              {{ countdownData.hours }}
            </div>
            <p class="text-sm mt-2">Hours</p>
          </div>
          <div class="text-center">
            <div class="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center font-bold">
              {{ countdownData.days }}
            </div>
            <p class="text-sm mt-2">Days</p>
          </div>
          <div class="text-center">
            <div class="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center font-bold">
              {{ countdownData.minutes }}
            </div>
            <p class="text-sm mt-2">Minutes</p>
          </div>
          <div class="text-center">
            <div class="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center font-bold">
              {{ countdownData.seconds }}
            </div>
            <p class="text-sm mt-2">Seconds</p>
          </div>
        </div>
        
        <button class="bg-[#00ff66] text-white rounded px-9 py-3 font-medium hover:bg-[#00cc52] transition-colors">
          Buy Now!
        </button>
      </div>
      
      <div class="flex-shrink-0 hidden md:block">
        <img :src="speaker" alt="JBL Speaker" class="w-96 object-contain" />
      </div>
    </div>
  </div>
</template> 