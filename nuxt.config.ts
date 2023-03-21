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
    // [
    //   "@nuxtjs/robots",
    //   {
    //     UserAgent: "*",
    //     Allow: "*",
    //   },
    // ],
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
});
