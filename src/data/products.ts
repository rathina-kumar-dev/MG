import { assets } from "@/assets/assets.js"

export interface ProductSize {
  label: string
  dimensions: string
  priceModifier: number
}

export interface Product {
  id: number
  name: string
  description: string
  fullDescription: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  category: string
  subcategory: string
  images: string[]
  isBestSeller: boolean
  isNew?: boolean
  material: string
  finish: string
  sizes: ProductSize[]
}

export const defaultSizes: ProductSize[] = [
  { label: "Small", dimensions: "148mm × 104mm × 5mm", priceModifier: 0 },
  { label: "Square", dimensions: "148mm × 148mm × 5mm", priceModifier: 150 },
  { label: "Medium", dimensions: "210mm × 148mm × 5mm", priceModifier: 300 },
  { label: "Long", dimensions: "297mm × 100mm × 5mm", priceModifier: 400 },
  { label: "Large", dimensions: "297mm × 148mm × 5mm", priceModifier: 500 },
]

const fullDescriptions = [
  "Crafted from premium-grade acrylic with a lustrous gold finish, this nameplate features precision laser engraving that creates crisp, deep lettering. The bevelled edges catch light beautifully, adding a touch of elegance to any entrance. Each piece is hand-finished and inspected for quality before dispatch. The back includes pre-applied heavy-duty adhesive tape for easy, secure mounting on any clean, smooth surface. Resistant to fading, moisture, and everyday wear — designed to look pristine for years.",
  "Fabricated from high-grade 304 stainless steel with a brushed satin finish, this nameplate combines industrial durability with sophisticated minimalism. The surface is precision-etched using CNC laser technology, delivering razor-sharp text and graphics with zero burr. The matte finish resists fingerprints and smudges, making it ideal for high-traffic entrances. Pre-drilled corners with included brass mounting screws ensure a professional installation. Also available with optional 3M automotive-grade adhesive tape.",
  "An innovative fusion of premium acrylic and energy-efficient LED technology. The frosted acrylic face diffuses warm white light evenly, eliminating hot spots while providing a soft, welcoming glow. The slim profile (just 8mm) houses long-life SMD LEDs rated for 50,000+ hours. Includes a discreet 2-metre USB power cable with adapter. The acrylic front panel is removable for engraving and can be customised with any text or logo. Suitable for indoor use only.",
  "Inspired by natural stone aesthetics, this nameplate features a high-definition marble pattern digitally printed onto premium acrylic and sealed beneath a gloss laminate. The gold bevelled frame adds contrast and depth, creating a piece that reads as both contemporary and timeless. The surface is UV-resistant and wipe-clean. Mounting kit includes both adhesive pads and keyhole hangers for flexibility.",
  "Precision-cut from mirror-polished stainless steel, this nameplate achieves a reflective surface comparable to a high-end appliance. The laser engraving process slightly etches the mirror finish, creating a stunning contrast effect that shifts as the viewer moves. The 1.5mm gauge steel is substantial and warp-resistant. Edges are carefully deburred and polished by hand. Backed with a continuous strip of outdoor-grade mounting foam.",
  "Crafted from crystal-clear cast acrylic with an accent gold edge that runs continuously around the perimeter. The transparent body creates a floating, frameless look on any wall colour. Text is engraved from the reverse so the front surface remains perfectly smooth and easy to clean. The gold edge is applied via a metalised vacuum deposition process for a consistent, durable finish. Supplied with clear silicone mounting dots.",
  "Each nameplate is individually handcrafted using sustainably sourced mango wood with a live-edge design. The warm white LED strip is recessed into the back, casting an ambient glow around the perimeter. The wood is finished with multiple coats of satin polyurethane for weather resistance. Each piece has unique grain character. Includes a wall-mounted driver with dimmer switch and 2-metre cable. Suitable for covered outdoor areas.",
  "A sleek matte black acrylic nameplate with high-contrast white engraved text. The matte surface diffuses light evenly and resists glare, making text readable from any angle and under any lighting. The 5mm-thick cast acrylic has a solid, weighty feel. White acrylic paint is hand-rubbed into the engraved recesses and then surface-sanded for a perfect finish. Simple peel-and-stick installation.",
  "Produced from 1.2mm 316 marine-grade stainless steel with a high-gloss mirror polish. The deep laser engraving penetrates the polished surface to create a subtle silver-on-silver dual-tone effect. The mirror finish is protected with a removable peel-off film during transit. Each piece is precision-bent with no sharp edges. Includes stainless steel mounting screws with matching dome caps.",
  "An ultra-slim (5mm) LED nameplate with cool white (6000K) illumination ideal for contemporary interiors. The diffused acrylic panel ensures uniform light distribution without bright spots. A built-in ambient light sensor automatically dims the panel in low-light conditions for reduced glare. Powered via micro-USB (cable and adapter included). The bracket system allows tool-free wall mounting and easy removal for engraving updates.",
  "The rose gold finish is achieved through an advanced multi-layer vacuum metallisation process over premium acrylic, resulting in a warm pink-gold tone that shifts with ambient light. The bevelled edges are polished to a high lustre. Laser engraving produces a subtle cream-coloured mark with excellent contrast against the rose gold surface. Pre-applied VHB adhesive tape ensures a bond rated for 15kg per strip.",
  "A textured satin-finish stainless steel nameplate engineered for professional office environments. The surface is micro-bead blasted to create a uniform matte texture that hides fingerprints and scratches. Laser engraving produces a dark, high-contrast mark that is permanent and will not wear off. Corners are radiused for a refined appearance. Includes hidden magnetic mounting system for a seamless floating look.",
  "Combining warm copper tones with soft ambient LED backlighting for a distinctive entrance statement. The copper edge is solid copper (not plated), hand-bevelled and polished. The LED panel produces 2700K warm white light with a high CRI of 90+. The wooden backplate is finished with natural tung oil. Includes touch dimmer for brightness control. Handcrafted in limited quantities.",
  "A clean, minimalist nameplate in high-gloss white acrylic. The 5mm thick material has a mirror-like gloss finish that brightens any entryway. Deep black engraving provides maximum readability. The ultra-white base ensures that engraved areas remain crisp and don't yellow over time. Mounting is via clear silicone pads or included screws. Also available in gloss black.",
  "A space-saving vertical format (portrait orientation) brushed stainless steel nameplate. The 2:3 aspect ratio makes it ideal for narrow wall spaces, gate pillars, and column mounts. Features the same 304-grade steel and precision laser engraving as our standard range. Two sizes available. Supplied with four stainless steel security screws with tamper-resistant heads.",
  "A striking neon-edge LED nameplate with vibrant RGB illumination. The edge-lit acrylic creates a neon glow effect visible even in daylight. Choose from 16 solid colours, pulsing, or smooth gradient modes via the included remote control. The panel is 6mm clear acrylic with white diffused text. Memory function retains last colour setting. Indoor use only. Includes international USB power supply.",
  "Natural wood grain effect achieved through a multi-layer print process on premium acrylic that replicates the texture and warmth of real timber. Unlike real wood, this material is waterproof, warp-proof, and will never rot or splinter. The acrylic core makes it suitable for outdoor installation. The engraving reveals a clean white mark that contrasts beautifully with the wood pattern.",
  "A premium pearl-white coated stainless steel nameplate with a subtle iridescent sheen. The coating is a multi-layer automotive-grade paint system with UV inhibitors, baked at 180°C for maximum durability. The laser engraving cuts through the coating to reveal the natural steel beneath, creating a permanent mark. Edges are colour-matched to the face. Suitable for both indoor and protected outdoor use.",
  "Dual-zone LED nameplate with independently controllable warm (3000K) and cool (6000K) white zones. Switch between warm, cool, or combined daylight modes via a touch button on the edge. Each zone uses 24 high-lumen SMD LEDs with individual light guides for uniform output. The frosted acrylic diffuser blends the two colour temperatures seamlessly. Power via included 12V adapter with 3-metre cable.",
  "A luxury-tier nameplate featuring a solid brass-toned acrylic composite with deep copper undertones. The material is 8mm thick with a hand-polished edge that reveals subtle layered colour. Laser engraving produces a deep gold-toned mark. Each nameplate comes with personalised packaging in a branded velour-lined gift box. Includes a certificate of authenticity. Mounting: brass keyhole hangers with wall plugs.",
  "Precision laser-etched onto high-quality black granite with a polished surface. Your chosen photo is converted to a fine dot pattern and permanently engraved into the stone, capturing every detail and expression. The result is a lasting memorial that will never fade, peel, or discolour. Suitable for indoor and covered outdoor placement. Each piece is individually boxed with a display stand.",
  "Expertly carved from premium Indian black granite with a diamond-polished face and hand-cut lettering. The classic arched-top design features deep, precise inscriptions filled with gold leaf or white enamel. Includes a reinforced concrete base for secure installation. Each headstone is crafted to order with careful attention to every detail of the inscription.",
  "Hand-carved Arabic calligraphy inscription on premium black granite with a smooth polished finish. Verses are rendered in traditional Thuluth or Naskh script by skilled calligraphers and then precision-engraved into the stone. The deep text is finished with gold or silver leaf for a striking contrast. Suitable for indoor display or covered outdoor installation.",
  "Elegant granite inauguration plaque with a brushed finish and precision-engraved text. Features a classic layout with space for the project name, date, and dignitary names. The premium granite surface is sealed against moisture and UV damage. Includes brass mounting inserts and stainless steel screws for permanent installation.",
  "High-definition landscape photo printed directly onto premium acrylic using UV-curable ink technology. The vibrant colours are sealed beneath a gloss laminate that adds depth and protects against UV fading. The acrylic panel is mounted on a clear backplate that creates a floating effect on the wall. Includes aluminium subframe with keyhole hangers for easy wall mounting.",
  "Crystal-clear acrylic portrait photo print with exceptional colour accuracy and detail reproduction. The direct UV printing process embeds the image into the acrylic surface, creating a glossy, frameless presentation. The edge-lit effect gives the portrait depth and dimension. Includes a sturdy back-mounting frame with sawtooth hangers and felt bumpers.",
  "Square-format acrylic wall photo with a sleek minimalist presentation. The high-gloss acrylic print delivers vibrant colours and sharp detail across the entire image surface. The square aspect ratio is ideal for paired displays, gallery walls, or as a standalone contemporary piece. Ready to hang with integrated back-mounting hardware.",
  "High-quality photo desk nameplate with your favourite photo printed directly onto premium acrylic. The UV-curable ink technology delivers vibrant, true-to-life colours that are sealed beneath a gloss laminate for lasting protection. The acrylic panel is mounted on a sturdy base with a floating effect. Ideal for office desks, reception areas, or as a thoughtful corporate gift.",
]

