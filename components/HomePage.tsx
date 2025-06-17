import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StatsSection } from './StatsSection'
import EnhancedHero from './EnhancedHero'

export default function HomePage() {
  const programs = [
    {
      title: 'Summer Camps',
      description: 'Learn the fundamentals of skating, stick handling, and shooting to build confidence and skills.',
      link: '/camps',
      image: '/images/camps.jpg'
    },
    {
      title: 'Spring League',
      description: 'See our spring league options and work on Individual Skill Development while having fun!',
      link: '/programs/spring-league',
      image: '/images/spring-league.jpg'
    },
    {
      title: 'Clinics',
      description: 'We teach students how to become stronger players and better contributors to their team.',
      link: '/clinics',
      image: '/images/clinics.jpg'
    },
    {
      title: '3 on 3 League',
      description: 'This league will challenge young players in a fast-paced, competitive, and fun atmosphere.',
      link: '/programs/3-on-3',
      image: '/images/3on3.jpg'
    },
    {
      title: 'Boston Lightning',
      description: 'The Boston Lightning is a AAA organization helping hockey players improve their skills, game awareness, and most importantly playing for the fun and love of the game.',
      link: '/boston-lightning',
      image: '/images/boston-lightning.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <EnhancedHero />

      {/* Stats Section */}
      <StatsSection />

      {/* Programs Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Link
                  href={program.link}
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our programs? Contact us today to learn more about how we can help you reach your hockey goals.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 