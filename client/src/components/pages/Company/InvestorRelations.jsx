import React from 'react';

const InvestorRelations = () => {
  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO */}
      <div className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Investor Relations</h1>
            <p className="text-xl text-gray-400 mb-8">
              Driving long-term value through sustainable growth, innovation, and operational excellence.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-gray-900 font-bold rounded hover:bg-gray-100 transition-colors">
                Q3 2023 Earnings
              </button>
              <button className="px-6 py-3 border border-white text-white font-bold rounded hover:bg-white/10 transition-colors">
                Annual Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* KEY METRICS */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Annual Recurring Revenue", value: "$120M+" },
              { label: "YoY Growth", value: "45%" },
              { label: "Enterprise Customers", value: "5,000+" },
              { label: "Countries", value: "120+" }
            ].map((metric, idx) => (
              <div key={idx}>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-500 text-sm uppercase tracking-wide">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCIAL REPORTS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Financial Reports & Filings</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-100">
              {[
                { name: "Q3 2023 Quarterly Results", date: "Oct 24, 2023", type: "Earnings" },
                { name: "2022 Annual Report", date: "Mar 15, 2023", type: "Annual" },
                { name: "Q2 2023 Quarterly Results", date: "Jul 20, 2023", type: "Earnings" },
                { name: "Investor Presentation - Sept 2023", date: "Sep 05, 2023", type: "Presentation" },
              ].map((doc, idx) => (
                <div key={idx} className="p-6 flex flex-col md:flex-row items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4 mb-4 md:mb-0 w-full md:w-auto">
                    <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-500">
                      📄
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{doc.name}</h3>
                      <p className="text-sm text-gray-500">{doc.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase rounded-full">{doc.type}</span>
                    <button className="text-blue-600 font-bold hover:underline">Download PDF</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT IR */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Investor Contacts</h2>
          <p className="text-gray-600 mb-8">
            For inquiries related to stock ownership or financial information, please contact our Investor Relations team.
          </p>
          <div className="text-lg font-bold text-gray-900">
            ir@aparaitech.com<br />
            +1 (555) 123-4567
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorRelations;