import React from "react";

export default function Hero() {
  const features = [
    {
      icon: "ph-arrows-left-right",
      title: "One-Click Switching",
      desc: "Switch between Microsoft 365 tenants instantly from your Windows tray — no repeated sign-ins or browser juggling.",
    },
    {
      icon: "ph-browser",
      title: "Per-Tenant Profiles",
      desc: "Keep each client session isolated with dedicated browser profiles, so you can stay signed in safely across multiple tenants.",
    },
    {
      icon: "ph-lock",
      title: "Secure Licensing",
      desc: "Machine-bound licensing with Stripe billing and offline grace support, built for IT admins who need tools they can trust.",
    },
  ];

  // ✅ MOD: download handler (replaces direct link)
  const handleDownload = async () => {
    const agree = window.confirm(
      "By downloading Tenant Switcher, you agree to our Terms of Use and Privacy Policy. \n\nTenant Switcher is a new Windows app and the installer is not yet code-signed, so Windows may show an “isn’t commonly downloaded” SmartScreen warning. This is expected for new unsigned installers."
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
        <h1 className="text-3xl sm:text-5xl font-bold mb-1">
          Microsoft 365 Tenant Switcher
          <br />
          for MSPs and IT Admins
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8">
           <br />
          Switch between Microsoft 365, Intune, Entra ID, Exchange, SharePoint, Teams and Azure tenants without browser profile chaos. Tenant Switcher keeps client sessions organised, isolated and ready from your Windows tray.
        </p>

        {/* ✅ MOD: Download button now calls handler */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
          <button
            onClick={handleDownload}
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-50 transition"
          >
            Download free version
          </button>
          <a
            href="#pricing"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
          >
            See pricing
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
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 hover:scale-105 hover:shadow-xl transition"
            >
              <i className={`ph ${f.icon} text-3xl text-white`} />
              <h3 className="mt-2 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-blue-100 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Soft gradient fade into page background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50" />
    </section>
  );
}
