import { useState } from "react"
import { User, LogIn, Package, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function UserMenu() {
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost" size="icon" aria-label="Account">
            <User className="size-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem onClick={() => setLoginOpen(true)}>
            <LogIn className="mr-2 size-4" />
            Sign In
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled>
            <Package className="mr-2 size-4" />
            My Orders
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <HelpCircle className="mr-2 size-4" />
            Help
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl">Sign In</DialogTitle>
            <DialogDescription>
              Sign in to your MG Granites account to track orders and manage preferences.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="login-email">Email</Label>
              <Input id="login-email" type="email" placeholder="your@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="login-password">Password</Label>
              <Input id="login-password" type="password" placeholder="••••••••" required />
            </div>
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => setLoginOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="flex-1 gold-gradient text-primary-foreground hover:brightness-110">
                Sign In
              </Button>
            </div>
            <p className="text-center text-xs text-muted-foreground">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                className="text-accent hover:underline"
                onClick={() => alert("Registration coming soon!")}
              >
                Register
              </button>
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
