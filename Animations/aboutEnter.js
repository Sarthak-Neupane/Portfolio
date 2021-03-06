import gsap from "gsap";

export default function aboutEnter(d) {
  return new Promise((resolve) => {
    const t1 = new gsap.timeline()
    t1.to(d.querySelector('.curtain'), {
        scaleY: 0,
      })
      t1.to(d.querySelectorAll('.nav'), {
          opacity:1,
      })
      t1.to(d.querySelectorAll('.para > p'), {
          y: 0,
          onComplete: ()=>{
              resolve()
          }
      })
  });
}
