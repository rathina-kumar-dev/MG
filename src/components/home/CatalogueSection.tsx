import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { catalogueCategories } from "@/data/categories"
import { assets } from "@/assets/assets.js"

gsap.registerPlugin(ScrollTrigger)

const categoryImageMap: Record<string, string> = {
  "house-name-plates": assets.houseAcrylic1,
  "office-name-plates": assets.officeDesk1,
  "granite-monuments": assets.graniteMonument1,
  "acrylic-wall-photos": assets.acrylicLandscape1,
}

export function CatalogueSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-animate-cat]"),
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.7)",
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
    <section ref={sectionRef} className="bg-muted/50 py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Browse Catalogue</h2>
          <p className="mt-2 text-muted-foreground">Explore our range of premium nameplates by category</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {catalogueCategories.map((cat) => (
            <Link key={cat.id} to={`/${cat.slug}`} data-animate-cat>
              <Card className="group/cat overflow-hidden border-border/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 py-0">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={categoryImageMap[cat.id] || assets.houseAcrylic1}
                    alt={cat.name}
                    className="size-full object-cover transition-transform duration-500 group-hover/cat:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-2xl font-bold text-white">{cat.name}</h3>
                    <p className="mt-1 text-sm text-white/70">{cat.description}</p>
                    <p className="mt-2 text-sm font-medium text-accent">{cat.productCount} Products</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {cat.children?.map((child) => (
                      <span
                        key={child.id}
                        className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                      >
                        {child.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
