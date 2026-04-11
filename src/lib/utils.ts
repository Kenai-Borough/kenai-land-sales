import { format, formatDistanceToNow } from 'date-fns'
import type { BrowseFilters, Parcel } from '../types'

export const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ')

export const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount)

export const formatNumber = (value: number, maximumFractionDigits = 1) =>
  new Intl.NumberFormat('en-US', { maximumFractionDigits }).format(value)

export const formatDate = (value: string) => format(new Date(value), 'MMM d, yyyy')
export const formatRelativeTime = (value: string) =>
  formatDistanceToNow(new Date(value), { addSuffix: true })
export const pricePerAcre = (price: number, acreage: number) =>
  acreage ? price / acreage : 0

export const landTypeLabels: Record<string, string> = {
  residential: 'Residential',
  commercial: 'Commercial',
  agricultural: 'Agricultural',
  recreational: 'Recreational',
  waterfront: 'Waterfront',
  riverfront: 'Riverfront',
  off_grid: 'Off-Grid',
  homestead: 'Homestead',
  timber: 'Timber',
  mineral_rights: 'Mineral Rights',
  mixed_use: 'Mixed Use',
}

export const defaultFilters: BrowseFilters = {
  query: '',
  location: '',
  city: 'All',
  region: 'All',
  priceRange: [0, 500000],
  acreageRange: [0, 100],
  landTypes: [],
  features: [],
  zoning: 'All',
  sortBy: 'newest',
}

export function filterParcels(parcels: Parcel[], filters: BrowseFilters) {
  const query = filters.query.trim().toLowerCase()
  const filtered = parcels.filter((parcel) => {
    const matchesQuery =
      !query ||
      [
        parcel.title,
        parcel.city,
        parcel.region,
        parcel.description,
        parcel.features.join(' '),
      ]
        .join(' ')
        .toLowerCase()
        .includes(query)

    const matchesLocation =
      !filters.location ||
      parcel.locationLabel.toLowerCase().includes(filters.location.toLowerCase())
    const matchesCity = filters.city === 'All' || parcel.city === filters.city
    const matchesRegion = filters.region === 'All' || parcel.region === filters.region
    const matchesPrice =
      parcel.price >= filters.priceRange[0] && parcel.price <= filters.priceRange[1]
    const matchesAcreage =
      parcel.acreage >= filters.acreageRange[0] &&
      parcel.acreage <= filters.acreageRange[1]
    const matchesLandType =
      !filters.landTypes.length || filters.landTypes.includes(parcel.landType)
    const matchesFeatures =
      !filters.features.length ||
      filters.features.every((feature) => parcel.features.includes(feature))
    const matchesZoning = filters.zoning === 'All' || parcel.zoning === filters.zoning

    return (
      matchesQuery &&
      matchesLocation &&
      matchesCity &&
      matchesRegion &&
      matchesPrice &&
      matchesAcreage &&
      matchesLandType &&
      matchesFeatures &&
      matchesZoning
    )
  })

  return filtered.sort((left, right) => {
    switch (filters.sortBy) {
      case 'price_low':
        return left.price - right.price
      case 'price_high':
        return right.price - left.price
      case 'acreage':
        return right.acreage - left.acreage
      case 'most_viewed':
        return right.views - left.views
      default:
        return +new Date(right.listedAt) - +new Date(left.listedAt)
    }
  })
}

export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

export function serializePolygon(points: [number, number][]) {
  return points
    .map(([lat, lng]) => lat.toFixed(5) + ', ' + lng.toFixed(5))
    .join(' • ')
}

export function approximatePolygonAreaInAcres(points: [number, number][]) {
  if (points.length < 3) return 0
  const earthRadius = 6378137
  const xy = points.map(([lat, lng]) => {
    const x = (lng * Math.PI * earthRadius * Math.cos((lat * Math.PI) / 180)) / 180
    const y = (lat * Math.PI * earthRadius) / 180
    return [x, y] as const
  })

  let area = 0
  for (let index = 0; index < xy.length; index += 1) {
    const [x1, y1] = xy[index]
    const [x2, y2] = xy[(index + 1) % xy.length]
    area += x1 * y2 - x2 * y1
  }

  return Math.abs(area / 2) / 4046.85642
}

export function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function createMetaDescription(text: string, max = 155) {
  return text.length <= max ? text : text.slice(0, max - 1).trim() + '…'
}
