<template>
    <div class="w-full flex justify-center items-center gap-5 py-5">
        <h1 class="font-bold text-lg">Sarthak Neupane</h1>
        <div class="px-1 relative flex flex-col justify-center items-stretch overflow-y-hidden">
            <div class=" flex flex-col justify-center items-center" id="pageName">
                <span class="text-xs text-center font-medium"> {{  route.name  }} </span>
                <span class=" text-xs flex justify-center items-center font-medium absolute top-full left-0 w-full h-full">{{  route.name === 'About' ? 'Work' : 'About'  }}</span>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
</script>