import { useState } from "react"
import { X } from "lucide-react"

const announcements = [
  "Free Shipping on Orders Above ₹1,000 | Premium Quality Nameplates",
  "Custom Designs Available — Upload Your Artwork for a Free Quote",
  "Limited Time Offer: 10% Off on LED Nameplates! Use Code: GLOW10",
  "Express Delivery Available Across India — Order Now!",
]

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(() => {
    return !!localStorage.getItem("announcement-dismissed")
  })

  const handleDismiss = () => {
    setDismissed(true)
    localStorage.setItem("announcement-dismissed", "true")
  }

  if (dismissed) return null

  return (
    <div className="relative flex h-10 items-center overflow-hidden bg-primary px-4 text-sm text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center overflow-hidden">
        <div className="animate-marquee flex gap-12 whitespace-nowrap">
          {[...announcements, ...announcements].map((text, i) => (
            <span key={i} className="inline-block">
              {text}
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={handleDismiss}
        className="absolute right-2 z-10 flex size-6 items-center justify-center rounded-full hover:bg-white/10"
        aria-label="Dismiss announcement"
      >
        <X className="size-3.5" />
      </button>
    </div>
  )
}