const productDefs: Omit<Product, "sizes" | "fullDescription" | "images">[] = [
  {
    id: 1, name: "Classic Gold Acrylic Nameplate",
    description: "Elegant gold-finished acrylic nameplate with premium laser engraving. Perfect for modern homes.",
    price: 1899, originalPrice: 2499, rating: 4.8, reviewCount: 124,
    category: "House Name Plates", subcategory: "Acrylic Name Plates",
    isBestSeller: true, material: "Acrylic", finish: "Gold",
  },
  {
    id: 2, name: "Brushed Steel Home Nameplate",
    description: "Sleek brushed stainless steel nameplate with a sophisticated matte finish.",
    price: 2199, originalPrice: 2999, rating: 4.7, reviewCount: 98,
    category: "House Name Plates", subcategory: "Stainless Steel Name Plates",
    isBestSeller: true, material: "Stainless Steel", finish: "Brushed",
  },
  {
    id: 3, name: "LED Illuminated Nameplate - Frosted",
    description: "Modern LED-backlit nameplate with frosted acrylic face and warm white glow.",
    price: 3499, originalPrice: 4499, rating: 4.9, reviewCount: 156,
    category: "House Name Plates", subcategory: "Lighted Name Plates",
    isBestSeller: true, material: "Acrylic + LED", finish: "Frosted",
  },
  {
    id: 4, name: "Black Marble Acrylic Nameplate",
    description: "Premium black marble-pattern acrylic nameplate with gold beveled edges.",
    price: 2599, originalPrice: 3299, rating: 4.6, reviewCount: 87,
    category: "Office Name Plates", subcategory: "Desk Name Plates",
    isBestSeller: false, material: "Acrylic", finish: "Marble",
  },
  {
    id: 5, name: "Modern Stainless Steel Nameplate",
    description: "Contemporary stainless steel nameplate with precision laser etching and mirror polish.",
    price: 2499, originalPrice: 3199, rating: 4.7, reviewCount: 112,
    category: "House Name Plates", subcategory: "Stainless Steel Name Plates",
    isBestSeller: true, material: "Stainless Steel", finish: "Mirror",
  },
  {
    id: 6, name: "Gold Edge Acrylic Nameplate",
    description: "Crystal clear acrylic nameplate with elegant gold edge trim and engraved text.",
    price: 1699, originalPrice: 2199, rating: 4.5, reviewCount: 73,
    category: "House Name Plates", subcategory: "Acrylic Name Plates",
    isBestSeller: false, material: "Acrylic", finish: "Gold Edge",
  },
  {
    id: 7, name: "Rustic Light Nameplate - Warm Glow",
    description: "Handcrafted nameplate with integrated warm LED lighting and rustic wooden base.",
    price: 3999, originalPrice: 4999, rating: 4.8, reviewCount: 64,
    category: "House Name Plates", subcategory: "Lighted Name Plates",
    isBestSeller: false, material: "Wood + LED", finish: "Rustic",
  },
  {
    id: 8, name: "Matte Black Acrylic Nameplate",
    description: "Sophisticated matte black acrylic nameplate with high-contrast white engraving.",
    price: 1499, rating: 4.4, reviewCount: 91,
    category: "Office Name Plates", subcategory: "Desk Name Plates",
    isBestSeller: false, material: "Acrylic", finish: "Matte Black",
  },
  {
    id: 9, name: "Mirror Finish Steel Nameplate",
    description: "High-gloss mirror polished stainless steel nameplate with deep laser engraving.",
    price: 2799, originalPrice: 3599, rating: 4.6, reviewCount: 78,
    category: "House Name Plates", subcategory: "Stainless Steel Name Plates",
    isBestSeller: false, material: "Stainless Steel", finish: "Mirror Polish",
  },
  {
    id: 10, name: "Slim LED Nameplate - Cool White",
    description: "Ultra-slim LED nameplate with cool white illumination and minimalist design.",
    price: 2999, originalPrice: 3799, rating: 4.7, reviewCount: 134,
    category: "House Name Plates", subcategory: "Lighted Name Plates",
    isBestSeller: true, material: "Acrylic + LED", finish: "Slim White",
  },
  {
    id: 11, name: "Rose Gold Acrylic Nameplate",
    description: "Trendy rose gold acrylic nameplate with elegant bevelled edges and premium finish.",
    price: 1999, originalPrice: 2599, rating: 4.9, reviewCount: 167,
    category: "House Name Plates", subcategory: "Acrylic Name Plates",
    isBestSeller: true, material: "Acrylic", finish: "Rose Gold",
  },
  {
    id: 12, name: "Textured Steel Office Nameplate",
    description: "Professional textured stainless steel nameplate with subtle satin finish.",
    price: 2299, rating: 4.5, reviewCount: 56,
    category: "Office Name Plates", subcategory: "Desk Name Plates",
    isBestSeller: false, material: "Stainless Steel", finish: "Satin",
  },
  {
    id: 13, name: "Copper Edge Light Nameplate",
    description: "Unique nameplate with copper edging and soft ambient LED backlighting.",
    price: 3799, originalPrice: 4699, rating: 4.6, reviewCount: 45,
    category: "House Name Plates", subcategory: "Lighted Name Plates",
    isBestSeller: false, material: "Copper + LED", finish: "Copper Edge",
  },
  {
    id: 14, name: "Glossy White Acrylic Nameplate",
    description: "Clean glossy white acrylic nameplate perfect for modern minimalist interiors.",
    price: 1299, rating: 4.3, reviewCount: 82,
    category: "House Name Plates", subcategory: "Acrylic Name Plates",
    isBestSeller: false, material: "Acrylic", finish: "Glossy White",
  },
  {
    id: 15, name: "Vertical Stainless Steel Nameplate",
    description: "Space-saving vertical format stainless steel nameplate with elegant proportions.",
    price: 2399, originalPrice: 2999, rating: 4.4, reviewCount: 67,
    category: "House Name Plates", subcategory: "Stainless Steel Name Plates",
    isBestSeller: false, material: "Stainless Steel", finish: "Brushed",
  },
  {
    id: 16, name: "Neon Edge LED Nameplate",
    description: "Vibrant neon-edge illuminated nameplate available in multiple color options.",
    price: 4299, originalPrice: 5299, rating: 4.7, reviewCount: 93,
    category: "House Name Plates", subcategory: "Lighted Name Plates",
    isBestSeller: false, material: "Acrylic + RGB LED", finish: "Neon Edge",
  },
  {
    id: 17, name: "Wood Finish Acrylic Nameplate",
    description: "Natural wood grain effect acrylic nameplate combining warmth with durability.",
    price: 1899, rating: 4.5, reviewCount: 59,
    category: "House Name Plates", subcategory: "Acrylic Name Plates",
    isBestSeller: false, material: "Acrylic", finish: "Wood Grain",
  },
  {
    id: 18, name: "Pearl White Steel Nameplate",
    description: "Premium pearl white coated stainless steel nameplate with elegant sheen.",
    price: 2599, originalPrice: 3299, rating: 4.6, reviewCount: 71,
    category: "House Name Plates", subcategory: "Stainless Steel Name Plates",
    isBestSeller: false, material: "Stainless Steel", finish: "Pearl White",
  },
  {
    id: 19, name: "Dual-Color LED Nameplate",
    description: "Innovative dual-color LED nameplate switchable between warm and cool light.",
    price: 4599, originalPrice: 5599, rating: 4.8, reviewCount: 48,
    category: "House Name Plates", subcategory: "Lighted Name Plates",
    isBestSeller: true, material: "Acrylic + Dual LED", finish: "Dual-Color",
  },
  {
    id: 20, name: "Premium Brass Acrylic Nameplate",
    description: "Luxury brass-toned acrylic nameplate with deep engraved lettering and premium packaging.",
    price: 3199, originalPrice: 4199, rating: 4.9, reviewCount: 203,
    category: "House Name Plates", subcategory: "Acrylic Name Plates",
    isBestSeller: true, material: "Acrylic", finish: "Brass",
  },
  {
    id: 21, name: "Memorial Photo Engraving on Granite",
    description: "High-quality photo engraving on polished black granite for lasting memorials.",
    price: 5499, originalPrice: 6999, rating: 4.8, reviewCount: 87,
    category: "Granite Monuments", subcategory: "Photo Engraving on Granite",
    isBestSeller: false, material: "Granite", finish: "Polished",
  },
  {
    id: 22, name: "Classic Premium Headstone",
    description: "Expertly carved Indian black granite headstone with gold-leaf inscriptions.",
    price: 14999, originalPrice: 18999, rating: 4.9, reviewCount: 112,
    category: "Granite Monuments", subcategory: "Premium Headstone Collection",
    isBestSeller: true, material: "Granite", finish: "Diamond Polish",
  },
  {
    id: 23, name: "Arabic Inscription Granite Monument",
    description: "Hand-carved Arabic calligraphy on polished granite with gold or silver leaf.",
    price: 11999, originalPrice: 14999, rating: 4.7, reviewCount: 64,
    category: "Granite Monuments", subcategory: "Arabic Inscriptions",
    isBestSeller: false, material: "Granite", finish: "Polished",
  },
  {
    id: 24, name: "Elegant Inauguration Plaque",
    description: "Premium granite inauguration plaque with brushed finish and engraved text.",
    price: 6499, originalPrice: 7999, rating: 4.6, reviewCount: 41,
    category: "Granite Monuments", subcategory: "Inauguration Plaques",
    isBestSeller: false, material: "Granite", finish: "Brushed",
  },
  {
    id: 25, name: "Landscape Acrylic Wall Photo",
    description: "Vibrant landscape photo printed on premium acrylic with floating wall effect.",
    price: 2999, originalPrice: 3799, rating: 4.5, reviewCount: 56,
    category: "Acrylic Wall Photos", subcategory: "Landscape",
    isBestSeller: false, material: "Acrylic", finish: "Gloss Laminate",
  },
  {
    id: 26, name: "Portrait Acrylic Wall Photo",
    description: "Crystal-clear acrylic portrait print with exceptional colour and detail.",
    price: 2799, originalPrice: 3499, rating: 4.6, reviewCount: 48,
    category: "Acrylic Wall Photos", subcategory: "Portrait",
    isBestSeller: false, material: "Acrylic", finish: "High-Gloss",
  },
  {
    id: 27, name: "Square Acrylic Wall Photo",
    description: "Square-format acrylic wall photo with sleek minimalist presentation.",
    price: 2599, originalPrice: 3299, rating: 4.4, reviewCount: 33,
    category: "Acrylic Wall Photos", subcategory: "Square",
    isBestSeller: false, material: "Acrylic", finish: "High-Gloss",
  },
  {
    id: 28, name: "Custom Photo Desk Nameplate",
    description: "Personalized photo desk nameplate with vibrant print on premium acrylic base.",
    price: 2499, originalPrice: 3199, rating: 4.7, reviewCount: 52,
    category: "Office Name Plates", subcategory: "Photo Desk Name Plates",
    isBestSeller: false, material: "Acrylic", finish: "Gloss Laminate",
  },
]

