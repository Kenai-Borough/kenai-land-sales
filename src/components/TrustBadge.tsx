import { BadgeCheck, FileCheck2, HandCoins, ShieldCheck, Users } from 'lucide-react'

const items = [
  {
    icon: BadgeCheck,
    title: 'Verified seller profiles',
    copy: 'Every featured owner displays response rate, close history, and badge status.',
  },
  {
    icon: FileCheck2,
    title: 'Clear title workflow',
    copy: 'Listings highlight survey, title, and disclosure progress before a buyer tours.',
  },
  {
    icon: HandCoins,
    title: 'Escrow-first closings',
    copy: 'Owners stay in control while title and escrow professionals handle funds and recording.',
  },
  {
    icon: Users,
    title: 'Local-first reputation',
    copy: 'Built for Kenai Peninsula landowners who want a trusted owner-direct sale.',
  },
  {
    icon: ShieldCheck,
    title: 'No hidden fees',
    copy: 'List free, add optional services only when they genuinely help the transaction.',
  },
]

export default function TrustBadge() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-white/10 bg-[color:var(--color-surface-elevated)] p-5 shadow-lg"
        >
          <item.icon className="h-9 w-9 text-[var(--color-primary)]" />
          <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm text-[var(--color-muted)]">{item.copy}</p>
        </div>
      ))}
    </section>
  )
}
