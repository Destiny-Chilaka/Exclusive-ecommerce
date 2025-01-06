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
      <h2 class="text-3xl text-black">Create an account</h2>
      <p class="text-black text-sm mt-2">Enter your details below</p>

      <form action="#" class="mt-6 space-y-4">
        <!-- Name Input -->
        <div>
          <input
            type="text"
            placeholder="Name"
            class="w-full border-b border-gray-300  px-4 py-2 text-gray-800 focus:outline-none focus:border-b-red-500 focus:border-transparent"
            required
          />
        </div>

        <!-- Email or Phone Input -->
        <div>
          <input
            type="email"
            placeholder="Email or Phone Number"
            class="w-full border-b border-gray-300  px-4 py-2 text-gray-800 focus:outline-none focus:border-b-red-500 focus:border-transparent"
            required
          />
        </div>

        <!-- Password Input -->
        <div>
          <input
            type="password"
            placeholder="Password"
            class="w-full border-b border-gray-300  px-4 py-2 text-gray-800 focus:outline-none focus:border-b-red-500 focus:border-transparent"
            required
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-red-500 text-white font-semibold py-2 hover:bg-red-600 transition duration-200"
        >
          Create Account
        </button>
      </form>

      <!-- Google Signup -->
      <div class="mt-4 flex items-center justify-between">
        <div class="w-full">
          <button
            class="w-full border border-gray-300 flex items-center justify-center py-2 hover:border-gray-400 transition duration-200"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google Icon"
              class="w-5 h-5 mr-2"
            />
            Sign up with Google
          </button>
        </div>
      </div>

      <!-- Footer Links -->
      <p class="text-gray-500 text-sm text-center mt-6">
        Already have an account?
        <RouterLink to="/login" class="text-red-500 hover:underline">Log in</Routerlink>
      </p>
    </div>
  </div>
</section>

</template> 