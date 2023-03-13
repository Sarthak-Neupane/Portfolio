<template>
  <div class="font-['poppins'] text-dark">
    <div class="w-full flex justify-center items-center bg-light">
      <Logo />
    </div>
    <div class="w-full flex justify-center items-center lg:mb-7 bg-yellow">
      <Subtitle />
    </div>
    <!-- <ClientOnly>
      <template #fallback>
        <p>Loading Three...</p>
      </template>
      <three-background> </three-background>
    </ClientOnly> -->
    <NuxtPage />
  </div>
</template>

<script setup>
</script>

<style>
canvas{
    position: fixed;
    top: 0;
    left: 0;
    z-index: -10;
}
</style>