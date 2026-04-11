export type LandType =
  | 'residential'
  | 'commercial'
  | 'agricultural'
  | 'recreational'
  | 'waterfront'
  | 'riverfront'
  | 'off_grid'
  | 'homestead'
  | 'timber'
  | 'mineral_rights'
  | 'mixed_use'

export type ListingStatus =
  | 'draft'
  | 'pending_review'
  | 'active'
  | 'under_contract'
  | 'sold'
  | 'expired'
  | 'withdrawn'

export type ThemeMode = 'light' | 'dark'

export interface SellerProfile {
  id: string
  name: string
  email: string
  phone: string
  verified: boolean
  successRate: number
  transactionCount: number
  responseRate: number
  responseTime: string
}

export interface DueDiligenceSummary {
  titleStatus: string
  surveyStatus: string
  environmentalStatus: string
  easements: string
  liens: string
  docsReady: string[]
}

export interface NearbyAmenity {
  label: string
  distance: string
}

export interface ParcelDocument {
  type: string
  label: string
}

export interface ParcelMetric {
  label: string
  value: string
}

export interface Parcel {
  id: string
  slug: string
  title: string
  city: string
  borough: string
  region: string
  address: string
  gps: string
  price: number
  acreage: number
  landType: LandType
  zoning: string
  status: ListingStatus
  locationLabel: string
  coordinates: [number, number]
  boundary: [number, number][]
  views: number
  favorites: number
  featured: boolean
  verifiedSeller: boolean
  clearTitle: boolean
  surveyed: boolean
  roadAccess: string
  utilities: string[]
  features: string[]
  description: string
  sellerNotes: string
  dueDiligence: DueDiligenceSummary
  nearbyAmenities: NearbyAmenity[]
  photos: string[]
  documents: ParcelDocument[]
  seller: SellerProfile
  listedAt: string
  metrics: ParcelMetric[]
}

export interface BrowseFilters {
  query: string
  location: string
  city: string
  region: string
  priceRange: [number, number]
  acreageRange: [number, number]
  landTypes: LandType[]
  features: string[]
  zoning: string
  sortBy: 'newest' | 'price_low' | 'price_high' | 'acreage' | 'most_viewed'
}

export interface MarketPoint {
  period: string
  averagePricePerAcre: number
  averageDaysOnMarket: number
  closedSales: number
}

export interface Testimonial {
  name: string
  role: string
  quote: string
  savings: string
}

export interface DashboardInquiry {
  id: string
  parcelId: string
  name: string
  email: string
  phone: string
  message: string
  receivedAt: string
  status: 'new' | 'responded' | 'scheduled'
}

export interface DashboardTransaction {
  id: string
  parcelId: string
  buyer: string
  salePrice: number
  status: 'escrow_open' | 'title_review' | 'closing_scheduled' | 'closed'
  escrowCompany: string
  closingDate: string
}

export interface SavedSearch {
  id: string
  label: string
  criteria: string
  alerts: boolean
}

export interface ToastMessage {
  id: string
  title: string
  description?: string
  variant?: 'default' | 'success' | 'error'
}
