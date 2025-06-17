import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import campData from '../../content/camps/camp-locations.json'

// StateFace letter code mapping based on the keyboard map
const stateFaceCodes: { [key: string]: string } = {
  'alaska': 'A',
  'connecticut': 'G',
  'illinois': 'N',
  'massachusetts': 'S',
  'michigan': 'V',
  'missouri': 'X',
  'new-hampshire': 'd',
  'new-jersey': 'e',
  'new-york': 'h',
  'pennsylvania': 'l',
  'rhode-island': 'm',
  'vermont': 't',
  'virginia': 's',
  'alabama': 'B',
  'arizona': 'D',
  'arkansas': 'C',
  'california': 'E',
  'colorado': 'F',
  'delaware': 'H',
  'district-of-columbia': 'y',
  'florida': 'I',
  'georgia': 'J',
  'hawaii': 'K',
  'idaho': 'M',
  'indiana': 'O',
  'iowa': 'L',
  'kansas': 'P',
  'kentucky': 'Q',
  'louisiana': 'R',
  'maine': 'U',
  'maryland': 'T',
  'minnesota': 'W',
  'mississippi': 'Y',
  'montana': 'Z',
  'nebraska': 'c',
  'nevada': 'g',
  'new-mexico': 'f',
  'north-carolina': 'a',
  'north-dakota': 'b',
  'ohio': 'i',
  'oklahoma': 'j',
  'oregon': 'k',
  'south-carolina': 'n',
  'south-dakota': 'o',
  'tennessee': 'p',
  'texas': 'q',
  'united-states': 'z',
  'utah': 'r',
  'washington': 'u',
  'west-virginia': 'w',
  'wisconsin': 'v',
  'wyoming': 'x'
}

export default function CampsPage() {
  const [expandedState, setExpandedState] = useState<string | null>(null)
  const states = Object.entries(campData.camps)
    .map(([key, state]) => ({
      id: key,
      ...state
    }))
    .sort((a, b) => {
      // Place Europe at the bottom
      if (a.id === 'europe') return 1
      if (b.id === 'europe') return -1
      // Sort other states alphabetically
      return a.name.localeCompare(b.name)
    })

  const toggleState = (stateId: string) => {
    setExpandedState(expandedState === stateId ? null : stateId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header without Logo */}
        <div className="text-center mb-12">
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
                <div className="flex items-center">
                  {state.id !== 'europe' && (
                    <span className="stateface">{stateFaceCodes[state.id] || state.id}</span>
                  )}
                  <div>
                    <h2 className="text-2xl font-bold">{state.name}</h2>
                    <p className="text-gray-600">
                      {state.locations.length} {state.locations.length === 1 ? 'Location' : 'Locations'}
                    </p>
                  </div>
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
                <div className="relative">
                  {/* Bracket: top, vertical, bottom */}
                  <div className="absolute left-[5px] top-4 h-[calc(100%-2rem)] w-6 pointer-events-none">
                    {/* Top horizontal */}
                    <div className="absolute left-0 top-0 w-4 h-0.5 bg-red-500 rounded"></div>
                    {/* Vertical line (animated) */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-red-500 rounded origin-top animate-bracket-expand"></div>
                    {/* Bottom horizontal */}
                    <div className="absolute left-0 bottom-0 w-4 h-0.5 bg-red-500 rounded"></div>
                  </div>
                  <div className="pl-[29px] pr-4 py-4 space-y-4">
                    {state.locations.map((location) => (
                      <Link
                        key={location.id}
                        href={`/camps/${state.id}/${location.id}`}
                        className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                        <p className="text-gray-600">{location.address}</p>
                      </Link>
                    ))}
                  </div>
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

      <style jsx>{`
        @keyframes bracket-expand {
          0% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(1);
          }
        }
        
        .animate-bracket-expand {
          animation: bracket-expand 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
} 