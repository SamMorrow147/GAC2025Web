import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || 'Greg Carter Hockey'}</title>
        <meta name="description" content={description || 'Elite hockey training camps, clinics, and leagues by Greg Carter.'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src="/Logo/Insignia.png"
                alt="Greg Carter Hockey Insignia"
                width={60}
                height={60}
                className="object-contain"
              />
              <Image
                src="/Logo/wordmark- black.jpg"
                alt="Greg Carter Hockey"
                width={180}
                height={40}
                className="object-contain"
              />
            </Link>
            <div className="hidden md:flex space-x-8">
              {/*
              <Link href="/camps" className="text-gray-600 hover:text-primary">
                Camps
              </Link>
              <Link href="/clinics" className="text-gray-600 hover:text-primary">
                Clinics
              </Link>
              <Link href="/3-on-3" className="text-gray-600 hover:text-primary">
                3-on-3 League
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary">
                Contact
              </Link>
              */}
            </div>
          </div>
        </div>
      </nav>

      {children}

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Greg Carter Hockey</h3>
              <p className="text-gray-300">
                Elevating hockey skills through elite training programs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-300">
                Email: info@gregcarterhockey.com<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Greg Carter Hockey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
} 