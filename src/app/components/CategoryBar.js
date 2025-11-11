"use client";
import Image from "next/image";

export default function CategoryBar() {
  const categories = [
    { name: "Saree", img: "/sareemain.png" },
    { name: "Sherwani", img: "/Sherwanimain.png" },
    { name: "Lehenga", img: "/lengha.jpg" },
    { name: "Gown", img: "/gown.webp" },
    { name: "Kurta Set", img: "/kurta.jpg" },
    { name: "Indo-Western", img: "/indowestern.jpeg" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#D27F6C]/10 to-white py-4">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-4 px-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-md">
              <Image
                src={cat.img}
                alt={cat.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-sm sm:text-base font-medium text-gray-700 mt-2">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
