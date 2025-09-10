import Image from "next/image";

export default function FeaturedItems() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Featured Items
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
            <Image
              src="https://via.placeholder.com/400x300"
              alt="Designer Lehenga"
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Designer Lehenga
              </h3>
              <p className="text-gray-600 mb-4">
                Perfect for weddings & special occasions.
              </p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
