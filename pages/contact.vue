<template>
    <section>
       <div class="w-full flex justify-center items-center lg:mb-7 bg-purple">
          <Subtitle headline="Lets build together" Subtitle="So I can add it here :) " />
       </div>
       <div>
          <NuxtLink to="/about">
             <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                About
             </button>
          </NuxtLink>
          <NuxtLink to="/">
             <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Work
             </button>
          </NuxtLink>
       </div>
    </section>
 </template>
 
 <script setup> 
import transitionConfig from '../helpers/transition';

 definePageMeta({
    title: 'Contact',
    name: 'Contact',
    pageTransition: transitionConfig,
 })
 </script>
 