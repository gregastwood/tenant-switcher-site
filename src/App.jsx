import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AppPreview from "./components/AppPreview";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Success from "./pages/Success"; // ✅ this is your new page

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Routes>
          {/* Home page */}
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

          {/* ✅ Success page for Stripe redirect */}
          <Route path="/success" element={<Success />} />

          {/* (optional) Cancel page */}
          <Route
            path="/cancel"
            element={
              <section className="py-20 text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">
                  Payment Canceled
                </h1>
                <p className="text-gray-600">
                  Your payment was canceled or didn’t go through.<br />
                  You can try again any time from the Pricing section.
                </p>
              </section>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
