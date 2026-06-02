import { Outlet, useLocation } from "react-router-dom"
import { AnnouncementBar } from "./AnnouncementBar"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { BottomFooter } from "./BottomFooter"

export function RootLayout() {
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      {pathname === "/" ? <Footer /> : <BottomFooter />}
    </div>
  )
}
