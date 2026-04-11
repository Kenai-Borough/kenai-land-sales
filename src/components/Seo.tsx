import { useEffect } from 'react'

interface SeoProps {
  title: string
  description: string
  image?: string
  schema?: Record<string, unknown>
}

const ensureMeta = (selector: string, create: () => HTMLMetaElement) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!element) {
    element = create()
    document.head.appendChild(element)
  }
  return element
}

export default function Seo({ title, description, image, schema }: SeoProps) {
  useEffect(() => {
    document.title = title

    ensureMeta('meta[name="description"]', () => {
      const meta = document.createElement('meta')
      meta.name = 'description'
      return meta
    }).content = description

    ensureMeta('meta[property="og:title"]', () => {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:title')
      return meta
    }).content = title

    ensureMeta('meta[property="og:description"]', () => {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:description')
      return meta
    }).content = description

    ensureMeta('meta[property="og:type"]', () => {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:type')
      return meta
    }).content = 'website'

    ensureMeta('meta[property="og:url"]', () => {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:url')
      return meta
    }).content = window.location.href

    ensureMeta('meta[name="twitter:card"]', () => {
      const meta = document.createElement('meta')
      meta.name = 'twitter:card'
      return meta
    }).content = 'summary_large_image'

    if (image) {
      ensureMeta('meta[property="og:image"]', () => {
        const meta = document.createElement('meta')
        meta.setAttribute('property', 'og:image')
        return meta
      }).content = image
    }

    let script = document.getElementById('structured-data') as HTMLScriptElement | null
    if (schema) {
      if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = 'structured-data'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(schema)
    }

    return () => {
      if (!schema) return
      document.getElementById('structured-data')?.remove()
    }
  }, [title, description, image, schema])

  return null
}
