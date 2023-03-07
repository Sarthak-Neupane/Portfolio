export const useRenderer = options => {
  const nuxtApp = useNuxtApp()
  const renderer = new nuxtApp.$three.WebGLRenderer(options)
  options.parent.appendChild(renderer.domElement)
  return renderer
}
