<template>
   <section class="lg:overflow-hidden lg:min-h-[90vh] h-full flex flex-col justify-center items-center">
      <div class="flex-1 flex-col w-full flex justify-center items-center gap-4">
         <div class="flex justify-center items-center w-full">
            <Header :play="playHeader" :letters="letters" />
         </div>
         <div class="flex justify-center items-start">
            <Carousel :play="playCarousel" @hover="imageHover" @unHover="imageUnHover" @resume="resumeCarousel"
               @pauseCarousel="pauseCarousel" />
         </div>
      </div>
   </section>
</template>

<script setup>
import transitionConfig from '../helpers/transition';
import { toRefs } from 'vue';

definePageMeta({
   title: 'Work',
   name: 'Work',
   pageTransition: transitionConfig,
})

const transition = useTransitionComposable()
const transitionComplete = toRefs(transition.transitionState).transitionComplete

const playHeader = ref(false)
const playCarousel = ref(false)
const hovered = ref(false)
const letters = ref(['-', '-', '-', 'W', 'O', 'R', 'K', '-', '-', '-'])

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

</script>
