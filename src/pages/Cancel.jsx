import React from "react";
import { Helmet } from "react-helmet-async";

export default function Cancel() {
  return (
    <div className="p-8 text-center">
      <Helmet>
        <title>Payment Canceled — Tenant Switcher</title>
        <meta
          name="description"
          content="Your Tenant Switcher checkout was canceled. You have not been charged. You can return to the pricing page to complete your purchase anytime."
        />
        <meta property="og:title" content="Tenant Switcher Payment Canceled" />
        <meta
          property="og:description"
          content="Your Tenant Switcher payment was canceled. No charges were made."
        />
        <meta property="og:url" content="https://tenant-switcher.com/cancel" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">Payment canceled</h1>
      <p>You have not been charged.</p>

      <button
        onClick={() => (window.location.href = "/#pricing")}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
      >
        Return to Pricing
      </button>
    </div>
  );
}
