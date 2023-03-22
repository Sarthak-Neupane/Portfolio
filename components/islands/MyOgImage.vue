
<script setup lang="ts">
const props = defineProps({
  title: String,
  content: String,
  backgroundColor: String,
})
</script>

<template>
  <div class="w-full h-full flex text-[#FFFEFF] items-center justify-center font-['poppins']" :class="[backgroundColor]">
    <h1 class="text-7xl font-bold">
      {{ title }} 👋
    </h1>
    <p class="text-2xl font-semibold"> {{ content }} </p>

  </div>
</template>
