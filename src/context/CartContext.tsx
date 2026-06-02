/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Product, ProductSize } from "@/data/products"

export interface CartItem {
  product: Product
  size: ProductSize
  quantity: number
}

interface CartContextValue {
  items: CartItem[]
  addItem: (product: Product, size: ProductSize, quantity?: number) => void
  removeItem: (productId: number, sizeLabel: string) => void
  updateQuantity: (productId: number, sizeLabel: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = useCallback((product: Product, size: ProductSize, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.size.label === size.label,
      )
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.size.label === size.label
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...prev, { product, size, quantity }]
    })
  }, [])

  const removeItem = useCallback((productId: number, sizeLabel: string) => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.size.label === sizeLabel),
      ),
    )
  }, [])

  const updateQuantity = useCallback(
    (productId: number, sizeLabel: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(productId, sizeLabel)
        return
      }
      setItems((prev) =>
        prev.map((item) =>
          item.product.id === productId && item.size.label === sizeLabel
            ? { ...item, quantity }
            : item,
        ),
      )
    },
    [removeItem],
  )

  const clearCart = useCallback(() => setItems([]), [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  const totalPrice = items.reduce(
    (sum, item) => sum + (item.product.price + item.size.priceModifier) * item.quantity,
    0,
  )

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
