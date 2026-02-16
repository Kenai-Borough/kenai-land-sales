import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { LandListing } from '../types'
import { formatCurrency, formatRelativeTime } from '../lib/utils'
import { MapPin, Maximize2 } from 'lucide-react'

export default function BrowsePage() {
  const [listings, setListings] = useState<LandListing[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    minAcreage: '',
    location: '',
    roadAccess: '',
  })

  useEffect(() => {
    fetchListings()
  }, [filters])

  async function fetchListings() {
    setLoading(true)
    let query = supabase
      .from('land_listings')
      .select('*')
      .eq('status', 'active')
      .order('created_at', { ascending: false })

    if (filters.minPrice) query = query.gte('price', filters.minPrice)
    if (filters.maxPrice) query = query.lte('price', filters.maxPrice)
    if (filters.minAcreage) query = query.gte('acreage', filters.minAcreage)
    if (filters.location) query = query.ilike('location', `%${filters.location}%`)
    if (filters.roadAccess) query = query.eq('road_access', filters.roadAccess)

    const { data, error } = await query
    if (!error && data) {
      setListings(data)
    }
    setLoading(false)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Land Listings</h1>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold mb-4">Filter Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="number"
            placeholder="Min Price"
            className="border rounded-lg px-4 py-2"
            value={filters.minPrice}
            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
          />
          <input
            type="number"
            placeholder="Max Price"
            className="border rounded-lg px-4 py-2"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
          />
          <input
            type="number"
            placeholder="Min Acreage"
            className="border rounded-lg px-4 py-2"
            value={filters.minAcreage}
            onChange={(e) => setFilters({ ...filters, minAcreage: e.target.value })}
          />
          <input
            type="text"
            placeholder="Location"
            className="border rounded-lg px-4 py-2"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          />
          <select
            className="border rounded-lg px-4 py-2"
            value={filters.roadAccess}
            onChange={(e) => setFilters({ ...filters, roadAccess: e.target.value })}
          >
            <option value="">Road Access</option>
            <option value="paved">Paved</option>
            <option value="gravel">Gravel</option>
            <option value="trail">Trail</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <Link
              key={listing.id}
              to={`/listing/${listing.id}`}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition"
            >
              <div className="aspect-video bg-gray-200 relative">
                {listing.images[0] ? (
                  <img src={listing.images[0]} alt={listing.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">No image</div>
                )}
                {listing.featured && (
                  <span className="absolute top-2 right-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 truncate">{listing.title}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">{formatCurrency(listing.price)}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                  <span className="flex items-center gap-1">
                    <Maximize2 size={16} />
                    {listing.acreage} acres
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {listing.location}
                  </span>
                </div>
                <p className="text-sm text-gray-500">Posted {formatRelativeTime(listing.created_at)}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {!loading && listings.length === 0 && (
        <div className="text-center py-12 text-gray-600">
          <p>No listings found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}
