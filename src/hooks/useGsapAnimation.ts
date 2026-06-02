import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface AnimationOptions {
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  scrollTrigger?: boolean
  trigger?: string | Element
  start?: string
  end?: string
  toggleActions?: string
  delay?: number
  duration?: number
  stagger?: number
  once?: boolean
}

export function useGsapAnimation<T extends HTMLElement>(options: AnimationOptions = {}) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const {
      from = { y: 40, opacity: 0 },
      to = { y: 0, opacity: 1 },
      scrollTrigger: useScrollTrigger = true,
      trigger,
      start = "top 85%",
      end = "top 40%",
      toggleActions = "play none none reverse",
      delay = 0,
      duration = 0.8,
      stagger = 0,
      once = true,
    } = options

    const ctx = gsap.context(() => {
      const targets = stagger ? el.children : el

      if (useScrollTrigger) {
        gsap.fromTo(
          targets,
          from,
          {
            ...to,
            duration,
            delay,
            stagger: stagger || undefined,
            scrollTrigger: {
              trigger: trigger || el,
              start,
              end,
              toggleActions,
              once,
            },
          },
        )
      } else {
        gsap.fromTo(targets, from, { ...to, duration, delay, stagger: stagger || undefined })
      }
    })

    return () => ctx.revert()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return ref
}

export function useGsapTimeline() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          once: true,
        },
      })

      tl.fromTo(el.querySelectorAll("[data-animate]"), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 })
    })

    return () => ctx.revert()
  }, [])

  return ref
}
