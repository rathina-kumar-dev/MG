import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import gsap from "gsap"
import { assets } from "@/assets/assets.js"
import { Button } from "@/components/ui/button"

import "swiper/css"
import "swiper/css/pagination"

const slides = [
  {
    image: assets.hero1,
    title: "Precision-Crafted Nameplates for Every Space",
    subtitle:
      "From elegant residential addresses to striking commercial signage — we bring your vision to life with premium materials and expert craftsmanship",
    cta: "Explore Our Work",
    link: "/catalogue",
  },
  {
    image: assets.hero2,
    title: "Your Vision, Expertly Realized",
    subtitle:
      "Custom design, fabrication, and installation — seamless project delivery from concept to completion",
    cta: "Start Your Project",
    link: "/house-name-plates",
  },
]

export function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = textRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-animate]"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out" }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active !bg-accent",
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="hero-swiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative flex h-[70vh] min-h-[500px] items-center lg:h-[80vh]">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
              </div>
              <div className="relative z-10 mx-auto w-full max-w-7xl px-4">
                <div ref={textRef} className="max-w-xl">
                  <h1
                    data-animate
                    className="font-heading text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl"
                  >
                    {slide.title}
                  </h1>
                  <p
                    data-animate
                    className="text-md mt-4 text-white/80 md:text-lg"
                  >
                    {slide.subtitle}
                  </p>
                  <div data-animate className="mt-8">
                    <Link to={slide.link}>
                      <Button
                        size="lg"
                        className="px-8 text-primary-foreground shadow-lg gold-gradient hover:brightness-110"
                      >
                        {slide.cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
