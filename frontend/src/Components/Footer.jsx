import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-purple-400 font-semibold text-lg mb-2">
            U.G. SERVICES & MANAGEMENT
          </h2>
          <p className="text-sm text-gray-400 mb-3">
            Professional Services Since 2015
          </p>
          <p className="text-sm">
            Comprehensive water tank cleaning, RO purifier services, pest
            control, waterproofing, and cleaning solutions in Nagpur,
            Maharashtra.
          </p>
        </div>

        {/* Address & Hours */}
        <div>
          <h3 className="text-white font-semibold mb-3">Location & Hours</h3>
          <p className="flex items-start gap-2 text-sm mb-2">
            <MapPin className="w-4 h-4 mt-1 text-purple-400" />
            JARIPATKA, NAGPUR, Maharashtra 440014
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-purple-400" /> Daily: 08:00 - 20:00
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-3">Our Services</h3>
          <ul className="space-y-1 text-sm">
            <li>Water Tank Cleaning</li>
            <li>RO Purifier Service</li>
            <li>Pest Control</li>
            <li>Waterproofing</li>
            <li>Cleaning Services</li>
            <li className="text-purple-400 hover:underline cursor-pointer">
              View All Services
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact & Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-purple-400" /> 073508 32152
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-purple-400" /> 0788 821 6628
            </li>
            <li className="flex items-center gap-2 text-purple-400 hover:underline cursor-pointer">
              <MessageCircle className="w-4 h-4" /> WhatsApp Chat
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-xs text-center text-gray-500">
        <a href="#" className="hover:text-purple-400">Privacy Policy</a> |{" "}
        <a href="#" className="hover:text-purple-400">Terms of Service</a>
      </div>
    </footer>
  );
}
