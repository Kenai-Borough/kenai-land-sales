import { MapContainer, Marker, Polygon, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import type { Parcel } from '../types'
import { formatCurrency, formatNumber } from '../lib/utils'

interface ParcelMapProps {
  parcels: Parcel[]
  focusParcelId?: string
  heightClassName?: string
}

const createClusterIcon = (count: number) =>
  L.divIcon({
    className: 'kenai-cluster-icon',
    html:
      '<div style=\"display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:999px;background:rgba(27,94,32,.92);color:white;font-weight:700;border:2px solid rgba(255,255,255,.65)\">' +
      count +
      '</div>',
    iconSize: [42, 42],
  })

const createSingleIcon = () =>
  L.divIcon({
    className: 'kenai-marker-icon',
    html:
      '<div style=\"width:16px;height:16px;border-radius:999px;background:#f59e0b;border:3px solid rgba(255,255,255,.8);box-shadow:0 12px 24px rgba(0,0,0,.25)\"></div>',
    iconSize: [16, 16],
  })

const clusterParcels = (parcels: Parcel[]) => {
  const buckets = new Map<string, Parcel[]>()
  parcels.forEach((parcel) => {
    const key =
      Math.round(parcel.coordinates[0] * 10) / 10 +
      ':' +
      (Math.round(parcel.coordinates[1] * 10) / 10)
    const current = buckets.get(key) ?? []
    current.push(parcel)
    buckets.set(key, current)
  })

  return Array.from(buckets.values()).map((items) => ({
    center: items[0].coordinates,
    items,
  }))
}

export default function ParcelMap({
  parcels,
  focusParcelId,
  heightClassName = 'h-[28rem]',
}: ParcelMapProps) {
  const clusters = clusterParcels(parcels)
  const focusParcel = parcels.find((parcel) => parcel.id === focusParcelId)
  const center = focusParcel?.coordinates ?? parcels[0]?.coordinates ?? [60.5544, -151.2583]

  return (
    <div className={'overflow-hidden rounded-[30px] border border-white/10 ' + heightClassName}>
      <MapContainer center={center} zoom={9} scrollWheelZoom className="h-full w-full">
        <TileLayer
          attribution="Tiles © Esri"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        {clusters.map((cluster) => {
          const isMulti = cluster.items.length > 1
          return (
            <Marker
              key={cluster.items.map((item) => item.id).join('-')}
              position={cluster.center}
              icon={isMulti ? createClusterIcon(cluster.items.length) : createSingleIcon()}
            >
              <Popup>
                <div className="space-y-2">
                  {cluster.items.map((parcel) => (
                    <div key={parcel.id}>
                      <p className="font-semibold">{parcel.title}</p>
                      <p>{formatCurrency(parcel.price)} • {formatNumber(parcel.acreage)} acres</p>
                    </div>
                  ))}
                </div>
              </Popup>
            </Marker>
          )
        })}
        {focusParcel ? (
          <Polygon
            positions={focusParcel.boundary}
            pathOptions={{ color: '#f59e0b', weight: 3, fillOpacity: 0.22 }}
          />
        ) : null}
      </MapContainer>
    </div>
  )
}
