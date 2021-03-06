import gsap from "gsap";


export default function microAnimHome() {
    const nameTitle = document.querySelector(".name");
    const socialLinks = document.querySelectorAll(".social__links");
   

    const secondHomeTitle = document.querySelector(
      ".second__home__title .secondary"
    );
    secondHomeTitle.addEventListener("mouseenter", (e) => {
    });

    socialLinks.forEach((link) => {
      link.addEventListener("mouseenter", (e) => {
        gsap.to(e.target.lastChild, {
          duration: 0.2,
          scaleX: 1,
        });
      });
      link.addEventListener("mouseleave", (e) => {
        gsap.to(e.target.lastChild, {
          duration: 0.2,
          scaleX: 0,
        });
      });
    });
    

    nameTitle.addEventListener("mouseenter", () => {
      gsap.to(nameTitle, {
        duration: 0.5,
        y: "-50%",
        ease: "power1.out",
      });
    });

    nameTitle.addEventListener("mouseleave", () => {
      gsap.to(nameTitle, {
        duration: 0.5,
        y: 0,
        ease: "power1.out",
      });
    });
  }