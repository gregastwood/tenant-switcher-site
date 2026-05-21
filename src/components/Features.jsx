import React from "react";

export default function Features() {
  const features = [
    {
      title: "Launch Microsoft 365 Portals Instantly",
      desc: "Open Microsoft 365 Admin Center, Intune, Entra ID, Exchange, SharePoint, Teams, Outlook and Azure directly in the correct tenant profile.",
      img: "/launchers.jpg",
    },
    {
      title: "Manage tenants in one dashboard",
      desc: "Keep client tenants organised with names, colours, shortcuts and last-used tracking, so MSP techs can find the right customer environment quickly.",
      img: "/tenants-view.jpg",
    },
    {
      title: "Monitor tenant health and switch from the tray",
      desc: "Check tenant domain status, DNS/authentication indicators and jump back into the right Microsoft admin portal from the Windows system tray.",
      imgs: ["/domain-health.jpg", "/tray.jpg"],
    },
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* ✅ Updated title */}
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
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
