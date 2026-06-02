import { useSearchParams, Link } from "react-router-dom"
import { products, getProductsByCategory } from "@/data/products"
import { catalogueCategories } from "@/data/categories"
import { ProductCard } from "@/components/product/ProductCard"

export function Catalogue() {
  const [searchParams] = useSearchParams()
  const categoryFilter = searchParams.get("category")
  const productId = searchParams.get("product")

  const filtered = categoryFilter
    ? getProductsByCategory(categoryFilter)
    : productId
      ? products.filter((p) => p.id === Number(productId))
      : products

  const activeCategory = catalogueCategories.find(
    (c) => c.slug === categoryFilter,
  )

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold md:text-4xl">
          {activeCategory ? activeCategory.name : "All Nameplates"}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <Link
          to="/catalogue"
          className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
            !categoryFilter && !productId
              ? "bg-accent text-white "
              : "bg-muted hover:bg-muted/80"
          }`}
        >
          All
        </Link>
        {catalogueCategories.map((cat) => (
          <Link
            key={cat.id}
            to={`/catalogue?category=${cat.slug}`}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              categoryFilter === cat.slug
                ? "bg-accent text-white"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-lg text-muted-foreground">No products found.</p>
          <Link to="/catalogue" className="mt-4 text-accent hover:underline">
            View all products
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
