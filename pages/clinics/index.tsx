import React from 'react'
import Link from 'next/link'

const clinics = [
  {
    name: 'Sunday Night Skills And 3x3 Games',
    date: '11/03/2024 - 03/02/2025',
    link: '#'
  },
  {
    name: 'February Vacation Clinic (Valley Sports Arena)',
    date: '02/17/2025 - 02/20/2025',
    link: '#'
  },
  {
    name: 'February Vacation Clinic (NESC)',
    date: '02/19/2025 - 02/20/2025',
    link: '/clinics/february-vacation-clinic-nesc'
  }
]

export default function ClinicsPage() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-12">UPCOMING CLINICS</h1>
      <div className="max-w-2xl mx-auto space-y-8">
        {clinics.map((clinic, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">{clinic.name}</h2>
              <p className="text-gray-600 mb-4 md:mb-0">{clinic.date}</p>
            </div>
            <div>
              <Link href={clinic.link} className="bg-accent hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors block text-center md:inline-block">
                VIEW CLINIC
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 