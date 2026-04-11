import Seo from '../components/Seo'

const topics = [
  {
    title: 'Title search',
    points: [
      'Confirm current ownership, legal description, taxes, liens, and recorded easements before a listing goes live.',
      'Ask the title company whether access is insured or merely assumed from local use patterns.',
    ],
  },
  {
    title: 'Survey requirements',
    points: [
      'A current survey is not always required, but it can remove buyer hesitation around corners, encroachments, and road frontage.',
      'If no modern survey exists, disclose that clearly and price for the uncertainty.',
    ],
  },
  {
    title: 'Environmental review',
    points: [
      'Wetlands, septic suitability, slope stability, and prior dumping concerns matter more than generic “raw land” assumptions.',
      'For waterfront or bluff property, encourage buyer review of soils, shoreline conditions, and build envelopes.',
    ],
  },
  {
    title: 'Easements and access',
    points: [
      'Road easements, utility easements, and neighbor access understandings should be documented rather than described casually.',
      'If access crosses other property, show the recorded easement language in the document packet.',
    ],
  },
  {
    title: 'Water and mineral rights',
    points: [
      'Not every parcel includes usable water rights, and mineral rights can be separated from surface ownership.',
      'When rights are uncertain, say so directly and direct buyers to title or legal review.',
    ],
  },
  {
    title: 'Kenai Peninsula zoning',
    points: [
      'Check borough zoning, floodplain overlays, setbacks, and driveway or access permit expectations.',
      'Matching the parcel to the intended use—cabin, RV retreat, homestead, or subdivision hold—reduces wasted inquiries.',
    ],
  },
]

const resources = [
  'Alaska DNR Recorder search',
  'Kenai Peninsula Borough GIS and zoning offices',
  'ADEC environmental records where applicable',
  'Local title and escrow companies for preliminary title work',
]

export default function DueDiligence() {
  return (
    <>
      <Seo
        title="Due Diligence Center | Kenai Land Sales"
        description="Review Alaska land title, surveys, environmental concerns, easements, zoning, and DNR resources before buying or selling direct."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/10 bg-[var(--color-surface)] p-8 lg:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)]">Due diligence center</p>
          <h1 className="mt-3 text-5xl font-semibold">
            Know what is clean, what is missing, and what must be checked.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
            A strong land sale is built on honest disclosure. These are the Alaska land issues
            buyers ask about most often.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {topics.map((topic) => (
              <section key={topic.title} className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
                <h2 className="text-2xl font-semibold">{topic.title}</h2>
                <ul className="mt-4 space-y-3 text-[var(--color-muted)]">
                  {topic.points.map((point) => (
                    <li key={point} className="rounded-2xl bg-black/15 px-4 py-4 leading-7">
                      {point}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
            <section className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
              <h2 className="text-2xl font-semibold">What buyers want to see fast</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {['Deed copy', 'Tax statement', 'Survey or plat', 'Title status note', 'Easement summary', 'Disclosure packet'].map((item) => (
                  <div key={item} className="rounded-2xl bg-black/15 px-4 py-3 text-sm text-[var(--color-muted)]">
                    {item}
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
              <h2 className="text-2xl font-semibold">Helpful Alaska resources</h2>
              <ul className="mt-4 space-y-3 text-[var(--color-muted)]">
                {resources.map((resource) => (
                  <li key={resource} className="rounded-2xl bg-black/15 px-4 py-4">
                    {resource}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
