import { useEffect } from "react"
import { HashRouter, Routes, Route, useLocation } from "react-router-dom"
import { RootLayout } from "@/components/layout/RootLayout"
import { CartProvider } from "@/context/CartContext"
import { Home } from "@/pages/Home"
import { Catalogue } from "@/pages/Catalogue"
import { CategoryPage } from "@/pages/CategoryPage"
import { ProductDetail } from "@/pages/ProductDetail"
import { Contact } from "@/pages/Contact"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <CartProvider>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="catalogue" element={<Catalogue />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="house-name-plates" element={<CategoryPage />} />
            <Route
              path="house-name-plates/:subcategory"
              element={<CategoryPage />}
            />
            <Route path="office-name-plates" element={<CategoryPage />} />
            <Route
              path="office-name-plates/:subcategory"
              element={<CategoryPage />}
            />
            <Route path="granite-monuments" element={<CategoryPage />} />
            <Route
              path="granite-monuments/:subcategory"
              element={<CategoryPage />}
            />
            <Route path="acrylic-wall-photos" element={<CategoryPage />} />
            <Route
              path="acrylic-wall-photos/:subcategory"
              element={<CategoryPage />}
            />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </CartProvider>
    </HashRouter>
  )
}

export default App
