import { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { AnnouncementBar } from "./AnnouncementBar"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { BottomFooter } from "./BottomFooter"
import { GoToTop } from "./GoToTop"
import { DotmSquare3 } from "@/components/ui/dotm-square-3"

export function RootLayout() {
  const [loading, setLoading] = useState(true)
  const { pathname } = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {loading && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-background-foreground/90 backdrop-blur-sm">
          <DotmSquare3 size={140} dotSize={10} color="var(--color-accent)" />
        </div>
      )}
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      {pathname === "/" ? <Footer /> : <BottomFooter />}
      <GoToTop />
    </div>
  )
}
