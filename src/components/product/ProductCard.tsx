import { Star } from "lucide-react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Product } from "@/data/products"

interface ProductCardProps {
  product: Product
  showViewButton?: boolean
}

export function ProductCard({ product, showViewButton = true }: ProductCardProps) {
  const fullStars = Math.floor(product.rating)
  const hasHalfStar = product.rating % 1 >= 0.5

  return (
    <Card className="group/card overflow-hidden border-border/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 py-0">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.images[0]}
          alt={product.name}
          className="size-full object-cover transition-opacity duration-500 group-hover/card:opacity-0"
        />
        <img
          src={product.images[1]}
          alt={product.name}
          className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        />
        {product.isBestSeller && (
          <Badge className="absolute left-2 top-2 gold-gradient text-xs text-primary-foreground">
            Best Seller
          </Badge>
        )}
        {product.originalPrice && (
          <Badge variant="secondary" className="absolute right-2 top-2 text-xs">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </Badge>
        )}
      </div>
      <CardContent className="p-3">
        <h3 className="line-clamp-1 font-heading text-sm font-semibold">{product.name}</h3>
        <div className="mt-1 flex items-center gap-1.5">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`size-3 ${
                  i < fullStars
                    ? "fill-accent text-accent"
                    : i === fullStars && hasHalfStar
                      ? "fill-accent/50 text-accent"
                      : "fill-muted text-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-heading text-lg font-bold">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </CardContent>
      {showViewButton && (
        <CardFooter className="p-3 pt-0">
          <Link to={`/product/${product.id}`} className="w-full">
            <Button
              variant="outline"
              className="w-full border-accent/30 text-white bg-accent hover:text-accent-foreground"
            >
              View
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  )
}
