import { TravelCard } from "@/components/travel-card"
import destinationsData from "@/components/data.json"
import { Calendar, Users, MapPin, Clock } from "lucide-react"

export default function ToursPage() {
  const toursData = destinationsData.map((destination) => ({
    ...destination,
    title: `${destination.title} Tour Package`,
    description: `Join our guided tour to ${destination.location}. ${destination.description} Includes accommodation, meals, and expert local guides.`,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200/30 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              🎒 Premium Tour Packages
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Guided
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">
              Tour Adventures
            </span>
          </h1>

          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto font-light mb-12">
            Experience the world with our expertly crafted tour packages. From cultural immersions to adventure
            expeditions, every journey is
            <span className="font-semibold text-gray-800"> carefully planned</span> and
            <span className="font-semibold text-gray-800"> locally guided</span>.
          </p>
        </div>
      </div>

      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              What's Included in Our Tours
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-blue-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Local experts with deep cultural knowledge</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-emerald-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Locations</h3>
              <p className="text-gray-600">Carefully selected destinations and experiences</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-blue-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Dates</h3>
              <p className="text-gray-600">Multiple departure dates throughout the year</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-emerald-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance during your journey</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Tour Packages</h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            🎯 Discover our most popular guided tours, each designed to provide
            <span className="text-emerald-600 font-semibold"> authentic experiences</span> and
            <span className="text-blue-600 font-semibold"> unforgettable memories</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {toursData.map((tour) => (
            <TravelCard
              key={tour.id}
              location={tour.location}
              title={tour.title}
              description={tour.description}
              price={tour.price}
              rating={tour.rating}
              duration={tour.duration}
              image={tour.image}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who have discovered the world with our expert-guided tours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors duration-300">
              Book a Tour
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-300">
              Custom Tour
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
