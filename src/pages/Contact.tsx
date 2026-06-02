import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6"

export function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-10 text-center">
        <h1 className="font-heading text-3xl font-bold md:text-4xl">
          Contact Us
        </h1>
        <p className="mt-2 text-muted-foreground">
          We&apos;d love to hear from you. Get in touch with us.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 rounded-2xl border border-border/50 bg-card p-6 md:p-6">
          <h2 className="font-heading text-xl font-semibold">Get In Touch</h2>

          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="mt-1 shrink-0">
                <MapPin className="size-5 text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                  Address
                </h3>
                <p className="mt-0.5 text-sm leading-relaxed">
                  No.39/1-66/2, MG GRANITE - House of Nameplates,
                  <br />
                  25A, Poonamallee High Rd, Velappanchavadi,
                  <br />
                  Maduravoyal, Chennai - 600077, Tamil Nadu
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 shrink-0">
                <Phone className="size-5 text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                  Phone
                </h3>
                <a
                  href="tel:+919840288833"
                  className="mt-0.5 block text-sm transition-colors hover:text-accent"
                >
                  +91 98402 88833
                </a>
                <a
                  href="tel:+919840774417"
                  className="mt-1 block text-sm transition-colors hover:text-accent"
                >
                  +91 98407 74417
                </a>
                <a
                  href="tel:+919940174415"
                  className="mt-1 block text-sm transition-colors hover:text-accent"
                >
                  +91 99401 74415
                </a>
                <a
                  href="tel:04423781897"
                  className="mt-1 block text-sm transition-colors hover:text-accent"
                >
                  044 2378 1897
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 shrink-0">
                <Mail className="size-5 text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                  Email
                </h3>
                <a
                  href="mailto:manikandangranites@gmail.com"
                  className="mt-0.5 block text-sm transition-colors hover:text-accent"
                >
                  manikandangranites@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 shrink-0">
                <Clock className="size-5 text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                  Business Hours
                </h3>
                <p className="mt-0.5 text-sm">
                  Monday - Saturday : 9:00 AM – 6:30 PM
                </p>
                <p className="text-sm text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>

            <div className="border-t border-border/50 pt-4">
              <h3 className="mb-4 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                Follow Us
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label="Twitter"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6 rounded-2xl border border-border/50 bg-card p-4 md:p-6"
        >
          <h2 className="font-heading text-xl font-semibold">
            Send Us a Message
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+91 98402 88833" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input id="subject" placeholder="How can we help you?" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Tell us more about your inquiry..."
              className="min-h-37.5"
              required
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
            <Button type="reset" variant="outline">
              Reset
            </Button>
            <Button
              type="submit"
              className="text-primary-foreground gold-gradient hover:brightness-110"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border/50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5888966467487!2d80.1441253!3d13.061819499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526139eb665f01%3A0xe1342a01d6bcfeb2!2sMANIKANDAN%20GRANITE!5e0!3m2!1sen!2sin!4v1780296515694!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MG Granites Location"
          className="rounded-2xl"
        />
      </div>
    </div>
  )
}
