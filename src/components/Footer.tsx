import React from 'react';
import { SunIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-sm">
                <SunIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Luminex</span>
            </div>

            <p className="text-gray-600 mb-6 max-w-md">
              Smart solar energy management for Rwanda — empowering communities
              to harness the sun’s power efficiently and sustainably.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {["facebook", "twitter", "linkedin"].map((platform, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:border-primary transition-colors"
                >
                  <span className="sr-only">{platform}</span>
                  {/* Each icon stays the same */}
                  {platform === "facebook" && (
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 
                      1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.486c-1.491 0-1.956.925-1.956 
                      1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {platform === "twitter" && (
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 
                      0 002.163-2.723c-.951.555-2.005.959-3.127 
                      1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 
                      4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 
                      2.475c0 1.71.87 3.213 2.188 4.096a4.904 
                      4.904 0 01-2.228-.616v.06a4.923 4.923 0 
                      003.946 4.827 4.996 4.996 0 01-2.212.085 
                      4.936 4.936 0 004.604 3.417A9.867 9.867 
                      0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067A13.9 
                      13.9 0 007.557 2.209C16.61 2.209 
                      21.555-5.287 21.555-13.276c0-.21 0-.42-.015-.63A9.935 
                      9.935 0 0024 4.59z" />
                    </svg>
                  )}
                  {platform === "linkedin" && (
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 
                      0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 
                      1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 
                      4.267 5.455v6.286zM5.337 7.433c-1.144 
                      0-2.063-.926-2.063-2.065 0-1.138.92-2.063 
                      2.063-2.063 1.14 0 2.064.925 
                      2.064 2.063-.001 1.139-.925 2.065-2.064 2.065zm1.782 
                      13.019H3.555V9h3.564v11.452z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Features", "Pricing"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
              <li>
                <a href="https://luminextech.base44.app" className="hover:text-primary transition-colors">Login</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>Kigali, Rwanda</span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@luminex.rw" className="hover:text-primary transition-colors">
                  myvesseraphin@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+250788000000" className="hover:text-primary transition-colors">
                  +250 783 087 172
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2025 Luminex. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
