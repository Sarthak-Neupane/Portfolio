<template>
    <canvas ref="threeElem" class="fixed top-0 left-0 -z-10 h-screen w-full bg-red-300"> </canvas>
</template>

<script setup>
import { useWindowSize, useDevicePixelRatio } from '@vueuse/core'

const { $three } = useNuxtApp()  // plugins

const { width, height } = useWindowSize()  // vueuse
const { pixelRatio } = useDevicePixelRatio() // vueuse

const threeElem = ref(null)
const renderer = ref(null)

const aspect = computed(() => width.value / height.value)

const scene = useScene()
const camera = useCamera({
    cameraType: 'Perspective',
    fov: 75,
    aspect: aspect.value,
    near: 0.1,
    far: 1000,
})

const setRenderer = () => {
    if(!threeElem.value) return
    renderer.value = useRenderer({
        core: {
            antialias: true,
            alpha: true,
            canvas: threeElem.value,
        },
        scene: scene.value,
        camera: camera.value,
        size: {
            width: width.value,
            height: height.value,
        },
        misc: {
            devicePixelRatio: pixelRatio,
        },
    })
}

onMounted(() => {
    setRenderer()
})
</script>