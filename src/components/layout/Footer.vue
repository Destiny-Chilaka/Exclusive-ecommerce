<script setup>
import qrCode from '@/assets/images/Qrcode.png'
import appleImage from '@/assets/images/apple-image.png'
import googlePlaystore from '@/assets/images/google-playstore01.png'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-black text-white py-12">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">

        <!-- Exclusive Section -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold">Exclusive</h3>
          <div class="space-y-2">
            <p>Subscribe</p>
            <p class="text-sm">Get 10% off your first order</p>
            <div class="relative flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                class="w-full bg-black border border-white/20 rounded px-4 py-2 text-sm pr-12"
              >
              <button class="absolute right-2 top-1/2 -translate-y-1/2 hover:opacity-80 transition-opacity">
                <div class="i-ph-paper-plane-right w-5 h-5"></div>
              </button>
            </div>
          </div>
        </div>

        <!-- Support Section -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold">Support</h3>
          <div class="space-y-2 text-sm text-gray-300">
            <p>111 Bijoy sarani, Dhaka,</p>
            <p>DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>

        <!-- Account Section -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold">Account</h3>
          <div class="flex flex-col space-y-2 text-sm text-gray-300">
            <RouterLink 
              to="/Account" 
              class="hover:text-white transition-colors"
            >
              My Account
            </RouterLink>
            <RouterLink 
              to="/Login" 
              class="hover:text-white transition-colors"
            >
              Login / Register
            </RouterLink>
            <RouterLink 
              to="/cartView" 
              class="hover:text-white transition-colors"
            >
              Cart
            </RouterLink>
            <RouterLink 
              to="/wishlistView" 
              class="hover:text-white transition-colors"
            >
              Wishlist
            </RouterLink>
            <RouterLink 
              to="/Shop" 
              class="hover:text-white transition-colors"
            >
              Shop
            </RouterLink>
          </div>
        </div>

        <!-- Quick Link Section -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold">Quick Link</h3>
          <div class="flex flex-col space-y-2 text-sm text-gray-300">
            <RouterLink 
              to="/PrivacyPolicy" 
              class="hover:text-white transition-colors"
            >
              Privacy Policy
            </RouterLink>
            <RouterLink 
              to="/TermsOfUse" 
              class="hover:text-white transition-colors"
            >
              Terms Of Use
            </RouterLink>
            <RouterLink 
              to="/FAQ" 
              class="hover:text-white transition-colors"
            >
              FAQ
            </RouterLink>
            <RouterLink 
              to="/contact" 
              class="hover:text-white transition-colors"
            >
              Contact
            </RouterLink>
          </div>
        </div>

        <!-- Download App Section -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold">Download App</h3>
          <p class="text-sm text-gray-300">Save $3 with App New User Only</p>
          <div class="flex gap-4">
            <img :src="qrCode" alt="QR Code" class="w-24 h-24  p-2">
            <div class="flex flex-col gap-2">
                <a href="#" class="bg-black border border-white/20 rounded px-1 py-1 flex items-center gap-1 hover:opacity-80 transition-opacity">
                    <img :src="googlePlaystore" alt="" class="w-5">
        <div class="flex flex-col">
          <span class="text-[8px]">GET IT ON</span>
          <span class="text-sm font-medium">Google Play</span>
        </div>
      </a>
      <a href="#" class="bg-black border border-white/20 rounded px-1 py-1 flex items-center gap-1 hover:opacity-80 transition-opacity">
        <img :src="appleImage" alt="" class="w-5">
        <div class="flex flex-col">
          <span class="text-[8px]">Download on the</span>
          <span class="text-sm font-medium">App Store</span>
        </div>
      </a>
            </div>
          </div>
          <!-- Social Links -->
      <div class="flex gap-6 mt-5">
        <a href="#" class="hover:text-gray-300">
          <div class="i-ph-facebook-logo w-6 h-6"></div>
        </a>
        <a href="#" class="hover:text-gray-300">
          <div class="i-ph-twitter-logo w-6 h-6"></div>
        </a>
        <a href="#" class="hover:text-gray-300">
          <div class="i-ph-instagram-logo w-6 h-6"></div>
        </a>
        <a href="#" class="hover:text-gray-300">
          <div class="i-ph-linkedin-logo w-6 h-6"></div>
        </a>
      </div>
        </div>
      </div>

      

      <!-- Copyright -->
      <div class="text-center mt-4 text-sm text-gray-400">
        <p>© Copyright Rimel {{currentYear}}. All right reserved</p>
      </div>
    </div>
  </footer>
</template>