import { Link } from 'react-router-dom'
import { ShieldCheck, Trees } from 'lucide-react'
import { sisterSites } from '../data/parcels'
import { KenaiNetworkBanner } from '../KenaiNetworkBanner'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[var(--color-surface)]">
        <KenaiNetworkBanner />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_.9fr_.9fr] lg:px-8">
        <div>
          <h3 className="text-2xl font-semibold">Kenai Land Sales</h3>
          <p className="mt-4 max-w-xl text-[var(--color-muted)]">
            Owner-direct land sales for the Kenai Peninsula. Verified trust signals,
            optional closing support, and no hidden fees.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-surface-elevated)] px-4 py-2">
              <ShieldCheck className="h-4 w-4 text-[var(--color-primary)]" />
              Clear title messaging
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-surface-elevated)] px-4 py-2">
              <Trees className="h-4 w-4 text-[var(--color-primary)]" />
              Built for Alaska acreage
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Explore
          </h4>
          <div className="mt-4 space-y-3 text-sm">
            <Link to="/browse" className="block hover:text-[var(--color-primary)]">
              Browse parcels
            </Link>
            <Link to="/guide" className="block hover:text-[var(--color-primary)]">
              FSBO guide
            </Link>
            <Link to="/due-diligence" className="block hover:text-[var(--color-primary)]">
              Due diligence center
            </Link>
            <Link to="/closing-process" className="block hover:text-[var(--color-primary)]">
              Escrow and closing
            </Link>
            <Link to="/market-data" className="block hover:text-[var(--color-primary)]">
              Pricing intelligence
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Network
          </h4>
          <div className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
            {sisterSites.map((site) => (
              <a
                key={site}
                href={site}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-[var(--color-primary)]"
              >
                {site.replace('https://', '')}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-[var(--color-muted)]">
        © 2026 Kenai Land Sales • kenailandsales.com • Trusted Alaska FSBO land sales
      </div>
    </footer>
  )
}
