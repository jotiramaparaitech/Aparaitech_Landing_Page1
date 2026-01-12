import React, { useState } from "react";

const solutionsData = {
  "AI Services": {
    desc: "Advanced AI-powered solutions to drive intelligent decision-making and automation.",
    items: [
      "Generative AI Platforms",
      "Machine Learning Solutions",
      "Predictive Analytics",
      "Computer Vision",
      "Natural Language Processing",
    ],
  },
  "Enterprise Solutions": {
    desc: "Robust enterprise systems to streamline operations and enhance productivity.",
    items: [
      "ERP Solutions",
      "CRM Systems",
      "SCM Platforms",
      "HR & HCM Systems",
      "PLM Solutions",
    ],
  },
  "Digital Transformation": {
    desc: "End-to-end digital transformation strategies for modern enterprises.",
    items: [
      "Digital Consulting",
      "Customer Experience (CX)",
      "Digital Finance",
      "Digital Healthcare",
      "Smart Enterprise Platforms",
    ],
  },
  "Industry Solutions": {
    desc: "Industry-focused solutions tailored to specific business domains.",
    items: [
      "Manufacturing Solutions",
      "Retail & E-Commerce",
      "Banking & Finance",
      "Healthcare Systems",
      "Energy & Utilities",
    ],
  },
  "Security Solutions": {
    desc: "Enterprise-grade security solutions ensuring compliance and data protection.",
    items: [
      "Cyber Security Services",
      "Identity & Access Management",
      "Cloud Security",
      "Compliance Management",
      "Threat Monitoring",
    ],
  },
};

const Solutions = () => {
  const [active, setActive] = useState("AI Services");

  return (
    <section className="bg-[#f4f1ff] pt-20 pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* MOBILE TABS */}
        <div className="md:hidden mb-8">
          <style>{`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          <div className="w-full overflow-x-auto no-scrollbar pb-1">
            <div className="flex gap-3 min-w-max px-1">
              {Object.keys(solutionsData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`
                    flex-shrink-0
                    whitespace-nowrap
                    px-4 py-2
                    rounded-full
                    text-sm font-medium
                    transition
                    ${
                      active === key
                        ? "bg-[#7c3aed] text-white"
                        : "bg-white border border-[#ddd] text-[#2d1b69]"
                    }
                  `}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-10">

          {/* LEFT SIDEBAR */}
          <aside className="hidden md:block md:col-span-3">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl border border-[rgba(124,58,237,0.18)] shadow-md p-3">
                {Object.keys(solutionsData).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={`w-full text-left px-3 lg:px-4 py-2.5 rounded-lg mb-2 text-sm lg:text-base font-medium transition-all
                    ${
                      active === key
                        ? "bg-[#7c3aed] text-white shadow"
                        : "text-[#2d1b69] hover:bg-[#ede9fe]"
                    }`}
                >
                  {key}
                </button>
                ))}
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <main className="col-span-12 md:col-span-9">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#2d1b69] mb-3">
                {active}
              </h1>
              <p className="text-gray-600 max-w-3xl text-sm md:text-base">
                {solutionsData[active].desc}
              </p>
            </div>

            {/* SOLUTION CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {solutionsData[active].items.map((item) => (
                <div
                  key={item}
                  className="
                    bg-white
                    border border-[rgba(124,58,237,0.16)]
                    rounded-xl p-6
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    flex flex-col h-full
                  "
                >
                  <h3 className="text-lg font-semibold text-[#2d1b69] mb-2">
                    {item}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                    Enterprise-ready {item.toLowerCase()} designed to deliver
                    scalability, security, and long-term business value.
                  </p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
