export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  productCount: number
  children?: SubCategory[]
}

export interface SubCategory {
  id: string
  name: string
  slug: string
  description: string
}

export const houseNameplateSubcategories: SubCategory[] = [
  { id: "hn-all", name: "Browse All", slug: "", description: "All house name plates" },
  { id: "hn-acrylic", name: "Acrylic Name Plates", slug: "acrylic", description: "Premium acrylic house name plates" },
  { id: "hn-metal", name: "Metal Name Plates", slug: "metal", description: "Premium metal house name plates" },
  {
    id: "hn-stainless",
    name: "Stainless Steel Name Plates",
    slug: "stainless-steel",
    description: "Durable steel house name plates",
  },
  { id: "hn-lighted", name: "Lighted Name Plates", slug: "lighted", description: "Illuminated LED house name plates" },
]

export const officeNameplateSubcategories: SubCategory[] = [
  { id: "on-all", name: "Browse All", slug: "", description: "All office name plates" },
  { id: "on-photo-desk", name: "Photo Desk Name Plates", slug: "photo-desk", description: "Photo desk name plates for offices" },
  { id: "on-desk", name: "Desk Name Plates", slug: "desk", description: "Professional desk name plates" },
]

export const graniteMonumentSubcategories: SubCategory[] = [
  { id: "gm-all", name: "Browse All", slug: "", description: "All granite monuments" },
  { id: "gm-photo", name: "Photo Engraving on Granite", slug: "photo-engraving", description: "Photo engraving on granite" },
  { id: "gm-headstone", name: "Premium Headstone Collection", slug: "headstone", description: "Premium headstone collection" },
  { id: "gm-arabic", name: "Arabic Inscriptions", slug: "arabic-inscriptions", description: "Arabic inscription monuments" },
  { id: "gm-inauguration", name: "Inauguration Plaques", slug: "inauguration-plaques", description: "Elegant inauguration plaques" },
]

export const acrylicWallPhotoSubcategories: SubCategory[] = [
  { id: "awp-all", name: "Browse All", slug: "", description: "All acrylic wall photos" },
  { id: "awp-landscape", name: "Landscape", slug: "landscape", description: "Landscape acrylic wall photos" },
  { id: "awp-portrait", name: "Portrait", slug: "portrait", description: "Portrait acrylic wall photos" },
  { id: "awp-square", name: "Square", slug: "square", description: "Square acrylic wall photos" },
]

export const catalogueCategories: Category[] = [
  {
    id: "house-name-plates",
    name: "House Name Plates",
    slug: "house-name-plates",
    description: "Beautifully crafted name plates for your home entrance",
    image: "",
    productCount: 16,
    children: houseNameplateSubcategories.slice(1),
  },
  {
    id: "office-name-plates",
    name: "Office Name Plates",
    slug: "office-name-plates",
    description: "Professional name plates for modern work environments",
    image: "",
    productCount: 4,
    children: officeNameplateSubcategories.slice(1),
  },
  {
    id: "granite-monuments",
    name: "Granite Monuments",
    slug: "granite-monuments",
    description: "Premium granite monuments and inscriptions",
    image: "",
    productCount: 4,
    children: graniteMonumentSubcategories.slice(1),
  },
  {
    id: "acrylic-wall-photos",
    name: "Acrylic Wall Photos",
    slug: "acrylic-wall-photos",
    description: "Beautiful photo engraving on acrylic",
    image: "",
    productCount: 3,
    children: acrylicWallPhotoSubcategories.slice(1),
  },
]
