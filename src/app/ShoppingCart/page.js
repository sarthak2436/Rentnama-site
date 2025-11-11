"use client";
import Image from "next/image";
import { Trash2, Heart, Share2 } from "lucide-react";

export default function ShoppingCart() {
  const cartItems = [
    {
      id: 1,
      name: "Manish Malhotra",
      description: "Red sequence lehenga with sleeveless blouse.",
      date: "26/05/25 to 31/05/25",
      size: "L",
      price: 2000,
      image: "/lengha.jpg",
    },
    {
      id: 2,
      name: "Manish Malhotra",
      description: "Red sequence lehenga with sleeveless blouse.",
      date: "26/05/25 to 31/05/25",
      size: "L",
      price: 2000,
      image: "/lengha.jpg",
    },
    {
      id: 3,
      name: "Manish Malhotra",
      description: "Red sequence lehenga with sleeveless blouse.",
      date: "26/05/25 to 31/05/25",
      size: "L",
      price: 2000,
      image: "/lengha.jpg",
    },
    {
      id: 4,
      name: "Manish Malhotra",
      description: "Red sequence lehenga with sleeveless blouse.",
      date: "26/05/25 to 31/05/25",
      size: "L",
      price: 2000,
      image: "/lengha.jpg",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Shopping cart</h1>
      <p className="text-sm text-gray-600 mb-6">Deselect all the items</p>

      <div className="border-b border-gray-300 pb-2 flex justify-between text-sm font-semibold text-gray-700">
        <span>Item</span>
        <span>Price/Rent</span>
      </div>

      {/* Cart Items */}
      <div className="divide-y divide-gray-200 mt-2">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between py-4 items-start gap-4"
          >
            {/* Left side - image and details */}
            <div className="flex gap-3">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={120}
                className="rounded-md object-cover border"
              />
              <div>
                <h2 className="font-bold text-lg">{item.name}</h2>
                <p className="text-sm text-gray-600 mb-1">{item.description}</p>
                <p className="text-sm text-gray-700 font-semibold">
                  Date: {item.date}
                </p>
                <p className="text-sm text-gray-700">Size: {item.size}</p>
                <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
                  <button className="text-red-500 hover:underline flex items-center gap-1">
                    <Trash2 size={14} /> Delete
                  </button>
                  <button className="hover:underline text-pink-500 flex items-center gap-1">
                    <Heart size={14} /> wishlist
                  </button>
                  <button className="hover:underline text-gray-600">
                    see more like this
                  </button>
                  <button className="hover:underline text-gray-600 flex items-center gap-1">
                    <Share2 size={14} /> share
                  </button>
                </div>
              </div>
            </div>

            {/* Right side - price */}
            <div className="text-right font-medium text-black text-lg whitespace-nowrap">
              ₹ {item.price}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
