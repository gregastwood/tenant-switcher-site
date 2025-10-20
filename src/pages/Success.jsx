// src/pages/Success.jsx (or /success in Next.js pages)

import { useEffect, useState } from "react";

const [license, setLicense] = useState(null);


export default function Success() {
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get("session_id");
  // ✅ define state variables up front
  const [session, setSession] = useState(null);
  const [license, setLicense] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session?.customer) {
      fetch(`https://tenant-licensing-api.onrender.com/api/license-by-customer?customerId=${session.customer.id}`)
        .then(r => r.json())
        .then(setLicense)
    }
  }, [session]);


  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      setError("Missing session id");
      return;
    }

    // Ask your backend for session details (safer than calling Stripe from browser)
    fetch(`https://tenant-licensing-api.onrender.com/api/checkout-session?sessionId=${sessionId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(r => r.json())
      .then(data => {
        setSession(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Could not fetch session");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-2xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Thanks — your payment succeeded!</h1>
      <p className="mb-4">Checkout session: <code>{sessionId}</code></p>
      <p className="mb-2">Subscription status: <strong>{session?.subscription?.status || session?.payment_status || "unknown"}</strong></p>
      <p className="text-sm text-gray-600">You’ll receive an email receipt from Stripe (test mode: no real charge).</p>
      <p>Your new license key: <code>{license?.license_key}</code></p>

    </div>
  );
}
