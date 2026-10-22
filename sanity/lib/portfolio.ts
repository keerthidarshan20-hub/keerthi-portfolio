import { cacheLife, cacheTag } from 'next/cache'
import { client } from './client'

export async function getPortfolio() {
  'use cache'
  cacheLife('hours')
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