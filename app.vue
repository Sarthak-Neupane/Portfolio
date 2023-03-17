<template>
  <div class="font-['poppins'] text-dark flex flex-col justify-center items-center min-h-screen w-full" ref="header">
    <div class="h-[10vh]">
      <div class="w-full flex justify-center items-center bg-light h-[10vh]">
        <Logo />
      </div>
      <div class="w-full flex justify-center items-center fixed top-0 left-0 z-10 bg-light h-[10vh]" id="header">
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
      <nuxt-page >
      </nuxt-page>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
</script>

<style>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
}
</style>