<template>
    <div class="fixed top-0 left-0 -z-10 h-screen w-full" ref="threeElem">
    </div>
</template>

<script setup>
import { toNumber } from '@vue/shared';
import { useWindowSize, useDevicePixelRatio, useRafFn } from '@vueuse/core'

const { $three } = useNuxtApp()  // plugins

const { width, height } = useWindowSize()  // vueuse
const { pixelRatio } = useDevicePixelRatio() // vueuse

const props = defineProps({
    color: {
        type: String,
        default: '0xffffff',
    },
})

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
const material = new $three.MeshBasicMaterial();
material.color = new $three.Color(toNumber(props.color))
const cube = new $three.Mesh(geometry, material);
scene.add(cube)

const createRenderer = () => {
    if (threeElem.value) {
        renderer.value = useRenderer({
            core: {
                antialias: true,
                alpha: true,
            },
            parent: threeElem.value,
        })
        setRenderer()
    }
}

const setRenderer = () => {
    updateRenderer(renderer.value, {
        size: {
            width: width.value,
            height: height.value,
        },
        pixelRatio: pixelRatio.value,
        scene: scene,
        camera: camera,
    })
}

watch(aspect, () => {
    updateCamera(camera, {
        aspect: aspect.value,
    })
    setRenderer()
})

watch(props, () => {
    material.color = new $three.Color(toNumber(props.color))
})

onMounted(() => {
    createRenderer()
})


useRafFn(() => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.value.render(scene, camera)
})
</script>