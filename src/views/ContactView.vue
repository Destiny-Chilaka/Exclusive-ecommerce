<script setup>
import {ref} from 'vue';
import { useToast } from 'vue-toastification';
import Breadcrumb from '@/components/bread-crumb/BreadCrumb.vue';
import emailjs from "@emailjs/browser";
const breadcrumbs = ref([
  { label: 'Home', path: '/' },
  { label: 'Contact', path: '/ContactView' },
]);

const emailName = ref ("");
const fromName = ref ("");
const fromNumber = ref ("");
const message = ref ("");
const toast = useToast();

const sendMessage = () => {
  const serviceID = "service_0mt19bv"; // Replace with your EmailJS Service ID
  const templateID = "template_lhniw9m"; // Replace with your Template ID
  const publicKey = "hxhvz6vbzjrqhlSeT"; // Replace with your Public Key

  const templateParams = {
    email_name: emailName.value,
    from_name: fromName.value,
    from_number: fromNumber.value,
    message: message.value,
  };

  emailjs.send(serviceID, templateID, templateParams, publicKey).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      toast.success("Email sent successfully!");
      // Clear the input fields
      emailName.value = "";
      fromName.value = "";
      fromNumber.value = "";
      message.value = "";
    },
    (error) => {
      console.error("FAILED...", error);
      toast.error("Failed to send email. Please try again.");
    }
  );
};
</script>

<template>

  <div class="container mx-auto">
    <Breadcrumb :breadcrumbs="breadcrumbs" />
  </div>  

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8  bg-white  container mx-auto py-16">
    <!-- Contact Details Section -->
    <div class="col-span-1 shadow-lg rounded p-4 ">
      <div class="space-y-6 mt-5">
        <!-- Call To Us -->
        <div class="flex flex-col space-x-4">
          <div class="flex  justify-start space-x-2 mb-5 ml-3">
            <div class="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <i class="i-ph-phone text-white">ph</i>
            </div>
            <h3 class="text-lg  text-black mt-1">Call To Us</h3>
          </div>
          <div>
            <p class="text-sm text-black">We are available 24/7, 7 days a week.</p>
            <p class="text-sm mt-3 text-black">Phone: +88016112222</p>
          </div>
        </div>
        <!-- gray separation line -->
        <div class="w-full h-[1px] bg-gray-500"></div>


        <!-- Write To Us -->
        <div class="flex flex-col space-x-4">
          <div class="flex justify-start space-x-2 mb-5 ml-3">
            <div class="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <i class="i-ph-envelope text-white"></i>
            </div>
            <h3 class="text-lg text-black mt-1">Write To Us</h3>
          </div>
          <div>
            <p class="text-sm text-black">Fill out our form and we will contact you within 24 hours.</p>
            <p class="text-sm  text-black mb-4 mt-3">Emails:customer@exclusive.com</p>
            <p class="text-sm  text-black ">Emails:support@exclusive.com</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Form Section -->
    <div class="col-span-2 p-8 shadow-lg rounded">
      <form @submit.prevent="sendMessage" class="space-y-6">
        <!-- Input Fields -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            v-model="fromName"
            placeholder="Your Name *" required
            class=" block w-full bg-gray-50  rounded-md  p-3 focus:outline-red-100 "
          />
          <input
            type="email"
            v-model="emailName"
            placeholder="Your Email *" required
            class="block w-full bg-gray-50  rounded-md  p-3 focus:outline-red-100"
          />
          <input
            type="tel"
            v-model="fromNumber"
            placeholder="Your Phone *" required
            class="block w-full bg-gray-50  rounded-md  p-3 focus:outline-red-100"
          />
        </div>

        <!-- Message Textarea -->
        <textarea
        v-model="message"
          rows="6"
          placeholder="Your Message"
          class="block w-full bg-gray-50  rounded-md  p-3 focus:outline-red-100"
        ></textarea>

        <!-- Submit Button -->
        <div class="flex justify-end">
          <button
          type="submit"
          class="bg-red-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
        >
          Send Message
        </button>
        </div>
      </form>
    </div>
  </div>
</template>



<style>
/* Add your global styles or icon library links here */
</style>

  
  