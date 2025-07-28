
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200/30 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              ✉️ Get in Touch
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Contact
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">
              Wanderlust
            </span>
          </h1>

          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto font-light">
            Have questions, feedback, or need assistance with your travel plans? We're here to help! Reach out to our
            friendly team.
          </p>
        </div>
      </div>

      {/* Contact Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <Input id="name" type="text" placeholder="John Doe" className="w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <Input id="email" type="email" placeholder="john.doe@example.com" className="w-full" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input id="subject" type="text" placeholder="Inquiry about a tour" className="w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <Textarea id="message" rows={5} placeholder="Type your message here..." className="w-full" />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Contact Details</h2>
              <div className="space-y-6 text-gray-700">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p>info@wanderlust.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-emerald-600" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Visit Our Office</p>
                    <p>123 Travel Lane, Wanderlust City, WL 98765</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Find Us on the Map</h3>
              <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Office Location Map"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Plan Your Next Adventure?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our team is eager to help you craft the perfect journey. Don't hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
              Start Planning
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Explore Tours
            </button>
          </div>
        </div>
      </div>

   
    </div>
  )
}
