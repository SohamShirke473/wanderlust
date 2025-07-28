import { TravelGrid } from "@/components/travel-grid"
import { SearchBar } from "@/components/seach"

import { PixelImage } from "@/components/magicui/pixel-image"

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200/30 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              🌍 150+ Amazing Destinations
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Explore
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">
              Dream Destinations
            </span>
          </h1>

          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto font-light mb-12">
            From pristine beaches to bustling cities, ancient wonders to modern marvels. Discover your next adventure
            with our carefully curated collection of
            <span className="font-semibold text-gray-800"> world-class destinations</span>.
          </p>

         
          <div className="mb-16">
            <SearchBar />
          </div>
        </div>
      </div>

      
      <TravelGrid />

      
      <div className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let our travel experts help you plan the perfect getaway tailored to your dreams and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
              Plan My Trip
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Contact Expert
            </button>
          </div>
        </div>
      </div>


    </div>
  )
}
