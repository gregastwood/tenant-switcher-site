import React, { useEffect, useState } from "react";

export default function Success() {
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get("session_id");

  const [session, setSession] = useState(null);
  const [license, setLicense] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (!sessionId) {
        setError("Missing session ID");
        setLoading(false);
        return;
      }

      try {
        // 1️⃣ Fetch checkout session
        const res1 = await fetch(
          `https://tenant-licensing-api.onrender.com/api/checkout-session?sessionId=${sessionId}`
        );
        const data1 = await res1.json();
        setSession(data1);

        // 2️⃣ Then fetch license info
        const res2 = await fetch(
          `https://tenant-licensing-api.onrender.com/api/license-from-session?sessionId=${sessionId}`
        );
        const data2 = await res2.json();
        if (data2.license_key) setLicense(data2);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Could not retrieve purchase details");
        setLoading(false);
      }
    }

    fetchData();
  }, [sessionId]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">✅ Thanks — your payment succeeded!</h1>
      <p className="mb-2">Checkout session: <code>{sessionId}</code></p>
      <p className="mb-4">
        Subscription status:{" "}
        <strong>{session?.subscription?.status || session?.payment_status || "unknown"}</strong>
      </p>

      {license && (
        <div className="bg-gray-100 rounded-xl p-6 mt-6 text-left">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Your License</h2>
          <p><strong>License Key:</strong> <code>{license.license_key}</code></p>
          <p><strong>Status:</strong> {license.status}</p>
          <p><strong>Expires:</strong> {new Date(license.expires_at).toLocaleDateString()}</p>
          <p><strong>Max Devices:</strong> {license.max_devices}</p>
        </div>
      )}

      <p className="mt-8 text-sm text-gray-600">
        You’ll receive an email receipt from Stripe (test mode — no real charge).
      </p>
    </div>
  );
}
