import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Clock, Phone, Mail } from 'lucide-react';
import banyuLogo from '@/assets/banyu-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wood-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Logo */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src={banyuLogo} alt="Gudang repair & Surf" className="h-10 w-10" />
              <div>
                <h3 className="font-serif text-xl font-bold">Gudang repair & Surf</h3>
                <p className="text-sm opacity-80">SURFBOARDS & FINS</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Surfboard repairs, custom boards, fins and rentals in Kuta, Lombok.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/custom" className="text-sm opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors">
                  Custom Boards
                </Link>
              </li>
              <li>
                <Link to="/fins" className="text-sm opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors">
                  Custom Fins
                </Link>
              </li>
              <li>
                <a 
                  href="https://wa.me/6282341003422?text=Hello%20Gudang%20repair%20%26%20Surf,%20I%20need%20ding%20repair%20for%20my%20board.%20Please%20provide%20a%20quote."
                  className="text-sm opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors"
                >
                  Ding Repairs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-80">
                  <a href="https://www.google.com/maps/search/?api=1&query=Gudang%20repair%20%26%20Surf%2C%20Jl.%20Pariwisata%20Pantai%20Kuta%2C%20Praya%2C%20Kuta%2C%20Kec.%20Pujut%2C%20Kabupaten%20Lombok%20Tengah%2C%20Nusa%20Tenggara%20Bar.%2083573" target="_blank" rel="noreferrer" className="hover:underline">
                    Gudang repair & Surf<br />
                    Jl. Pariwisata Pantai Kuta, Praya, Kuta<br />
                    Kec. Pujut, Kab. Lombok Tengah, NTB 83573
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a 
                  href="https://wa.me/6282341003422"
                  className="opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors"
                >
                  WhatsApp: 0823-4100-3422
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a 
                  href="mailto:hello@halfking.surf"
                  className="opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors"
                >
                  hello@halfking.surf
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Hours</h4>
            <div className="flex items-start space-x-2 text-sm">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div className="opacity-80">
                <div>Monday - Saturday</div>
                <div>8:00 AM - 6:00 PM</div>
                <div className="mt-2">Sunday</div>
                <div>9:00 AM - 4:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-wood-medium mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-60">
            © {currentYear} Gudang repair & Surf. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm opacity-60 hover:opacity-80 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm opacity-60 hover:opacity-80 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;