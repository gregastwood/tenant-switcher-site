import React, { useState } from "react";

export default function Pricing() {
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Replace with your live Stripe price ID
  const PRICE_ID = "price_1SKZZc1covk18sRaogpzxst8";

  async function handleCheckout() {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address before continuing.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("https://tenant-licensing-api.onrender.com/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId: PRICE_ID,
          email,
          quantity,
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Could not start checkout — please try again.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Error connecting to payment system.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="pricing" className="py-16 bg-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Tenant Switcher License</h2>
        <p className="text-gray-600 mb-8">
          Simple, transparent pricing — cancel anytime.  
          Volume discounts are automatically applied.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition p-10 flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Tenant Switcher Subscription</h3>
          <p className="text-gray-500 mb-6">1–20 devices • per-seat monthly billing</p>

          <div className="flex flex-col gap-4 mb-8 w-full max-w-sm">
            <div className="flex items-center justify-center gap-3">
              <label htmlFor="quantity" className="text-gray-700 text-sm">
                Seats:
              </label>
              <input
                id="quantity"
                type="number"
                min={1}
                max={20}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-20 border rounded-lg px-2 py-1 text-center text-gray-700"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your email (required)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-center text-gray-700 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            onClick={handleCheckout}
            disabled={loading || !email}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition disabled:opacity-50"
          >
            {loading ? "Redirecting…" : `Buy ${quantity} Seat${quantity > 1 ? "s" : ""}`}
          </button>
        </div>

        <div className="mt-12 text-gray-700 text-sm">
          <p className="font-semibold mb-2">💡 Volume Discounts</p>
          <ul className="inline-block text-left">
            <li>• 1–4 seats — $15 / month</li>
            <li>• 5–10 seats — $12 / month</li>
            <li>• 11+ seats — $10 / month</li>
          </ul>
        </div>

        <p className="mt-16 text-gray-500 text-sm">
          All prices in NZD and include GST where applicable.
        </p>
      </div>
    </section>
  );
}
