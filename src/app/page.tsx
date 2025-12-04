import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Portfolio from "../components/sections/Portfolio";
import Reviews from "../components/sections/Reviews";
import Services from "../components/sections/Services";
import Software from "../components/sections/Software";
import Footer from "../components/ui/Footer";
import Navigation from "../components/ui/Navigation";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Software />
      <Reviews />
      {/* <Brands /> */}
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
