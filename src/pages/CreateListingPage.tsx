import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2, ChevronLeft, ChevronRight, UploadCloud } from 'lucide-react'
import AcreageDrawMap from '../components/AcreageDrawMap'
import Seo from '../components/Seo'
import { cities, marketDataByArea } from '../data/parcels'
import { useToast } from '../context/ToastContext'
import { formatCurrency, formatNumber } from '../lib/utils'

const steps = [
  'Location',
  'Land Details',
  'Due Diligence',
  'Photos & Documents',
  'Pricing',
  'Review & Publish',
]

export default function CreateListingPage() {
  const navigate = useNavigate()
  const { pushToast } = useToast()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    address: '',
    city: 'Kenai',
    gps: '',
    acreage: 5,
    landType: 'homestead',
    zoning: 'Rural Residential',
    features: [] as string[],
    titleStatus: 'Preliminary title ordered',
    surveyStatus: 'Survey on file',
    environmental: 'No known issues',
    easements: 'Standard access easement',
    photos: [] as string[],
    docs: [] as string[],
    askingPrice: 85000,
    negotiable: true,
    description:
      'Owner-direct parcel with strong access notes, clear next steps, and a due diligence packet ready for buyers.',
  })
  const [drawnArea, setDrawnArea] = useState(0)

  const areaAverage = useMemo(() => {
    const values = marketDataByArea[form.city] ?? marketDataByArea.Kenai
    return values.reduce((sum, item) => sum + item.averagePricePerAcre, 0) / values.length
  }, [form.city])

  const pricePerAcre = form.askingPrice / Math.max(form.acreage, 1)

  const updateForm = <Key extends keyof typeof form>(key: Key, value: (typeof form)[Key]) =>
    setForm((current) => ({ ...current, [key]: value }))

  const publishListing = () => {
    pushToast({
      title: 'Listing draft published',
      description: 'Your seller dashboard now shows the parcel as pending review.',
      variant: 'success',
    })
    navigate('/dashboard')
  }

  return (
    <>
      <Seo
        title="Create a Land Listing | Kenai Land Sales"
        description="Use the six-step FSBO listing wizard to publish a trusted Alaska land listing with maps, pricing intelligence, and due diligence details."
      />
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/10 bg-[var(--color-surface)] p-6 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">
                Listing wizard
              </p>
              <h1 className="mt-2 text-4xl font-semibold">Launch a trusted owner-direct listing</h1>
            </div>
            <div className="rounded-full bg-[var(--color-surface-elevated)] px-4 py-2 text-sm text-[var(--color-muted)]">
              Step {step + 1} of {steps.length}
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-6">
            {steps.map((label, index) => (
              <button
                key={label}
                type="button"
                onClick={() => setStep(index)}
                className={
                  'rounded-2xl px-3 py-3 text-sm font-semibold ' +
                  (index === step
                    ? 'bg-[var(--color-primary)] text-white'
                    : index < step
                      ? 'bg-emerald-900/60 text-emerald-100'
                      : 'bg-[var(--color-surface-elevated)] text-[var(--color-muted)]')
                }
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-8 space-y-6">
            {step === 0 ? (
              <div className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    value={form.address}
                    onChange={(event) => updateForm('address', event.target.value)}
                    placeholder="Street or parcel address"
                    className="rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
                  />
                  <select
                    value={form.city}
                    onChange={(event) => updateForm('city', event.target.value)}
                    className="rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
                  >
                    {cities.filter((city) => city !== 'All').map((city) => (
                      <option key={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <input
                  value={form.gps}
                  onChange={(event) => updateForm('gps', event.target.value)}
                  placeholder="GPS coordinates"
                  className="w-full rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
                />
                <AcreageDrawMap
                  onAreaChange={(acres) => {
                    setDrawnArea(acres)
                    if (acres > 0) updateForm('acreage', Number(acres.toFixed(2)))
                  }}
                />
                <p className="text-sm text-[var(--color-muted)]">
                  Estimated by map: {formatNumber(drawnArea, 2)} acres.
                </p>
              </div>
            ) : null}

            {step === 1 ? (
              <div className="space-y-5">
                <div className="grid gap-4 md:grid-cols-3">
                  <input
                    type="number"
                    value={form.acreage}
                    onChange={(event) => updateForm('acreage', Number(event.target.value))}
                    placeholder="Acreage"
                    className="rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
                  />
                  <select
                    value={form.landType}
                    onChange={(event) => updateForm('landType', event.target.value)}
                    className="rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="agricultural">Agricultural</option>
                    <option value="recreational">Recreational</option>
                    <option value="waterfront">Waterfront</option>
                    <option value="riverfront">Riverfront</option>
                    <option value="off_grid">Off-grid</option>
                    <option value="homestead">Homestead</option>
                  </select>
                  <input
                    value={form.zoning}
                    onChange={(event) => updateForm('zoning', event.target.value)}
                    placeholder="Zoning"
                    className="rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
                  />
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    'road access',
                    'utilities',
                    'water rights',
                    'buildable',
                    'surveyed',
                    'clear title',
                  ].map((feature) => (
                    <button
                      key={feature}
                      type="button"
                      onClick={() =>
                        updateForm(
                          'features',
                          form.features.includes(feature)
                            ? form.features.filter((item) => item !== feature)
                            : [...form.features, feature],
                        )
                      }
                      className={
                        'rounded-2xl px-4 py-4 text-left capitalize ' +
                        (form.features.includes(feature)
                          ? 'bg-[var(--color-primary)] text-white'
                          : 'bg-[var(--color-surface-elevated)] text-[var(--color-muted)]')
                      }
                    >
                      {feature}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="grid gap-4">
                <input
                  value={form.titleStatus}
                  onChange={(event) => updateForm('titleStatus', event.target.value)}
                  className="rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
                  placeholder="Title status"
                />
                <input
                  value={form.surveyStatus}
                  onChange={(event) => updateForm('surveyStatus', event.target.value)}
                  className="rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
                  placeholder="Survey status"
                />
                <input
                  value={form.environmental}
                  onChange={(event) => updateForm('environmental', event.target.value)}
                  className="rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
                  placeholder="Environmental notes"
                />
                <input
                  value={form.easements}
                  onChange={(event) => updateForm('easements', event.target.value)}
                  className="rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
                  placeholder="Easements"
                />
              </div>
            ) : null}

            {step === 3 ? (
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[28px] border border-dashed border-white/20 bg-[var(--color-surface-elevated)] p-6 text-center">
                  <UploadCloud className="mx-auto h-12 w-12 text-[var(--color-primary)]" />
                  <p className="mt-4 font-semibold">Drag and drop parcel photos</p>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">
                    A production setup would upload to Supabase Storage and preserve
                    image order.
                  </p>
                </div>
                <div className="rounded-[28px] border border-dashed border-white/20 bg-[var(--color-surface-elevated)] p-6 text-center">
                  <UploadCloud className="mx-auto h-12 w-12 text-[var(--color-primary)]" />
                  <p className="mt-4 font-semibold">Attach survey and title docs</p>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">
                    Include parcel map PDFs, deed copies, and disclosures to build trust.
                  </p>
                </div>
              </div>
            ) : null}

            {step === 4 ? (
              <div className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="number"
                    value={form.askingPrice}
                    onChange={(event) => updateForm('askingPrice', Number(event.target.value))}
                    className="rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] px-4 py-3"
                    placeholder="Asking price"
                  />
                  <label className="flex items-center gap-3 rounded-2xl bg-[var(--color-surface-elevated)] px-4 py-3">
                    <input
                      type="checkbox"
                      checked={form.negotiable}
                      onChange={(event) => updateForm('negotiable', event.target.checked)}
                    />
                    Negotiable
                  </label>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[28px] bg-[var(--color-surface-elevated)] p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">
                      Your price per acre
                    </p>
                    <p className="mt-2 text-3xl font-semibold">
                      {formatCurrency(pricePerAcre)}
                    </p>
                  </div>
                  <div className="rounded-[28px] bg-[var(--color-surface-elevated)] p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">
                      {form.city} area average
                    </p>
                    <p className="mt-2 text-3xl font-semibold">
                      {formatCurrency(areaAverage)}
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

            {step === 5 ? (
              <div className="space-y-5">
                <div className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
                  <h2 className="text-2xl font-semibold">Review before publish</h2>
                  <div className="mt-4 grid gap-3 text-sm text-[var(--color-muted)]">
                    <p>Location: {form.address || 'Address pending'} • {form.city}</p>
                    <p>
                      {formatNumber(form.acreage, 2)} acres • {form.landType} • {form.zoning}
                    </p>
                    <p>Asking price: {formatCurrency(form.askingPrice)}</p>
                    <p>Title: {form.titleStatus}</p>
                    <p>Survey: {form.surveyStatus}</p>
                    <p>Negotiable: {form.negotiable ? 'Yes' : 'No'}</p>
                  </div>
                </div>
                <div className="rounded-[28px] bg-emerald-900/25 p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-300" />
                    <p className="text-sm text-emerald-50">
                      Publishing sends the parcel to moderation for a quick trust review,
                      then the seller dashboard will track inquiries, saves, and views.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setStep((current) => Math.max(0, current - 1))}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 font-semibold"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </button>
            {step === steps.length - 1 ? (
              <button
                type="button"
                onClick={publishListing}
                className="rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-white"
              >
                Review & publish
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setStep((current) => Math.min(steps.length - 1, current + 1))}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-3 font-semibold text-white"
              >
                Continue
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
