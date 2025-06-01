import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const clinicData = {
  name: 'February Vacation Clinic (NESC)',
  address: '121 Donald Lynch Blvd, Marlboro, MA, 01752',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.282964893019!2d-71.5521236845436!3d42.3456789791876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e39b1e2b2e2e2b%3A0x2b2e2e2b2e2e2e2b!2s121%20Donald%20Lynch%20Blvd%2C%20Marlborough%2C%20MA%2001752!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus',
  sessions: [
    {
      startDate: '02/19/2025',
      endDate: '02/20/2025',
      clinicNumber: '234',
      clinicType: 'February Vacation NESC',
      price: '$170',
      times: '9:00am - 10:50am',
      ages: '6-12 Yrs',
      itineraryUrl: '#',
      registerUrl: '#'
    },
    {
      startDate: '02/19/2025',
      endDate: '02/19/2025',
      clinicNumber: '235',
      clinicType: 'February Vacation NESC Walk On',
      price: '$85',
      times: '9:00am - 10:50am',
      ages: '6-12 Yrs',
      itineraryUrl: '#',
      registerUrl: '#'
    },
    {
      startDate: '02/20/2025',
      endDate: '02/20/2025',
      clinicNumber: '236',
      clinicType: 'February Vacation NESC Walk On',
      price: '$85',
      times: '9:00am - 10:50am',
      ages: '6-12 Yrs',
      itineraryUrl: '#',
      registerUrl: '#'
    }
  ],
  features: [
    'Forward Striding',
    'Agility',
    'Edge Control',
    'Backward Striding',
    'Stickhandling'
  ],
  description: 'Looking for ice over February Vacation week? Look no further! Come skate with us at one of our clinics and ramp up your skills for the second half of your season!',
  cancellation: 'We will cancel our program only if there is a ordered "State of Emergency" issue by the MA Governor.'
}

export default function ClinicPage() {
  const router = useRouter()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-red-700 mb-2">{clinicData.name}</h1>
      <p className="mb-6 text-lg">{clinicData.address}</p>
      <Link href="/clinics" className="text-black font-semibold mb-6 inline-block hover:underline">&lt; Back to Listings</Link>

      {/* Sessions Table */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-4 py-2 font-semibold text-left">START DATE</th>
              <th className="px-4 py-2 font-semibold text-left">END DATE</th>
              <th className="px-4 py-2 font-semibold text-left">CLINIC#</th>
              <th className="px-4 py-2 font-semibold text-left">CLINIC TYPE</th>
              <th className="px-4 py-2 font-semibold text-left">PRICE</th>
              <th className="px-4 py-2 font-semibold text-left">TIMES</th>
              <th className="px-4 py-2 font-semibold text-left">AGES</th>
              <th className="px-4 py-2 font-semibold text-left">ITINERARY</th>
              <th className="px-4 py-2 font-semibold text-left">REGISTER</th>
            </tr>
          </thead>
          <tbody>
            {clinicData.sessions.map((session, idx) => (
              <tr key={idx} className="border-t border-gray-200">
                <td className="px-4 py-2 whitespace-nowrap">{session.startDate}</td>
                <td className="px-4 py-2 whitespace-nowrap">{session.endDate}</td>
                <td className="px-4 py-2 whitespace-nowrap">{session.clinicNumber}</td>
                <td className="px-4 py-2 whitespace-nowrap font-semibold">{session.clinicType}</td>
                <td className="px-4 py-2 whitespace-nowrap">{session.price}</td>
                <td className="px-4 py-2 whitespace-nowrap">{session.times}</td>
                <td className="px-4 py-2 whitespace-nowrap">{session.ages}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <a href={session.itineraryUrl} className="text-red-700 font-semibold hover:underline">View Now</a>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <a href={session.registerUrl} className="text-red-700 font-bold flex items-center gap-1 hover:underline">
                    REGISTER <span className="text-lg">&#10140;</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Map */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <iframe
            src={clinicData.mapEmbed}
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location Map"
          ></iframe>
        </div>
        {/* Features */}
        <div className="md:w-1/2 w-full">
          <h3 className="font-bold text-gray-700 mb-2">FEATURES:</h3>
          <p className="mb-4"><span className="font-bold">Looking for ice over February Vacation week?</span> {clinicData.description}</p>
          <div className="mb-4">
            <span className="font-bold">We will focus on:</span>
            <ul className="list-disc list-inside ml-4">
              {clinicData.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-bold">Weather Cancellation policy:</span>
            <p>{clinicData.cancellation}</p>
          </div>
        </div>
      </div>
    </div>
  )
} 