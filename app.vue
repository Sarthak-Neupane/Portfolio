<template>
  <div>
    <SeoKit />
    <div class="font-['poppins'] text-dark flex flex-col justify-center items-center min-h-screen w-full ">
      <div class="h-[10vh]" ref="header">
        <div class="w-full flex justify-center items-center bg-light h-[10vh]">
          <Logo />
        </div>
        <div class="w-full flex justify-center items-center fixed top-0 left-0 z-10 bg-light h-[100vh]" id="animate">
          <Logo />
        </div>
      </div>
      <div class="flex-grow w-full">
        <nuxt-page :transition="{
          name: 'page-transiton',
          mode: 'out-in',
          onEnter: onEnter,
          onLeave: onLeave,
        }">
        </nuxt-page>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import { useRoute, useRouter } from 'vue-router'
import transitionConfig from '@/helpers/transition';


useHead({
  link: [
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "57x57",
      href: "/favicons/apple-touch-icon-57x57.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "114x114",
      href: "/favicons/apple-touch-icon-114x114.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "72x72",
      href: "/favicons/apple-touch-icon-72x72.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "144x144",
      href: "/favicons/apple-touch-icon-144x144.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "60x60",
      href: "/favicons/apple-touch-icon-60x60.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "120x120",
      href: "/favicons/apple-touch-icon-120x120.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "76x76",
      href: "/favicons/apple-touch-icon-76x76.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "152x152",
      href: "/favicons/apple-touch-icon-152x152.png",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicons/favicon-196x196.png",
      sizes: "196x196",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicons/favicon-96x96.png",
      sizes: "96x96",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicons/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicons/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicons/favicon-128.png",
      sizes: "128x128",
    },
  ],
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "msapplication-TileColor", content: "#FFFEFF" },
    { name: "msapplication-TileImage", content: "/mstile-144x144.png" },
    { name: "msapplication-square70x70logo", content: "/mstile-70x70.png" },
    {
      name: "msapplication-square150x150logo",
      content: "/favicons/mstile-150x150.png",
    },
    {
      name: "msapplication-wide310x150logo",
      content: "/favicons/mstile-310x150.png",
    },
    {
      name: "msapplication-square310x310logo",
      content: "/favicons/mstile-310x310.png",
    },
  ],
})
const ctx = ref(null)
const header = ref(null)

const transform = useTransformComposable()
const transition = useTransitionComposable()


onMounted(() => {
  ctx.value = gsap.context((self) => {
    const headerElem = self.selector('#animate')
    const pageName = self.selector('[data-id="pageName"]')
    gsap.set(headerElem, { height: '100vh' })
    gsap.timeline({
      paused: true, delay: 1, onComplete: () => {
        transition.toggleTransitionComplete(true)
      }
    })
      .to(pageName, {
        duration: 0.5,
        yPercent: transform.transformComplete.value ? -0 : -100,
        ease: 'power4.out',
        onComplete: () => {
          transform.toggleTransformComplete()
        }
      })
      .to(headerElem, {
        duration: 1,
        height: '10vh',
        ease: 'power4.out'
      })
      .play()
  }, header.value)
})

const onEnter = (el, done) => {
  transitionConfig.onEnter(el, header.value, done)
}

const onLeave = (el, done) => {
  transitionConfig.onLeave(el, header.value, done)
}

</script>


<style>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
}
</style>