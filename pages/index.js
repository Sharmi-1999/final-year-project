import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";

import Integrate from "../components/home/Integrate";
import Footer from "../components/layout/Footer";

export default function index() {
  return (
    <div>
      <div className="home-page">
        <Header />
        <Hero />
      </div>
      <Features />
      <Integrate />

      <Footer />
    </div>
  );
}
