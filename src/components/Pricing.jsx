import React from "react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-600 mb-8">
          Choose the plan that fits your workflow. All prices in NZD — cancel anytime.
        </p>

        {/* ✅ Free plan notice */}
        <p className="text-gray-600 mb-8">
          A free version is available with support for a limited number of tenants —
          perfect for testing or light use. Upgrade to a paid plan to manage more
          tenants and devices.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Solo Plan */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition p-10 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Solo</h3>
            <p className="text-gray-500 mb-6">1 device • single user</p>
            <p className="text-5xl font-bold text-blue-700 mb-2">
              NZ&nbsp;$12
              <span className="text-base font-normal text-gray-600">/month</span>
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Perfect for IT professionals managing a few tenants.
            </p>
            <a
              href="https://buy.stripe.com/test_example_solo" // replace with real Stripe link
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
            >
              Get Solo Plan
            </a>
          </div>

          {/* Team Plan */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition p-10 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Team</h3>
            <p className="text-gray-500 mb-6">Up to 5 devices • shared license</p>
            <p className="text-5xl font-bold text-blue-700 mb-2">
              NZ&nbsp;$10
              <span className="text-base font-normal text-gray-600">
                /seat&nbsp;/month
              </span>
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Ideal for small teams or MSPs managing multiple clients.
            </p>
            <a
              href="https://buy.stripe.com/test_example_team" // replace with real Stripe link
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
            >
              Get Team Plan
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-2xl shadow-md hover:shadow-xl transition p-10 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Enterprise
            </h3>
            <p className="text-gray-500 mb-6">10+ devices • priority support</p>
            <p className="text-4xl font-bold text-blue-700 mb-2">
              Custom&nbsp;Pricing
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Tailored licensing and support for larger organisations or MSPs.
            </p>
            <a
              href="#contact"
              className="bg-transparent border border-blue-600 text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white shadow-md transition"
            >
              Contact Sales
            </a>
          </div>
        </div>

        <p className="mt-16 text-gray-500 text-sm">
          All prices in NZD and include GST where applicable.
        </p>
      </div>
    </section>
  );
}
