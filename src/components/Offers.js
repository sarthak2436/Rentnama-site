export default function Offers() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Special Offers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Offer 1 */}
          <div className="bg-purple-50 rounded-2xl p-6 text-center shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              🎉 First Rental Discount
            </h3>
            <p className="text-gray-600 mb-4">
              Get <span className="font-bold text-purple-600">20% OFF</span> on
              your first rental order.
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700">
              Claim Offer
            </button>
          </div>

          {/* Offer 2 */}
          <div className="bg-purple-50 rounded-2xl p-6 text-center shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              👗 Weekend Special
            </h3>
            <p className="text-gray-600 mb-4">
              Rent 2 outfits and get <span className="font-bold">1 free</span>{" "}
              for the weekend.
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700">
              Book Now
            </button>
          </div>

          {/* Offer 3 */}
          <div className="bg-purple-50 rounded-2xl p-6 text-center shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              💍 Wedding Package
            </h3>
            <p className="text-gray-600 mb-4">
              Flat <span className="font-bold text-purple-600">30% OFF</span> on
              complete bridal + groom rental packages.
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