const categoryImages: Record<string, string[]> = {
  "Acrylic Name Plates": [assets.houseAcrylic1, assets.houseAcrylic2],
  "Metal Name Plates": [assets.houseMetal1, assets.houseMetal2],
  "Stainless Steel Name Plates": [assets.houseSteel1, assets.houseSteel2],
  "Lighted Name Plates": [assets.houseLeds1, assets.houseLeds2],
  "Photo Desk Name Plates": [assets.officePhoto1, assets.officePhoto2],
  "Desk Name Plates": [assets.officeDesk1, assets.officeDesk2],
  "Photo Engraving on Granite": [assets.graniteMonument1, assets.graniteMonument2],
  "Premium Headstone Collection": [assets.graniteHeadstone1, assets.graniteHeadstone2],
  "Arabic Inscriptions": [assets.graniteArabic1, assets.graniteArabic2],
  "Inauguration Plaques": [assets.graniteInaug1, assets.graniteInaug1],
  "Landscape": [assets.acrylicLandscape1, assets.acrylicLandscape2],
  "Portrait": [assets.acrylicPortrait1, assets.acrylicPortrait2],
  "Square": [assets.acrylicSquare1, assets.acrylicSquare2],
}

const fallbackImages = [assets.houseAcrylic1, assets.houseAcrylic2]

