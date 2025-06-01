import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import campData from '../../content/camps/camp-locations.json'

export default function CampsPage() {
  const [expandedState, setExpandedState] = useState<string | null>(null)
  const states = Object.entries(campData.camps)
    .map(([key, state]) => ({
      id: key,
      ...state
    }))
    .sort((a, b) => a.name.localeCompare(b.name))

  const toggleState = (stateId: string) => {
    setExpandedState(expandedState === stateId ? null : stateId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header with Logo */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/Logo/Insignia.png"
              alt="Greg Carter Hockey"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Hockey Camps</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us at one of our premier hockey training locations across the United States
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {states.map((state) => (
            <div key={state.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleState(state.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h2 className="text-2xl font-bold">{state.name}</h2>
                  <p className="text-gray-600">
                    {state.locations.length} {state.locations.length === 1 ? 'Location' : 'Locations'}
                  </p>
                </div>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    expandedState === state.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {expandedState === state.id && (
                <div className="px-6 pb-4 space-y-4">
                  {state.locations.map((location) => (
                    <div
                      key={location.id}
                      className="border-t pt-4 first:border-t-0 first:pt-0"
                    >
                      <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                      <p className="text-gray-600 mb-3">
                        {location.city}, {location.state}
                      </p>
                      <Link
                        href={`/camps/${state.id}/${location.id}`}
                        className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <Image
              src="/Logo/wordmark- black.jpg"
              alt="Greg Carter Hockey"
              width={300}
              height={80}
              className="mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold mb-4">Can't find a camp near you?</h2>
            <p className="text-gray-600 mb-6">
              We're constantly adding new locations. Contact us to request a camp in your area.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 