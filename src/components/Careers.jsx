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
    <section className="bg-[#f9f9fb] pt-28 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#2d1b69] mb-4">
            Careers at Aparaitech
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Build your career with a global technology company focused on innovation,
            impact, and long-term growth.
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
                bg-white border border-[#e5e7eb]
                rounded-xl p-7 shadow-sm
                transition-all duration-300
                hover:shadow-md hover:-translate-y-1
                flex flex-col
              "
            >
              {/* TITLE */}
              <h3 className="text-lg font-semibold text-[#2d1b69] mb-3">
                {job.title}
              </h3>

              {/* META INFO */}
              <div className="flex items-center justify-between mb-4">
                {/* Job Type */}
                <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                  {job.type}
                </span>

                {/* Location */}
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-[#2d1b69]"
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
              <p className="text-sm text-gray-600 mb-6 flex-grow">
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
                  border border-[#2d1b69]
                  text-[#2d1b69] font-medium
                  hover:bg-[#f3e8ff]
                  hover:text-[#4c1d95]
                  transition
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
