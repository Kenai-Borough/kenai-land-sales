import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  BellRing,
  ChartColumnIncreasing,
  Inbox,
  Search,
  Settings,
  ShieldCheck,
  WalletCards,
} from 'lucide-react'
import PropertyCard from '../components/PropertyCard'
import Seo from '../components/Seo'
import {
  dashboardInquiries,
  dashboardTransactions,
  parcels,
  savedSearches,
} from '../data/parcels'
import { useToast } from '../context/ToastContext'
import { getCurrentUser } from '../lib/supabase'
import { formatCurrency, formatDate } from '../lib/utils'
import { emailService } from '../lib/email'
import { emailTemplates } from '../lib/email-templates'

const sellerStatuses = ['active', 'pending_review', 'sold', 'expired'] as const

type Panel = 'seller' | 'buyer' | 'settings'

export default function DashboardPage() {
  const [panel, setPanel] = useState<Panel>('seller')
  const [user, setUser] = useState<Awaited<ReturnType<typeof getCurrentUser>> | null>(null)
  const [replyDrafts, setReplyDrafts] = useState<Record<string, string>>({})
  const [alertState, setAlertState] = useState<Record<string, boolean>>(
    Object.fromEntries(savedSearches.map((search) => [search.id, search.alerts])),
  )
  const navigate = useNavigate()
  const { pushToast } = useToast()

  useEffect(() => {
    getCurrentUser().then((currentUser) => {
      if (!currentUser) {
        navigate('/login')
        return
      }
      setUser(currentUser)
      if (currentUser.user_metadata?.role === 'buyer') setPanel('buyer')
    })
  }, [navigate])

  const sellerListings = useMemo(() => parcels.slice(0, 6), [])
  const buyerSavedParcels = useMemo(() => parcels.slice(6, 10), [])
  const stats = useMemo(
    () => ({
      active: sellerListings.filter((listing) => listing.status === 'active').length,
      pending_review: sellerListings.filter((listing) => listing.status === 'pending_review').length,
      sold: sellerListings.filter((listing) => listing.status === 'sold').length,
      expired: sellerListings.filter((listing) => listing.status === 'expired').length,
    }),
    [sellerListings],
  )

  if (!user) return null

  const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Seller'
  const role = user.user_metadata?.role || 'seller'

  return (
    <>
      <Seo
        title="Seller Dashboard | Kenai Land Sales"
        description="Track listings, inquiry replies, analytics, saved parcels, alerts, and account settings from the Kenai Land Sales dashboard."
      />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/10 bg-[var(--color-surface)] p-6 lg:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)]">
                Dashboard
              </p>
              <h1 className="mt-2 text-4xl font-semibold">Welcome back, {displayName}</h1>
              <p className="mt-2 text-[var(--color-muted)]">
                {role === 'buyer'
                  ? 'Track saved parcels, saved searches, and the closings you are evaluating.'
                  : 'Manage listings, reply to buyers, and keep every parcel moving toward a trusted closing.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {role === 'admin' ? (
                <Link
                  to="/admin"
                  className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold"
                >
                  Admin dashboard
                </Link>
              ) : null}
              <Link
                to="/create-listing"
                className="rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-white"
              >
                Create new listing
              </Link>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { id: 'seller', label: 'Seller workspace', icon: ChartColumnIncreasing },
              { id: 'buyer', label: 'Buyer workspace', icon: Search },
              { id: 'settings', label: 'Account settings', icon: Settings },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setPanel(tab.id as Panel)}
                className={
                  'inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold ' +
                  (panel === tab.id
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-[var(--color-surface-elevated)] text-[var(--color-muted)]')
                }
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {panel === 'seller' ? (
            <div className="mt-8 space-y-8">
              <div className="grid gap-4 md:grid-cols-4">
                {sellerStatuses.map((status) => (
                  <div key={status} className="rounded-[28px] bg-[var(--color-surface-elevated)] p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">
                      {status.replace('_', ' ')}
                    </p>
                    <p className="mt-2 text-3xl font-semibold">{stats[status]}</p>
                  </div>
                ))}
              </div>

              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <ChartColumnIncreasing className="h-5 w-5 text-[var(--color-primary)]" />
                  <h2 className="text-2xl font-semibold">My listings</h2>
                </div>
                <div className="grid gap-4 lg:grid-cols-2">
                  {sellerListings.map((listing) => (
                    <div
                      key={listing.id}
                      className="rounded-[28px] bg-[var(--color-surface-elevated)] p-5"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <p className="text-xl font-semibold">{listing.title}</p>
                          <p className="mt-1 text-sm text-[var(--color-muted)]">
                            {listing.city} • {formatCurrency(listing.price)} • {listing.views}{' '}
                            views • {listing.favorites} saves
                          </p>
                        </div>
                        <span className="rounded-full bg-black/20 px-4 py-2 text-sm text-[var(--color-muted)]">
                          {listing.status.replace('_', ' ')}
                        </span>
                      </div>
                      <div className="mt-4 grid gap-3 md:grid-cols-3 text-sm">
                        {listing.metrics.slice(0, 3).map((metric) => (
                          <div key={metric.label} className="rounded-2xl bg-black/15 p-3">
                            <p className="text-[var(--color-muted)]">{metric.label}</p>
                            <p className="mt-1 font-semibold">{metric.value}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex gap-3">
                        <Link
                          to={`/listing/${listing.id}`}
                          className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold"
                        >
                          View listing
                        </Link>
                        <button
                          type="button"
                          className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white"
                        >
                          Edit details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="grid gap-6 xl:grid-cols-[1.05fr_.95fr]">
                <div className="space-y-4 rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
                  <div className="flex items-center gap-3">
                    <Inbox className="h-5 w-5 text-[var(--color-primary)]" />
                    <h2 className="text-2xl font-semibold">Inquiry inbox</h2>
                  </div>
                  {dashboardInquiries.map((inquiry) => (
                    <div key={inquiry.id} className="rounded-2xl bg-black/15 p-4">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold">{inquiry.name}</p>
                          <p className="text-sm text-[var(--color-muted)]">
                            {inquiry.email} • {inquiry.phone} • {formatDate(inquiry.receivedAt)}
                          </p>
                        </div>
                        <span className="rounded-full bg-emerald-900/50 px-3 py-1 text-xs uppercase tracking-[0.25em] text-emerald-100">
                          {inquiry.status}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-[var(--color-muted)]">{inquiry.message}</p>
                      <textarea
                        rows={3}
                        value={replyDrafts[inquiry.id] ?? ''}
                        onChange={(event) =>
                          setReplyDrafts((current) => ({
                            ...current,
                            [inquiry.id]: event.target.value,
                          }))
                        }
                        placeholder="Reply to buyer"
                        className="mt-4 w-full rounded-2xl border border-white/10 bg-[var(--color-surface)] px-4 py-3"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          void (async () => {
                            const draft = replyDrafts[inquiry.id] ?? ''
                            if (!draft.trim()) {
                              pushToast({ title: 'Add a reply', description: 'Write a reply before sending the email.', variant: 'error' })
                              return
                            }
                            const email = emailTemplates.messageNotification({ conversationLabel: 'Parcel inquiry', senderName: 'Kenai Land Sales', messageSnippet: draft, replyUrl: `${window.location.origin}/dashboard` })
                            const result = await emailService.send({ to: inquiry.email, ...email, metadata: { notificationType: 'dashboard-reply', inquiryId: inquiry.id } })
                            pushToast({
                              title: result.queued ? 'Reply queued' : 'Reply sent',
                              description: result.queued ? 'Message sent (email notification may be delayed).' : `Your response to ${inquiry.name} is on the way.`,
                              variant: 'success',
                            })
                          })()
                        }
                        className="mt-3 rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white"
                      >
                        Reply
                      </button>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
                  <div className="flex items-center gap-3">
                    <WalletCards className="h-5 w-5 text-[var(--color-primary)]" />
                    <h2 className="text-2xl font-semibold">Transactions in progress</h2>
                  </div>
                  {dashboardTransactions.map((transaction) => (
                    <div key={transaction.id} className="rounded-2xl bg-black/15 p-4">
                      <p className="font-semibold">{transaction.buyer}</p>
                      <p className="mt-1 text-sm text-[var(--color-muted)]">
                        {formatCurrency(transaction.salePrice)} • {transaction.escrowCompany}
                      </p>
                      <p className="mt-1 text-sm text-[var(--color-muted)]">
                        Closing target: {formatDate(transaction.closingDate)}
                      </p>
                      <p className="mt-3 text-sm font-semibold text-[var(--color-primary)]">
                        {transaction.status.replace('_', ' ')}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          ) : null}

          {panel === 'buyer' ? (
            <div className="mt-8 space-y-8">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  ['Saved parcels', String(buyerSavedParcels.length)],
                  ['Saved searches', String(savedSearches.length)],
                  ['Active alerts', String(Object.values(alertState).filter(Boolean).length)],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[28px] bg-[var(--color-surface-elevated)] p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">
                      {label}
                    </p>
                    <p className="mt-2 text-3xl font-semibold">{value}</p>
                  </div>
                ))}
              </div>

              <section>
                <div className="mb-4 flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-[var(--color-primary)]" />
                  <h2 className="text-2xl font-semibold">Saved parcels</h2>
                </div>
                <div className="grid gap-6 xl:grid-cols-2">
                  {buyerSavedParcels.map((parcel) => (
                    <PropertyCard key={parcel.id} parcel={parcel} compact />
                  ))}
                </div>
              </section>

              <section className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
                <div className="flex items-center gap-3">
                  <BellRing className="h-5 w-5 text-[var(--color-primary)]" />
                  <h2 className="text-2xl font-semibold">Saved searches & alerts</h2>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {savedSearches.map((search) => (
                    <div key={search.id} className="rounded-2xl bg-black/15 p-4">
                      <p className="font-semibold">{search.label}</p>
                      <p className="mt-2 text-sm text-[var(--color-muted)]">{search.criteria}</p>
                      <button
                        type="button"
                        onClick={() =>
                          setAlertState((current) => ({
                            ...current,
                            [search.id]: !current[search.id],
                          }))
                        }
                        className="mt-4 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold"
                      >
                        Alerts {alertState[search.id] ? 'on' : 'off'}
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          ) : null}

          {panel === 'settings' ? (
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <section className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
                <h2 className="text-2xl font-semibold">Account settings</h2>
                <div className="mt-4 space-y-4">
                  <div className="rounded-2xl bg-black/15 px-4 py-3 text-sm text-[var(--color-muted)]">
                    Email: {user.email}
                  </div>
                  <div className="rounded-2xl bg-black/15 px-4 py-3 text-sm text-[var(--color-muted)]">
                    Role: {role}
                  </div>
                  <div className="rounded-2xl bg-black/15 px-4 py-3 text-sm text-[var(--color-muted)]">
                    Phone:{' '}
                    {user.user_metadata?.phone || 'Add a phone number for faster buyer response'}
                  </div>
                </div>
              </section>
              <section className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
                <h2 className="text-2xl font-semibold">Notification preferences</h2>
                <div className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
                  <div className="rounded-2xl bg-black/15 px-4 py-3">Instant inquiry alerts</div>
                  <div className="rounded-2xl bg-black/15 px-4 py-3">
                    Weekly saved-search digest
                  </div>
                  <div className="rounded-2xl bg-black/15 px-4 py-3">
                    Escrow milestone reminders
                  </div>
                </div>
              </section>
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}
