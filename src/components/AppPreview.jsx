import React from "react";

export default function AppPreview() {
  return (
    <section
      id="preview"
      className="py-16 bg-white text-center flex flex-col items-center justify-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          Explore Tenant Switcher in Action
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          A clean, unified dashboard for managing Microsoft 365 tenants —
          simple, fast, and secure.
        </p>

        <div className="flex justify-center">
          <img
            src="/hero-main.jpg"
            alt="Tenant Switcher App Preview"
            className="rounded-2xl shadow-2xl border border-gray-200 object-contain"
            style={{
              maxHeight: "70vh", // 👈 keeps image fully visible on most screens
              width: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
}
