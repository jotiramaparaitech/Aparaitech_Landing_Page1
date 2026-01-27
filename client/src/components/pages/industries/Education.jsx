import React from 'react';
import { Link } from 'react-router-dom';

const Education = () => {
  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <div className="relative bg-[#1e1b4b] text-white overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#4f46e5]/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <div className="inline-block px-4 py-1 mb-6 border border-indigo-400/30 rounded-full bg-indigo-900/30 backdrop-blur-sm">
              <span className="text-indigo-300 font-semibold tracking-wide text-sm uppercase">EdTech & Learning</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Reinventing the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] to-[#c084fc]">Classroom Experience.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              Empower educators and students with immersive, accessible, and data-driven learning technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-indigo-500/50 text-center"
              >
                Get Started
              </Link>
              <button className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-bold rounded-lg transition-all text-center" onClick={(e) => e.preventDefault()}>
                View Solutions
              </button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            {/* Abstract UI for Education */}
            <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl transform -rotate-1 hover:rotate-0 transition-all duration-500">
               <div className="flex items-center justify-between mb-6">
                 <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center text-xl">🎓</div>
                    <div>
                        <div className="text-sm text-indigo-200">Course Progress</div>
                        <div className="text-lg font-bold">Advanced React Patterns</div>
                    </div>
                 </div>
                 <div className="text-2xl font-bold text-green-400">85%</div>
               </div>
               
               <div className="space-y-4">
                 <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                   <div className="h-full w-[85%] bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-indigo-300 text-sm mb-1">Active Students</div>
                        <div className="text-xl font-bold">12,450</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-purple-300 text-sm mb-1">Avg. Score</div>
                        <div className="text-xl font-bold">92.4%</div>
                    </div>
                 </div>
               </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>

      {/* TRUST INDICATORS */}
      <div className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Trusted by top institutions</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold text-gray-800">Global University</span>
            <span className="text-xl font-bold text-gray-800">TechAcademy</span>
            <span className="text-xl font-bold text-gray-800">EduFuture</span>
            <span className="text-xl font-bold text-gray-800">SmartSchools</span>
            <span className="text-xl font-bold text-gray-800">LearningHub</span>
          </div>
        </div>
      </div>

      {/* VALUE PROPOSITION GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-6">Digital Transformation for Education</h2>
            <p className="text-lg text-gray-600">
              We build scalable platforms that facilitate remote learning, student engagement, and administrative efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "LMS Development",
                desc: "Custom Learning Management Systems tailored to your curriculum and teaching style.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                ),
                color: "bg-indigo-600"
              },
              {
                title: "Virtual Classrooms",
                desc: "Interactive video conferencing tools with whiteboards, polls, and breakout rooms.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                ),
                color: "bg-purple-600"
              },
              {
                title: "Student Analytics",
                desc: "Track performance, attendance, and engagement with detailed dashboards and reports.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                ),
                color: "bg-blue-600"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1e1b4b] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                <a href="#" className="inline-flex items-center mt-4 text-indigo-600 font-semibold hover:text-indigo-800">
                  Learn more <span className="ml-2">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SPOTLIGHT */}
      <section className="py-24 bg-[#f5f3ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                AI-Powered Learning
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-6">
                Personalized Education at Scale.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Every student learns differently. Our AI solutions adapt content to individual learning styles, identify knowledge gaps, and provide real-time feedback to help students succeed.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Adaptive Learning Paths",
                  "Automated Grading & Feedback",
                  "Intelligent Tutoring Systems"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Explore AI in EdTech
              </button>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Digital Learning" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b]/80 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-lg">Smart Classrooms</p>
                    <p className="text-sm text-gray-200">Connecting students and teachers globally.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#1e1b4b] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to transform education?
          </h2>
          <p className="text-xl text-indigo-200 mb-10">
            Partner with Aparaitech to build the next generation of learning platforms.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-indigo-500/50">
              Contact Sales
            </Link>
            <button className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold rounded-lg transition-all" onClick={(e) => e.preventDefault()}>
              Read Case Studies
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Education;