import { Heart, MapPin, ShieldCheck, Trees, Verified } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Parcel } from '../types'
import { cn, formatCurrency, formatNumber, landTypeLabels, pricePerAcre } from '../lib/utils'

interface PropertyCardProps {
  parcel: Parcel
  compact?: boolean
  onFavorite?: (parcelId: string) => void
  favorite?: boolean
}

export default function PropertyCard({
  parcel,
  compact,
  onFavorite,
  favorite,
}: PropertyCardProps) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-white/10 bg-[var(--color-surface)] shadow-2xl shadow-black/10">
      <div className={cn('relative overflow-hidden', compact ? 'h-52' : 'h-60')}>
        <img
          src={parcel.photos[0]}
          alt={parcel.title}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="rounded-full bg-black/55 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur">
            {landTypeLabels[parcel.landType]}
          </span>
          <button
            type="button"
            aria-label="Save parcel"
            onClick={() => onFavorite?.(parcel.id)}
            className="rounded-full border border-white/20 bg-black/45 p-2 text-white backdrop-blur"
          >
            <Heart className={cn('h-4 w-4', favorite && 'fill-current text-rose-300')} />
          </button>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-4">
          {parcel.verifiedSeller ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white">
              <Verified className="h-3.5 w-3.5" />
              Verified seller
            </span>
          ) : null}
          {parcel.clearTitle ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/75 px-3 py-1 text-xs font-semibold text-white">
              <ShieldCheck className="h-3.5 w-3.5" />
              Clear title
            </span>
          ) : null}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-2xl font-semibold text-[var(--color-text)]">
              {formatCurrency(parcel.price)}
            </p>
            <h3 className="mt-1 text-xl font-semibold">{parcel.title}</h3>
          </div>
          <div className="rounded-2xl bg-[var(--color-surface-elevated)] px-3 py-2 text-right text-sm">
            <p className="font-semibold">{formatCurrency(pricePerAcre(parcel.price, parcel.acreage))}</p>
            <p className="text-[var(--color-muted)]">per acre</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm text-[var(--color-muted)]">
          <div className="inline-flex items-center gap-2">
            <Trees className="h-4 w-4 text-[var(--color-primary)]" />
            {formatNumber(parcel.acreage)} acres
          </div>
          <div className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[var(--color-primary)]" />
            {parcel.city}
          </div>
        </div>

        <p className="line-clamp-3 text-sm leading-6 text-[var(--color-muted)]">
          {parcel.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {parcel.features.slice(0, 4).map((feature) => (
            <span
              key={feature}
              className="rounded-full bg-[var(--color-surface-elevated)] px-3 py-1 text-xs text-[var(--color-muted)]"
            >
              {feature}
            </span>
          ))}
        </div>

        <Link
          to={'/listing/' + parcel.id}
          className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-3 font-semibold text-white transition hover:translate-y-[-1px]"
        >
          View parcel
        </Link>
      </div>
    </article>
  )
}
