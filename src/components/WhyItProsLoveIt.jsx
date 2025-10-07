import React from "react";

export default function WhyItProsLoveIt() {
  const features = [
    {
      icon: "ph-arrows-left-right",
      title: "One-Click Switching",
      desc: "Jump between tenants from your tray in seconds.",
    },
    {
      icon: "ph-browser",
      title: "Per-Tenant Profiles",
      desc: "Keep logins isolated with custom browser profiles.",
    },
    {
      icon: "ph-lock",
      title: "Secure Licensing",
      desc: "Machine-bound license validation with Stripe billing.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Why IT Pros Love It</h2>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 hover:shadow-xl transition"
            >
              <i className={`ph ${f.icon} text-5xl text-blue-600`} />
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
