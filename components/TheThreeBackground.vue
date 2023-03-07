<template>
    <div class="fixed top-0 left-0 -z-10 h-screen w-full" ref="threeElem">
    </div>
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
    position: { x: 0, y: 0, z: 5 },
    fov: 75,
    aspect: aspect.value,
    near: 0.1,
    far: 1000,
})



scene.add(camera)

const geometry = new $three.BoxGeometry(1, 1, 1);
const material = new $three.MeshBasicMaterial({ color: 0x008080 });
const cube = new $three.Mesh(geometry, material);
scene.add(cube)

const setRenderer = () => {
    if (threeElem.value) {
        renderer.value = useRenderer({
            core: {
                antialias: true,
                alpha: true,
            },
            scene: scene,
            camera: camera,
            size: {
                width: width.value,
                height: height.value,
            },
            misc: {
                devicePixelRatio: pixelRatio.value,
            },
            parent: threeElem.value,
        })
    }
}

onMounted(() => {
    setRenderer()
})
</script>