import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AppPreview from "./components/AppPreview";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <AppPreview />
                <Pricing />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </div>
    </>
  );
}
