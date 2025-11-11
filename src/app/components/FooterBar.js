import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function FooterBar() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left section */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-4">Rentnama</h2>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-700 transition-colors"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              <FaYoutube size={18} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#">Our Profile</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Terms and conditions</a>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#">FAQ’s</a>
            </li>
            <li>
              <a href="#">Register complain</a>
            </li>
            <li>
              <a href="#">Leave a feedback</a>
            </li>
          </ul>
        </div>

        {/* Topic */}
        <div>
          <h3 className="font-semibold mb-4">Topic</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#">Page</a>
            </li>
            <li>
              <a href="#">Page</a>
            </li>
            <li>
              <a href="#">Page</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
