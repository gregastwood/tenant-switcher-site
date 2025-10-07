import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AppPreview from "./components/AppPreview";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16"> {/* offset for fixed nav height */}
        <Hero />
        <Features />
        <AppPreview />
        <Pricing />
        <Contact /> 
        <Footer />
      </div>
    </>
  );
}
