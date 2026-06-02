import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { assets } from "@/assets/assets.js"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

const categories = [
  {
    name: "House Name Plates",
    description: "Custom house name plates crafted to your style",
    image: assets.houseAcrylic1,
    href: "/house-name-plates",
  },
  {
    name: "Office Name Plates",
    description: "Professional name plates for modern work environments",
    image: assets.officeDesk1,
    href: "/office-name-plates",
  },
  {
    name: "Granite Monuments",
    description: "Premium granite monuments and inscriptions",
    image: assets.graniteMonument1,
    href: "/granite-monuments",
  },
  {
    name: "Acrylic Wall Photos",
    description: "Beautiful photo engraving on acrylic",
    image: assets.acrylicLandscape1,
    href: "/acrylic-wall-photos",
  },
]

export function MajorCategories() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-animate-category]"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
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

  return (
    <section ref={sectionRef} className="py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Shop by Category</h2>
          <p className="mt-2 text-muted-foreground">Explore our range of premium products</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.href}
              data-animate-category
              className="group relative overflow-hidden rounded-2xl bg-muted shadow-md ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="aspect-[4/5]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-lg font-bold text-white">{cat.name}</h3>
                <p className="mt-1 text-sm text-white/60 group-hover:text-white/80 transition-colors">
                  {cat.description}
                </p>
                <Button
                  size="sm"
                  className="mt-3 gold-gradient text-primary-foreground hover:brightness-110"
                >
                  Explore →
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
