import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Success() {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const [license, setLicense] = useState(null);
  const [error, setError] = useState(null);

  // Extract session_id from URL
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get("session_id");

  // Poll until license appears
  useEffect(() => {
    if (!session?.customer) return;
    const interval = setInterval(async () => {
      const res = await fetch(
        `https://tenant-licensing-api.onrender.com/api/license-by-customer?customerId=${session.customer}`
      );
      if (res.ok) {
        const data = await res.json();
        if (data?.license_key) {
          setLicense(data);
          clearInterval(interval);
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [session]);

  useEffect(() => {
    fetch(`https://tenant-licensing-api.onrender.com/api/checkout-session?sessionId=${sessionId}`)
      .then((r) => {
        if (!r.ok) throw new Error(`Session fetch failed (${r.status})`);
        return r.json();
      })
      .then(async (data) => {
        console.log("🔎 Checkout session:", data);
        setSession(data);

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
        {!loading && !error && (
          <Helmet>
            <title>Error — Tenant Switcher</title>
            <meta
              name="description"
              content="There was a problem retrieving your Tenant Switcher license information."
            />
          </Helmet>
        )}
        <h2 className="text-2xl font-bold mb-4">⚠️ Error</h2>
        <p>{error}</p>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto p-8 text-center">
      {!loading && !error && (
        <Helmet>
          <title>Purchase Successful — Tenant Switcher</title>
          <meta
            name="description"
            content="Your Tenant Switcher license purchase was successful. Retrieve your license key and installation details here."
          />
          <meta property="og:title" content="Tenant Switcher Purchase Successful" />
          <meta
            property="og:description"
            content="Your Tenant Switcher license has been issued. Copy your license key to activate the app."
          />
          <meta property="og:url" content="https://tenant-switcher.com/success" />
        </Helmet>
      )}
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
          <div className="mt-6 bg-gray-100 border rounded-lg p-5 inline-block text-left">
            <p className="text-lg font-semibold mb-2 text-center">Your License Details</p>
            <p>
              <strong>License Key:</strong>{" "}
              <span className="font-mono text-blue-600 select-all">{license.license_key}</span>
            </p>
            <p>
              <strong>Seats Purchased:</strong> {license.seat_quantity || 1}
            </p>
{/* {license.expires_at && (
  <p>
    <strong>Expires:</strong>{" "}
    {new Date(license.expires_at).toLocaleDateString()}
  </p>
)} */}
          </div>
          <p className="mt-2 text-sm text-gray-600">
            (Keep this safe — you’ll need it to activate Tenant Switcher)
          </p>
        </>
      ) : (
        <p className="mt-6 text-gray-600 animate-pulse">
          🕓 Preparing your license... (this may take a few seconds)
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