export const products: Product[] = productDefs.map((def) => {
  const imgs = categoryImages[def.subcategory] || fallbackImages
  return {
    ...def,
    images: [imgs[0], imgs[1], imgs[0], imgs[1]],
    fullDescription: fullDescriptions[def.id - 1],
    sizes: defaultSizes,
  }
})

export const getProductById = (id: number) => products.find((p) => p.id === id)

export const getProductsByCategory = (category: string) =>
  products.filter(
    (p) =>
      p.category.toLowerCase().replace(/[\s-]/g, "") ===
      category.toLowerCase().replace(/[\s-]/g, ""),
  )

export const getProductsBySubcategory = (category: string, subcategory: string) =>
  products.filter(
    (p) =>
      p.category.toLowerCase().includes(category.toLowerCase()) &&
      p.subcategory.toLowerCase().includes(subcategory.toLowerCase()),
  )

export const getBestSellers = () => products.filter((p) => p.isBestSeller)

export const getMostLoved = () => [...products].sort((a, b) => b.rating - a.rating).slice(0, 8)

export function getOnePerSubcategory(items: Product[]): Product[] {
  const seen = new Set<string>()
  return items.filter((p) => {
    if (seen.has(p.subcategory)) return false
    seen.add(p.subcategory)
    return true
  })
}
