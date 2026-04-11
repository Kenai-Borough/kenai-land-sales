import { Link } from 'react-router-dom'
import { ArrowRight, FileCheck2, Landmark, Map, MessageSquareMore } from 'lucide-react'
import Seo from '../components/Seo'

const steps = [
  {
    icon: Map,
    title: 'Map the parcel',
    copy: 'Show buyers exactly what they are evaluating with boundaries, satellite imagery, and acreage details.',
  },
  {
    icon: FileCheck2,
    title: 'Package due diligence',
    copy: 'Add title notes, surveys, zoning confirmations, and disclosure documents before inquiries arrive.',
  },
  {
    icon: MessageSquareMore,
    title: 'Negotiate directly',
    copy: 'Manage inquiries, share documents, and collect written offers while staying in control of price and timing.',
  },
  {
    icon: Landmark,
    title: 'Close through escrow',
    copy: 'Use a title company and escrow officer to safely handle earnest money, recording, and final disbursement.',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <Seo
        title="How Kenai Land Sales Works"
        description="See how Kenai Land Sales helps Alaska landowners price, market, negotiate, and close direct-owner land sales."
      />
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/10 bg-[var(--color-surface)] p-8 lg:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">
            How it works
          </p>
          <h1 className="mt-3 text-5xl font-semibold">A clean path from listing to recording.</h1>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {steps.map((step) => (
              <div key={step.title} className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
                <step.icon className="h-10 w-10 text-[var(--color-primary)]" />
                <h2 className="mt-5 text-2xl font-semibold">{step.title}</h2>
                <p className="mt-3 text-[var(--color-muted)]">{step.copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[28px] bg-emerald-900/20 p-6">
            <p className="text-lg text-emerald-50">
              The platform is built around one principle: sellers should only pay for
              outside help when it protects the closing.
            </p>
          </div>
          <Link
            to="/guide"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-4 font-semibold text-white"
          >
            Read the FSBO guide
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  )
}
