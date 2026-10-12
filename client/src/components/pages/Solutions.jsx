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
    <section className="bg-slate-50 dark:bg-[#0B0F19] pt-20 pb-20">
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
                        ? "bg-[#2563EB] text-white"
                        : "bg-slate-100 dark:bg-[#161F32] border border-slate-200 dark:border-[#1E293B] text-slate-300"
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
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-[#1E293B] shadow-md p-3">
                {Object.keys(solutionsData).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={`w-full text-left px-3 lg:px-4 py-2.5 rounded-lg mb-2 text-sm lg:text-base font-medium transition-all
                    ${
                      active === key
                        ? "bg-[#2563EB] text-white shadow"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:bg-[#161F32]"
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
              <h1 className="text-3xl md:text-4xl font-bold text-slate-50 mb-3">
                {active}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 max-w-3xl text-sm md:text-base">
                {solutionsData[active].desc}
              </p>
            </div>

            {/* SOLUTION CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {solutionsData[active].items.map((item) => (
                <div
                  key={item}
                  className="
                    bg-white dark:bg-[#111827]
                    border border-slate-200 dark:border-[#1E293B]
                    rounded-xl p-6
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    flex flex-col h-full
                  "
                >
                  <h3 className="text-lg font-semibold text-slate-50 mb-2">
                    {item}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-grow">
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
