import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand / About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Rentnama</h2>
            <p className="text-gray-400">
              Your one-stop rental platform for designer outfits at affordable
              prices. Dress smart, rent better.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Offers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-purple-400 transition"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="hover:text-purple-400 transition"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="hover:text-purple-400 transition"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Rentnama. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
