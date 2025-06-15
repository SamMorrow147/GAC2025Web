import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">EDGE. AGILITY. REFLEX.</h1>
          <h2 className="text-4xl font-bold mb-8">THE CARTER METHOD</h2>
          <Link
            href="/camps"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            REGISTER NOW
          </Link>
        </div>
      </section>

      {/* Summer Camps Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">The Best Hockey Summer Camps.</h2>
            <p className="text-gray-600 mb-8">
              Using the CARTER Method, skaters build on each days' skills and are challenged to reach their full potential as the hockey summer camp progresses. We don't teach systems or plays at our summer hockey schools – we leave that to your team coaches. We don't spend time off ice, either.
            </p>
            <Link
              href="/camps"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              REGISTER NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Reach your full potential.</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Camps */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">CAMPS</h3>
              <p className="text-gray-600 mb-6">
                Learn the fundamentals of skating, stick handling, and shooting to build confidence and skills.
              </p>
              <Link
                href="/camps"
                className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                REGISTER NOW
              </Link>
            </div>

            {/* Spring League */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">SPRING LEAGUE</h3>
              <p className="text-gray-600 mb-6">
                See our spring league options and work on Individual Skill Development while having fun!
              </p>
              <Link
                href="/spring-league"
                className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                REGISTER NOW
              </Link>
            </div>

            {/* Clinics */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">CLINICS</h3>
              <p className="text-gray-600 mb-6">
                We teach students how to become stronger players and better contributors to their team.
              </p>
              <Link
                href="/clinics"
                className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                REGISTER NOW
              </Link>
            </div>

            {/* 3-on-3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">3 ON 3</h3>
              <p className="text-gray-600 mb-6">
                This league will challenge young players in a fast-paced, competitive, and fun atmosphere.
              </p>
              <Link
                href="/3-on-3"
                className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                REGISTER NOW
              </Link>
            </div>

            {/* Boston Lightning */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">BOSTON LIGHTNING</h3>
              <p className="text-gray-600 mb-6">
                The Boston Lightning is a AAA organization helping hockey players improve their skills, game awareness, and most importantly playing for the fun and love of the game.
              </p>
              <Link
                href="/boston-lightning"
                className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                REGISTER NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">TESTIMONIALS</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4">
                "This is by far, the best hockey camp if you want your kids to become better players and to be tested to their max."
              </p>
              <p className="font-bold">– Arlen Ayojiak</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4">
                "My children love this camp! The kids are kept moving on the ice the whole time and I've definitely seen improvements in their skating over the week!"
              </p>
              <p className="font-bold">– B. Richards</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4">
                "The teaching and professionalism from your staff was outstanding. They have gone the extra mile to work with my son if needed."
              </p>
              <p className="font-bold">– Judge Daniel Gallagher</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 