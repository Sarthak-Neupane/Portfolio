<template>
  <div class="font-['poppins'] text-dark">
    <div class="w-full flex justify-center items-center bg-light h-[9vh]">
      <Logo />
    </div>
    <div class="w-full flex justify-center items-center fixed top-0 left-0 z-10 bg-light h-[9vh]" ref="header">
      <Logo />
    </div>
    <!-- <ClientOnly>
      <template #fallback>
        <p>Loading Three...</p>
      </template>
      <three-background> </three-background>
    </ClientOnly> -->

    <nuxt-page :transition="{
      onEnter: onEnter,
      onLeave: onLeave,
      mode: 'out-in',
    }">
    </nuxt-page>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const header = ref(null)

const pageTransition = () => {
  console.log('pageTransition')
}

const onEnter = (el, done) => {
  gsap.to(header.value, {
    duration: 2,
    height: '100%',
    ease: 'power4.out',
    onComplete: () => {
      done()
    }
  })
}

const onLeave = (el, done) => {
  const tl = gsap.timeline()
  tl.to(header.value, {
    duration: 2,
    height: '9vh',
    ease: 'power4.out',
    onComplete: () => {
      done()
    }
  })
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