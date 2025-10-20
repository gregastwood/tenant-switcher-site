import { useEffect, useState } from "react";

export default function Success() {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const [license, setLicense] = useState(null);
  const [error, setError] = useState(null);

  // Extract session_id from the URL
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get("session_id");

  useEffect(() => {
    if (!sessionId) {
      setError("Missing session ID");
      setLoading(false);
      return;
    }

    // 1️⃣ Fetch session details
    fetch(`https://tenant-licensing-api.onrender.com/api/checkout-session?sessionId=${sessionId}`)
      .then((r) => {
        if (!r.ok) throw new Error(`Session fetch failed (${r.status})`);
        return r.json();
      })
      .then(async (data) => {
        setSession(data);

        // 2️⃣ Then fetch license by customer ID
        if (data.customer) {
          const licRes = await fetch(
            `https://tenant-licensing-api.onrender.com/api/license-by-customer?customerId=${data.customer}`
          );
          if (licRes.ok) {
            const licenseData = await licRes.json();
            setLicense(licenseData);
          } else {
            console.warn("No license found for this customer");
          }
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not fetch session or license info");
        setLoading(false);
      });
  }, [sessionId]);

  if (loading) return <div className="p-8 text-center">Loading your order details...</div>;
  if (error)
    return (
      <div className="p-8 text-center text-red-600">
        <h2 className="text-2xl font-bold mb-4">⚠️ Error</h2>
        <p>{error}</p>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">✅ Thanks — your payment succeeded!</h1>

      <p className="mb-2">
        <strong>Checkout session:</strong> <code>{sessionId}</code>
      </p>

      <p className="mb-4">
        Subscription status:{" "}
        <strong>{session?.subscription?.status || session?.payment_status || "active"}</strong>
      </p>

      {license ? (
        <>
          <div className="mt-6 bg-gray-100 border rounded-lg p-4 inline-block">
            <p className="text-lg font-semibold">Your License Key:</p>
            <p className="text-2xl font-mono text-blue-600 select-all">{license.license_key}</p>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            (Keep this safe — you’ll need it to activate Tenant Switcher)
          </p>
        </>
      ) : (
        <p className="mt-6 text-gray-600">
          🕓 License is being prepared. Please refresh this page in a few seconds.
        </p>
      )}

      <button
        onClick={() => (window.location.href = "/")}
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
      >
        Back to Home
      </button>
    </div>
  );
}
