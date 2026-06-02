import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { getBestSellers } from "@/data/products"
import { ProductCard } from "@/components/product/ProductCard"

gsap.registerPlugin(ScrollTrigger)

export function BestSeller() {
  const sectionRef = useRef<HTMLElement>(null)
  const products = getBestSellers()

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-animate-best]"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
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

  if (products.length === 0) return null

  return (
    <section ref={sectionRef} className="py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Best Sellers</h2>
          <p className="mt-2 text-muted-foreground">Our most popular nameplates loved by customers</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <div key={product.id} data-animate-best>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
