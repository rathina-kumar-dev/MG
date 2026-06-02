import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useCart } from "@/context/CartContext"

interface CartDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart()

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="flex w-full max-w-md flex-col p-0">
        <SheetHeader className="border-b px-4 py-3">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-2 font-heading text-lg">
              <ShoppingBag className="size-5" />
              Cart ({totalItems})
            </SheetTitle>
            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} aria-label="Close cart">
              <X className="size-5" />
            </Button>
          </div>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4">
            <ShoppingBag className="size-16 text-muted-foreground/30" />
            <div className="text-center">
              <p className="font-heading text-lg font-semibold">Your cart is empty</p>
              <p className="mt-1 text-sm text-muted-foreground">Add some nameplates to get started</p>
            </div>
            <Link to="/catalogue" onClick={() => onOpenChange(false)}>
              <Button>Browse Catalogue</Button>
            </Link>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 px-4 py-4">
              <div className="space-y-4">
                {items.map((item) => {
                  const lineTotal = (item.product.price + item.size.priceModifier) * item.quantity
                  return (
                    <div key={`${item.product.id}-${item.size.label}`} className="flex gap-3">
                      <div className="size-20 shrink-0 overflow-hidden rounded-xl bg-muted">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <p className="line-clamp-1 text-sm font-medium">{item.product.name}</p>
                            <button
                              onClick={() => removeItem(item.product.id, item.size.label)}
                              className="shrink-0 text-muted-foreground hover:text-destructive"
                              aria-label="Remove item"
                            >
                              <Trash2 className="size-4" />
                            </button>
                          </div>
                          <p className="text-xs text-muted-foreground">{item.size.label} — {item.size.dimensions}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.size.label, item.quantity - 1)
                              }
                              className="flex size-7 items-center justify-center rounded-md border transition-colors hover:bg-muted"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="size-3" />
                            </button>
                            <span className="flex size-7 items-center justify-center text-sm font-medium tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.size.label, item.quantity + 1)
                              }
                              className="flex size-7 items-center justify-center rounded-md border transition-colors hover:bg-muted"
                              aria-label="Increase quantity"
                            >
                              <Plus className="size-3" />
                            </button>
                          </div>
                          <span className="text-sm font-semibold tabular-nums">
                            ₹{lineTotal.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </ScrollArea>

            <div className="border-t p-4">
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold tabular-nums">₹{totalPrice.toLocaleString()}</span>
              </div>
              <p className="mb-4 text-xs text-muted-foreground">Shipping calculated at checkout</p>
              <Button className="w-full gold-gradient text-primary-foreground hover:brightness-110">
                Checkout — ₹{totalPrice.toLocaleString()}
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
