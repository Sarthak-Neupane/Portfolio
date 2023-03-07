export const useRenderer = options => {
  const nuxtApp = useNuxtApp()
  const renderer = new nuxtApp.$three.WebGLRenderer(options)
  renderer.setPixelRatio(options.misc.devicePixelRatio)
  renderer.setSize(options.size.width, options.size.height)
  renderer.render(options.scene, options.camera)
  options.parent.appendChild(renderer.domElement)
  return renderer
}
