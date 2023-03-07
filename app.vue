<template>
  <nav class="font-['Poppins'] text-blue-600 w-1/3 flex justify-between items-center px-5">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
  </nav>
  <ClientOnly>
    <!-- ... -->
    <template #fallback>
      <!-- this will be rendered on server side -->
      <p>Loading Three...</p>
    </template>
    <three-background> </three-background>
  </ClientOnly>
  <NuxtPage />
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