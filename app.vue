<template>
  <div class="font-['poppins']">
    <div class="w-full flex justify-center items-center bg-[#fffeff]">
      <Logo />
    </div>
    <div class="w-full flex justify-center items-center bg-[#FFBE0B]">
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