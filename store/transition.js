export const useTransitionStore = defineStore('counter', {
  state: () => ({
    pageNameTransform: false,
    transitionState: false,
    initialRender: true
  }),

  getters: {
    state: state => state.transitionState,
    initialRenderState: state => state.initialRender,
    getPageNameTransform: state => state.pageNameTransform
  },

  actions: {
    transitionStart () {
        this.transitionState = true
    },
    transitionEnd () {
        this.transitionState = false
    },
    initialRenderEnd () {
        this.initialRender = false
    },
    togglePageNameTransform () {
        this.pageNameTransform = !this.pageNameTransform
    }
  }
})
