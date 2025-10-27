import React from "react";

export default function Hero() {
  const features = [
    {
      icon: "ph-arrows-left-right",
      title: "One-Click Switching",
      desc: "Jump between Microsoft 365 tenants directly from your Windows tray in seconds. No more endless log-ins or browser juggling — Tenant Switcher keeps each session isolated and ready to go when you are.",
    },
    {
      icon: "ph-browser",
      title: "Per-Tenant Profiles",
      desc: "Keep logins isolated with custom browser profiles for each tenant. Stay signed in to multiple clients at once, open admin portals instantly, and manage different Microsoft 365 accounts securely side by side.",
    },
    {
      icon: "ph-lock",
      title: "Secure Licensing",
      desc: "Machine-bound license validation with automated Stripe billing. Your license stays trusted even when offline, with a built-in grace period to prevent interruptions. Simple, secure, and transparent — designed for IT pros who need tools they can rely on.",
    },
  ];

  // ✅ MOD: download handler (replaces direct link)
  const handleDownload = async () => {
    const agree = window.confirm(
      "By downloading Tenant Switcher, you agree to our Terms of Use and Privacy Policy."
    );
    if (!agree) return;

    try {
      await fetch("https://tenant-licensing-api.onrender.com/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileName: "Tenant Switcher.msi" }),
      });
    } catch (err) {
      // 🧹 SANITIZE: don’t print network details in user browsers
      console.warn("⚠️ Download tracking failed (non-critical).");
    }

    // ✅ Redirect to actual file after logging
    window.location.href = "/downloads/Tenant Switcher.msi";
  };

  return (
    <section className="relative text-center bg-gradient-to-b from-blue-600 to-blue-700 text-white px-6 pt-4 pb-20 sm:pt-8 sm:pb-24 overflow-hidden -mt-[48px]">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Tenant Switcher logo"
          className="mx-auto w-12 sm:w-16 md:w-20 h-auto mb-4 drop-shadow-lg"
        />

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-bold mb-1">Tenant Switcher</h1>
        <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8">
          Manage Microsoft 365 tenants effortlessly
        </p>

        {/* ✅ MOD: Download button now calls handler */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
          <button
            onClick={handleDownload}
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-50 transition"
          >
            Download Tenant Switcher
          </button>
          <a
            href="#pricing"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
          >
            Buy Now
          </a>
        </div>

        <p className="text-gray-700 mt-1 text-sm">
          The download includes the free version with support for a limited number of tenants — perfect for testing or light use.
        </p>

        {/* Why IT Pros Love It */}
        <div className="max-w-6xl mx-auto mt-6 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:scale-105 hover:shadow-xl transition"
            >
              <i className={`ph ${f.icon} text-4xl text-white`} />
              <h3 className="mt-3 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-blue-100 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Soft gradient fade into page background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50" />
    </section>
  );
}
