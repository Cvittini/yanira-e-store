import React, { useRef } from "react";
import AppNavbar from "./components/navbar";
import Hero from "./components/hero";
import HowItWorks from "./components/howitworks";
import Categories from "./components/categories";
import Featured from "./components/featured";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ParallaxSection from './components/ParallaxSection';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const heroRef = useRef(null);
  const howitworksRef = useRef(null);
  const categoriesRef = useRef(null);
  const featuredRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionRefs = {
      hero: heroRef,
      howitworks: howitworksRef,
      categories: categoriesRef,
      featured: featuredRef,
      about: aboutRef,
      contact: contactRef,
      footer: footerRef,
    };

    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AppNavbar scrollToSection={scrollToSection} />

      <div ref={heroRef}>
        <Hero scrollToSection={scrollToSection} />
      </div>

      <ParallaxSection
        backgroundImage="/images/dooddleiconbg.webp"
        text="Shop Unique Stickers"
      />

      <div ref={howitworksRef}>
        <HowItWorks scrollToSection={scrollToSection} />
      </div>

      

      <div ref={featuredRef}>
        <Featured />
      </div>

      

      <div ref={categoriesRef}>
        <Categories />
      </div>

      <ParallaxSection
        backgroundImage="/images/dooddleiconbg.webp"
        text="Shop Unique Stickers"
      />

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
