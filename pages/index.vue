<template>
   <section class="lg:overflow-hidden lg:min-h-[90vh] h-full flex flex-col justify-center items-center">
      <div class="flex-1 flex-col w-full flex justify-center items-center gap-4">
         <div class="flex justify-center items-center w-full">
            <Header :play="play" />
         </div>
         <div class="flex justify-center items-start">
            <Carousel :play="play" />
         </div>
      </div>
   </section>
</template>

<script setup>
import transitionConfig from '../helpers/transition';
import { useTransitionComposable } from '@/composables/useTransitionComposable'
const { transitionState, toggleTransitionComplete } = useTransitionComposable()

definePageMeta({
   title: 'Work',
   name: 'Work',
   pageTransition: transitionConfig,
})

const play = ref(false)

watch(() => transitionState.transitionComplete, (val) => {
   if (val) {
      console.log('transition complete')
      console.log(val)
      play.value = true
   }
})

// console.log(transitionState.transitionComplete)

</script>
