
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-12 bg-gray-900 text-white">
      <div className="container px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
             
              <span className="ml-2 text-xl font-bold">Wanderlust</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for unforgettable travel experiences around the world.
            </p>
            <div className="flex gap-5"></div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Asia
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Europe
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Americas
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Africa
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Flight Booking
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Hotel Booking
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Travel Insurance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Wanderlust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
