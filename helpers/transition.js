import gsap from 'gsap'

import { useTransitionStore } from '@/store/transition'
import { useTransitionComposable } from '../composables/useTransitionComposable'
const { toggleTransitionComplete } = useTransitionComposable()

const pageTransition = {
  name: 'page-transiton',
  mode: 'out-in',
  appear: true,
  onBeforeEnter (el) {
    console.log('hello from beforeEnter')
    // const getExactElement =
    // el.parentElement.parentElement.querySelector('#header')
    // const pageName = getExactElement.querySelector('#pageName')
    // gsap.set(el, { autoAlpha: 0 })
    // gsap.set(pageName, { y: '-100%' })
    // gsap.set(getExactElement, { height: '100vh' })
    // gsap.timeline({ paused: true })
    //     .to(getExactElement, { duration: 1, height: '10vh', ease: 'power4.out' })
    //     .to(pageName, { duration: 0.5, y: '-0%' })
    //     .play()
    // gsap.to(getExactElement, { duration: 1, height: '10vh', ease: 'power4.out' })
  },
  onEnter: (el, done) => {
    console.log('hello from onEnter')
    const getExactElement =
      el.parentElement.parentElement.querySelector('#header')
    const pageName = getExactElement.querySelector('#pageName')
    gsap.set(el, { autoAlpha: 0 })
    gsap
      .timeline({
        paused: true,
        onComplete () {
          toggleTransitionComplete(true)
          useTransitionStore().togglePageNameTransform()
          done()
        }
      })
      .to(pageName, {
        duration: 0.5,
        y: useTransitionStore().getPageNameTransform ? '-0%' : '-100%'
      })
      .to(getExactElement, { duration: 1, height: '10vh', ease: 'power4.out' })
      .to(el, { duration: 0.25, autoAlpha: 1 }, "-=0.5")
      .play()
  },
  onLeave: (el, done) => {
    console.log('hello from onLeave')
    const getExactElement =
      el.parentElement.parentElement.querySelector('#header')
    toggleTransitionComplete(false)
    gsap
      .timeline({ paused: true, onComplete: done })
      .to(el, { duration: 0.25, autoAlpha: 0 })
      .to(getExactElement, { duration: 1, height: '100vh', ease: 'power4.out' }, '-=0.15')
      .play()
  }
}

export default pageTransition
