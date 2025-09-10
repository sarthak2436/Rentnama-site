export default function HeroSection() {
  return (
    <section className="hero-section h-[60vh] flex items-center justify-center text-white bg-[url('/hero-bg.jpg')] bg-cover bg-center">
      <div className="text-center bg-black bg-opacity-40 p-8 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Rent Your Style</h1>
        <p className="text-lg md:text-xl mb-8">
          Endless wardrobe, unlimited possibilities.
        </p>
        <a
          href="#"
          className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300"
        >
          Start Renting
        </a>
      </div>
    </section>
  );
}
