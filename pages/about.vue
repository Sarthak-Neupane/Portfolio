<template>
   <section class="min-h-[90vh] w-full flex flex-col justify-center items-center ">
      <div class="w-full flex justify-center items-center bg-yellow">
         <Subtitle headline="It's Me, Hi" Subtitle="No Taylor swift reference :)" />
      </div>
      <div class="flex-grow flex justify-center items-center sm:items-stretch xl:items-center w-full">
         <div
            class="flex flex-col justify-center sm:justify-around items-start px-3 lg:px-16 pb-7 w-full gap-3 xl:flex xl:flex-row xl:justify-around xl:items-stretch xl:gap-5 xl:py-5 4xl:w-11/12 4xl:mx-auto">
            <Aboutme class="xl:w-full xl:flex xl:flex-row xl:justify-center xl:items-stretch" :play="play" />
            <Workexp class="xl:w-full xl:flex xl:flex-row xl:justify-center xl:items-stretch" :play="play" />
         </div>
      </div>
   </section>
</template>

<script setup>
import transitionConfig from '../helpers/transition';

useSeoMeta({
   title: 'About',
   ogTitle: 'About | Sarthak Neupane',
   description: 'Looking for a frontend developer from Nepal? I specialize in building websites with NUXT and have experience with Three.js and GSAP for modern animations.',
   ogDescription: 'I am Sarthak Neupane, a frontend developer from Nepal. I primarily work with Vuejs and Nuxtjs. I also have experience with Three.js and GSAP for modern animations.',
})

definePageMeta({
   title: 'About',
   name: 'About',
   pageTransition: transitionConfig,
})

// defineOgImageStatic({
//    component: 'MyOgImage',
//    title: 'About | Sarthak Neupane',
//    content: 'Frontend Developer - Vuejs | Nuxtjs',
//    backgroundColor: 'bg-[#FFBE0B]',
// })

const transition = useTransitionComposable()
const play = ref(false)

watch(() => transition.transitionState.transitionComplete, (val) => {
   if (val) {
      play.value = true
   }
})
</script>