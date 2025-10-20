import React, { useEffect, useState } from "react";

export default function Success() {
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get("session_id");

  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionId) {
      setError("Missing session id");
      setLoading(false);
      return;
    }

    fetch(`https://tenant-licensing-api.onrender.com/api/checkout-session?sessionId=${sessionId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setSession(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Could not fetch session");
        setLoading(false);
      });
  }, [sessionId]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">✅ Thanks — your payment succeeded!</h1>
      <p className="mb-4">
        Checkout session: <code>{sessionId}</code>
      </p>
      <p className="mb-2">
        Subscription status:{" "}
        <strong>{session?.subscription?.status || session?.payment_status || "unknown"}</strong>
      </p>
      <p className="text-sm text-gray-600">
        You’ll receive an email receipt from Stripe (test mode: no real charge).
      </p>
    </div>
  );
}
