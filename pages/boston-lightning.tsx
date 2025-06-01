import React from 'react'
import Head from 'next/head'

export default function BostonLightningPage() {
  return (
    <>
      <Head>
        <title>Boston Lightning | Greg Carter Hockey</title>
        <meta name="description" content="Boston Lightning hockey program information, teams, tryouts, and more." />
      </Head>
      <main className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Boston Lightning</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Welcome to the Boston Lightning! Here you'll find information about our teams, tryouts, and program details. Stay tuned for updates and announcements.
            </p>
          </section>
          <section className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">About Boston Lightning</h2>
            <p className="text-gray-600 mb-4">
              [Add your program description, team info, or upcoming events here.]
            </p>
            {/* You can add more sections, images, or links below as needed */}
          </section>
        </div>
      </main>
    </>
  )
} 