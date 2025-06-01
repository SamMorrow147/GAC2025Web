import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getStates, getStateByAbbreviation } from '../../../lib/camps'
import type { GetStaticProps, GetStaticPaths } from 'next'

interface Props {
  state: {
    name: string
    abbreviation: string
    locations: {
      name: string
      city: string
      description: string
    }[]
  }
}

export default function StatePage({ state }: Props) {
  const router = useRouter()
  
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/camps"
          className="inline-block text-primary hover:text-accent mb-8 transition-colors"
        >
          ← Back to All States
        </Link>

        <h1 className="text-4xl font-bold mb-8">Hockey Camps in {state.name}</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {state.locations.map((location) => (
            <div key={location.name} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-2">{location.name}</h2>
              <p className="text-gray-600 mb-4">{location.city}</p>
              <p className="text-gray-600 mb-6">{location.description}</p>
              <Link
                href={`/camps/${state.abbreviation.toLowerCase()}/${location.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Don't see a location near you?</h2>
          <p className="text-gray-600 mb-6">
            We're constantly adding new locations. Contact us to request a camp in your area.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const states = await getStates()
  const paths = states.map((state) => ({
    params: {
      state: state.abbreviation.toLowerCase()
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const state = await getStateByAbbreviation(params?.state as string)
  
  if (!state) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      state: {
        name: state.name,
        abbreviation: state.abbreviation,
        locations: state.locations.map(location => ({
          name: location.name,
          city: location.city,
          description: location.description
        }))
      }
    }
  }
} 