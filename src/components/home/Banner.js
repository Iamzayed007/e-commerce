import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className="bg-slate-300 text-black">
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-4">Discover What Awaits You Here!</h1>
      <p className="text-lg mb-8">Discover more.</p>
      <Link href='/products' className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600">Get Started</Link>
    </div>
  </div>
  )
}

export default Banner