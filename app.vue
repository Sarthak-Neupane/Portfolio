<template>
  <div class="font-['poppins'] text-dark min-h-screen">
    <div class="h-[9vh]">
      <div class="w-full flex justify-center items-center bg-light h-[9vh]">
        <Logo />
      </div>
      <div class="w-full flex justify-center items-center fixed top-0 left-0 z-10 bg-light h-[9vh]" ref="header">
        <Logo />
      </div>
    </div>
    <!-- <ClientOnly>
      <template #fallback>
        <p>Loading Three...</p>
      </template>
      <three-background> </three-background>
    </ClientOnly> -->
    <div class="min-h-[91vh]">
          <nuxt-page :transition="{
            onEnter: onEnter,
            onLeave: onLeave,
            mode: 'out-in',
          }">
          </nuxt-page>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const header = ref(null)

const transform = ref(false)

const onEnter = (el, done) => {
  const pageName = header.value.querySelector('#pageName')
  const tl = gsap.timeline()
  tl.to(pageName, {
    duration: 0.5,
    y: transform.value ? '-0%' : '-100%',
    onComplete: () => {
      transform.value = !transform.value
    }
  })
  tl.to(header.value, {
    duration: 1,
    height: '9vh',
    ease: 'power4.out',
    onComplete: () => {
      done()
    }
  })
}

const onLeave = (el, done) => {
  gsap.to(header.value, {
    duration: 1,
    height: '100vh',
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