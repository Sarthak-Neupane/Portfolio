<template>
   <section>
      <div class="w-full flex justify-center items-center lg:mb-7 bg-purple">
         <Subtitle headline="Lets build together" Subtitle="So I can add it here :) " />
      </div>
      <div>
         <NuxtLink to="/about">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               About Me
            </button>
         </NuxtLink>
      </div>
   </section>
</template>

<script setup>
const emit = defineEmits(['initiateTransition'])

onBeforeRouteLeave(() => {
   emit('initiateTransition')
})
</script>
