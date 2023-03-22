<template>
   <section>
      <div class="w-full flex justify-center items-center lg:mb-7 bg-green">
         <Subtitle headline="Don't Be A Stranger" Subtitle="Lets Connect :)" />
      </div>
      <ClientOnly>
         <div class="container mx-auto flex justify-center items-start flex-col gap-7 py-8" v-if="getWidth <= 648">
            <ContactLinks />
            <EmailBox />
            <div class="flex justify-center items-center w-full">
               <div class="min-h-[1px] bg-dark flex-1"></div>
               <p class="px-4 text-xl">OR</p>
               <div class="min-h-[1px] bg-dark flex-1"></div>
            </div>
            <div class="w-full flex justify-between items-center">
               <button class="flex-1 py-3 text-purple">
                  <NuxtLink to="/">
                     <Icon name="uil:arrow-left" />
                     Work
                  </NuxtLink>
               </button>
               <button class="flex-1 py-3 text-yellow">
                  <NuxtLink to="/about/"> About
                     <Icon name="uil:arrow-right" />
                  </NuxtLink>
               </button>
            </div>
         </div>
      </ClientOnly>
      <ClientOnly>
         <div class="container mx-auto flex justify-center items-center flex-col gap-10 min-h-[50vh]"
            v-if="getWidth > 648">
            <h1 class="sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-purple text-center relative"
               @mouseenter="hovered" @mouseleave="unHovered" ref="email">
               <a href="mailto:hello@sarthakneupane.com">hello@sarthakneupane.com
                  <Icon name="uil:external-link-alt" size="20px" />
               </a>
               <div class="absolute top-full -translate-y-full left-0 h-1 w-0 bg-green" id="underline" ref="underline">
               </div>
            </h1>
            <ContactLinks />
         </div>
      </ClientOnly>
   </section>
</template>
 
<script setup>
import transitionConfig from '../helpers/transition';
import { useWindowSize } from '@vueuse/core';
import gsap from 'gsap';

useSeoMeta({
   title: 'Contact',
   meta: [
      {
         name: 'description',
         content: 'Lets Build together',
      },
   ],
})

defineOgImageStatic({
   component: 'MyOgImage',
   title: 'Contact | Sarthak Neupane',
   content: 'Frontend Developer - Vuejs | Nuxtjs',
   backgroundColor: 'bg-[#7AC74F]',
})

definePageMeta({
   title: 'Contact',
   name: 'Contact',
   pageTransition: transitionConfig,
})

const { width } = useWindowSize();

const getWidth = computed(() => {
   return width.value;
});

const ctx = ref(null);
const email = ref(null);

const hovered = () => {
   if (email.value) {
      ctx.value = gsap.context((self) => {
         const underline = self.selector('#underline');
         gsap.to(underline, { width: email.value.offsetWidth, duration: 0.5, ease: 'power4.out' })
      }, email.value)
   }
}

const unHovered = () => {
   if (email.value) {
      ctx.value.add((self) => {
         const underline = self.selector('#underline');
         gsap.to(underline, { width: 0, duration: 0.5, ease: 'power4.out' })
      })
   }
}

onUnmounted(() => {
   if (ctx.value) {
      ctx.value.revert();
   }
})

</script>
 