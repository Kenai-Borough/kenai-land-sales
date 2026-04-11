import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import Seo from '../components/Seo'
import { marketDataByArea, parcels } from '../data/parcels'
import { formatCurrency, formatNumber } from '../lib/utils'

const areaSummary = Object.entries(marketDataByArea).map(([area, values]) => {
  const latest = values[values.length - 1]
  return {
    area,
    pricePerAcre: latest.averagePricePerAcre,
    daysOnMarket: latest.averageDaysOnMarket,
    closedSales: latest.closedSales,
  }
})

const seasonalPatterns = [
  { season: 'Winter', buyers: 38, competition: 24 },
  { season: 'Spring', buyers: 72, competition: 56 },
  { season: 'Summer', buyers: 94, competition: 81 },
  { season: 'Fall', buyers: 61, competition: 44 },
]

const hotAreas = parcels
  .slice()
  .sort((left, right) => right.views - left.views)
  .slice(0, 5)
  .map((parcel) => ({
    area: parcel.city,
    title: parcel.title,
    views: parcel.views,
    saves: parcel.favorites,
  }))

const trendData = marketDataByArea.Kenai

export default function MarketData() {
  return (
    <>
      <Seo
        title="Pricing Intelligence | Kenai Land Sales"
        description="Review Kenai Peninsula land price trends, days on market, seasonal activity, and the hottest local areas with interactive charts."
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8 rounded-[36px] border border-white/10 bg-[var(--color-surface)] p-8 lg:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)]">Market data</p>
            <h1 className="mt-3 text-5xl font-semibold">
              Kenai Peninsula pricing signals that help owners list smarter.
            </h1>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              ['Avg active price', formatCurrency(Math.round(parcels.reduce((sum, parcel) => sum + parcel.price, 0) / parcels.length))],
              ['Avg acreage', formatNumber(parcels.reduce((sum, parcel) => sum + parcel.acreage, 0) / parcels.length, 1) + ' acres'],
              ['Most viewed pocket', hotAreas[0]?.area ?? 'Kenai'],
              ['Best season', 'May through August'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[28px] bg-[var(--color-surface-elevated)] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">{label}</p>
                <p className="mt-2 text-2xl font-semibold">{value}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.2fr_.8fr]">
            <section className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
              <h2 className="text-2xl font-semibold">Kenai price-per-acre and days-on-market trend</h2>
              <div className="mt-6 h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.1)" />
                    <XAxis dataKey="period" stroke="currentColor" />
                    <YAxis yAxisId="left" stroke="currentColor" />
                    <YAxis yAxisId="right" orientation="right" stroke="currentColor" />
                    <Tooltip
                      formatter={(value: number, name: string) =>
                        name === 'Avg price / acre' ? formatCurrency(value) : `${value} days`
                      }
                      contentStyle={{ borderRadius: 16, border: 'none', background: '#08110c' }}
                    />
                    <Line yAxisId="left" type="monotone" dataKey="averagePricePerAcre" name="Avg price / acre" stroke="#f59e0b" strokeWidth={3} />
                    <Line yAxisId="right" type="monotone" dataKey="averageDaysOnMarket" name="Days on market" stroke="#34d399" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
              <h2 className="text-2xl font-semibold">Hot areas right now</h2>
              <div className="mt-4 space-y-3">
                {hotAreas.map((area) => (
                  <div key={area.title} className="rounded-2xl bg-black/15 p-4">
                    <p className="font-semibold">{area.title}</p>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">{area.area}</p>
                    <div className="mt-3 flex gap-3 text-sm text-[var(--color-muted)]">
                      <span>{area.views} views</span>
                      <span>{area.saves} saves</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <section className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
              <h2 className="text-2xl font-semibold">Area comparison</h2>
              <div className="mt-6 h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={areaSummary}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.1)" />
                    <XAxis dataKey="area" stroke="currentColor" />
                    <YAxis stroke="currentColor" />
                    <Tooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{ borderRadius: 16, border: 'none', background: '#08110c' }} />
                    <Bar dataKey="pricePerAcre" fill="#f59e0b" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section className="rounded-[28px] bg-[var(--color-surface-elevated)] p-6">
              <h2 className="text-2xl font-semibold">Seasonal buyer activity</h2>
              <div className="mt-6 h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={seasonalPatterns}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.1)" />
                    <XAxis dataKey="season" stroke="currentColor" />
                    <YAxis stroke="currentColor" />
                    <Tooltip contentStyle={{ borderRadius: 16, border: 'none', background: '#08110c' }} />
                    <Area type="monotone" dataKey="buyers" stackId="1" stroke="#34d399" fill="#34d39955" />
                    <Area type="monotone" dataKey="competition" stackId="1" stroke="#60a5fa" fill="#60a5fa55" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
