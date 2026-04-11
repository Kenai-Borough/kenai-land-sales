import { useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface GalleryProps {
  photos: string[]
  title: string
}

export default function Gallery({ photos, title }: GalleryProps) {
  const [selected, setSelected] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollTo = useCallback(
    (index: number) => {
      setSelected(index)
      emblaApi?.scrollTo(index)
    },
    [emblaApi],
  )

  return (
    <>
      <div className="space-y-4">
        <div className="overflow-hidden rounded-[32px]" ref={emblaRef}>
          <div className="flex">
            {photos.map((photo, index) => (
              <button
                key={photo + index}
                type="button"
                className="relative min-w-0 flex-[0_0_100%] bg-transparent"
                onClick={() => {
                  setSelected(index)
                  setIsOpen(true)
                }}
              >
                <img
                  src={photo}
                  alt={title + ' image ' + (index + 1)}
                  className="h-[28rem] w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {photos.map((photo, index) => (
            <button
              key={photo + '-thumb'}
              type="button"
              onClick={() => scrollTo(index)}
              className="overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={photo}
                alt={title + ' thumbnail ' + (index + 1)}
                className="h-24 w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4"
          >
            <button
              type="button"
              className="absolute right-6 top-6 rounded-full border border-white/20 p-3 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="absolute left-6 rounded-full border border-white/20 p-3 text-white"
              onClick={() => setSelected((current) => (current - 1 + photos.length) % photos.length)}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <img
              src={photos[selected]}
              alt={title + ' enlarged image'}
              className="max-h-[85vh] max-w-[85vw] rounded-3xl object-cover"
            />
            <button
              type="button"
              className="absolute right-6 rounded-full border border-white/20 p-3 text-white"
              onClick={() => setSelected((current) => (current + 1) % photos.length)}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
