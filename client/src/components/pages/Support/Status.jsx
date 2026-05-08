import React from 'react';

const Status = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50 font-sans">
      
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
            <h1 className="text-3xl font-bold text-gray-900">All Systems Operational</h1>
          </div>
          <p className="text-gray-600">Last updated: Just now</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        
        {/* SERVICES STATUS */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
            <h2 className="font-bold text-gray-900">Current Status by Service</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              "API V1", "API V2", "Dashboard", "Authentication", "Webhooks", "Database Clusters", "CDN"
            ].map((service, idx) => (
              <div key={idx} className="px-6 py-4 flex justify-between items-center">
                <span className="font-medium text-gray-700">{service}</span>
                <span className="text-sm font-bold text-green-600 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  Operational
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PAST INCIDENTS */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Past Incidents</h2>
          <div className="space-y-6">
            {[
              { date: "Oct 22, 2023", title: "API Latency in US-East", status: "Resolved", desc: "We identified and resolved a network configuration issue causing increased latency." },
              { date: "Sep 15, 2023", title: "Scheduled Maintenance", status: "Completed", desc: "Database upgrades completed successfully with no downtime." },
              { date: "Aug 04, 2023", title: "Webhook Delivery Delays", status: "Resolved", desc: "A backlog in our queue processing system caused delays in webhook delivery." },
            ].map((incident, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <h3 className="font-bold text-gray-900">{incident.title}</h3>
                  <span className="text-sm text-gray-500">{incident.date}</span>
                </div>
                <p className="text-gray-600 mb-3 text-sm">{incident.desc}</p>
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded uppercase">{incident.status}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Status;