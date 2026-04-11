import Seo from '../components/Seo'

const timeline = [
  {
    day: 'Day 1-5',
    title: 'Open escrow',
    detail:
      'Signed contract, earnest money instructions, and title order are delivered to the escrow officer.',
  },
  {
    day: 'Day 5-20',
    title: 'Title review',
    detail:
      'The title company checks ownership, legal description, taxes, liens, and access or easement exceptions.',
  },
  {
    day: 'Day 10-30',
    title: 'Buyer due diligence',
    detail:
      'The buyer reviews survey issues, soils, access, zoning, and any environmental or utility questions.',
  },
  {
    day: 'Day 20-45',
    title: 'Closing package',
    detail:
      'Deed, settlement statement, title insurance, payoff requests, and signing instructions are prepared.',
  },
  {
    day: 'Day 30-60',
    title: 'Funding and recording',
    detail: 'Funds arrive, the deed records, and proceeds disburse once conditions are met.',
  },
]

const checklist = [
  'Signed purchase agreement',
  'Earnest money receipt',
  'Seller deed information',
  'Title commitment and exceptions',
  'Survey or plat if available',
  'Tax payoff or HOA information if applicable',
  'Settlement statement',
  'Recorded deed copy after closing',
]

const closingCosts = [
  { label: 'Title search & commitment', range: '$450 - $900' },
  { label: 'Owner title insurance policy', range: '$600 - $1,800' },
  { label: 'Escrow / settlement fee', range: '$500 - $1,500' },
  { label: 'Recording and courier costs', range: '$75 - $250' },
  { label: 'Notary or mobile signing', range: '$50 - $200' },
]

const titleCompanies = [
  'Kenai Peninsula Title (placeholder)',
  'First Alaska Escrow (placeholder)',
  'Homer Land Title (placeholder)',
]

export default function ClosingProcess() {
  return (
    <>
      <Seo
        title="Escrow & Closing | Kenai Land Sales"
        description="Understand Alaska land escrow, the 30-60 day closing timeline, required documents, title insurance, and local closing cost expectations."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/10 bg-[var(--color-surface)] p-8 lg:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)]">
            Closing process
          </p>
          <h1 className="mt-3 text-5xl font-semibold">
            Escrow is where a direct sale becomes a protected sale.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
            Owners stay in charge of the deal, while title and escrow handle the money,
            documentation, insurance, and recording.
          </p>

          <div className="mt-8 grid gap-4">
            {timeline.map((step) => (
              <section key={step.title} className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <h2 className="text-2xl font-semibold">{step.title}</h2>
                  <span className="rounded-full bg-amber-500/15 px-4 py-2 text-sm text-amber-100">
                    {step.day}
                  </span>
                </div>
                <p className="mt-4 text-[var(--color-muted)]">{step.detail}</p>
              </section>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
            <section className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
              <h2 className="text-2xl font-semibold">Required document checklist</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {checklist.map((item) => (
                  <div key={item} className="rounded-2xl bg-black/15 px-4 py-3 text-sm text-[var(--color-muted)]">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
              <h2 className="text-2xl font-semibold">Title insurance & closing costs</h2>
              <div className="mt-4 space-y-3">
                {closingCosts.map((cost) => (
                  <div key={cost.label} className="flex items-center justify-between rounded-2xl bg-black/15 px-4 py-3">
                    <span className="text-[var(--color-muted)]">{cost.label}</span>
                    <span className="font-semibold">{cost.range}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-8 rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
            <h2 className="text-2xl font-semibold">Recommended title companies</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {titleCompanies.map((company) => (
                <div key={company} className="rounded-2xl bg-black/15 px-4 py-4 text-[var(--color-muted)]">
                  {company}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
