import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center py-5">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Faculty Registration</span>
          </Link>
        </div>
      </nav>
  )
}
