import { AlertTriangle, ShieldCheck } from 'lucide-react'
import Seo from '../components/Seo'

const warnings = [
  'Never accept earnest money outside a reputable title and escrow company.',
  'Verify identity before sharing survey files or scheduling remote property access.',
  'Use written offers and signed counter-offers so expectations stay clear.',
  'Avoid wire changes by phone alone; confirm instructions directly with escrow.',
]

export default function SafetyPage() {
  return (
    <>
      <Seo
        title="Safety & Scam Prevention | Kenai Land Sales"
        description="Stay safe while buying or selling land with escrow-first closing, identity checks, and scam prevention guidance."
      />
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/10 bg-[var(--color-surface)] p-8 lg:p-10">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-10 w-10 text-[var(--color-primary)]" />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">
                Safety center
              </p>
              <h1 className="text-5xl font-semibold">Protect both sides of the sale.</h1>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
              <h2 className="text-2xl font-semibold">Safe showing practices</h2>
              <ul className="mt-4 space-y-3 text-[var(--color-muted)]">
                <li>Meet during daylight and share your location with a trusted contact.</li>
                <li>Confirm parcel corners before inviting buyers onto neighboring land.</li>
                <li>Use the platform inquiry form before sharing direct cell numbers.</li>
              </ul>
            </div>
            <div className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
              <h2 className="text-2xl font-semibold">Payment security</h2>
              <ul className="mt-4 space-y-3 text-[var(--color-muted)]">
                <li>Earnest money belongs with escrow, never with the seller personally.</li>
                <li>Request proof of funds or lender pre-approval for serious negotiations.</li>
                <li>Use title insurance and recorded deeds to protect the final transfer.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-rose-400/20 bg-rose-950/20 p-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-rose-300" />
              <h2 className="text-2xl font-semibold">Red flags to watch</h2>
            </div>
            <ul className="mt-4 space-y-3 text-[var(--color-muted)]">
              {warnings.map((warning) => (
                <li key={warning}>{warning}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
