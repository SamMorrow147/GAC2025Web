import React from 'react'
import Link from 'next/link'

export default function ProgramsPage() {
  const programs = [
    {
      title: '3-on-3 League',
      description: 'Fast-paced, high-intensity hockey for all skill levels',
      link: '/programs/3-on-3-league',
      divisions: ['Mites', 'Squirts', 'Peewee']
    },
    {
      title: 'Spring League',
      description: 'Spring hockey league with multiple divisions',
      link: '/programs/spring-league',
      divisions: ['Blue Division', 'Red Division', 'White Division', 'Gold Division', 'High School Division']
    },
    {
      title: 'Clinics',
      description: 'Specialized training sessions and camps',
      link: '/programs/clinics',
      programs: [
        'February Vacation – NESC (Marlboro, MA)',
        'February Vacation – Valley Sports Arena (Concord, MA)',
        'Sunday Night Skills & 3x3 Games',
        'Summer Weekly Skills'
      ]
    },
    {
      title: 'Player Tips',
      description: 'Expert advice and training resources',
      link: '/programs/player-tips'
    },
    {
      title: 'Boston Lightning',
      description: 'Elite hockey program',
      link: '/programs/boston-lightning'
    },
    {
      title: 'The Carter Method',
      description: 'Proven training methodology',
      link: '/programs/carter-method'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Hockey Programs</h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {programs.map((program) => (
          <div key={program.title} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">{program.title}</h2>
            <p className="text-gray-600 mb-4">{program.description}</p>
            
            {program.divisions && (
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Divisions:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {program.divisions.map((division) => (
                    <li key={division}>{division}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {program.programs && (
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Available Programs:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {program.programs.map((prog) => (
                    <li key={prog}>{prog}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <Link
              href={program.link}
              className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
} 