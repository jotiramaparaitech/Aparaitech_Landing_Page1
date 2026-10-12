import React from "react";
import { useNavigate } from "react-router-dom";

const jobOpenings = [
  {
    title: "Senior Full Stack Developer",
    type: "Full-time",
    location: "Remote",
    desc: "We are looking for an experienced developer to lead our core product team.",
  },
  {
    title: "AI/ML Engineer",
    type: "Full-time",
    location: "Hybrid",
    desc: "Join our AI research team to build next-gen generative AI solutions.",
  },
  {
    title: "Cloud Solutions Architect",
    type: "Contract",
    location: "On-site",
    desc: "Design and implement scalable cloud infrastructure for enterprise clients.",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote",
    desc: "Create intuitive and beautiful user experiences for our digital platforms.",
  },
  {
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Remote",
    desc: "Streamline our CI/CD pipelines and ensure high availability of services.",
  },
  {
    title: "Product Manager",
    type: "Full-time",
    location: "Hybrid",
    desc: "Drive the product vision and strategy for our enterprise solutions.",
  },
];

const Careers = () => {
  const navigate = useNavigate(); // ✅ REQUIRED

  return (
    <section className="bg-slate-50 dark:bg-[#0B0F19] pt-28 pb-20 transition-colors">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Join Our Team
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Careers at Aparaitech
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Build your career with a global technology company focused on innovation,
            impact, and long-term engineering excellence.
          </p>
        </div>

        {/* JOB GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              onClick={() => navigate("/job-detail", { state: job })} // ✅ CLICK NAVIGATION
              className="
                cursor-pointer
                bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B]
                rounded-xl p-7 shadow-sm
                transition-all duration-300
                hover:shadow-md hover:-translate-y-1 hover:border-blue-500/40
                flex flex-col group
              "
            >
              {/* TITLE */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {job.title}
              </h3>

              {/* META INFO */}
              <div className="flex items-center justify-between mb-4">
                {/* Job Type */}
                <span className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-[#161F32] text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5 rounded-full">
                  {job.type}
                </span>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z"
                    />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>
                  <span>{job.location}</span>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                {job.desc}
              </p>

              {/* CTA */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // ✅ prevents double click issue
                  navigate("/job-detail", { state: job });
                }}
                className="
                  mt-auto w-full py-2.5 rounded-lg
                  border border-blue-600 dark:border-blue-500/40
                  text-blue-600 dark:text-blue-400 font-semibold text-sm
                  hover:bg-blue-600 hover:text-white
                  dark:hover:bg-blue-600 dark:hover:text-white
                  transition-all duration-200
                "
              >
                View & Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
