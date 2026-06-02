import { Link } from "react-router-dom"
import { assets } from "@/assets/assets.js"
import { Separator } from "@/components/ui/separator"
import {
  houseNameplateSubcategories,
  officeNameplateSubcategories,
  graniteMonumentSubcategories,
  acrylicWallPhotoSubcategories,
} from "@/data/categories"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img src={assets.logo} alt="MG Granites" className="h-20 w-auto" />
              <span className="font-heading text-lg font-bold tracking-tight text-primary-foreground">MG Granites</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              We craft premium custom nameplates online with full personalization. Choose from acrylic,
              stainless steel, and professionally designed nameplates — created to enhance your home
              spaces and modern work environments with quality finishes and dependable delivery.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">House Name Plates</h3>
            <ul className="space-y-2">
              {houseNameplateSubcategories.map((sub) => (
                <li key={sub.id}>
                  <Link
                    to={`/house-name-plates${sub.slug ? `/${sub.slug}` : ""}`}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">Office Name Plates</h3>
            <ul className="space-y-2">
              {officeNameplateSubcategories.map((sub) => (
                <li key={sub.id}>
                  <Link
                    to={`/office-name-plates${sub.slug ? `/${sub.slug}` : ""}`}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">Granite Monuments</h3>
            <ul className="space-y-2">
              {graniteMonumentSubcategories.map((sub) => (
                <li key={sub.id}>
                  <Link
                    to={`/granite-monuments${sub.slug ? `/${sub.slug}` : ""}`}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">Acrylic Wall Photos</h3>
            <ul className="space-y-2">
              {acrylicWallPhotoSubcategories.map((sub) => (
                <li key={sub.id}>
                  <Link
                    to={`/acrylic-wall-photos${sub.slug ? `/${sub.slug}` : ""}`}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-primary-foreground/50">
            &copy; {currentYear} MG Granites. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-primary-foreground/50">
            <span>
              Designed by{" "}
              <a
                href="https://www.gischennai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Goldmine Infotech and Systems
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
