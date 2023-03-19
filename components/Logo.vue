<template>
    <div class="w-full flex justify-between items-center py-5">
        <div class="flex-0" v-if="getWidth >= 648" v-show="appear" ref="routeOptionOne">
            <NuxtLink
                class="px-3 text-xs sm:text-base md:text-lg lg:text-sm 2xl:text-base 4xl:text-xl 6xl:text-2xl font-semibold"
                :to="getRouteLink(getTheRoute('previous'))" :class="getColor(getTheRoute('previous'))"> <ClientOnly>
                     <template #fallback>
                        <p>Loading Icon...</p>
                     </template>
                     <Icon name="uil:arrow-left" />
                  </ClientOnly> {{
                    getTheRoute('previous') }} </NuxtLink>
        </div>
        <div class="flex-1 flex justify-center items-center lg:gap-4">
            <h1 class="font-bold text-lg sm:text-2xl lg:text-xl 2xl:text-2xl 4xl:text-4xl 6xl:text-6xl">Sarthak
                Neupane</h1>
            <div class="px-3 relative flex flex-col justify-center items-stretch overflow-y-hidden">
                <div class=" flex flex-col justify-center items-center text-xs sm:text-base md:text-lg lg:text-sm 2xl:text-base 4xl:text-xl 6xl:text-2xl"
                    id="pageName">
                    <span class="text-center font-medium" :class="getColor(getRouteFirst)"> {{ getRouteFirst }} </span>
                    <span class=" flex justify-center items-center font-medium absolute top-full left-0 w-full h-full"
                        :class="getColor(getRouteSecond)">
                        {{ getRouteSecond }} </span>
                </div>
            </div>
        </div>
        <div class="flex-0" v-if="getWidth >= 648" v-show="appear" ref="routeOptionTwo">
            <NuxtLink
                class="px-3 text-xs sm:text-base md:text-lg lg:text-sm 2xl:text-base 4xl:text-xl 6xl:text-2xl font-semibold"
                :to="getRouteLink(getTheRoute('next'))" :class="getColor(getTheRoute('next'))">{{
                    getTheRoute('next') }} <ClientOnly>
                     <template #fallback>
                        <p>Loading Icon...</p>
                     </template>
                     <Icon name="uil:arrow-right" />
                  </ClientOnly></NuxtLink>
        </div>
    </div>
</template>


<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useWindowSize } from '@vueuse/core';
import gsap from 'gsap';

const transition = useTransitionComposable()
const appear = ref(false)

const routeOptionOne = ref(null)
const routeOptionTwo = ref(null)

watch(() => transition.transitionState.transitionComplete, (val) => {
    if (val) {
        appear.value = true
        if (routeOptionOne.value && routeOptionTwo.value) {
            gsap.fromTo(routeOptionOne.value, { x: -100, opacity: 0, pointerEvents: 'auto' }, { x: 0, opacity: 1, duration: 0.5 })
            gsap.fromTo(routeOptionTwo.value, { x: 100, opacity: 0, pointerEvents: 'auto' }, { x: 0, opacity: 1, duration: 0.5 })
        }
    } else {
        if (routeOptionOne.value && routeOptionTwo.value){
            // appear.value = false
            gsap.fromTo(routeOptionOne.value, { x: 0, opacity: 1, pointerEvents: 'none' }, { x: -100, opacity: 0, duration: 0.5 })
            gsap.fromTo(routeOptionTwo.value, { x: 0, opacity: 1, pointerEvents: 'none' }, { x: 100, opacity: 0, duration: 0.5 })
        }
    }
})

const route = useRoute()
const router = useRouter()

const { width } = useWindowSize()

const getWidth = () => {
    return width.value
}
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
        return 'WELCOME'
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

const getTheRoute = (position) => {
    const routes = ['Work', 'About', 'Contact']
    const thisRouteIndex = routes.indexOf(route.name)
    let nextRoute, previousRoute;
    if (thisRouteIndex === 0) {
        nextRoute = routes[thisRouteIndex + 1]
        previousRoute = routes[routes.length - 1]
    } else if (thisRouteIndex === routes.length - 1) {
        nextRoute = routes[0]
        previousRoute = routes[thisRouteIndex - 1]
    } else {
        nextRoute = routes[thisRouteIndex + 1]
        previousRoute = routes[thisRouteIndex - 1]
    }
    return position === 'next' ? nextRoute : previousRoute
}

const getColor = (name) => {
    switch (name) {
        case 'Work':
            return 'text-purple'
        case 'About':
            return 'text-yellow'
        case 'Contact':
            return 'text-green'
    }
}

const getRouteLink = (name) => {
    switch (name) {
        case 'Work':
            return '/'
        case 'About':
            return '/about'
        case 'Contact':
            return '/contact'
    }
}

</script>