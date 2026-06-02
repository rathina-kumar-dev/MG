import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { Star, Quote } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { reviews } from "@/data/reviews"

import "swiper/css"
import "swiper/css/pagination"

gsap.registerPlugin(ScrollTrigger)

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
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

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()

  return (
    <section ref={sectionRef} className="py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">What Our Customers Say</h2>
          <p className="mt-2 text-muted-foreground">Real reviews from satisfied customers</p>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true, bulletActiveClass: "swiper-pagination-bullet-active !bg-accent" }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper pb-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <Card className="relative h-full border-border/50">
                <CardContent className="p-6">
                  <Quote className="mb-3 size-8 text-accent/30" />
                  <p className="line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`size-3.5 ${
                          i < review.rating
                            ? "fill-accent text-accent"
                            : "fill-muted text-muted-foreground/30"
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-xs text-muted-foreground">{review.rating}.0</span>
                  </div>
                  <div className="mt-4 flex items-center gap-3 border-t pt-4">
                    <Avatar className="size-10">
                      <AvatarFallback className="bg-accent/10 text-accent text-xs font-medium">
                        {getInitials(review.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
