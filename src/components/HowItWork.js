export default function HowItWorks() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 rounded-full p-4 mb-4">
              <span
                className="material-icons text-purple-600"
                style={{ fontSize: 36 }}
              >
                checkroom
              </span>
            </div>
            <h3 className="font-semibold text-lg mb-2">
              1. Browse &amp; Select
            </h3>
            <p className="text-gray-600">
              Choose from thousands of designer styles.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-purple-100 rounded-full p-4 mb-4">
              <span
                className="material-icons text-purple-600"
                style={{ fontSize: 36 }}
              >
                local_shipping
              </span>
            </div>
            <h3 className="font-semibold text-lg mb-2">2. We Deliver</h3>
            <p className="text-gray-600">
              Get your items delivered right to your door.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-purple-100 rounded-full p-4 mb-4">
              <span
                className="material-icons text-purple-600"
                style={{ fontSize: 36 }}
              >
                autorenew
              </span>
            </div>
            <h3 className="font-semibold text-lg mb-2">3. Wear &amp; Return</h3>
            <p className="text-gray-600">
              Enjoy your look, then send it back with the prepaid label.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
