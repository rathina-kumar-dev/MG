import { HeroSection } from "@/components/home/HeroSection"
import { MajorCategories } from "@/components/home/MajorCategories"
import { MostLoved } from "@/components/home/MostLoved"
import { BestSeller } from "@/components/home/BestSeller"
import { Gallery } from "@/components/home/Gallery"
import { Testimonials } from "@/components/home/Testimonials"

export function Home() {
  return (
    <>
      <HeroSection />
      <MajorCategories />
      <MostLoved />
      <BestSeller />
      <Gallery />
      <Testimonials />
    </>
  )
}
