import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const sections = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Preview", href: "#preview" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
<nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-300">
  <div className="max-w-6xl mx-auto px-6 py-1.5 flex items-center justify-between">
        {/* Logo + title */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Tenant Switcher" className="w-8 h-8" />
          <span className="font-semibold text-gray-900 text-lg">Tenant Switcher</span>
        </div>

        {/* Hamburger toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 hover:text-blue-600"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {sections.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col text-center py-4 text-gray-700 font-medium">
            {sections.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 hover:bg-blue-50 hover:text-blue-700 transition"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
