import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  BadgeCheck,
  Heart,
  Mail,
  MapPin,
  Phone,
  Share2,
  ShieldCheck,
} from 'lucide-react'
import Gallery from '../components/Gallery'
import ParcelMap from '../components/ParcelMap'
import PropertyCard from '../components/PropertyCard'
import Seo from '../components/Seo'
import { parcels } from '../data/parcels'
import { useToast } from '../context/ToastContext'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { emailService } from '../lib/email'
import { emailTemplates } from '../lib/email-templates'
import {
  createMetaDescription,
  formatCurrency,
  formatDate,
  formatNumber,
  landTypeLabels,
  pricePerAcre,
} from '../lib/utils'

export default function ListingDetailPage() {
  const { id } = useParams()
  const parcel = parcels.find((item) => item.id === id)
  const similarParcels = useMemo(
    () =>
      parcels
        .filter(
          (item) =>
            item.id !== id &&
            (item.city === parcel?.city || item.landType === parcel?.landType),
        )
        .slice(0, 3),
    [id, parcel?.city, parcel?.landType],
  )
  const [favorites, setFavorites] = useLocalStorage<string[]>('kenai-favorites', [])
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    message: parcel
      ? 'I would like the survey, title summary, and a good time for a property walk.'
      : '',
  })
  const { pushToast } = useToast()

  if (!parcel) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">Parcel not found</h1>
        <p className="mt-4 text-[var(--color-muted)]">
          Try browsing active Kenai Peninsula owner-direct listings.
        </p>
        <Link
          to="/browse"
          className="mt-8 inline-flex rounded-full bg-[var(--color-primary)] px-5 py-3 font-semibold text-white"
        >
          Browse listings
        </Link>
      </div>
    )
  }

  const isFavorite = favorites.includes(parcel.id)
  const toggleFavorite = () =>
    setFavorites((current) =>
      current.includes(parcel.id)
        ? current.filter((item) => item !== parcel.id)
        : [...current, parcel.id],
    )

  const shareParcel = async () => {
    await navigator.clipboard.writeText(window.location.href)
    pushToast({
      title: 'Parcel link copied',
      description: 'Share it with a buyer, partner, or title company.',
      variant: 'success',
    })
  }

  const submitInquiry = async (event: React.FormEvent) => {
    event.preventDefault()
    const ownerEmail = emailTemplates.propertyInquiry({
      propertyTitle: parcel.title,
      buyerName: contact.name || 'Interested buyer',
      buyerEmail: contact.email || 'notifications@kenailandsales.com',
      buyerPhone: contact.phone,
      message: contact.message,
      propertyUrl: window.location.href,
    })
    const buyerEmail = emailTemplates.inquiryConfirmation({
      recipientName: contact.name || 'there',
      listingTitle: parcel.title,
      detailUrl: window.location.href,
    })
    const results = await Promise.all([
      emailService.send({ to: parcel.seller.email, replyTo: contact.email || undefined, ...ownerEmail, metadata: { notificationType: 'parcel-inquiry', parcelId: parcel.id } }),
      contact.email ? emailService.send({ to: contact.email, ...buyerEmail, metadata: { notificationType: 'parcel-inquiry-confirmation', parcelId: parcel.id } }) : Promise.resolve({ queued: false }),
    ])
    pushToast({
      title: 'Inquiry sent to seller',
      description: results.some((result) => result.queued) ? 'Message sent (email notification may be delayed).' : 'Expect a reply ' + parcel.seller.responseTime + '.',
      variant: 'success',
    })
  }

  return (
    <>
      <Seo
        title={parcel.title + ' | Kenai Land Sales'}
        description={createMetaDescription(parcel.description)}
        image={parcel.photos[0]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: parcel.title,
          description: parcel.description,
          brand: 'Kenai Land Sales',
          image: parcel.photos,
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: parcel.price,
            availability: 'https://schema.org/InStock',
          },
          areaServed: parcel.city + ', Alaska',
        }}
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-[var(--color-surface-elevated)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
            {landTypeLabels[parcel.landType]}
          </span>
          {parcel.verifiedSeller ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100">
              <BadgeCheck className="h-4 w-4" />
              Verified seller
            </span>
          ) : null}
          {parcel.clearTitle ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              <ShieldCheck className="h-4 w-4" />
              Clear title path
            </span>
          ) : null}
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.12fr_.88fr]">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold md:text-5xl">{parcel.title}</h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-[var(--color-muted)]">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[var(--color-primary)]" />
                  {parcel.locationLabel}
                </span>
                <span>Listed {formatDate(parcel.listedAt)}</span>
                <span>{parcel.views} views</span>
              </div>
            </div>

            <Gallery photos={parcel.photos} title={parcel.title} />

            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-[28px] bg-[var(--color-surface)] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">
                  Price
                </p>
                <p className="mt-2 text-3xl font-semibold">{formatCurrency(parcel.price)}</p>
              </div>
              <div className="rounded-[28px] bg-[var(--color-surface)] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">
                  Acreage
                </p>
                <p className="mt-2 text-3xl font-semibold">{formatNumber(parcel.acreage)} acres</p>
              </div>
              <div className="rounded-[28px] bg-[var(--color-surface)] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">
                  Price / acre
                </p>
                <p className="mt-2 text-3xl font-semibold">
                  {formatCurrency(pricePerAcre(parcel.price, parcel.acreage))}
                </p>
              </div>
              <div className="rounded-[28px] bg-[var(--color-surface)] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">
                  Zoning
                </p>
                <p className="mt-2 text-xl font-semibold">{parcel.zoning}</p>
              </div>
            </div>

            <div className="rounded-[32px] bg-[var(--color-surface)] p-8">
              <h2 className="text-3xl font-semibold">Property overview</h2>
              <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
                {parcel.description}
              </p>
              <p className="mt-4 rounded-3xl bg-[var(--color-surface-elevated)] p-5 text-[var(--color-muted)]">
                <span className="font-semibold text-[var(--color-text)]">Seller’s notes:</span>{' '}
                {parcel.sellerNotes}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[32px] bg-[var(--color-surface)] p-8">
                <h2 className="text-2xl font-semibold">Features checklist</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {parcel.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl bg-[var(--color-surface-elevated)] px-4 py-3 text-sm capitalize text-[var(--color-muted)]"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[32px] bg-[var(--color-surface)] p-8">
                <h2 className="text-2xl font-semibold">Utilities and access</h2>
                <div className="mt-5 space-y-3">
                  <p className="rounded-2xl bg-[var(--color-surface-elevated)] px-4 py-3 text-sm text-[var(--color-muted)]">
                    <span className="font-semibold text-[var(--color-text)]">Road access:</span>{' '}
                    {parcel.roadAccess}
                  </p>
                  {parcel.utilities.map((item) => (
                    <p
                      key={item}
                      className="rounded-2xl bg-[var(--color-surface-elevated)] px-4 py-3 text-sm text-[var(--color-muted)]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-[var(--color-surface)] p-8">
              <h2 className="text-2xl font-semibold">Due diligence center</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {Object.entries(parcel.dueDiligence).map(([key, value]) =>
                  key === 'docsReady' ? null : (
                    <div key={key} className="rounded-2xl bg-[var(--color-surface-elevated)] p-4">
                      <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-text)]">
                        {String(value)}
                      </p>
                    </div>
                  ),
                )}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {parcel.dueDiligence.docsReady.map((doc) => (
                  <span
                    key={doc}
                    className="rounded-full bg-emerald-900/60 px-4 py-2 text-sm text-emerald-100"
                  >
                    {doc}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-[var(--color-surface)] p-8">
              <h2 className="text-2xl font-semibold">Parcel map and boundaries</h2>
              <p className="mt-3 text-[var(--color-muted)]">
                Satellite imagery with owner-provided boundary overlay helps buyers
                validate access, terrain, and neighboring land uses before a tour.
              </p>
              <div className="mt-6">
                <ParcelMap parcels={[parcel]} focusParcelId={parcel.id} />
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="sticky top-24 rounded-[32px] border border-white/10 bg-[var(--color-surface)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">
                    Seller trust
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">{parcel.seller.name}</h2>
                </div>
                <div className="rounded-2xl bg-[var(--color-surface-elevated)] px-3 py-2 text-sm text-[var(--color-muted)]">
                  {parcel.seller.successRate}% success
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[var(--color-surface-elevated)] p-3">
                  <p className="text-[var(--color-muted)]">Transactions</p>
                  <p className="mt-1 text-xl font-semibold">{parcel.seller.transactionCount}</p>
                </div>
                <div className="rounded-2xl bg-[var(--color-surface-elevated)] p-3">
                  <p className="text-[var(--color-muted)]">Response rate</p>
                  <p className="mt-1 text-xl font-semibold">{parcel.seller.responseRate}%</p>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  type="button"
                  onClick={toggleFavorite}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-3 font-semibold"
                >
                  <Heart className={isFavorite ? 'h-4 w-4 fill-current text-rose-400' : 'h-4 w-4'} />
                  Save
                </button>
                <button
                  type="button"
                  onClick={shareParcel}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-3 font-semibold text-white"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
              </div>

              <form onSubmit={submitInquiry} className="mt-6 space-y-3">
                <h3 className="text-xl font-semibold">Contact seller</h3>
                <input
                  value={contact.name}
                  onChange={(event) =>
                    setContact((current) => ({ ...current, name: event.target.value }))
                  }
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
                />
                <input
                  value={contact.email}
                  onChange={(event) =>
                    setContact((current) => ({ ...current, email: event.target.value }))
                  }
                  placeholder="Email"
                  className="w-full rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
                />
                <input
                  value={contact.phone}
                  onChange={(event) =>
                    setContact((current) => ({ ...current, phone: event.target.value }))
                  }
                  placeholder="Phone"
                  className="w-full rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
                />
                <textarea
                  rows={4}
                  value={contact.message}
                  onChange={(event) =>
                    setContact((current) => ({ ...current, message: event.target.value }))
                  }
                  className="w-full rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-3 font-semibold text-white"
                >
                  <Mail className="h-4 w-4" />
                  Send inquiry
                </button>
              </form>

              <div className="mt-5 rounded-3xl bg-[var(--color-surface-elevated)] p-5 text-sm text-[var(--color-muted)]">
                <p className="font-semibold text-[var(--color-text)]">
                  Escrow protection reminder
                </p>
                <p className="mt-2">
                  Serious buyers should use a title and escrow company for earnest
                  money, payoff coordination, and deed recording.
                </p>
                <div className="mt-4 space-y-2">
                  <p className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[var(--color-primary)]" />
                    {parcel.seller.email}
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[var(--color-primary)]" />
                    {parcel.seller.phone}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-[var(--color-surface)] p-6">
              <h3 className="text-xl font-semibold">Nearby amenities</h3>
              <div className="mt-4 space-y-3">
                {parcel.nearbyAmenities.map((amenity) => (
                  <div
                    key={amenity.label}
                    className="flex items-center justify-between rounded-2xl bg-[var(--color-surface-elevated)] px-4 py-3"
                  >
                    <span>{amenity.label}</span>
                    <span className="text-[var(--color-muted)]">{amenity.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <section className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Similar parcels
            </p>
            <h2 className="mt-2 text-3xl font-semibold">More owner-direct opportunities</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {similarParcels.map((item) => (
              <PropertyCard key={item.id} parcel={item} compact />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
