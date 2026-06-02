import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, Search, ShoppingCart, X } from "lucide-react"
import { assets } from "@/assets/assets.js"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  houseNameplateSubcategories,
  officeNameplateSubcategories,
  graniteMonumentSubcategories,
  acrylicWallPhotoSubcategories,
} from "@/data/categories"
import { useCart } from "@/context/CartContext"
import { UserMenu } from "./UserMenu"
import { CartDrawer } from "./CartDrawer"

type NavLink =
  | { label: string; href: string }
  | {
      label: string
      baseHref: string
      children: typeof houseNameplateSubcategories
    }

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Catalogue", href: "/catalogue" },
  {
    label: "House Name Plates",
    baseHref: "/house-name-plates",
    children: houseNameplateSubcategories,
  },
  {
    label: "Office Name Plates",
    baseHref: "/office-name-plates",
    children: officeNameplateSubcategories,
  },
  {
    label: "Granite Monuments",
    baseHref: "/granite-monuments",
    children: graniteMonumentSubcategories,
  },
  {
    label: "Acrylic Wall Photos",
    baseHref: "/acrylic-wall-photos",
    children: acrylicWallPhotoSubcategories,
  },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const location = useLocation()
  const { totalItems } = useCart()
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null)

  const isActive = (href: string) => location.pathname === href

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 max-sm:px-2">
        <Link to="/" className="flex shrink-0 items-center gap-2 max-sm:gap-1">
          <img src={assets.logo} alt="MG Granites" className="h-20 w-auto" />
          <span className="font-heading text-lg font-bold tracking-tight">MG Granites</span>
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navLinks.map((link) =>
              "children" in link ? (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuTrigger className="text-foreground">
                    {link.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-56 p-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.id}
                          to={`${link.baseHref}${child.slug ? `/${child.slug}` : ""}`}
                          className="flex rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.label}>
                  <Link
                    to={link.href}
                    className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:outline-none ${
                      isActive(link.href) ? "text-accent" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <Search className="size-5" />
          </Button>

          <UserMenu />

          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingCart className="size-5" />
            {totalItems > 0 && (
              <Badge className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full p-0 text-[10px]">
                {totalItems}
              </Badge>
            )}
          </Button>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <div className="flex items-center justify-between border-b px-4 py-3">
                <div className="flex items-center gap-2">
                  <img src={assets.logo} alt="MG Granites" className="h-8 w-auto" />
                  <span className="font-heading text-base font-bold tracking-tight ">MG Granites</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="size-5" />
                </Button>
              </div>
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((link) =>
                  "children" in link ? (
                    <div key={link.label}>
                      <button
                        onClick={() =>
                          setExpandedMobileItem(
                            expandedMobileItem === link.label ? null : link.label,
                          )
                        }
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                      >
                        {link.label}
                        <span className="text-muted-foreground">
                          {expandedMobileItem === link.label ? "−" : "+"}
                        </span>
                      </button>
                      {expandedMobileItem === link.label && (
                        <div className="ml-3 flex flex-col gap-0.5 border-l pl-3">
                          {link.children.map((child) => (
                            <Link
                              key={child.id}
                              to={`${link.baseHref}${child.slug ? `/${child.slug}` : ""}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                        isActive(link.href) ? "text-accent" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-border/50 px-4 py-3">
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search nameplates..."
                className="w-full pl-9"
                autoFocus
                onBlur={() => setSearchOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </header>
  )
}
