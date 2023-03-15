<template>
   <section class="min-h-[91vh] flex flex-col justify-center items-center gap-7">
      <div class="w-full h-full flex justify-center items-center bg-purple">
         <Subtitle headline="Lets build together" Subtitle="So I can add it here :) " />
      </div>
      <div class="flex-1 w-full flex flex-col justify-between items-center gap-5">
         <h1 class="font-bold text-4xl">FICFACFOE</h1>
         <div class="flex overflow-hidden justify-center items-center gap-10 flex-1 lg:gap-72">
            <img src="~assets/ImageOne.jpg" class="aspect-square lg:aspect-video object-cover h-full w-9/12 lg:w-1/3" alt="">
            <img src="~assets/ImageOne.jpg" class=" aspect-square lg:aspect-video object-cover h-full w-9/12 lg:w-1/3" alt="">
            <img src="~assets/ImageOne.jpg" class=" aspect-square lg:aspect-video object-cover h-full w-9/12 lg:w-1/3" alt="">
         </div>
         <div class="flex flex-col justify-center items-center w-full gap-4">
            <p class="text-center text-xs font-light">A Multiplayer Football Themed TicTacToe Game</p>
            <ul class="flex justify-between items-center gap-5 text-xs font-medium">
               <li>NUXT</li>
               <li class="text-green">NODE JS</li>
               <li>MONGO DB</li>
               <li class="text-green">SOCKET IO</li>
            </ul>
         </div>
         <div class="w-full lg:w-1/3 flex justify-between items-center">
            <button class="flex-1 bg-yellow py-3">PREVIOUS</button>
            <button class="flex-1 bg-dark text-light py-3">NEXT</button>
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
