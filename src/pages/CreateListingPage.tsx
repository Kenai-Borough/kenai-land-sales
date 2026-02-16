import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase, getCurrentUser } from '../lib/supabase'
import { createCheckoutSession, LISTING_PRICE } from '../lib/stripe'

export default function CreateListingPage() {
  const [user, setUser] = useState<any>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    acreage: '',
    location: '',
    zoning: '',
    parcel_number: '',
    road_access: 'gravel' as const,
    utilities_water: false,
    utilities_electric: false,
    utilities_sewer: false,
    utilities_gas: false,
    topography: '',
    land_use_suggestions: '',
    property_tax_annual: '',
    survey_available: false,
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    checkAuth()
  }, [])

  async function checkAuth() {
    const currentUser = await getCurrentUser()
    if (!currentUser) {
      navigate('/login')
      return
    }
    setUser(currentUser)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!user) return

    setLoading(true)

    const { data: listing, error } = await supabase
      .from('land_listings')
      .insert([
        {
          ...formData,
          price: parseFloat(formData.price),
          acreage: parseFloat(formData.acreage),
          property_tax_annual: formData.property_tax_annual ? parseFloat(formData.property_tax_annual) : null,
          user_id: user.id,
          images: [],
          documents: [],
        },
      ])
      .select()
      .single()

    if (error) {
      alert('Error creating listing: ' + error.message)
      setLoading(false)
      return
    }

    try {
      await createCheckoutSession(LISTING_PRICE, listing.id, 'listing', user.id)
    } catch (err) {
      alert('Payment failed. Please try again.')
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Create Land Listing</h1>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-gray-700">
          <strong>Listing Fee: $10</strong> for 60 days. Payment processed securely via Stripe.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-8 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Listing Title *
          </label>
          <input
            type="text"
            name="title"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., 40 Acres with Mountain Views in Kenai"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            name="description"
            required
            rows={6}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your property in detail..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price (USD) *
            </label>
            <input
              type="number"
              name="price"
              required
              min="0"
              step="0.01"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Acreage *
            </label>
            <input
              type="number"
              name="acreage"
              required
              min="0"
              step="0.01"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={formData.acreage}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location *
          </label>
          <input
            type="text"
            name="location"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g., Kenai, AK"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Zoning
            </label>
            <input
              type="text"
              name="zoning"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={formData.zoning}
              onChange={handleChange}
              placeholder="e.g., Residential, Commercial"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Parcel Number
            </label>
            <input
              type="text"
              name="parcel_number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={formData.parcel_number}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Road Access *
          </label>
          <select
            name="road_access"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            value={formData.road_access}
            onChange={handleChange}
          >
            <option value="paved">Paved Road</option>
            <option value="gravel">Gravel Road</option>
            <option value="trail">Trail Access</option>
            <option value="none">No Road Access</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Available Utilities
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="utilities_water"
                checked={formData.utilities_water}
                onChange={handleChange}
                className="rounded"
              />
              <span>Water</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="utilities_electric"
                checked={formData.utilities_electric}
                onChange={handleChange}
                className="rounded"
              />
              <span>Electric</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="utilities_sewer"
                checked={formData.utilities_sewer}
                onChange={handleChange}
                className="rounded"
              />
              <span>Sewer</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="utilities_gas"
                checked={formData.utilities_gas}
                onChange={handleChange}
                className="rounded"
              />
              <span>Gas</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Topography/Terrain
          </label>
          <input
            type="text"
            name="topography"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            value={formData.topography}
            onChange={handleChange}
            placeholder="e.g., Flat, Rolling Hills, Wooded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Land Use Suggestions
          </label>
          <textarea
            name="land_use_suggestions"
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            value={formData.land_use_suggestions}
            onChange={handleChange}
            placeholder="e.g., Ideal for cabin, hunting, recreation..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Property Tax
            </label>
            <input
              type="number"
              name="property_tax_annual"
              min="0"
              step="0.01"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={formData.property_tax_annual}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-end">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="survey_available"
                checked={formData.survey_available}
                onChange={handleChange}
                className="rounded"
              />
              <span className="text-sm font-medium text-gray-700">Survey Available</span>
            </label>
          </div>
        </div>

        <div className="pt-6 border-t">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Continue to Payment - $10'}
          </button>
        </div>
      </form>
    </div>
  )
}
