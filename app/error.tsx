'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to error reporting service (e.g., Sentry)
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-4">
          <div className="inline-block p-3 bg-red-100 rounded-full">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4v2m0 0v2m0-6v-2m0 0V7a2 2 0 012-2h2.586a1 1 0 00.707-.293l-2.414-2.414a1 1 0 00-.707-.293h-3.172a2 2 0 00-2 2v12a2 2 0 002 2h1m0 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2.586a1 1 0 00.707-.293l-2.414-2.414a1 1 0 00-.707-.293h-3.172a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Something went wrong
        </h2>

        <p className="text-gray-600 mb-6">
          We apologize for the inconvenience. Our team has been notified.
        </p>

        <div className="space-y-3 mb-6">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Quick Solutions:</span>
          </p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Try refreshing the page</li>
            <li>• Clear your browser cache</li>
            <li>• Contact us directly for booking</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-semibold">Call us directly:</span>
          </p>
          <a
            href="tel:+919033999877"
            className="text-lg font-bold text-blue-600 hover:text-blue-700"
          >
            +91 90339 99877
          </a>
          <p className="text-xs text-gray-600 mt-2">
            Our team is available 24/7 for bookings
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => reset()}
            className="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="flex-1 px-4 py-2 bg-gray-200 text-gray-900 font-medium rounded-lg hover:bg-gray-300 transition-colors"
          >
            Go home
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Error ID: {error.digest || 'unknown'}
        </p>
      </div>
    </div>
  )
}
