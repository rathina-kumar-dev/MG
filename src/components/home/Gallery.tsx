import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import PhotoSwipeLightbox from "photoswipe/lightbox"
import { products } from "@/data/products"

import "photoswipe/style.css"

gsap.registerPlugin(ScrollTrigger)

const galleryImages = products.slice(0, 8).map((p) => ({
  src: p.images[0],
  thumbnail: p.images[0],
  w: 800,
  h: 800,
  title: p.name,
  alt: p.name,
}))

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-animate-gal]"),
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 40%",
            toggleActions: "play none none reverse",
            once: true,
          },
        },
      )
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const gallery = galleryRef.current
    if (!gallery) return

    const lightbox = new PhotoSwipeLightbox({
      gallery,
      children: "a",
      pswpModule: () => import("photoswipe"),
      bgOpacity: 0.9,
      closeOnVerticalDrag: true,
    })
    lightbox.init()
    return () => { lightbox.destroy() }
  }, [])

  return (
    <section ref={sectionRef} className="bg-muted/50 py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Gallery</h2>
          <p className="mt-2 text-muted-foreground">Browse our collection of crafted nameplates</p>
        </div>
        <div
          ref={galleryRef}
          className="columns-2 gap-4 md:columns-3 lg:columns-4"
        >
          {galleryImages.map((img, i) => (
            <a
              key={i}
              href={img.src}
              data-pswp-width={img.w}
              data-pswp-height={img.h}
              target="_blank"
              rel="noreferrer"
              data-animate-gal
              className="group/gal mb-4 block overflow-hidden rounded-xl"
            >
              <img
                src={img.thumbnail}
                alt={img.alt}
                className="w-full rounded-xl object-cover transition-transform duration-500 group-hover/gal:scale-110"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
