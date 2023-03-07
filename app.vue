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
