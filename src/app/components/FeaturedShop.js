"use client";
import Image from "next/image";

export default function FeaturedShops() {
  const shops = [
    {
      id: 1,
      name: "Shop rating ⭐",
      rating: "4.5",
      reviews: "(5k reviews)",
      image: "/kurta2.webp",
    },
    {
      id: 2,
      name: "Shop rating ⭐",
      rating: "4.5",
      reviews: "(5k reviews)",
      image: "/lengha2.webp",
    },
    {
      id: 3,
      name: "Shop rating ⭐",
      rating: "4.5",
      reviews: "(5k reviews)",
      image: "/lengha3.webp",
    },
    {
      id: 4,
      name: "Shop rating ⭐",
      rating: "4.5",
      reviews: "(5k reviews)",
      image: "/saree.webp",
    },
    {
      id: 5,
      name: "Shop rating ⭐",
      rating: "4.5",
      reviews: "(5k reviews)",
      image: "/indo.jpeg",
    },
    {
      id: 6,
      name: "Shop rating ⭐",
      rating: "4.5",
      reviews: "(5k reviews)",
      image: "/lengha4.webp",
    },
    {
      id: 7,
      name: "Shop rating ⭐",
      rating: "4.5",
      reviews: "(5k reviews)",
      image: "/sherwani.webp",
    },
  ];

  return (
    <section className="py-8 px-4 bg-white">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Featured Shops
      </h2>

      <div className="flex overflow-x-auto no-scrollbar gap-6 justify-center">
        {shops.map((shop) => (
          <div
            key={shop.id}
            className="min-w-[160px] sm:min-w-[200px] bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-52 sm:h-60">
              <Image
                src={shop.image}
                alt={shop.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3 text-center">
              <p className="text-gray-800 text-sm font-medium">{shop.name}</p>
              <p className="text-sm text-gray-600 mt-1">
                {shop.rating} <span className="text-yellow-500">★</span>
              </p>
              <p className="text-xs text-gray-500">{shop.reviews}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
