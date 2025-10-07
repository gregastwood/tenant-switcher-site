import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-blue-50 text-center border-t border-blue-100"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Contact Us</h2>
        <p className="text-gray-700 mb-8">
          Have a question about Tenant Switcher or need support?  
          We’d love to hear from you.
        </p>

        {/* Email button */}
        <a
          href="mailto:support@tenant-switcher.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
        >
          Email Us
        </a>

        <p className="mt-6 text-sm text-gray-500">
          We usually respond within 24 hours.
        </p>
      </div>
    </section>
  );
}
