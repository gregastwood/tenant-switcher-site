import React from "react";

export default function Features() {
  const features = [
    {
      title: "Launch Microsoft 365 Portals Instantly",
      desc: "Open Admin, SharePoint, Teams, Outlook, and more with one click — directly under the correct tenant.",
      img: "/launchers.jpg",
    },
    {
      title: "Manage Tenants Easily",
      desc: "View all your tenants in one dashboard with color-coded shortcuts and last login tracking.",
      img: "/tenants-view.jpg",
    },
    {
      title: "Monitor Domain Health & Tray Access",
      desc: "Keep an eye on DNS, authentication, and service connectivity — and switch tenants instantly from your system tray.",
      imgs: ["/domain-health.jpg", "/tray.jpg"],
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* ✅ Updated title */}
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center"
            >
              {/* For single-image features */}
              {!f.imgs && (
                <>
                  <img
                    src={f.img}
                    alt={f.title}
                    className="rounded-lg shadow mb-6 w-full object-contain"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </>
              )}

              {/* For the special two-image feature */}
              {f.imgs && (
                <>
                  <img
                    src={f.imgs[0]}
                    alt={`${f.title} screenshot 1`}
                    className="rounded-lg shadow mb-4 w-full object-contain"
                  />

                  {/* Title between images */}
                  <h3 className="text-xl font-semibold my-2 text-blue-700">
                    {f.title}
                  </h3>

                  <img
                    src={f.imgs[1]}
                    alt={`${f.title} screenshot 2`}
                    className="rounded-lg shadow mb-4 w-full object-contain"
                  />

                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
