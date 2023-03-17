<template>
   <section class="lg:overflow-hidden lg:min-h-[90vh] h-full flex flex-col justify-center items-center">
      <div class="flex-1 flex-col w-full flex justify-center items-center gap-4">
         <div class="flex justify-center items-center w-full">
            <Header :play="play" :letters="letters" />
         </div>
         <div class="flex justify-center items-start">
            <Carousel :play="play" @hover="imageHover" @unHover="imageUnHover" />
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
const transitionState = toRefs(transition.transitionState).transitionComplete

const play = ref(false)
const letters = ref(['-', '-', '-', 'W', 'O', 'R', 'K', '-', '-', '-'])

watch(transitionState, (val) => {
   if (val) {
      play.value = true
   }
})

const imageHover = (options) => {
   console.log(options.hover)
   console.log(options.name)
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

const imageUnHover = ()=>{
   letters.value = ['-','-','-','W','O','R','K','-','-','-']
}

</script>
