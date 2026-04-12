import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, MapPinned, Search, ShieldCheck, Trees } from 'lucide-react'
import PropertyCard from '../components/PropertyCard'
import Seo from '../components/Seo'
import TrustBadge from '../components/TrustBadge'
import { featuredParcels, parcels, testimonials } from '../data/parcels'
import { formatCurrency, formatNumber } from '../lib/utils'
import { CrossTrafficAds } from '../components/CrossTrafficAds'

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "name": "Kenai Land Sales",
        "url": "https://kenailandsales.com",
        "areaServed": "Kenai Peninsula Borough, Alaska",
        "description": "Owner-direct land marketplace with due diligence and closing guidance for Alaska acreage."
      },
      {
        "@type": "Product",
        "name": "Kenai Land Listings",
        "category": "Land for Sale",
        "brand": "Kenai Land Sales",
        "url": "https://kenailandsales.com/browse",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "WebSite",
        "name": "Kenai Land Sales",
        "url": "https://kenailandsales.com"
      }
    ]
  }

  const navigate = useNavigate()
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('Any price')
  const [acreage, setAcreage] = useState('Any acreage')
  const [landType, setLandType] = useState('Any type')

  const stats = useMemo(() => {
    const soldParcels = parcels.filter((parcel) => parcel.status === 'sold')
    const acresSold = soldParcels.reduce((sum, parcel) => sum + parcel.acreage, 0)
    return [
      { label: 'Parcels listed', value: String(parcels.length) },
      { label: 'Acres sold', value: `${formatNumber(acresSold, 0)}+` },
      { label: 'Avg savings', value: '$18.4K' },
      { label: 'Success rate', value: '98%' },
    ]
  }, [])

  const valueProps = [
    {
      title: 'Save 6-10% vs broker commissions',
      copy:
        'Keep more equity by paying for title, escrow, and optional support only where they truly protect the closing.',
      icon: Trees,
    },
    {
      title: 'You control the process',
      copy:
        'Owners set pricing, answer buyer questions directly, and decide when to negotiate instead of outsourcing every step.',
      icon: MapPinned,
    },
    {
      title: 'Direct buyer communication',
      copy:
        'Maps, docs, trust badges, and contact tools bring serious buyers straight to the owner with fewer layers and less confusion.',
      icon: ShieldCheck,
    },
  ]

  return (
    <>
      <Seo
        title="Kenai Land Sales | Kenai Peninsula, Alaska"
        description="Shop and list Kenai land for sale with owner-direct FSBO tools, parcel maps, due diligence guides, and Alaska acreage insights."
        schema={homeSchema}
      />
      <div className="space-y-20 pb-6">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1800&q=80"
              alt="Alaska wilderness"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,17,12,.88),rgba(10,33,22,.6),rgba(14,24,40,.7))]" />
          </div>
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80 backdrop-blur">
                Owner direct • Kenai Peninsula
              </p>
              <h1 className="mt-6 text-5xl font-semibold leading-tight text-white md:text-7xl">
                Sell your Alaska land with confidence, not commission pressure.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/85">
                Forests, rivers, mountain views, bluff lots, homesteads—Kenai Land Sales gives
                local owners a trusted FSBO platform built around direct communication, clean due
                diligence, and safer closings.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/85">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                  Verified seller badges
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                  Clear title messaging
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                  Escrow protection guidance
                </span>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/create-listing"
                  className="rounded-full bg-[var(--color-primary)] px-6 py-4 text-sm font-semibold text-white shadow-2xl shadow-amber-500/25"
                >
                  List Your Land Free
                </Link>
                <Link
                  to="/fsbo-guide"
                  className="rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white backdrop-blur"
                >
                  Learn the FSBO process
                </Link>
              </div>
            </div>

            <div className="rounded-[36px] border border-white/10 bg-black/25 p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[28px] bg-white p-5 text-slate-900">
                <div className="flex items-center gap-3">
                  <Search className="h-5 w-5 text-emerald-700" />
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                    Find your parcel
                  </p>
                </div>
                <div className="mt-5 grid gap-4">
                  <input
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    placeholder="Location, city, or borough"
                    className="rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <select
                      value={price}
                      onChange={(event) => setPrice(event.target.value)}
                      className="rounded-2xl border border-slate-200 px-4 py-3"
                    >
                      <option>Any price</option>
                      <option>Under $50K</option>
                      <option>$50K - $150K</option>
                      <option>$150K - $300K</option>
                      <option>$300K+</option>
                    </select>
                    <select
                      value={acreage}
                      onChange={(event) => setAcreage(event.target.value)}
                      className="rounded-2xl border border-slate-200 px-4 py-3"
                    >
                      <option>Any acreage</option>
                      <option>Under 2 acres</option>
                      <option>2 to 10 acres</option>
                      <option>10 to 40 acres</option>
                      <option>40+ acres</option>
                    </select>
                  </div>
                  <select
                    value={landType}
                    onChange={(event) => setLandType(event.target.value)}
                    className="rounded-2xl border border-slate-200 px-4 py-3"
                  >
                    <option>Any type</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Agricultural</option>
                    <option>Recreational</option>
                    <option>Waterfront</option>
                    <option>Riverfront</option>
                    <option>Off-grid</option>
                    <option>Homestead</option>
                    <option>Timber</option>
                  </select>
                  <button
                    type="button"
                    onClick={() =>
                      navigate(
                        '/browse?location=' +
                          encodeURIComponent(location) +
                          '&price=' +
                          encodeURIComponent(price) +
                          '&acreage=' +
                          encodeURIComponent(acreage) +
                          '&type=' +
                          encodeURIComponent(landType),
                      )
                    }
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-800 px-4 py-4 font-semibold text-white"
                  >
                    Search parcels
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-600">
                  <div className="rounded-2xl bg-emerald-50 p-3">
                    <p className="font-semibold text-slate-900">Average savings</p>
                    <p>{formatCurrency(18400)} in avoided commission</p>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-3">
                    <p className="font-semibold text-slate-900">Typical close</p>
                    <p>30-60 days with title and escrow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[28px] border border-white/10 bg-[var(--color-surface)] p-6"
              >
                <p className="text-4xl font-semibold text-[var(--color-primary)]">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr]">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-primary)]">
                Why sell direct
              </p>
              <h2 className="text-4xl font-semibold">A trusted path that keeps owners in charge.</h2>
              <p className="text-lg leading-8 text-[var(--color-muted)]">
                Brokers can still help with title or escrow, but most landowners do not need to hand
                over the whole relationship just to market a parcel well.
              </p>
              <div className="space-y-4">
                {[
                  'Step-by-step Alaska FSBO education',
                  'Satellite maps, parcel boundaries, and acreage planning tools',
                  'Verified seller, surveyed, and clear title trust indicators',
                  'Escrow-first messaging that protects both parties',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-3xl bg-[var(--color-surface)] p-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-[var(--color-primary)]" />
                    <p className="text-[var(--color-muted)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {valueProps.map((item) => (
                <div key={item.title} className="rounded-[32px] bg-[var(--color-surface)] p-6">
                  <item.icon className="h-10 w-10 text-[var(--color-primary)]" />
                  <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-[var(--color-muted)]">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TrustBadge />
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-primary)]">
                Featured parcels
              </p>
              <h2 className="mt-2 text-4xl font-semibold">Fresh owner-direct opportunities</h2>
            </div>
            <Link to="/browse" className="hidden text-sm font-semibold text-[var(--color-primary)] md:block">
              View all listings →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {featuredParcels.map((parcel) => (
              <PropertyCard key={parcel.id} parcel={parcel} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[36px] border border-white/10 bg-[var(--color-surface)] p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.name} className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
                  <p className="text-lg leading-8">“{testimonial.quote}”</p>
                  <footer className="mt-5">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-[var(--color-muted)]">{testimonial.role}</p>
                    <p className="mt-2 text-sm font-semibold text-[var(--color-primary)]">
                      {testimonial.savings}
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[40px] border border-amber-500/20 bg-[linear-gradient(135deg,rgba(180,83,9,.12),rgba(5,17,12,.04))] p-8 lg:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-primary)]">
                  Ready to go live?
                </p>
                <h2 className="mt-2 text-4xl font-semibold">
                  Showcase your parcel with the paperwork buyers ask for.
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted)]">
                  Start with a free listing, add maps and docs, then guide serious buyers into
                  escrow with confidence.
                </p>
              </div>
              <Link
                to="/create-listing"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-4 font-semibold text-white"
              >
                List Your Land Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
            <CrossTrafficAds />
</div>
    </>
  )
}
