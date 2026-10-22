import { NextStudio } from 'next-sanity/studio'
import type { Metadata, Viewport } from 'next'
import { connection } from 'next/server'
import { Suspense } from 'react'
import config from '../../../sanity.config'

export const metadata: Metadata = {
  referrer: 'same-origin',
  robots: 'noindex',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

async function RuntimeMarker() {
  await connection()
  return null
}

export default function StudioPage() {
  return (
    <>
      <Suspense fallback={null}>
        <RuntimeMarker />
      </Suspense>
      <NextStudio config={config} />
    </>
  )
}