import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20 text-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Footer menu */}
        <ul className="flex flex-wrap justify-center gap-6 mb-6 text-sm font-medium">
          <li>
            <a href="#" className="hover:text-white transition">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-white transition">
              Features
            </a>
          </li>
          <li>
            <a href="#preview" className="hover:text-white transition">
              Preview
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-white transition">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Support email */}
        <p className="text-sm text-gray-400 mb-2">
          Need help? Email{" "}
          <a
            href="mailto:support@tenant-switcher.com"
            className="text-blue-400 hover:text-blue-300"
          >
            support@tenant-switcher.com
          </a>
        </p>

        {/* Copyright */}
        <p className="mt-4 text-xs text-gray-500">
          © {new Date().getFullYear()} Tenant Switcher. All rights reserved.{" "}
          <a href="/terms.html" className="text-blue-400 hover:text-blue-300">Terms of Service</a> •{" "}
          <a href="/privacy.html" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}
