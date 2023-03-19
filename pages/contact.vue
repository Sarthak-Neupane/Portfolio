<template>
    <section>
       <div class="w-full flex justify-center items-center lg:mb-7 bg-green">
          <Subtitle headline="Don't Be A Stranger" Subtitle="Lets Connect :)" />
       </div>
       <div class="container mx-auto flex justify-center items-start flex-col gap-7 py-8" v-if="width <= 648">
         <ContactLinks />
         <EmailBox />
         <div class="flex justify-center items-center w-full">
            <div class="min-h-[1px] bg-dark flex-1"></div>
            <p class="px-4 text-xl">OR</p>
            <div class="min-h-[1px] bg-dark flex-1"></div>
         </div>
         <div class="w-full flex justify-between items-center">
            <button class="flex-1 py-3 text-purple">
               <NuxtLink to="/"> &#60-- Work </NuxtLink>
            </button>
            <button class="flex-1 py-3 text-yellow"><NuxtLink to="/about"> About --&#62 </NuxtLink></button>
         </div>
       </div>
       <div v-else class="container mx-auto flex justify-center items-center flex-col gap-10 min-h-[50vh]">
         <h1 class="sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-purple">hello@sarthakneupane.com</h1>
         <ContactLinks />
       </div>
    </section>
 </template>
 
 <script setup> 
import transitionConfig from '../helpers/transition';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

 definePageMeta({
    title: 'Contact',
    name: 'Contact',
    pageTransition: transitionConfig,
 })
 </script>
 