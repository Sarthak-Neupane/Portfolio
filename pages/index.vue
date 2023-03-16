<template>
   <section class="lg:overflow-hidden lg:min-h-[90vh] h-full flex flex-col justify-center items-center">
      <div class="flex-1 flex-col w-full flex justify-center items-center gap-4">
         <div class="flex justify-center items-center w-full">
            <Header />
         </div>
         <div class="flex justify-center items-start">
            <Carousel />
         </div>
      </div>
   </section>
</template>

<script setup>
definePageMeta({
   title: 'Work',
   name: 'Work',
})
</script>
