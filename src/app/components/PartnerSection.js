export default function PartnerSection() {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Want to work with us
          </h2>
          <p className="text-base md:text-lg text-black mt-3 font-medium">
            Have your own rental business but want to expand your business? Join
            us and collaborate with us.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-900 transition">
            Join as partner
          </button>
          <button className="bg-gray-200 text-black px-6 py-2 rounded-md font-medium hover:bg-gray-300 transition">
            Know more about the process
          </button>
        </div>
      </div>
    </section>
  );
}
