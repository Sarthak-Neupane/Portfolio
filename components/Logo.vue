<template>
    <div class="w-full flex justify-center items-center gap-5 py-5">
        <h1 class="font-bold text-lg sm:text-2xl md:text-3xl lg:text-xl 2xl:text-2xl 4xl:text-4xl 6xl:text-6xl">Sarthak
            Neupane</h1>
        <div class="px-3 relative flex flex-col justify-center items-stretch overflow-y-hidden">
            <div class=" flex flex-col justify-center items-center text-xs sm:text-base md:text-lg lg:text-sm 2xl:text-base 4xl:text-xl 6xl:text-2xl"
                id="pageName">
                <span class="text-center font-medium"> {{ getRouteFirst }} </span>
                <span class=" flex justify-center items-center font-medium absolute top-full left-0 w-full h-full">
                    {{ getRouteSecond }} </span>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
let currentRoute = ''

const transform = ref(null)

onMounted(() => {
    currentRoute = route.name
})

router.beforeResolve((to, from, next) => {
    transform.value = !transform.value
    currentRoute = from.name
    next()
})


const getRouteFirst = computed(() => {

    if (transform.value === null) {
        return 'HELLO'
    } else if (transform.value) {
        return route.name
    } else {
        return currentRoute
    }
})

const getRouteSecond = computed(() => {
    if (transform.value === null) {
        return route.name
    } else if (transform.value) {
        return currentRoute
    } else {
        return route.name
    }
})

</script>