<template>
    <div class="w-full flex justify-between items-center py-5">
        <ClientOnly>
            <template #fallback>
                <NuxtLink
                    class="px-3 text-xs sm:text-base md:text-lg lg:text-sm 2xl:text-base 4xl:text-xl 6xl:text-2xl font-semibold pointer-events-none hidden"
                    :to="getRouteLink(getTheRoute('previous'))" :class="getColor(getTheRoute('previous'))">
                    <Icon name="uil:arrow-left" />
                    {{ getTheRoute('previous') }}
                </NuxtLink>
            </template>
            <div class="flex-0" v-if="getAppearance" v-show="appear" ref="routeOptionOne">
                <NuxtLink
                    class="px-3 text-xs sm:text-base md:text-lg lg:text-sm 2xl:text-base 4xl:text-xl 6xl:text-2xl font-semibold"
                    :to="getRouteLink(getTheRoute('previous'))" :class="getColor(getTheRoute('previous'))">
                    <Icon name="uil:arrow-left" />
                    {{ getTheRoute('previous') }}
                </NuxtLink>
            </div>
        </ClientOnly>
        <div class="flex-1 flex justify-center items-center lg:gap-4">
            <h1 class="font-bold text-lg sm:text-2xl lg:text-xl 2xl:text-2xl 4xl:text-4xl 6xl:text-6xl">Sarthak
                Neupane</h1>
            <div class="px-3 relative flex flex-col justify-center items-stretch overflow-y-hidden">
                <div class=" flex flex-col justify-center items-center text-xs sm:text-base md:text-lg lg:text-sm 2xl:text-base 4xl:text-xl 6xl:text-2xl"
                    data-id="pageName">
                    <span class="text-center font-medium overflow-hidden" :class="getColor(getRouteFirst)"> {{ getRouteFirst }} </span>
                    <span class=" flex justify-center items-center font-medium absolute top-full left-0 w-full h-full overflow-hidden"
                        :class="getColor(getRouteSecond)">
                        {{ getRouteSecond }} </span>
                </div>
            </div>
        </div>
        <ClientOnly>
            <template #fallback>
                <NuxtLink
                    class="px-3 text-xs sm:text-base md:text-lg lg:text-sm 2xl:text-base 4xl:text-xl 6xl:text-2xl font-semibold pointer-events-none hidden"
                    :to="getRouteLink(getTheRoute('next'))" :class="getColor(getTheRoute('next'))">{{
                        getTheRoute('next') }}
                    <Icon name="uil:arrow-right" />
                </NuxtLink>
            </template>
            <div class="flex-0" v-if="getAppearance" v-show="appear" ref="routeOptionTwo">
                <NuxtLink
                    class="px-3 text-xs sm:text-base md:text-lg lg:text-sm 2xl:text-base 4xl:text-xl 6xl:text-2xl font-semibold"
                    :to="getRouteLink(getTheRoute('next'))" :class="getColor(getTheRoute('next'))">{{
                        getTheRoute('next') }}
                    <Icon name="uil:arrow-right" />
                </NuxtLink>
            </div>
        </ClientOnly>
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
        if (routeOptionOne.value && routeOptionTwo.value) {
            // appear.value = false
            gsap.fromTo(routeOptionOne.value, { x: 0, opacity: 1, pointerEvents: 'none' }, { x: -100, opacity: 0, duration: 0.5 })
            gsap.fromTo(routeOptionTwo.value, { x: 0, opacity: 1, pointerEvents: 'none' }, { x: 100, opacity: 0, duration: 0.5 })
        }
    }
})

const route = useRoute()
const router = useRouter()

const { width } = useWindowSize()

const getWidth = computed(() => {
    return width.value
})

const getAppearance = computed(() => {
    if (width.value >= 648) {
        return true
    } else {
        return false
    }
})

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
        return 'LOADING'
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

const validateRoute = (v)=>{
    if(v === 'Work'){
        return true
    }else if(v === 'About'){
        return true
    }else if(v === 'Contact'){
        return true
    }
}

const getTheRoute = (position) => {
    const routes = ['Work', 'About', 'Contact']
    let thisRouteIndex;
    if(validateRoute(route.name)){
        thisRouteIndex = routes.indexOf(route.name)
    } else {
        thisRouteIndex = 0
    }
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
            return '/about/'
        case 'Contact':
            return '/contact/'
    }
}

</script>