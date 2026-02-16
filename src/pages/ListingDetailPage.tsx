import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { LandListing } from '../types'
import { formatCurrency, formatDate, calculateDaysRemaining } from '../lib/utils'
import { MapPin, Maximize2, Check, X, FileText } from 'lucide-react'
import SafetyTips from '../components/SafetyTips'

export default function ListingDetailPage() {
  const { id } = useParams()
  const [listing, setListing] = useState<LandListing | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      fetchListing(id)
      incrementViews(id)
    }
  }, [id])

  async function fetchListing(listingId: string) {
    const { data, error } = await supabase
      .from('land_listings')
      .select('*')
      .eq('id', listingId)
      .single()

    if (!error && data) {
      setListing(data)
    }
    setLoading(false)
  }

  async function incrementViews(listingId: string) {
    await supabase.rpc('increment_listing_views', {
      listing_id: listingId,
      listing_type: 'land'
    })
  }

  if (loading) {
    return <div className="max-w-7xl mx-auto px-4 py-16 text-center">Loading...</div>
  }

  if (!listing) {
    return <div className="max-w-7xl mx-auto px-4 py-16 text-center">Listing not found</div>
  }

  const daysRemaining = calculateDaysRemaining(listing.expires_at)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Images */}
          <div className="bg-gray-200 aspect-video rounded-lg mb-6">
            {listing.images[0] ? (
              <img src={listing.images[0]} alt={listing.title} className="w-full h-full object-cover rounded-lg" />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">No image available</div>
            )}
          </div>

          {/* Title and Price */}
          <div className="mb-6">
            {listing.featured && (
              <span className="inline-block bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                ⭐ Featured Listing
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{listing.title}</h1>
            <div className="flex items-center gap-4 text-lg text-gray-600 mb-4">
              <span className="flex items-center gap-2">
                <MapPin size={20} />
                {listing.location}
              </span>
              <span className="flex items-center gap-2">
                <Maximize2 size={20} />
                {listing.acreage} acres
              </span>
            </div>
            <p className="text-4xl font-bold text-blue-600">{formatCurrency(listing.price)}</p>
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700 whitespace-pre-line">{listing.description}</p>
          </div>

          {/* Property Details */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {listing.zoning && (
                <div className="border-b pb-3">
                  <span className="text-gray-600">Zoning:</span>
                  <span className="font-semibold ml-2">{listing.zoning}</span>
                </div>
              )}
              {listing.parcel_number && (
                <div className="border-b pb-3">
                  <span className="text-gray-600">Parcel Number:</span>
                  <span className="font-semibold ml-2">{listing.parcel_number}</span>
                </div>
              )}
              <div className="border-b pb-3">
                <span className="text-gray-600">Road Access:</span>
                <span className="font-semibold ml-2 capitalize">{listing.road_access}</span>
              </div>
              {listing.topography && (
                <div className="border-b pb-3">
                  <span className="text-gray-600">Topography:</span>
                  <span className="font-semibold ml-2">{listing.topography}</span>
                </div>
              )}
              {listing.property_tax_annual && (
                <div className="border-b pb-3">
                  <span className="text-gray-600">Annual Tax:</span>
                  <span className="font-semibold ml-2">{formatCurrency(listing.property_tax_annual)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Utilities */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Available Utilities</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                {listing.utilities_water ? <Check className="text-green-600" /> : <X className="text-gray-400" />}
                <span>Water</span>
              </div>
              <div className="flex items-center gap-2">
                {listing.utilities_electric ? <Check className="text-green-600" /> : <X className="text-gray-400" />}
                <span>Electric</span>
              </div>
              <div className="flex items-center gap-2">
                {listing.utilities_sewer ? <Check className="text-green-600" /> : <X className="text-gray-400" />}
                <span>Sewer</span>
              </div>
              <div className="flex items-center gap-2">
                {listing.utilities_gas ? <Check className="text-green-600" /> : <X className="text-gray-400" />}
                <span>Gas</span>
              </div>
            </div>
          </div>

          {listing.land_use_suggestions && (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Land Use Suggestions</h2>
              <p className="text-gray-700">{listing.land_use_suggestions}</p>
            </div>
          )}

          <SafetyTips />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
            <h3 className="text-xl font-semibold mb-4">Contact Seller</h3>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 mb-3">
              Send Message
            </button>
            <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200">
              Save Listing
            </button>

            <div className="mt-6 pt-6 border-t">
              <div className="text-sm text-gray-600 space-y-2">
                <p>Posted: {formatDate(listing.created_at)}</p>
                <p>Views: {listing.views}</p>
                <p className="text-orange-600 font-semibold">
                  {daysRemaining} days remaining
                </p>
                {listing.survey_available && (
                  <p className="flex items-center gap-2 text-green-600">
                    <FileText size={16} />
                    Survey Available
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <button className="text-red-600 text-sm hover:underline">
                Report this listing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
