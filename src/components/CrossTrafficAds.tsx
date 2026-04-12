import { motion } from 'framer-motion'
import { ArrowRight, BedDouble, CarFront, Compass, Hammer, House } from 'lucide-react'

const promos = [
  { icon: Hammer, title: "Ready to Build? Find Contractors", description: "Connect with service providers, jobs, and local help before breaking ground.", href: "https://kenailistings.com", cta: "Browse listings", panelClass: "from-lime-500/15 to-slate-950/0", accentClass: "bg-lime-400" },
  { icon: House, title: "Need a Home Instead?", description: "Compare move-in-ready homes or broader FSBO inventory before committing to a build.", href: "https://kenaihomesales.com", cta: "See home sales", panelClass: "from-sky-500/15 to-slate-950/0", accentClass: "bg-sky-400" },
  { icon: BedDouble, title: "Vacation While You Search", description: "Stay close to parcels you are touring with cabins and long-stay rentals nearby.", href: "https://kenaipeninsularentals.com", cta: "Find rentals", panelClass: "from-amber-500/15 to-slate-950/0", accentClass: "bg-amber-400" },
  { icon: CarFront, title: "Need Equipment for Your Land?", description: "Find trucks, trailers, and work-ready vehicles built for Alaska access roads.", href: "https://kenaiautosales.com", cta: "Shop vehicles", panelClass: "from-orange-500/15 to-slate-950/0", accentClass: "bg-orange-400" },
  { icon: Compass, title: "Explore the Kenai Community", description: "Research towns, events, and local businesses before choosing your next parcel.", href: "https://kenaiborough.com", cta: "Visit borough hub", panelClass: "from-cyan-500/15 to-slate-950/0", accentClass: "bg-cyan-400" },
] as const

export function CrossTrafficAds() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-[var(--color-surface)] p-8 shadow-xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">Kenai Peninsula network</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--color-text)]">Keep your search moving across the Kenai ecosystem.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-muted)]">Helpful next steps from sister sites across the peninsula—property, rentals, vehicles, classifieds, and local guides that fit the moment naturally.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {promos.map((promo, index) => {
            const Icon = promo.icon
            return (
              <motion.a
                key={promo.href}
                href={promo.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className={"relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[var(--color-surface-elevated)] p-6 shadow-lg transition" + ' bg-gradient-to-br ' + promo.panelClass}
              >
                <span className={'absolute inset-y-4 left-0 w-1 rounded-full ' + promo.accentClass} />
                <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-slate-900 dark:bg-white/5 dark:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{promo.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{promo.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">
                  {promo.cta} <ArrowRight className="h-4 w-4" />
                </span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
