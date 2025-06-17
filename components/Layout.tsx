import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export default function Layout({ children, title, description }: LayoutProps) {
  const defaultTitle = 'Greg Carter Hockey'
  const defaultDescription = 'Elite hockey training camps, clinics, and leagues by Greg Carter.'
  const siteTitle = title || defaultTitle
  const siteDescription = description || defaultDescription

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/Logo/Insignia.png" />
        <link rel="apple-touch-icon" href="/Logo/Insignia.png" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gregcarterhockey.com/" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content="https://gregcarterhockey.com/Logo/Insignia.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gregcarterhockey.com/" />
        <meta property="twitter:title" content={siteTitle} />
        <meta property="twitter:description" content={siteDescription} />
        <meta property="twitter:image" content="https://gregcarterhockey.com/Logo/Insignia.png" />
      </Head>

      <Navbar />

      <div className="pt-40">{children}</div>

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
                Email: info@gchockey.com<br />
                Phone: 978-371-3355
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