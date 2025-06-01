import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import campData from '../../../content/camps/camp-locations.json'

// Types for camp data
interface CampSession {
  startDate: string
  endDate: string
  campNumber: string
  campType: string
  price: string
  times: string
  ages: string
  itineraryUrl: string
  registerUrl: string
  soldOut: boolean
}

interface CampLocation {
  id: string
  name: string
  city: string
  state: string
  fullAddress: string
  sessions?: CampSession[]
  mapEmbed?: string
  registrationUrl?: string
}

interface StateData {
  name: string
  locations: CampLocation[]
}

export default function LocationPage() {
  const router = useRouter()
  const { state, location } = router.query

  if (!state || !location || typeof state !== 'string' || typeof location !== 'string') {
    return <div>Loading...</div>
  }

  const stateData = (campData.camps as Record<string, StateData>)[state]
  if (!stateData) {
    return <div>State not found</div>
  }

  const locationData = stateData.locations.find((loc) => loc.id === location)
  if (!locationData) {
    return <div>Location not found</div>
  }

  return (
    <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-2">{locationData.name} {locationData.city ? locationData.city : ''}</h1>
        <p className="text-center text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">{locationData.fullAddress}</p>

        {/* Sessions Table */}
        {locationData.sessions && locationData.sessions.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-2 sm:p-4 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Camp Sessions</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-[10px] sm:text-xs">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="px-1 sm:px-2 py-1 font-semibold text-left">Start</th>
                    <th className="px-1 sm:px-2 py-1 font-semibold text-left">End</th>
                    <th className="px-1 sm:px-2 py-1 font-semibold text-left">Camp #</th>
                    <th className="px-1 sm:px-2 py-1 font-semibold text-left">Type</th>
                    <th className="px-1 sm:px-2 py-1 font-semibold text-left">Price</th>
                    <th className="px-1 sm:px-2 py-1 font-semibold text-left">Time</th>
                    <th className="px-1 sm:px-2 py-1 font-semibold text-left">Ages</th>
                    <th className="px-1 sm:px-2 py-1 font-semibold text-left">Register</th>
                  </tr>
                </thead>
                <tbody>
                  {locationData.sessions.map((session, idx) => (
                    <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50">
                      <td className="px-1 sm:px-2 py-1 whitespace-nowrap">{session.startDate}</td>
                      <td className="px-1 sm:px-2 py-1 whitespace-nowrap">{session.endDate}</td>
                      <td className="px-1 sm:px-2 py-1 whitespace-nowrap font-medium">{session.campNumber}</td>
                      <td className="px-1 sm:px-2 py-1 whitespace-normal break-words max-w-[80px] sm:max-w-none">{session.campType}</td>
                      <td className="px-1 sm:px-2 py-1 whitespace-nowrap font-medium">{session.price}</td>
                      <td className="px-1 sm:px-2 py-1 whitespace-nowrap">{session.times}</td>
                      <td className="px-1 sm:px-2 py-1 whitespace-nowrap">{session.ages}</td>
                      <td className="px-1 sm:px-2 py-1 whitespace-nowrap">
                        {session.soldOut ? (
                          <span className="text-red-700 font-bold">SOLD OUT</span>
                        ) : (
                          <a 
                            href={locationData.registrationUrl || '/contact'}
                            className="text-red-700 font-bold flex items-center gap-1 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Register <span className="text-lg">&#10140;</span>
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-4 sm:p-8 mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Location Details</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {locationData.fullAddress}
            </p>
          </div>

          {/* Map Embed */}
          {locationData.mapEmbed && (
            <div className="mb-4 sm:mb-6">
              <iframe
                src={locationData.mapEmbed}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Camp Location Map"
                className="rounded-lg"
              ></iframe>
            </div>
          )}

          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Camp Information</h2>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
              Our website is temporarily down but you can still register for Summer 2025 Hockey Camps via the links below!
              <br /><br />
              Questions? Please call our office at <a href="tel:978-371-3355" className="text-accent underline">978-371-3355</a> or email us at <a href="mailto:info@gchockey.com" className="text-accent underline">info@gchockey.com</a>.
              <br /><br />
              We look forward to seeing you on the ice this summer!
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>Skating technique and power</li>
              <li>Puck handling and shooting</li>
              <li>Game strategy and positioning</li>
              <li>Team play and communication</li>
            </ul>
          </div>

          <div className="text-center">
            {locationData.registrationUrl ? (
              <a
                href={locationData.registrationUrl}
                className="inline-block bg-accent text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            ) : (
              <Link
                href="/contact"
                className="inline-block bg-accent text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
              >
                Register Now
              </Link>
            )}
          </div>
        </div>

        <div className="text-center">
          <Link
            href={`/camps/${state}`}
            className="inline-block bg-gray-200 text-gray-800 px-4 sm:px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm sm:text-base"
          >
            ← Back to {stateData.name} Locations
          </Link>
        </div>
      </div>
    </div>
  )
} 