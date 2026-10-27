import { cacheLife, cacheTag } from 'next/cache'
import { client } from './client'

export async function getPortfolio() {
  'use cache'
  cacheLife({ stale: 30, revalidate: 300, expire: 600 })
  cacheTag('portfolio')

  return client.fetch(`
    *[_type == "portfolio"][0] {
      profile,
      services,
      experience,
      skills,
      results
    }
  `)
}