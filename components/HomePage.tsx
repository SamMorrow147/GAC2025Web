import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hockey players on ice"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <Image
              src="/Logo/Insignia.png"
              alt="Greg Carter Hockey"
              width={150}
              height={150}
              className="mx-auto mb-8"
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Elevate Your Game
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Elite hockey training programs designed to develop champions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/camps"
                className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Register Now
              </Link>
              <Link
                href="/about"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Summer Camps */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/summer-camps.jpg"
                  alt="Summer Hockey Camps"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Summer Camps</h3>
                <p className="text-gray-600 mb-6">
                  Intensive training programs focusing on skating, stick handling, and game strategy.
                </p>
                <Link
                  href="/camps"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Camps
                </Link>
              </div>
            </div>

            {/* Clinics */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/clinics.jpg"
                  alt="Hockey Clinics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Clinics</h3>
                <p className="text-gray-600 mb-6">
                  Specialized training sessions to improve specific skills and techniques.
                </p>
                <Link
                  href="/clinics"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Clinics
                </Link>
              </div>
            </div>

            {/* 3-on-3 League */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/3on3.jpg"
                  alt="3-on-3 League"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">3-on-3 League</h3>
                <p className="text-gray-600 mb-6">
                  Fast-paced, competitive games to develop skills in a fun environment.
                </p>
                <Link
                  href="/3-on-3"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Carter Method */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">The Carter Method</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our proven training methodology focuses on developing complete hockey players through expert coaching, innovative techniques, and a commitment to excellence.
            </p>
            <Link
              href="/about"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Discover Our Method
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Parents Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "This is by far, the best hockey camp if you want your kids to become better players and to be tested to their max."
              </p>
              <p className="font-bold">– Arlen Ayojiak</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "My children love this camp! The kids are kept moving on the ice the whole time and I've definitely seen improvements in their skating over the week!"
              </p>
              <p className="font-bold">– B. Richards</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The teaching and professionalism from your staff was outstanding. They have gone the extra mile to work with my son if needed."
              </p>
              <p className="font-bold">– Judge Daniel Gallagher</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Take Your Game to the Next Level?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable hockey experience that will transform your skills and love for the game.
          </p>
          <Link
            href="/camps"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Register Now
          </Link>
        </div>
      </section>
    </div>
  )
} 