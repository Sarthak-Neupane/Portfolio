// https://nuxt.com/docs/api/configuration/nuxt-config
import glsl from "vite-plugin-glsl";
export default defineNuxtConfig({
  build: {
    transpile: ["gsap", "three"],
  },
  extends: ["nuxt-seo-kit"],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      siteName: "Sarthak Neupane",
      language: "en-US", // prefer more explicit language codes like `en-AU` over `en`,
      titleSeparator: "|",
      trailingSlash: true,
    },
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
    ["@storyblok/nuxt", { accessToken: process.env.NUXT_STORYBLOK_TOKEN }],
    [
      "@nuxtjs/fontaine",
      {
        fonts: [
          {
            family: "Inter",
            variants: ["400", "500", "600", "700"],
          },
          {
            family: "Poppins",
            variants: ["400", "500", "600", "700"],
          },
        ],
      },
    ],
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
        preconnect: true,
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
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "4xl": 2160,
      "6xl": 3840,
    },
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },
  linkChecker: {
    failOn404: false,
  },
  devServer: {
    https: {
      key: "localhost-key.pem",
      cert: "localhost.pem",
    },
  },
  nitro: {
    // serveStatic: true,
    // preset: "vercel-static",
  },
});
