import { useParams, useLocation, Link } from "react-router-dom"
import { products, getProductsBySubcategory } from "@/data/products"
import {
  houseNameplateSubcategories,
  officeNameplateSubcategories,
  graniteMonumentSubcategories,
  acrylicWallPhotoSubcategories,
} from "@/data/categories"
import { ProductCard } from "@/components/product/ProductCard"

const parentMap: Record<
  string,
  { label: string; base: string; subs: typeof houseNameplateSubcategories }
> = {
  "house-name-plates": {
    label: "House Name Plates",
    base: "/house-name-plates",
    subs: houseNameplateSubcategories,
  },
  "office-name-plates": {
    label: "Office Name Plates",
    base: "/office-name-plates",
    subs: officeNameplateSubcategories,
  },
  "granite-monuments": {
    label: "Granite Monuments",
    base: "/granite-monuments",
    subs: graniteMonumentSubcategories,
  },
  "acrylic-wall-photos": {
    label: "Acrylic Wall Photos",
    base: "/acrylic-wall-photos",
    subs: acrylicWallPhotoSubcategories,
  },
}

export function CategoryPage() {
  const { subcategory = "" } = useParams()
  const location = useLocation()
  const category = location.pathname.split("/")[1]
  const parent = category ? parentMap[category] : undefined

  const filtered = subcategory
    ? getProductsBySubcategory(parent?.label || "", subcategory.replace("-", " "))
    : products.filter(
        (p) => p.category.toLowerCase() === parent?.label.toLowerCase(),
      )

  if (!parent) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-lg text-muted-foreground">Category not found.</p>
        <Link to="/" className="mt-4 text-accent hover:underline">
          Go home
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold md:text-4xl">
          {subcategory
            ? `${parent.label} - ${subcategory.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}`
            : parent.label}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {parent.subs.map((sub) => (
          <Link
            key={sub.id}
            to={`${parent.base}${sub.slug ? `/${sub.slug}` : ""}`}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              sub.slug === subcategory || (!sub.slug && !subcategory)
                ? "bg-accent text-white"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {sub.name}
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-lg text-muted-foreground">
            No products in this category.
          </p>
          <Link to={parent.base} className="mt-4 text-accent hover:underline">
            Browse all {parent.label}
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
