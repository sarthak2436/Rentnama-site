"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function ProductPage() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const images = ["/lengha.jpg", "/lengha.jpg", "/lengha.jpg", "/lengha.jpg"];

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Product Images */}
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2 mb-3 md:mb-0">
            {images.map((src, i) => (
              <div
                key={i}
                className={`border-2 ${
                  i === 0 ? "border-blue-500" : "border-gray-200"
                } rounded-md cursor-pointer overflow-hidden`}
              >
                <Image
                  src={src}
                  alt={`lehenga ${i}`}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex-1 border-2 border-blue-500 rounded-md overflow-hidden">
            <Image
              src="/lengha.jpg"
              alt="Main lehenga image"
              width={500}
              height={600}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            Manish Manhotra
          </h1>
          <p className="text-gray-600 mb-2">Red sequence lehenga</p>

          <div className="text-lg mb-2">
            Rent: <span className="font-semibold text-black">₹ 8000</span>{" "}
            <span className="line-through text-gray-400 ml-2">₹ 17000</span>
          </div>

          <div className="text-sm text-gray-600 mb-4">
            Security Deposit: ₹ 5000
          </div>

          <div className="space-x-2 mb-4">
            <button className="px-3 py-1 border rounded-md text-sm">S</button>
            <button className="px-3 py-1 border rounded-md text-sm">M</button>
            <button className="px-3 py-1 border rounded-md text-sm">L</button>
            <button className="px-3 py-1 border rounded-md text-sm">XL</button>
          </div>

          <button className="bg-[#d88b76] text-white py-2 px-5 rounded-md hover:bg-[#c17b68] transition">
            Rent Now
          </button>

          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">Product details</h3>
            <p className="text-sm text-gray-700">
              Step into elegance with this stunning Red lehenga. Features fine
              sequin embellishments and embroidered dupatta detailing. Perfect
              for receptions, engagement, and grand events.
              <br />
              <br />
              <b>Fabric:</b> Net <br />
              <b>Work:</b> Sequins <br />
              <b>Neck Design:</b> Sweetheart <br />
              <b>Sleeves:</b> Sleeveless
            </p>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Add a review */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Add a review</h3>
          <div className="flex space-x-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                onClick={() => setRating(star)}
                className={`w-5 h-5 cursor-pointer ${
                  star <= rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-400"
                }`}
              />
            ))}
          </div>
          <textarea
            placeholder="Your review"
            maxLength={600}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full border rounded-md p-2 text-sm outline-none focus:ring-2 focus:ring-pink-400"
          />
          <div className="text-xs text-gray-500 text-right mt-1">
            {review.length}/600
          </div>
        </div>

        {/* Ratings & Reviews */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Ratings and reviews</h3>
          <div className="flex items-center space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {images.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="review image"
                width={120}
                height={140}
                className="rounded-md object-cover"
              />
            ))}
          </div>

          <div className="mt-3 space-y-2">
            <p className="text-sm flex items-center space-x-2">
              <span className="font-bold text-pink-500">•</span>
              <span>such a nice piece</span>
            </p>
            <p className="text-sm flex items-center space-x-2">
              <span className="font-bold text-pink-500">•</span>
              <span>absolutely loved it!</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t pt-8 text-sm text-gray-600">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-semibold mb-2">RentNama</h4>
            <p>Find your perfect outfit for every occasion.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">About Us</h4>
            <ul>
              <li>Our Profile</li>
              <li>Contact us</li>
              <li>Terms and conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Customer care</h4>
            <ul>
              <li>FAQs</li>
              <li>Register complaint</li>
              <li>Leave a feedback</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Topic</h4>
            <ul>
              <li>Page</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
