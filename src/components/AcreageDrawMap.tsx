import { useEffect, useMemo, useState, type Dispatch, type SetStateAction } from 'react'
import {
  MapContainer,
  Marker,
  Polygon,
  TileLayer,
  useMapEvents,
} from 'react-leaflet'
import L from 'leaflet'
import { approximatePolygonAreaInAcres, formatNumber } from '../lib/utils'

interface AcreageDrawMapProps {
  onAreaChange: (acres: number, points: [number, number][]) => void
}

const markerIcon = L.divIcon({
  className: 'acreage-point-icon',
  html: '<div style=\"width:14px;height:14px;border-radius:999px;background:#f59e0b;border:2px solid white\"></div>',
  iconSize: [14, 14],
})

function ClickCapture({
  points,
  setPoints,
}: {
  points: [number, number][]
  setPoints: Dispatch<SetStateAction<[number, number][]>>
}) {
  useMapEvents({
    click(event) {
      setPoints([...points, [event.latlng.lat, event.latlng.lng]])
    },
  })

  return null
}

export default function AcreageDrawMap({ onAreaChange }: AcreageDrawMapProps) {
  const [points, setPoints] = useState<[number, number][]>([])
  const acres = useMemo(() => approximatePolygonAreaInAcres(points), [points])

  useEffect(() => {
    onAreaChange(acres, points)
  }, [acres, onAreaChange, points])

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-[28px] border border-white/10">
        <MapContainer center={[60.5544, -151.2583]} zoom={8} className="h-72 w-full">
          <TileLayer
            attribution="Tiles © Esri"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
          <ClickCapture points={points} setPoints={setPoints} />
          {points.map((point, index) => (
            <Marker key={point.join('-') + index} position={point} icon={markerIcon} />
          ))}
          {points.length >= 3 ? (
            <Polygon
              positions={points}
              pathOptions={{ color: '#f59e0b', fillOpacity: 0.24, weight: 2.5 }}
            />
          ) : null}
        </MapContainer>
      </div>
      <div className="flex items-center justify-between rounded-2xl bg-[var(--color-surface-elevated)] px-4 py-3 text-sm">
        <p>
          Click the map to drop boundary points. Estimated area:{' '}
          <span className="font-semibold text-[var(--color-text)]">
            {formatNumber(acres, 2)} acres
          </span>
        </p>
        <button
          type="button"
          onClick={() => setPoints([])}
          className="rounded-full border border-white/10 px-3 py-1 font-semibold"
        >
          Reset points
        </button>
      </div>
    </div>
  )
}
