<template>
   <section class="overflow-hidden xl:overflow-hidden xl:min-h-[90vh] h-[90vh] flex flex-col justify-center items-center"
      ref="section">
      <ClientOnly>
         <div v-if="getWidth" class="w-full flex justify-center items-center bg-purple">
            <Subtitle headline="Let's Build Together" Subtitle="So I can add it here :)" :nav="true" />
         </div>
      </ClientOnly>
      <div
         class="flex-1 flex-col w-full flex justify-center items-center gap-5 sm:gap-5 md:gap-7 xl:gap-5 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-full 4xl:max-w-[85%]">
         <div class="flex justify-center items-center w-full">
            <Header :play="playHeader" :letters="letters" :resized="resized">
            </Header>
         </div>
         <div class="flex justify-center items-center aspect-square xl:aspect-auto xl:max-w-full">
            <Carousel :play="playCarousel" @hover="imageHover" @unHover="imageUnHover" @resume="resumeCarousel"
               @pauseCarousel="pauseCarousel" :next="next" :prev="previous">
            </Carousel>
         </div>
      </div>
      <ClientOnly>
         <div
            class="text-purple font-bold text-xl w-full flex justify-between items-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl"
            v-if="getWidth">
            <button class="flex-1 py-5 lg:text-2xl" @click="carouselPrevious">
               <Icon name="uil:arrow-left" />
               Previous
            </button>
            <button class="flex-1 py-5 lg:text-2xl" @click="carouselNext"> Next
               <Icon name="uil:arrow-right" />
            </button>
         </div>
      </ClientOnly>
   </section>
</template>

<script setup>
import transitionConfig from '../helpers/transition';
import { toRefs } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { useResizeObserver } from '@vueuse/core';

useSeoMeta({
   title: 'Work',
   ogTitle: 'Works',
   description: 'A list of personal projects made by Sarthak Neupane. I am a frontend developer who loves to build things with Vuejs and Nuxtjs.',
   ogDescription: 'View all my frontend projects made with Vue, ThreeJs, Nuxt, Tailwind, and more.',
})


// defineOgImageStatic({
//    component: 'MyOgImage',
//    title: 'Work | Sarthak Neupane',
//    content: 'Frontend Developer - Vuejs | Nuxtjs',
//    backgroundColor: 'bg-[#9E4770]',
// })

definePageMeta({
   name: 'Work',
   pageTransition: transitionConfig,
})

const { width } = useWindowSize()

const getWidth = computed(() => {
   return width.value <= 1024
})

const transition = useTransitionComposable()
const transitionComplete = toRefs(transition.transitionState).transitionComplete

const section = ref(null)

const playHeader = ref(false)
const playCarousel = ref(false)
const hovered = ref(false)
let temporary;
if (width.value < 1024) {
   temporary = ['F', 'I', 'C', 'F', 'A', 'C', 'F', 'O', 'E', '-']
} else {
   temporary = ['-', '-', '-', 'W', 'O', 'R', 'K', '-', '-', '-']
}

const letters = ref(temporary)
const next = ref(0)
const previous = ref(0)

watch(transitionComplete, (val) => {
   if (val) {
      if (hovered.value) {
         playHeader.value = true
         playCarousel.value = false
      } else {
         playHeader.value = true
         playCarousel.value = true
      }
   }
})

const imageHover = (options) => {
   playHeader.value = !playHeader.value
   playCarousel.value = !playCarousel.value
   hovered.value = true
   const passedLetters = options.name.split('')
   if (passedLetters.length != 10) {
      if (passedLetters.length > 10) {
         const diff = passedLetters.length - 10
         for (let i = 0; i < diff; i++) {
            passedLetters.pop()
         }
      } else {
         const diff = 10 - passedLetters.length
         for (let i = 0; i < diff; i++) {
            if (i % 2 == 0) {
               passedLetters.push('-')
            } else {
               passedLetters.unshift('-')
            }
         }
      }
   }
   letters.value = passedLetters
}

const imageUnHover = () => {
   playHeader.value = !playHeader.value
   playCarousel.value = !playCarousel.value
   hovered.value = false
   letters.value = ['-', '-', '-', 'W', 'O', 'R', 'K', '-', '-', '-']
}

const pauseCarousel = () => {
   playHeader.value = false
   playCarousel.value = false
}

const resumeCarousel = () => {
   playHeader.value = true
   playCarousel.value = true
}

const carouselNext = () => {
   next.value++
}

const carouselPrevious = () => {
   previous.value++
}

const resized = ref(0)

useResizeObserver(section, (entries) => {
   resized.value++
   if (width.value <= 1024) {
      letters.value = ['F', 'I', 'C', 'F', 'A', 'C', 'F', 'O', 'E', '-']
   } else {
      letters.value = ['-', '-', '-', 'W', 'O', 'R', 'K', '-', '-', '-']
   }
})

</script>
