// https://nuxt.com/docs/api/configuration/nuxt-config
import glsl from "vite-plugin-glsl";
export default defineNuxtConfig({
  build: {
    transpile: ["gsap", "three"],
  },
  modules: [
    [
      "@unlighthouse/nuxt",
      {
        scanner: {
          // simulate a desktop device
          device: "desktop",
        },
      },
    ],
    [
      "nuxt-delay-hydration",
      {
        debug: process.env.NODE_ENV === "development",
        mode: "mount",
      },
    ],
    "@nuxtjs/robots",
    ['@storyblok/nuxt', { accessToken: 'F49GhGgaCT3zL1oikyrWKgtt' }],
    "@nuxtjs/fontaine",
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
        base64: false,
        prefetch: false,
        preconnect: false,
        preload: false,
      },
    ],
    "@nuxt/image-edge",
    "@pinia/nuxt",
    "nuxt-icon",
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
      "defineStore", // import { defineStore } from 'pinia'
    ],
  },
  // robots: {
  //   configPath: "robots.txt",
  // }
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
      '4xl': 2160,
      '6xl': 3840,
    },
  },
});
