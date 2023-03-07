<template>
  <ClientOnly>
    <!-- ... -->
    <template #fallback>
      <!-- this will be rendered on server side -->
      <p>Loading Three...</p>
    </template>
    <TheThreeBackground />
  </ClientOnly>
  <NuxtPage />
</template>

<style>
canvas{
    position: fixed;
    top: 0;
    left: 0;
    z-index: -10;
}
</style>