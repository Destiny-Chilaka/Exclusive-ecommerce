<script setup>
import signup from "@/assets/images/signup-img.png"
</script>

<template>
  <section class=" flex items-center justify-center ">
  <div class="container mx-auto flex flex-col md:flex-row items-center">
    <!-- Image Section -->
    <div class="md:w-1/2 flex justify-center">
      <img
        :src="signup"
        alt="Shopping cart with phone"
        class="w-full max-w-md md:max-w-lg object-contain"
      />
    </div>

    <!-- Signup Form Section -->
    <div class="md:w-1/2 bg-white p-6 md:ml-8  ">
      <h2 class="text-3xl text-black">Log in to Exclusive</h2>
      <p class="text-black text-sm mt-5">Enter your details below</p>

      <form action="#" class="mt-6 space-y-4">
        
        <!-- Email or Phone Input -->
        <div>
          <input
            type="email"
            placeholder="Email or Phone Number"
            class="w-full border-b border-gray-300  pr-4 py-2 text-gray-800 focus:outline-none focus:border-b-red-500 focus:border-transparent"
            required
          />
        </div>

        <!-- Password Input -->
        <div>
          <input
            type="password"
            placeholder="Password"
            class="w-full border-b border-gray-300  pr-4 py-2 text-gray-800 focus:outline-none focus:border-b-red-500 focus:border-transparent"
            required
          />
        </div>
      </form>

      <div class="w-full flex justify-between items-center mt-5">
        <button class=" px-10 py-4 bg-red-500 text-white rounded-lg hover:bg-red-600">Log in</button>
        <button class=" px-10 py-4  text-red-500 hover:text-red-600">Forget password?</button>
      </div>
      
    </div>
  </div>
</section>

</template> 