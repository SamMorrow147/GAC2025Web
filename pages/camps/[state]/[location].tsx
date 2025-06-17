import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import campData from '../../../content/camps/camp-locations.json'
import GoogleMap from '../../../components/GoogleMap'

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
  const [selectedSession, setSelectedSession] = useState<CampSession | null>(null)

  if (!state || !location || typeof state !== 'string' || typeof location !== 'string') {
    return <div>Loading...</div>
  }

  const stateId = state.toLowerCase()
  const stateData = (campData.camps as Record<string, StateData>)[stateId]
  if (!stateData) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">State not found</h1>
          <p className="mb-8">Could not find state: {stateId}</p>
          <Link
            href="/camps"
            className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to All States
          </Link>
        </div>
      </div>
    )
  }

  // Convert location slug to match the format in the data
  const locationId = location.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const locationData = stateData.locations.find((loc) => loc.id === locationId)
  if (!locationData) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Location not found</h1>
          <p className="mb-8">Could not find location: {locationId}</p>
          <Link
            href={`/camps/${stateId}`}
            className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to {stateData.name} Locations
          </Link>
        </div>
      </div>
    )
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
                    <React.Fragment key={idx}>
                      <tr 
                        className="border-t border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => setSelectedSession(selectedSession === session ? null : session)}
                      >
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
                              href={session.registerUrl || locationData.registrationUrl || '/contact'}
                              className="text-red-700 font-bold flex items-center gap-1 hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Register <span className="text-lg">&#10140;</span>
                            </a>
                          )}
                        </td>
                      </tr>
                      {selectedSession === session && (
                        <tr>
                          <td colSpan={8} className="px-4 py-4 bg-gray-50 border-t border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h3 className="font-bold text-lg mb-2">Camp Details</h3>
                                <div className="space-y-2">
                                  <p><span className="font-semibold">Camp Type:</span> {session.campType}</p>
                                  <p><span className="font-semibold">Duration:</span> {session.startDate} - {session.endDate}</p>
                                  <p><span className="font-semibold">Time:</span> {session.times}</p>
                                  <p><span className="font-semibold">Ages:</span> {session.ages}</p>
                                  <p><span className="font-semibold">Price:</span> {session.price}</p>
                                </div>
                              </div>
                              <div>
                                <h3 className="font-bold text-lg mb-2">Camp Features</h3>
                                <ul className="list-disc list-inside space-y-1">
                                  <li>Professional instruction</li>
                                  <li>Small group training</li>
                                  <li>Skill development focus</li>
                                  <li>Game situations</li>
                                  <li>Video analysis (where available)</li>
                                </ul>
                                <div className="mt-4">
                                  {session.itineraryUrl && (
                                    <a 
                                      href={session.itineraryUrl}
                                      className="text-red-700 font-semibold hover:underline mr-4"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      View Itinerary
                                    </a>
                                  )}
                                  {!session.soldOut && (
                                    <a 
                                      href={session.registerUrl || locationData.registrationUrl || '/contact'}
                                      className="text-red-700 font-bold hover:underline"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Register Now
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-4 sm:p-8 mb-6 sm:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Google Map */}
            <div className="h-full">
              <div className="sticky top-4 h-[600px]">
                <GoogleMap address={locationData.fullAddress} />
              </div>
            </div>

            {/* Right Column - Location Information */}
            <div>
              <div className="mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Location Details</h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  {locationData.fullAddress}
                </p>
              </div>

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

              <div className="text-center md:text-left">
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
          </div>
        </div>

        <div className="text-center">
          <Link
            href={`/camps/${stateId}`}
            className="inline-block bg-gray-200 text-gray-800 px-4 sm:px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm sm:text-base"
          >
            ← Back to {stateData.name} Locations
          </Link>
        </div>
      </div>
    </div>
  )
} 