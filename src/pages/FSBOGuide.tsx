import Seo from '../components/Seo'
import { formatCurrency } from '../lib/utils'

const steps = [
  {
    title: 'Know Your Land',
    bullets: [
      'Pull a current survey or locate older plats, corner pins, and legal descriptions before you advertise acreage.',
      'Run a title search early so easements, access gaps, and payoff items do not surprise a buyer in escrow.',
      'Confirm Kenai Peninsula Borough zoning, permitted uses, setbacks, and road maintenance obligations.',
    ],
  },
  {
    title: 'Price It Right',
    bullets: [
      'Compare owner-direct and brokered sales by acreage, road access, utilities, and view premium.',
      'Use price-per-acre as a benchmark, then adjust for river access, bluff frontage, wetlands, or timber value.',
      'Stay realistic: clean documentation and fast seller response can justify stronger pricing than bare land with unanswered questions.',
    ],
  },
  {
    title: 'Prepare Documentation',
    bullets: [
      'Assemble deed copies, tax statements, plat maps, seller disclosures, and any environmental reports in one shareable packet.',
      'Highlight survey status, title status, and known easements in plain language so buyers know what is ready now.',
      'If water, mineral, or riparian rights are part of the value, document them carefully before marketing.',
    ],
  },
  {
    title: 'List & Market',
    bullets: [
      'Lead with clear photos showing access, terrain, timber, mountain views, and nearby landmarks.',
      'Write descriptions around what a buyer can do with the parcel: build, camp, homestead, hold, or invest.',
      'Share the listing on local Alaska channels, social media, contractor networks, and outdoor recreation communities.',
    ],
  },
  {
    title: 'Handle Offers',
    bullets: [
      'Use written offers, define contingencies, and respond with written counter-offers instead of verbal promises.',
      'Ask for proof of funds or financing strength before taking the parcel off market.',
      'Keep deadlines, earnest money instructions, and due diligence periods organized from the first serious negotiation.',
    ],
  },
  {
    title: 'Close the Sale',
    bullets: [
      'Open escrow with a title company so earnest money, title review, payoffs, and recording stay neutral and documented.',
      'Review the settlement statement, confirm deed preparation, and verify final recording instructions before funding.',
      'After closing, store the recorded deed, settlement statement, and closing package for taxes and future reference.',
    ],
  },
]

const regionalPricing = [
  {
    area: 'Kenai / Soldotna buildable lots',
    range: '$28K - $55K / acre',
    note: 'Utilities and year-round roads support the strongest demand.',
  },
  {
    area: 'Sterling / Anchor Point homestead ground',
    range: '$2K - $12K / acre',
    note: 'Access, power distance, and soils drive spread.',
  },
  {
    area: 'Homer bluff and waterfront land',
    range: '$45K - $120K / acre',
    note: 'Views, bluff stability, and utilities matter most.',
  },
  {
    area: 'Cooper Landing river access parcels',
    range: '$18K - $60K / acre',
    note: 'River proximity and floodplain clarity carry premiums.',
  },
]

const comparisonRows = [
  {
    label: 'Listing visibility',
    traditional: 'Broker controls photos, messaging, and showing flow',
    platform: 'Owner controls listing, updates, documents, and buyer communication',
  },
  {
    label: 'Typical marketing cost',
    traditional: '6-10% commission at closing',
    platform: 'Free listing plus optional title, escrow, or photography help only when needed',
  },
  {
    label: 'Buyer questions',
    traditional: 'Filtered through agent',
    platform: 'Direct owner communication backed by trust badges and due diligence sections',
  },
  {
    label: 'Closing support',
    traditional: 'Bundled into commission',
    platform: 'Title and escrow recommended without giving up sale control',
  },
]

export default function FSBOGuide() {
  return (
    <>
      <Seo
        title="FSBO Guide for Selling Land in Alaska"
        description="Learn the full Alaska owner-direct land sale process: pricing, due diligence, marketing, negotiation, and closing without a broker."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/10 bg-[var(--color-surface)] p-8 lg:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)]">FSBO guide</p>
          <h1 className="mt-3 text-5xl font-semibold">Sell Alaska land without giving away the process.</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
            Kenai Land Sales is built for locals who want to market land directly, answer buyers
            personally, and use brokers only where they truly protect the deal: title, escrow,
            and recording.
          </p>

          <div className="mt-8 grid gap-6">
            {steps.map((step, index) => (
              <section key={step.title} className="rounded-[30px] bg-[var(--color-surface-elevated)] p-6 lg:p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)]">
                  Step {index + 1}
                </p>
                <h2 className="mt-2 text-3xl font-semibold">{step.title}</h2>
                <ul className="mt-5 space-y-3 text-[var(--color-muted)]">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-2xl bg-black/15 px-4 py-4 leading-7">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
            <section className="rounded-[30px] bg-[var(--color-surface-elevated)] p-6">
              <h2 className="text-2xl font-semibold">Price-per-acre guide by region</h2>
              <div className="mt-4 space-y-3">
                {regionalPricing.map((row) => (
                  <div key={row.area} className="rounded-2xl bg-black/15 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="font-semibold">{row.area}</p>
                      <span className="rounded-full bg-amber-500/15 px-3 py-1 text-sm text-amber-200">
                        {row.range}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">{row.note}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-4 text-sm text-emerald-50">
                Quick benchmark: a 5-acre parcel at {formatCurrency(18000)} per acre supports an
                asking price near <span className="font-semibold">{formatCurrency(90000)}</span>{' '}
                before view, access, and document quality adjustments.
              </div>
            </section>

            <section className="rounded-[30px] bg-[var(--color-surface-elevated)] p-6">
              <h2 className="text-2xl font-semibold">Alaska-specific details owners should address</h2>
              <div className="mt-4 space-y-3 text-[var(--color-muted)]">
                <p className="rounded-2xl bg-black/15 px-4 py-4">
                  <span className="font-semibold text-[var(--color-text)]">DNR land records:</span>{' '}
                  Older patents, surveys, and easement history may live outside the documents an
                  owner has at home.
                </p>
                <p className="rounded-2xl bg-black/15 px-4 py-4">
                  <span className="font-semibold text-[var(--color-text)]">Borough zoning:</span>{' '}
                  Buildable confidence rises fast when borough use notes, frontage, and road
                  standards are documented.
                </p>
                <p className="rounded-2xl bg-black/15 px-4 py-4">
                  <span className="font-semibold text-[var(--color-text)]">
                    Native land considerations:
                  </span>{' '}
                  Buyers may ask about adjacent corporation land, public access routes, and
                  recorded easements near the parcel.
                </p>
              </div>
            </section>
          </div>

          <section className="mt-8 rounded-[30px] bg-[var(--color-surface-elevated)] p-6">
            <h2 className="text-2xl font-semibold">Traditional broker vs Kenai Land Sales</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="text-[var(--color-muted)]">
                  <tr>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Traditional broker</th>
                    <th className="px-4 py-3">This platform</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label} className="border-t border-white/10 align-top">
                      <td className="px-4 py-4 font-semibold">{row.label}</td>
                      <td className="px-4 py-4 text-[var(--color-muted)]">{row.traditional}</td>
                      <td className="px-4 py-4 text-[var(--color-muted)]">{row.platform}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
