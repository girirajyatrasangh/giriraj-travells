export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skeleton: Navbar */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 py-3 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="hidden md:flex gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>

      {/* Skeleton: Hero Section */}
      <div className="relative h-screen bg-gradient-to-b from-gray-100 to-gray-50 overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-2xl space-y-8">
            {/* Hero Title */}
            <div className="space-y-4">
              <div className="h-4 w-24 bg-gray-300 rounded animate-pulse mx-auto" />
              <div className="h-12 w-full bg-gray-300 rounded animate-pulse" />
              <div className="h-12 w-5/6 bg-gray-300 rounded animate-pulse mx-auto" />
            </div>

            {/* Hero Subtitle */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
            </div>

            {/* CTA Button */}
            <div className="flex gap-4 justify-center">
              <div className="h-12 w-40 bg-gray-300 rounded-lg animate-pulse" />
              <div className="h-12 w-40 bg-gray-200 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Skeleton: Services Section */}
      <div className="bg-white px-4 py-16 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="h-10 w-48 bg-gray-200 rounded animate-pulse mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <div className="h-32 bg-gray-200 rounded-lg animate-pulse" />
                <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skeleton: Fleet Section */}
      <div className="bg-gray-50 px-4 py-16 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="h-10 w-48 bg-gray-200 rounded animate-pulse mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200 animate-pulse" />
                <div className="p-4 space-y-3">
                  <div className="h-6 w-2/3 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
                  <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
