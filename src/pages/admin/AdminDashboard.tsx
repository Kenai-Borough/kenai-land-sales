import Seo from '../../components/Seo'
import { adminQueue, parcels } from '../../data/parcels'

const adminUsers = [
  { name: 'Sarah McKinley', role: 'seller', status: 'verified', parcels: 4 },
  { name: 'Casey Holden', role: 'buyer', status: 'active', parcels: 0 },
  { name: 'North Trail Ventures', role: 'seller', status: 'review', parcels: 2 },
]

const analytics = [
  ['Listings pending review', String(adminQueue.length)],
  ['Verified sellers', '78'],
  ['Monthly inquiries', '276'],
  ['Featured placements', String(parcels.filter((parcel) => parcel.featured).length)],
] as const

export default function AdminDashboard() {
  return (
    <>
      <Seo
        title="Admin Dashboard | Kenai Land Sales"
        description="Moderate listings, review users, manage featured parcels, and monitor marketplace analytics from the Kenai Land Sales admin dashboard."
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8 rounded-[36px] border border-white/10 bg-[var(--color-surface)] p-8 lg:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Admin dashboard
            </p>
            <h1 className="mt-3 text-5xl font-semibold">
              Marketplace moderation, trust, and featured inventory.
            </h1>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {analytics.map(([label, value]) => (
              <div key={label} className="rounded-[28px] bg-[var(--color-surface-elevated)] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">
                  {label}
                </p>
                <p className="mt-2 text-3xl font-semibold">{value}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[.95fr_1.05fr]">
            <section className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
              <h2 className="text-2xl font-semibold">Listing moderation queue</h2>
              <div className="mt-4 space-y-3">
                {adminQueue.map((item) => (
                  <div key={item.parcelId} className="rounded-2xl bg-black/15 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold">{item.parcelId}</p>
                      <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs uppercase tracking-[0.25em] text-amber-100">
                        {item.priority}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">{item.reason}</p>
                    <div className="mt-4 flex gap-3 text-sm">
                      <button type="button" className="rounded-full bg-[var(--color-primary)] px-4 py-2 font-semibold text-white">
                        Approve
                      </button>
                      <button type="button" className="rounded-full border border-white/10 px-4 py-2 font-semibold">
                        Request docs
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
              <h2 className="text-2xl font-semibold">Featured listings management</h2>
              <div className="mt-4 space-y-3">
                {parcels.filter((parcel) => parcel.featured).slice(0, 6).map((parcel) => (
                  <div key={parcel.id} className="rounded-2xl bg-black/15 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold">{parcel.title}</p>
                        <p className="text-sm text-[var(--color-muted)]">
                          {parcel.city} • {parcel.views} views • {parcel.favorites} saves
                        </p>
                      </div>
                      <button type="button" className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold">
                        Pin placement
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
            <h2 className="text-2xl font-semibold">User management</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="text-[var(--color-muted)]">
                  <tr>
                    <th className="px-4 py-3">User</th>
                    <th className="px-4 py-3">Role</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Listings</th>
                  </tr>
                </thead>
                <tbody>
                  {adminUsers.map((user) => (
                    <tr key={user.name} className="border-t border-white/10">
                      <td className="px-4 py-4 font-semibold">{user.name}</td>
                      <td className="px-4 py-4 text-[var(--color-muted)]">{user.role}</td>
                      <td className="px-4 py-4 text-[var(--color-muted)]">{user.status}</td>
                      <td className="px-4 py-4 text-[var(--color-muted)]">{user.parcels}</td>
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
