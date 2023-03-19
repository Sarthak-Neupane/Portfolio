<template>
  <div class="font-['poppins'] text-dark flex flex-col justify-center items-center min-h-screen w-full ">
    <div class="h-[10vh]" ref="header">
      <div class="w-full flex justify-center items-center bg-light h-[10vh]">
        <Logo />
      </div>
      <div class="w-full flex justify-center items-center fixed top-0 left-0 z-10 bg-light h-[100vh]" id="animate">
        <Logo />
      </div>
    </div>
    <!-- <ClientOnly>
      <template #fallback>
        <p>Loading Three...</p>
      </template>
      <three-background> </three-background>
    </ClientOnly> -->
    <div class="flex-grow w-full">
      <nuxt-page :transition="{
        name: 'page-transiton',
        mode: 'out-in',
        onEnter: onEnter,
        onLeave: onLeave,
      }">
      </nuxt-page>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import { useRoute, useRouter } from 'vue-router'
import transitionConfig from '@/helpers/transition';

const ctx = ref(null)
const header = ref(null)

const transform = useTransformComposable()
const transition = useTransitionComposable()


onMounted(() => {
  ctx.value = gsap.context((self) => {
    const headerElem = self.selector('#animate')
    const pageName = self.selector('#pageName')
    gsap.set(headerElem, { height: '100vh' })
    gsap.timeline({ paused: true, delay: 1, onComplete: () => {
      transition.toggleTransitionComplete(true)
    } })
      .to(pageName, {
        duration: 0.5,
        yPercent: transform.transformComplete.value ? -0 : -100,
        ease: 'power4.out',
        onComplete: () => {
          transform.toggleTransformComplete()
        }
      })
      .to(headerElem, {
        duration: 1,
        height: '10vh',
        ease: 'power4.out'
      })
      .play()
  }, header.value)
})

const onEnter = (el, done) => {
  transitionConfig.onEnter(el, header.value, done)
}

const onLeave = (el, done) => {
  transitionConfig.onLeave(el, header.value, done)
}

</script>


<style>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
}
</style>