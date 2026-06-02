import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const fadeInUp = (element: string | Element, delay = 0, duration = 0.8) => {
  return gsap.fromTo(
    element,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration, delay, ease: "power3.out" },
  )
}

export const staggerFadeInUp = (elements: string | Element[], stagger = 0.1, duration = 0.6) => {
  return gsap.fromTo(
    elements,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration, stagger, ease: "power2.out" },
  )
}

export const scaleIn = (element: string | Element, delay = 0) => {
  return gsap.fromTo(
    element,
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.6, delay, ease: "back.out(1.7)" },
  )
}

export const heroTextReveal = (element: string | Element) => {
  const tl = gsap.timeline()
  tl.fromTo(element, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power4.out" })
  return tl
}

export const sectionReveal = (trigger: string | Element, targets: string | Element[]) => {
  return gsap.fromTo(
    targets,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger,
        start: "top 85%",
        end: "top 40%",
        toggleActions: "play none none reverse",
        once: true,
      },
    },
  )
}
