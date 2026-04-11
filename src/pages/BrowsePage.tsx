import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Grid2x2, Map, SlidersHorizontal } from 'lucide-react'
import ParcelMap from '../components/ParcelMap'
import PropertyCard from '../components/PropertyCard'
import Seo from '../components/Seo'
import { cities, landFeatures, parcels, regions, zoningOptions } from '../data/parcels'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { defaultFilters, filterParcels, landTypeLabels } from '../lib/utils'
import type { BrowseFilters, LandType } from '../types'

const pageSize = 9
const landTypes = Object.entries(landTypeLabels) as [LandType, string][]

export default function BrowsePage() {
  const [params] = useSearchParams()
  const [filters, setFilters] = useState<BrowseFilters>(defaultFilters)
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list')
  const [favorites, setFavorites] = useLocalStorage<string[]>('kenai-favorites', [])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const price = params.get('price') || ''
    const acreage = params.get('acreage') || ''
    const type = params.get('type') || ''

    setFilters((current) => ({
      ...current,
      location: params.get('location') || '',
      priceRange:
        price === 'Under $50K'
          ? [0, 50000]
          : price === '$50K - $150K'
            ? [50000, 150000]
            : price === '$150K - $300K'
              ? [150000, 300000]
              : price === '$300K+'
                ? [300000, 500000]
                : current.priceRange,
      acreageRange:
        acreage === 'Under 2 acres'
          ? [0, 2]
          : acreage === '2 to 10 acres'
            ? [2, 10]
            : acreage === '10 to 40 acres'
              ? [10, 40]
              : acreage === '40+ acres'
                ? [40, 80]
                : current.acreageRange,
      landTypes:
        type && type !== 'Any type'
          ? [type.toLowerCase().replace('-', '_') as LandType]
          : current.landTypes,
    }))
  }, [params])

  const filteredParcels = useMemo(() => filterParcels(parcels, filters), [filters])
  const paginatedParcels = filteredParcels.slice(0, page * pageSize)

  useEffect(() => {
    setPage(1)
  }, [filters])

  const toggleFavorite = (parcelId: string) => {
    setFavorites((current) =>
      current.includes(parcelId)
        ? current.filter((id) => id !== parcelId)
        : [...current, parcelId],
    )
  }

  const toggleLandType = (landType: LandType) => {
    setFilters((current) => ({
      ...current,
      landTypes: current.landTypes.includes(landType)
        ? current.landTypes.filter((item) => item !== landType)
        : [...current.landTypes, landType],
    }))
  }

  const toggleFeature = (feature: string) => {
    setFilters((current) => ({
      ...current,
      features: current.features.includes(feature)
        ? current.features.filter((item) => item !== feature)
        : [...current.features, feature],
    }))
  }

  return (
    <>
      <Seo
        title="Browse Kenai Peninsula Land | Kenai Land Sales"
        description="Filter FSBO land by city, price, acreage, land type, features, and zoning with satellite map browsing across the Kenai Peninsula."
      />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="lg:w-[22rem]">
            <div className="sticky top-24 space-y-5 rounded-[32px] border border-white/10 bg-[var(--color-surface)] p-6">
              <div className="flex items-center gap-3">
                <SlidersHorizontal className="h-5 w-5 text-[var(--color-primary)]" />
                <h1 className="text-2xl font-semibold">Advanced search</h1>
              </div>

              <input
                value={filters.query}
                onChange={(event) =>
                  setFilters((current) => ({ ...current, query: event.target.value }))
                }
                placeholder="Search by keyword or feature"
                className="w-full rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
              />

              <div className="grid grid-cols-2 gap-3">
                <select
                  value={filters.city}
                  onChange={(event) =>
                    setFilters((current) => ({ ...current, city: event.target.value }))
                  }
                  className="rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
                >
                  {cities.map((city) => (
                    <option key={city}>{city}</option>
                  ))}
                </select>
                <select
                  value={filters.region}
                  onChange={(event) =>
                    setFilters((current) => ({ ...current, region: event.target.value }))
                  }
                  className="rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
                >
                  {regions.map((region) => (
                    <option key={region}>{region}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-[var(--color-muted)]">
                  <span>Price range</span>
                  <span>
                    ${filters.priceRange[0].toLocaleString()} - $
                    {filters.priceRange[1].toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={500000}
                  step={5000}
                  value={filters.priceRange[0]}
                  onChange={(event) =>
                    setFilters((current) => ({
                      ...current,
                      priceRange: [Number(event.target.value), current.priceRange[1]],
                    }))
                  }
                  className="w-full"
                />
                <input
                  type="range"
                  min={50000}
                  max={500000}
                  step={5000}
                  value={filters.priceRange[1]}
                  onChange={(event) =>
                    setFilters((current) => ({
                      ...current,
                      priceRange: [current.priceRange[0], Number(event.target.value)],
                    }))
                  }
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-[var(--color-muted)]">
                  <span>Acreage range</span>
                  <span>
                      {filters.acreageRange[0]} -{' '}
                      {filters.acreageRange[1] >= 100 ? '100+' : filters.acreageRange[1]} acres
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                   max={120}
                  step={1}
                  value={filters.acreageRange[0]}
                  onChange={(event) =>
                    setFilters((current) => ({
                      ...current,
                      acreageRange: [Number(event.target.value), current.acreageRange[1]],
                    }))
                  }
                  className="w-full"
                />
                <input
                  type="range"
                  min={1}
                   max={120}
                  step={1}
                  value={filters.acreageRange[1]}
                  onChange={(event) =>
                    setFilters((current) => ({
                      ...current,
                      acreageRange: [current.acreageRange[0], Number(event.target.value)],
                    }))
                  }
                  className="w-full"
                />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  Land type
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {landTypes.map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => toggleLandType(value)}
                      className={
                        'rounded-full px-3 py-2 text-sm ' +
                        (filters.landTypes.includes(value)
                          ? 'bg-[var(--color-primary)] text-white'
                          : 'bg-[var(--color-surface-elevated)] text-[var(--color-muted)]')
                      }
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  Features
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {landFeatures.map((feature) => (
                    <button
                      key={feature}
                      type="button"
                      onClick={() => toggleFeature(feature)}
                      className={
                        'rounded-full px-3 py-2 text-sm capitalize ' +
                        (filters.features.includes(feature)
                          ? 'bg-emerald-800 text-white'
                          : 'bg-[var(--color-surface-elevated)] text-[var(--color-muted)]')
                      }
                    >
                      {feature}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <select
                  value={filters.zoning}
                  onChange={(event) =>
                    setFilters((current) => ({ ...current, zoning: event.target.value }))
                  }
                  className="rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
                >
                  {zoningOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
                <select
                  value={filters.sortBy}
                  onChange={(event) =>
                    setFilters((current) => ({
                      ...current,
                      sortBy: event.target.value as BrowseFilters['sortBy'],
                    }))
                  }
                  className="rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
                >
                  <option value="newest">Newest</option>
                  <option value="price_low">Price low</option>
                  <option value="price_high">Price high</option>
                  <option value="acreage">Acreage</option>
                  <option value="most_viewed">Most viewed</option>
                </select>
              </div>
            </div>
          </aside>

          <section className="min-w-0 flex-1 space-y-6">
            <div className="flex flex-col gap-4 rounded-[32px] border border-white/10 bg-[var(--color-surface)] p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  Results
                </p>
                <h2 className="text-3xl font-semibold">
                  {filteredParcels.length} parcels matching your filters
                </h2>
              </div>
              <div className="inline-flex rounded-full border border-white/10 bg-[var(--color-surface-elevated)] p-1">
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={
                    'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ' +
                    (viewMode === 'list' ? 'bg-[var(--color-primary)] text-white' : '')
                  }
                >
                  <Grid2x2 className="h-4 w-4" />
                  List
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('map')}
                  className={
                    'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ' +
                    (viewMode === 'map' ? 'bg-[var(--color-primary)] text-white' : '')
                  }
                >
                  <Map className="h-4 w-4" />
                  Map
                </button>
              </div>
            </div>

            {viewMode === 'map' ? (
              <ParcelMap parcels={filteredParcels} heightClassName="h-[40rem]" />
            ) : null}

            <div className="grid gap-6 xl:grid-cols-2">
              {paginatedParcels.map((parcel) => (
                <PropertyCard
                  key={parcel.id}
                  parcel={parcel}
                  compact
                  onFavorite={toggleFavorite}
                  favorite={favorites.includes(parcel.id)}
                />
              ))}
            </div>

            {paginatedParcels.length < filteredParcels.length ? (
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setPage((current) => current + 1)}
                  className="rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-white"
                >
                  Load more parcels
                </button>
              </div>
            ) : null}
          </section>
        </div>
      </div>
    </>
  )
}
