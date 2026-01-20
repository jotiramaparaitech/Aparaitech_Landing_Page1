// src/components/services/CloudComputingPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CloudComputingPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("what-is-cloud");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      setActiveSection(id);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white mt-5 text-gray-900">
      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Guide to Cloud Computing
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Unlock the power of the cloud and discover how cloud computing drives
            innovation, scalability, and efficiency.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            From startups to global enterprises, cloud computing enables faster
            innovation without the burden of managing physical infrastructure.
          </p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* ===== SIDEBAR ===== */}
          <aside className="lg:w-1/4">
            <div className="sticky top-32 bg-white rounded-xl shadow-sm p-6 border">
              <h3 className="text-lg font-bold mb-6">On This Page</h3>
              <nav className="space-y-3">
                {[
                  ["what-is-cloud", "What is Cloud Computing?"],
                  ["types", "Types of Cloud Computing"],
                  ["benefits", "Benefits"],
                  ["how-it-works", "How It Works"],
                  ["applications", "Applications"],
                  ["examples", "Examples"],
                  ["future", "Future Trends"],
                  ["choose-solution", "How to Choose"],
                ].map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition ${
                      activeSection === id
                        ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* ===== MAIN CONTENT ===== */}
          <main className="lg:w-3/4">
            <section id="what-is-cloud" className="mb-16 scroll-mt-28">
              <h2 className="text-4xl font-bold mb-6">
                What is cloud computing?
              </h2>
              <p className="text-xl text-gray-700">
                Cloud computing delivers servers, storage, databases, networking,
                and software over the internet on a pay-as-you-go basis — removing
                the need for physical infrastructure.
              </p>
            </section>

            <section id="types" className="mb-16 scroll-mt-28">
              <h2 className="text-4xl font-bold mb-8">
                Types of cloud computing
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl">
                Businesses can choose from public, private, hybrid, or multicloud
                strategies depending on security, scalability, and cost needs.
              </p>
            </section>

            <section id="benefits" className="mb-16 scroll-mt-28">
              <h2 className="text-4xl font-bold mb-8">Benefits</h2>
              <ul className="grid md:grid-cols-2 gap-6">
                {[
                  "Lower infrastructure costs",
                  "Elastic scalability",
                  "High availability & reliability",
                  "Enterprise-grade security",
                  "Faster innovation cycles",
                  "Global accessibility",
                ].map((b) => (
                  <li
                    key={b}
                    className="bg-white p-6 rounded-xl shadow border"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </section>

            <section id="how-it-works" className="mb-16 scroll-mt-28">
              <h2 className="text-4xl font-bold mb-6">
                How does cloud computing work?
              </h2>
              <p className="text-lg text-gray-700">
                Cloud providers host data centers worldwide. Businesses rent
                computing power and storage while providers manage hardware,
                security, and maintenance.
              </p>
            </section>

            <section id="applications" className="mb-16 scroll-mt-28">
              <h2 className="text-4xl font-bold mb-8">
                Applications of cloud computing
              </h2>
              <p className="text-lg text-gray-700">
                Cloud supports SaaS platforms, streaming services, AI workloads,
                data analytics, IoT systems, and enterprise applications.
              </p>
            </section>

            <section id="examples" className="mb-16 scroll-mt-28">
              <h2 className="text-4xl font-bold mb-8">Examples</h2>
              <p className="text-lg text-gray-700">
                Platforms like Netflix, Amazon, Salesforce, and Google Workspace
                rely on cloud infrastructure to operate at global scale.
              </p>
            </section>

            <section id="future" className="mb-16 scroll-mt-28">
              <h2 className="text-4xl font-bold mb-8">Future trends</h2>
              <p className="text-lg text-gray-700">
                Edge computing, AI integration, sustainability initiatives, and
                hybrid cloud adoption will shape the next decade of cloud
                innovation.
              </p>
            </section>

            <section id="choose-solution" className="mb-16 scroll-mt-28">
              <h2 className="text-4xl font-bold mb-8">
                How to choose the right solution
              </h2>
              <p className="text-lg text-gray-700">
                Evaluate scalability needs, compliance requirements, pricing
                models, and long-term business goals before selecting a cloud
                provider.
              </p>
            </section>

            {/* ===== CTA ===== */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to move to the cloud?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Talk to our cloud experts and build a secure, scalable cloud
                strategy for your business.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="px-10 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:scale-105 transition"
              >
                Get Free Consultation
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CloudComputingPage;
