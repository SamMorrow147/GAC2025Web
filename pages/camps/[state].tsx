import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import campData from '../../content/camps/camp-locations.json'

export default function StatePage() {
  const router = useRouter()
  const { state } = router.query

  if (!state || typeof state !== 'string') {
    return <div>Loading...</div>
  }

  const stateData = campData.camps[state]
  if (!stateData) {
    return <div>State not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">{stateData.name} Hockey Camps</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {stateData.locations.map((location) => (
          <div key={location.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-2">{location.name}</h2>
            <p className="text-gray-600 mb-4">
              {location.city}, {location.state}
            </p>
            <Link
              href={`/camps/${state}/${location.id}`}
              className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/camps"
          className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
        >
          ← Back to All States
        </Link>
      </div>
    </div>
  )
} 