<template>
   <section class="overflow-hidden lg:overflow-hidden lg:min-h-[90vh] h-[90vh] flex flex-col justify-center items-center">
      <div v-if="getWidth" class="w-full flex justify-center items-center bg-purple">
         <Subtitle headline="Let's Build Together" Subtitle="So I can add it here :)" />
      </div>
      <div class="flex-1 flex-col w-full flex justify-center items-center gap-5 sm:gap-14 md:gap-20 lg:gap-5">
         <div class="flex justify-center items-center w-full">
            <Header :play="playHeader" :letters="letters" />
         </div>
         <div
            class="flex justify-center items-center aspect-square max-w-xs sm:max-w-md md:max-w-xl lg:aspect-auto lg:max-w-full">
            <Carousel :play="playCarousel" @hover="imageHover" @unHover="imageUnHover" @resume="resumeCarousel"
               @pauseCarousel="pauseCarousel" :next="next" :prev="previous">
            </Carousel>
         </div>
      </div>
      <div class="text-purple font-bold text-xl w-full flex justify-between items-center" v-if="getWidth">
         <button class="flex-1 py-5" @click="carouselPrevious"> &#60 Previous </button>
         <button class="flex-1 py-5" @click="carouselNext"> Next &#62 </button>
      </div>
   </section>
</template>

<script setup>
import transitionConfig from '../helpers/transition';
import { toRefs } from 'vue';
import { useWindowSize } from '@vueuse/core';

definePageMeta({
   title: 'Work',
   name: 'Work',
   pageTransition: transitionConfig,
})

const { width } = useWindowSize()

const getWidth = computed(() => {
   return width.value < 1024
})

const transition = useTransitionComposable()
const transitionComplete = toRefs(transition.transitionState).transitionComplete

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

</script>
