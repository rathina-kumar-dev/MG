import { useState, useEffect, useRef } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, ShoppingCart, Maximize2 } from "lucide-react"
import PhotoSwipeLightbox from "photoswipe/lightbox"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getProductById, type ProductSize } from "@/data/products"
import { useCart } from "@/context/CartContext"

import "photoswipe/style.css"

export function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(Number(id))
  const { addItem } = useCart()

  const [selectedImg, setSelectedImg] = useState(0)
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null)
  const [added, setAdded] = useState(false)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!product) return
    const lightbox = new PhotoSwipeLightbox({
      gallery: galleryRef.current!,
      children: "a",
      pswpModule: () => import("photoswipe"),
      bgOpacity: 0.9,
      closeOnVerticalDrag: true,
    })
    lightbox.init()
    return () => { lightbox.destroy() }
  // We only want to init once when product loads
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!product])

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-lg text-muted-foreground">Product not found.</p>
        <Link to="/catalogue" className="mt-4 text-accent hover:underline">
          Back to catalogue
        </Link>
      </div>
    )
  }

  const size = selectedSize ?? product.sizes[0]
  const displayPrice = product.price + size.priceModifier
  const fullStars = Math.floor(product.rating)
  const hasHalfStar = product.rating % 1 >= 0.5

  const handleAddToCart = () => {
    addItem(product, size)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="mx-auto max-w-7xl px-3 py-6 sm:px-4 sm:py-8">
      <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        <Link to="/" className="shrink-0 hover:text-accent">Home</Link>
        <span className="shrink-0">/</span>
        <Link to={`/${product.category.toLowerCase().replace(" ", "-")}`} className="shrink-0 hover:text-accent">
          {product.category}
        </Link>
        <span className="shrink-0">/</span>
        <span className="truncate text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2">
        <div ref={galleryRef}>
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
            <img
              src={product.images[selectedImg]}
              alt={product.name}
              className="size-full object-cover"
            />
            <a
              href={product.images[selectedImg]}
              data-pswp-width="800"
              data-pswp-height="800"
              target="_blank"
              rel="noreferrer"
              className="absolute right-3 bottom-3 flex size-9 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm transition-colors hover:bg-background"
              aria-label="View in lightbox"
            >
              <Maximize2 className="size-4" />
            </a>
          </div>

          <div className="mt-3 flex gap-2 overflow-x-auto sm:gap-3">
            {product.images.slice(0, 4).map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImg(i)}
                className={`relative aspect-square shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                  selectedImg === i
                    ? "border-accent ring-2 ring-accent/30"
                    : "border-transparent hover:border-muted-foreground/30"
                } size-16 sm:size-20`}
              >
                <img src={img} alt="" className="size-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <Badge variant="secondary" className="mb-2">
              {product.subcategory}
            </Badge>
            <h1 className="font-heading text-2xl font-bold md:text-4xl">{product.name}</h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-4 ${
                    i < fullStars
                      ? "fill-accent text-accent"
                      : i === fullStars && hasHalfStar
                        ? "fill-accent/50 text-accent"
                        : "fill-muted text-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-muted-foreground">
              ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="flex flex-wrap items-baseline gap-2">
            <span className="font-heading text-2xl font-bold sm:text-3xl">₹{displayPrice.toLocaleString()}</span>
            {product.originalPrice && (
              <>
                <span className="text-sm text-muted-foreground line-through sm:text-lg">
                  ₹{(product.originalPrice + size.priceModifier).toLocaleString()}
                </span>
                <Badge variant="destructive" className="text-[10px] sm:text-xs">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </Badge>
              </>
            )}
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Select Size
            </h3>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-3">
              {product.sizes.map((s) => {
                const active = size.label === s.label
                return (
                  <button
                    key={s.label}
                    onClick={() => setSelectedSize(s)}
                    className={`rounded-xl border-2 px-2.5 py-2 text-left transition-all sm:px-3 sm:py-2.5 ${
                      active
                        ? "border-accent bg-accent/5 ring-2 ring-accent/20"
                        : "border-border hover:border-muted-foreground/30"
                    }`}
                  >
                    <div className="text-xs font-medium sm:text-sm">{s.label}</div>
                    <div className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">{s.dimensions}</div>
                    {s.priceModifier > 0 && (
                      <div className="mt-1 text-[10px] font-medium text-accent sm:text-xs">+₹{s.priceModifier}</div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            size="lg"
            className={`w-full gap-2 text-base ${
              added
                ? "bg-green-600 hover:bg-green-600"
                : "gold-gradient text-primary-foreground hover:brightness-110"
            }`}
          >
            <ShoppingCart className="size-5" />
            {added ? "Added to Cart!" : "Add to Cart"}
          </Button>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <span>Material:</span>
            <span className="font-medium text-foreground">{product.material}</span>
            <Separator orientation="vertical" className="hidden h-4 sm:block" />
            <span className="hidden sm:inline">Finish:</span>
            <span className="font-medium text-foreground">{product.finish}</span>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-heading text-2xl font-bold">Description</h2>
        <Separator className="my-4" />
        <p className="max-w-3xl leading-relaxed text-muted-foreground">
          {product.fullDescription}
        </p>
      </div>
    </div>
  )
}
