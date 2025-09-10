import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import HowItWorks from "../components/HowItWork";
import FeaturedItems from "../components/FeaturedItems.js";
import Offers from "../components/Offers";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeaturedItems />
      <Offers />

      <Footer />
    </main>
  );
}
