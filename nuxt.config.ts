// https://nuxt.com/docs/api/configuration/nuxt-config
import glsl from "vite-plugin-glsl";
export default defineNuxtConfig({

  // ssr: false,

  build: {
    transpile: ["gsap", "three"],
  },

  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: [400, 500, 600, 700],
          Poppins: [400, 500, 600, 700],
        },
        display: "swap",
        download: true,
        preconnect: true,
        preload: true,
      },
    ],
    "@nuxt/image-edge",
    '@pinia/nuxt',
  ],
  vite: {
    plugins: [
      glsl({
        include: [
          "**/*.glsl",
          "**/*.wgsl",
          "**/*.vert",
          "**/*.frag",
          "**/*.vs",
          "**/*.fs",
        ],
      }),
    ],
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
    ],
  },
});
