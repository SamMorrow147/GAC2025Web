import React from 'react'
import Link from 'next/link'

export default function AboutPage() {
  const aboutSections = [
    {
      title: 'About Us',
      description: 'Learn about our mission, history, and commitment to hockey excellence',
      link: '/about/us'
    },
    {
      title: 'The Carter Method',
      description: 'Discover our unique approach to hockey training and development',
      link: '/about/carter-method'
    },
    {
      title: 'Staff',
      description: 'Meet our experienced coaching staff and leadership team',
      link: '/about/staff'
    },
    {
      title: 'Photo Gallery',
      description: 'View photos from our camps, clinics, and events',
      link: '/about/gallery'
    },
    {
      title: 'Policies & Procedures',
      description: 'Important information about our programs and policies',
      link: '/about/policies'
    },
    {
      title: 'Employment',
      description: 'Join our team and make a difference in youth hockey',
      link: '/about/employment'
    },
    {
      title: 'Hall of Fame',
      description: 'Celebrating the achievements of our outstanding players and coaches',
      link: '/about/hall-of-fame'
    },
    {
      title: 'Additional Info',
      description: 'More information about our programs and services',
      link: '/about/additional-info'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg mb-12">
          <p className="text-center text-gray-600">
            We are dedicated to developing young hockey players through expert coaching,
            innovative training methods, and a commitment to excellence both on and off the ice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {aboutSections.map((section) => (
            <div key={section.title} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <Link
                href={section.link}
                className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 