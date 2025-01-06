<script setup>
const emit = defineEmits(['slideLeft', 'slideRight']);

defineProps({
  timeRemaining: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center md:mt-18 sm:mt-10 gap-4 sm:gap-0">
    <!-- Stack Today's and Flash Sales vertically -->
    <div class="flex flex-col gap-2 w-full sm:w-auto">
      <div class="flex items-center gap-4">
        <div class="bg-red-500 w-5 h-10 rounded"></div>
        <h2 class="text-sm font-semibold text-red-500">Today's</h2>
      </div>
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <h3 class="text-3xl font-medium">Flash Sales</h3>
        <!-- Timer -->
        <div class="flex items-center gap-4">
          <div class="flex items-center flex-col gap-2">
            <span class="text-sm text-black">Days</span>
            <span class="text-2xl font-semibold -mt-1">{{ timeRemaining.days.toString().padStart(2, '0') }}</span>
          </div>
          <span class="text-lg">:</span>
          <div class="flex items-center flex-col gap-2">
            <span class="text-sm text-black">Hours</span>
            <span class="text-2xl font-semibold -mt-1">{{ timeRemaining.hours.toString().padStart(2, '0') }}</span>
          </div>
          <span class="text-lg">:</span>
          <div class="flex items-center flex-col gap-2">
            <span class="text-sm text-black">Minutes</span>
            <span class="text-2xl font-semibold -mt-1">{{ timeRemaining.minutes.toString().padStart(2, '0') }}</span>
          </div>
          <span class="text-lg">:</span>
          <div class="flex items-center flex-col gap-2">
            <span class="text-sm text-black">Seconds</span>
            <span class="text-2xl font-semibold -mt-1">{{ timeRemaining.seconds.toString().padStart(2, '0') }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Navigation Arrows -->
    <div class="flex items-center gap-2">
      <button 
        @click="emit('slideLeft')"
        class="p-2 border rounded-full hover:bg-gray-50 transition-colors"
      >
      <div class="i-ph-arrow-left w-5 h-5"></div>
      </button>
      <button 
        @click="emit('slideRight')"
        class="p-2 border rounded-full hover:bg-gray-50 transition-colors"
      >
          <div class="i-ph-arrow-right w-5 h-5"></div>  
      </button>
    </div>
  </div>
</template> 