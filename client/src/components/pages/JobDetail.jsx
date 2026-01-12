import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // ✅ Added useLocation
import { Briefcase, MapPin, ChevronDown, Clock } from "lucide-react";
import jobImage from "../../assets/jobimage.png"; 

const JobDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // ✅ Get the job data passed from the Careers page
  const job = location.state;

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Safety Check: If someone goes directly to /job-detail without clicking a card
  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">No job selected</h2>
        <button 
          onClick={() => navigate("/careers")}
          className="px-6 py-2 bg-[#0176d3] text-white rounded-md"
        >
          Back to Careers
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-[#032d60] overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-28 md:pt-16 pb-24 bg-white overflow-hidden max-w-full">

        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          
          {/* LEFT CONTENT (DYNAMIC) */}
          <div className="z-10">
            <h1 className="text-[40px] md:text-[52px] font-bold leading-[1.1] mb-8 text-[#032d60]">
              {job.title} {/* ✅ Dynamic Title */}
            </h1>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-[#00a1e0]" />
                <span className="text-lg font-semibold">Engineering & Technology</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00a1e0] mt-1" />
                <span className="text-lg font-semibold">{job.location}</span> {/* ✅ Dynamic Location */}
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#00a1e0]" />
                <span className="text-lg font-semibold">{job.type}</span> {/* ✅ Dynamic Type */}
              </div>
            </div>

            <button
             onClick={() =>
               window.open(
                 "https://forms.gle/duaAAf3ToFTqCFNL7",
                 "_blank",
                 "noopener,noreferrer"
             )
           }
         className="mt-10 px-10 py-4 bg-[#0176d3] text-white text-lg font-bold rounded-lg hover:bg-[#015ba3] shadow-lg transition-all"
           >
               Apply Now
            </button>

          </div>

          {/* RIGHT VISUAL SECTION */}
          <div className="relative flex justify-end items-end h-[500px]">
            <div className="absolute w-[500px] h-[500px] bg-[#fbc02d] rounded-full right-[-100px] bottom-[-220px]"></div>
            <div className="relative z-10 translate-y-24 translate-x-24 scale-110 -mr-10">
              <img src={jobImage} alt="Team" className="w-[600px] object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION SECTION (DYNAMIC) */}
      <section className="max-w-[850px] mx-auto px-6 py-20 border-t border-gray-100">
        <div className="prose prose-blue max-w-none">
          <h2 className="text-3xl font-bold mb-6">About the Role</h2>
          <p className="text-lg leading-relaxed mb-6">
            {job.desc} {/* ✅ Dynamic Description */}
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Your Responsibilities</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Take ownership of the {job.title} lifecycle from design to deployment.</li>
            <li>Collaborate with cross-functional teams to define requirements.</li>
            <li>Build and maintain scalable solutions for enterprise clients.</li>
            <li>Stay updated with the latest trends in {job.location === "Remote" ? "Distributed Systems" : "Modern Tech"}.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">What We Are Looking For</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Proven experience as a {job.title}.</li>
            <li>Strong problem-solving skills and attention to detail.</li>
            <li>Ability to work in a {job.type} environment effectively.</li>
            <li>Excellent communication skills.</li>
          </ul>

          <div className="mt-12 p-8 bg-blue-50 rounded-xl">
            <h4 className="text-xl font-bold mb-2">Our Commitment to Equality</h4>
            <p className="text-md italic text-gray-700">
              "At Aparaitech, we are an Equal Opportunity Employer. We value diversity and do not discriminate on the basis of race, religion, color, national origin, gender, or age."
            </p>
          </div>
        </div>
      {/* 4. FOOTER JOIN SECTION (Clean Salesforce Style) */}
     <section className="relative pt-24 pb-48 bg-white overflow-hidden">
  
  {/* GRID BACKGROUND LAYER */}
  <div
  className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none"
  style={{
    backgroundImage: `
      linear-gradient(to right, #0176d3 1px, transparent 1px),
      linear-gradient(to bottom, #0176d3 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
  }}
></div>


  {/* CENTER CONTENT */}
  <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
    <h2 className="text-[48px] md:text-[56px] font-bold text-[#032d60] leading-tight mb-6">
      We can't wait to meet you!
    </h2>
    <p className="text-xl md:text-2xl text-[#032d60] mb-12 max-w-2xl mx-auto">
      Join our Talent Community and be the first to know about open roles, career tips, events happening near you, and much more.
    </p>

    <a
  href="https://whatsapp.com/channel/0029VbAqzsdCXC3IWPf3uG1O"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-12 py-4 bg-[#0176d3] text-white text-lg font-bold rounded-lg hover:bg-[#015ba3] transition-all shadow-md">
    Join our Talent Community
  </button>
</a>

  </div>

  

</section>
      </section>
    </div>
  );
};

export default JobDetail;