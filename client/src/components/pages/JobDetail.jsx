import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Briefcase, MapPin, Clock, Users, DollarSign, Globe, GraduationCap, Code, Layers, Database, Shield, Zap } from "lucide-react";
import jobImage from "../../assets/jobimage.png";

// Detailed job descriptions based on job title
const jobDescriptions = {
  // Technical Roles
  "Software Engineer": {
    fullDescription: `We are seeking a highly skilled Software Engineer to join our dynamic engineering team. In this role, you will be responsible for designing, developing, and maintaining scalable software solutions that power our enterprise platforms. You'll work with cutting-edge technologies to solve complex problems and deliver value to millions of users worldwide.

As a Software Engineer at Aparaitech, you'll collaborate with cross-functional teams including product managers, designers, and other engineers to build innovative features and improve system performance. You'll have the opportunity to work on both frontend and backend systems, with a focus on creating seamless user experiences and robust, reliable infrastructure.

Our engineering culture emphasizes clean code, test-driven development, and continuous learning. We believe in giving engineers ownership over their work and providing opportunities for professional growth and advancement.`,
    
    responsibilities: [
      "Design, develop, test, and deploy high-quality software solutions",
      "Write clean, efficient, and maintainable code following best practices",
      "Participate in code reviews and provide constructive feedback to peers",
      "Collaborate with product teams to understand requirements and translate them into technical solutions",
      "Identify and address performance bottlenecks and system improvements",
      "Stay current with emerging technologies and industry trends",
      "Mentor junior engineers and contribute to team knowledge sharing"
    ],
    
    requirements: [
      "Bachelor's or Master's degree in Computer Science or related field",
      "3+ years of professional software development experience",
      "Proficiency in one or more programming languages (Java, Python, JavaScript, Go)",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Strong understanding of data structures, algorithms, and system design",
      "Experience with RESTful APIs and microservices architecture",
      "Knowledge of database technologies (SQL and NoSQL)",
      "Excellent problem-solving and communication skills"
    ],
    
    qualifications: "Bachelor's degree in Computer Science, Engineering, or related field. Master's degree preferred.",
    
    skills: ["Java", "Python", "JavaScript", "React", "AWS", "Docker", "Kubernetes", "Git", "CI/CD"],
    
    benefits: [
      "Competitive salary with annual bonus and stock options",
      "Comprehensive health, dental, and vision insurance",
      "401(k) matching up to 6%",
      "Unlimited PTO and flexible work arrangements",
      "Annual learning and development budget ($5,000)",
      "Remote work equipment and home office stipend",
      "Parental leave (16 weeks primary, 8 weeks secondary)",
      "Wellness programs and mental health support"
    ],
    
    department: "Engineering & Technology",
    
    extraSections: [
      {
        title: "Technical Stack & Environment",
        content: "You'll work with modern technologies including React, Node.js, TypeScript, AWS services (Lambda, S3, DynamoDB), Docker, and Kubernetes. Our development process includes Agile methodologies, CI/CD pipelines, automated testing, and regular tech talks."
      },
      {
        title: "Career Growth Opportunities",
        content: "We provide clear career paths for engineers with regular performance reviews, mentorship programs, and opportunities to attend conferences and workshops. Engineers can grow into senior, staff, or principal roles based on their contributions and impact."
      }
    ]
  },

  "Lead Solution Engineer - Revenue Cloud": {
    fullDescription: `As a Lead Solution Engineer for Revenue Cloud, you will play a pivotal role in driving revenue growth and customer success through technical expertise. You'll work closely with sales teams and enterprise customers to design and demonstrate comprehensive solutions that solve complex business challenges.

In this strategic role, you will architect end-to-end solutions leveraging our Revenue Cloud platform, ensuring alignment with customer requirements and business objectives. You'll act as a trusted advisor to C-level executives and technical stakeholders, providing guidance on best practices, implementation strategies, and ROI analysis.

We're looking for someone who combines deep technical knowledge with strong business acumen to create compelling solutions that demonstrate clear value and differentiation. Your expertise will help shape our product roadmap and contribute to our market leadership position.`,
    
    responsibilities: [
      "Lead technical discovery sessions with enterprise customers and stakeholders",
      "Design and present customized solution demonstrations aligned with business needs",
      "Develop proof-of-concepts and technical proposals to address specific challenges",
      "Collaborate with product management to provide customer feedback and feature requests",
      "Mentor and coach junior solution engineers and sales team members",
      "Create technical content, whitepapers, and best practice guides",
      "Participate in industry events and conferences as a technical expert",
      "Develop and maintain deep expertise in Revenue Cloud and adjacent technologies"
    ],
    
    requirements: [
      "7+ years of experience in solution engineering, pre-sales, or technical consulting",
      "Deep expertise in Revenue Cloud, CPQ, or billing solutions",
      "Experience with enterprise SaaS platforms and integration patterns",
      "Strong presentation and demonstration skills to executive audiences",
      "Knowledge of sales processes and methodologies",
      "Bachelor's degree in Business, Computer Science, or related field",
      "Relevant certifications (Salesforce certifications preferred)",
      "Ability to travel up to 30% for customer meetings and events"
    ],
    
    qualifications: "Bachelor's degree required, MBA or advanced technical degree preferred. Salesforce certifications highly valued.",
    
    skills: ["Revenue Cloud", "CPQ", "Salesforce", "Solution Architecture", "Enterprise Sales", "API Integration", "Business Process"],
    
    benefits: [
      "Competitive salary with significant commission potential",
      "Comprehensive benefits package including health and wellness",
      "Quarterly performance bonuses and annual equity grants",
      "Car allowance and expense account",
      "Executive development programs",
      "Premium travel accommodations and memberships",
      "Leadership training and mentorship opportunities",
      "Stock option program with accelerated vesting"
    ],
    
    department: "Sales & Solutions Engineering",
    
    extraSections: [
      {
        title: "Customer Impact & Success",
        content: "You'll work with Fortune 500 companies across industries including financial services, healthcare, retail, and manufacturing. Your solutions will directly impact customer revenue optimization, operational efficiency, and digital transformation initiatives."
      },
      {
        title: "Compensation & Advancement",
        content: "This role includes a competitive base salary plus commission structure with OTE starting at $200K+. Top performers can earn significantly more. Career progression paths include Senior Lead, Principal Solution Engineer, and leadership roles within the solutions organization."
      }
    ]
  },

  "Data Scientist": {
    fullDescription: `Join our Data Science team to build cutting-edge machine learning models and analytics solutions that drive business decisions and product innovations. As a Data Scientist, you'll work with massive datasets to extract insights, build predictive models, and create data products that deliver value to our customers and internal stakeholders.

You'll collaborate with product, engineering, and business teams to identify opportunities where data science can have maximum impact. Your work will range from exploratory data analysis and statistical modeling to developing production-ready machine learning systems.

We're looking for someone who is passionate about turning data into actionable insights and has a strong background in statistics, machine learning, and programming. You'll have access to state-of-the-art tools and infrastructure to support your work.`,
    
    responsibilities: [
      "Develop and deploy machine learning models for production use",
      "Conduct exploratory data analysis and generate insights",
      "Design and analyze A/B tests and experiments",
      "Build data pipelines and feature engineering systems",
      "Collaborate with engineering teams to productionize models",
      "Communicate findings and recommendations to stakeholders",
      "Stay current with advances in machine learning and AI",
      "Mentor junior data scientists and contribute to team knowledge"
    ],
    
    requirements: [
      "Advanced degree (MS/PhD) in Statistics, Computer Science, or related field",
      "3+ years of industry experience in data science or machine learning",
      "Proficiency in Python and data science libraries (pandas, scikit-learn, TensorFlow/PyTorch)",
      "Strong statistical background and experimental design skills",
      "Experience with big data technologies (Spark, Hadoop, etc.)",
      "Knowledge of SQL and database systems",
      "Excellent communication and visualization skills",
      "Portfolio of projects or publications demonstrating expertise"
    ],
    
    qualifications: "Master's or PhD in Data Science, Statistics, Computer Science, or related quantitative field.",
    
    skills: ["Python", "Machine Learning", "Statistics", "SQL", "TensorFlow", "Spark", "Data Visualization", "A/B Testing"],
    
    benefits: [
      "Competitive salary with bonus and equity compensation",
      "State-of-the-art computing resources and infrastructure",
      "Access to premium datasets and research tools",
      "Conference attendance and research publication support",
      "Flexible schedule and remote work options",
      "Health and wellness benefits including mental health support",
      "Continuous learning budget for courses and certifications",
      "Collaborative research environment with top talent"
    ],
    
    department: "Data Science & Analytics",
    
    extraSections: [
      {
        title: "Technical Environment",
        content: "Work with cutting-edge tools including Python, R, TensorFlow, PyTorch, Spark, AWS SageMaker, and custom ML infrastructure. Our team has access to petabyte-scale data and dedicated GPU clusters for model training."
      },
      {
        title: "Research & Innovation",
        content: "We encourage innovation and provide 20% time for research projects, support for academic collaborations, and opportunities to publish research papers and present at conferences."
      }
    ]
  },

   "Senior Full Stack Developer": {
    fullDescription: `We are seeking an experienced Senior Full Stack Developer to lead our core product development initiatives. In this pivotal role, you will architect, design, and implement end-to-end solutions that power our enterprise-grade platforms. You'll work across the entire technology stack, from modern frontend frameworks to scalable backend systems and infrastructure.

As a senior member of our engineering team, you will mentor junior developers, establish best practices, and drive technical excellence across all projects. You'll collaborate with cross-functional teams to translate complex business requirements into robust, scalable technical solutions that serve thousands of enterprise users globally.

This role requires deep technical expertise across multiple domains and the ability to make strategic decisions that impact our product roadmap and technical direction. You'll have the opportunity to work with cutting-edge technologies while solving complex challenges at scale.`,
    
    responsibilities: [
      "Lead the design and development of full-stack applications using modern frameworks and technologies",
      "Architect scalable, maintainable solutions with emphasis on performance and security",
      "Mentor junior developers and conduct code reviews to maintain high-quality standards",
      "Collaborate with product managers and designers to translate requirements into technical specifications",
      "Implement CI/CD pipelines and optimize deployment processes",
      "Troubleshoot and resolve complex technical issues across the entire stack",
      "Research and evaluate new technologies to improve development processes",
      "Contribute to architectural decisions and technical roadmap planning"
    ],
    
    requirements: [
      "5+ years of experience in full-stack development with JavaScript/TypeScript",
      "Expertise in React.js or similar modern frontend frameworks",
      "Strong backend experience with Node.js, Python, or Java",
      "Proficient with database design (SQL and NoSQL)",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Deep understanding of RESTful APIs and microservices architecture",
      "Knowledge of containerization (Docker) and orchestration (Kubernetes)",
      "Excellent problem-solving and leadership skills"
    ],
    
    qualifications: "Bachelor's degree in Computer Science or equivalent experience. Advanced degree preferred.",
    
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "AWS", "MongoDB", "Docker", "CI/CD", "Git"],
    
    benefits: [
      "Competitive salary with equity options",
      "Remote-first work environment with flexible hours",
      "Annual tech budget for equipment and software",
      "Comprehensive health and wellness benefits",
      "Professional development and conference allowance",
      "Unlimited PTO with minimum vacation requirements",
      "Quarterly team offsites and company retreats",
      "401(k) matching and financial planning services"
    ],
    
    department: "Engineering & Technology",
    
    extraSections: [
      {
        title: "Technical Environment",
        content: "You'll work with a modern tech stack including React 18+, TypeScript, Next.js, Node.js, MongoDB, PostgreSQL, AWS services (Lambda, S3, EC2), Docker, and Kubernetes. We follow Agile methodologies with two-week sprints, continuous integration, and automated testing."
      },
      {
        title: "Career Growth Path",
        content: "This role offers a clear path to Staff/Principal Engineer or Engineering Manager positions. We provide regular performance reviews, mentorship opportunities, and leadership training programs for senior technical talent."
      }
    ]
  },

  "AI/ML Engineer": {
    fullDescription: `Join our cutting-edge AI research team as an AI/ML Engineer to develop next-generation generative AI solutions that transform how businesses operate. In this role, you will design, implement, and deploy machine learning models at scale, working with state-of-the-art technologies in natural language processing, computer vision, and generative AI.

You'll collaborate with researchers, data scientists, and product teams to translate advanced AI concepts into production-ready solutions. Your work will directly impact our core products, enabling innovative features powered by large language models, multimodal AI, and advanced ML techniques.

We're looking for someone passionate about pushing the boundaries of what's possible with AI, with a strong foundation in machine learning theory and practical experience building real-world AI systems. You'll have access to substantial computational resources and work alongside some of the brightest minds in the field.`,
    
    responsibilities: [
      "Design and implement machine learning models for generative AI applications",
      "Fine-tune and optimize large language models for specific use cases",
      "Develop and maintain AI pipelines from data collection to model deployment",
      "Collaborate with researchers to implement state-of-the-art ML algorithms",
      "Optimize model performance for production environments",
      "Implement monitoring and evaluation systems for AI models",
      "Stay current with the latest advancements in AI/ML research",
      "Create documentation and best practices for ML development"
    ],
    
    requirements: [
      "Master's or PhD in Computer Science, Machine Learning, or related field",
      "3+ years of experience in AI/ML engineering or research",
      "Proficiency in Python and ML frameworks (PyTorch, TensorFlow)",
      "Experience with large language models and generative AI",
      "Strong mathematical foundation in statistics and linear algebra",
      "Experience with cloud-based ML platforms (AWS SageMaker, GCP Vertex AI)",
      "Knowledge of MLOps practices and tools",
      "Publications or significant contributions to ML projects"
    ],
    
    qualifications: "Advanced degree in Computer Science, Machine Learning, or related quantitative field. Strong research background preferred.",
    
    skills: ["Python", "PyTorch", "TensorFlow", "LLMs", "NLP", "MLOps", "AWS", "Docker", "Kubernetes"],
    
    benefits: [
      "Competitive salary with significant equity component",
      "Access to dedicated GPU clusters and ML infrastructure",
      "Research publication support and conference attendance",
      "Flexible work arrangements with remote options",
      "Annual learning budget for courses and certifications",
      "Health benefits including mental wellness support",
      "Collaboration with leading AI researchers",
      "Patent filing and intellectual property support"
    ],
    
    department: "AI Research & Development",
    
    extraSections: [
      {
        title: "Research & Innovation",
        content: "Our team publishes regularly at top AI conferences (NeurIPS, ICML, ACL) and collaborates with academic institutions. Engineers have dedicated research time and opportunities to lead innovative projects."
      },
      {
        title: "Technical Resources",
        content: "Access to enterprise-grade GPU clusters (NVIDIA A100/H100), petabytes of training data, custom ML infrastructure, and collaboration with leading AI researchers and institutions."
      }
    ]
  },

  "Cloud Solutions Architect": {
    fullDescription: `As a Cloud Solutions Architect, you will design and implement scalable, secure, and cost-effective cloud infrastructure solutions for our enterprise clients. In this strategic role, you'll work directly with clients to understand their business requirements and translate them into technical architectures on major cloud platforms.

You'll lead the design of cloud-native applications, migration strategies, and infrastructure modernization initiatives. Your expertise will guide clients through digital transformation journeys, helping them leverage cloud technologies to achieve business objectives while optimizing costs and ensuring security compliance.

This position requires deep expertise across multiple cloud platforms, strong client-facing skills, and the ability to design solutions that meet enterprise-scale requirements. You'll serve as a trusted advisor to C-level executives and technical teams alike.`,
    
    responsibilities: [
      "Design end-to-end cloud solutions for enterprise clients",
      "Lead cloud migration and modernization initiatives",
      "Develop architecture diagrams, technical specifications, and implementation plans",
      "Provide technical leadership and guidance to client teams",
      "Optimize cloud infrastructure for performance, security, and cost",
      "Stay current with cloud technologies and best practices",
      "Collaborate with sales teams on technical proposals and RFPs",
      "Establish cloud governance frameworks and best practices"
    ],
    
    requirements: [
      "7+ years of experience in cloud architecture or engineering",
      "Expertise in AWS, Azure, or Google Cloud Platform",
      "Professional cloud certifications (AWS Solutions Architect Pro, Azure Solutions Architect Expert)",
      "Experience with infrastructure as code (Terraform, CloudFormation)",
      "Knowledge of containerization and orchestration technologies",
      "Understanding of security, compliance, and governance frameworks",
      "Excellent communication and presentation skills",
      "Ability to travel to client sites as needed"
    ],
    
    qualifications: "Bachelor's degree in Computer Science or related field. Advanced cloud certifications required.",
    
    skills: ["AWS", "Azure", "Terraform", "Kubernetes", "Docker", "CI/CD", "Security", "Networking"],
    
    benefits: [
      "Highly competitive consulting rates with performance bonuses",
      "Flexible contract terms with option for extension",
      "Professional development and certification reimbursement",
      "Premium hardware and software allowances",
      "Opportunity to work with diverse enterprise clients",
      "Networking events and industry conferences",
      "Potential for contract-to-hire conversion",
      "Remote work with occasional client site visits"
    ],
    
    department: "Professional Services & Consulting",
    
    extraSections: [
      {
        title: "Client Portfolio",
        content: "You'll work with Fortune 500 companies across financial services, healthcare, retail, and manufacturing sectors. Projects range from greenfield implementations to large-scale migrations involving thousands of workloads."
      },
      {
        title: "Tools & Methodologies",
        content: "Utilize industry-leading tools including AWS Well-Architected Framework, Azure Architecture Center, CloudHealth, Terraform Enterprise, and custom assessment frameworks. Follow structured methodologies for discovery, design, implementation, and optimization phases."
      }
    ]
  },

  "UI/UX Designer": {
    fullDescription: `We're looking for a talented UI/UX Designer to create intuitive, beautiful, and accessible user experiences for our digital platforms. In this role, you will be responsible for the entire design process—from user research and wireframing to high-fidelity prototypes and design systems.

You'll work closely with product managers, developers, and stakeholders to understand user needs and business requirements, translating them into compelling designs that delight users and drive engagement. Your work will directly impact millions of users who rely on our platforms for their daily operations.

We're seeking a designer who combines strong visual design skills with deep user empathy and data-driven decision making. You should be passionate about creating accessible, inclusive designs that work for everyone, regardless of ability or context.`,
    
    responsibilities: [
      "Conduct user research and create user personas, journey maps, and wireframes",
      "Design intuitive user interfaces for web and mobile applications",
      "Create and maintain design systems and component libraries",
      "Collaborate with developers to ensure design implementation fidelity",
      "Conduct usability testing and incorporate feedback into designs",
      "Create interactive prototypes to demonstrate design concepts",
      "Stay current with design trends, tools, and best practices",
      "Advocate for user-centered design principles across the organization"
    ],
    
    requirements: [
      "4+ years of experience in UI/UX design for digital products",
      "Strong portfolio demonstrating design process and outcomes",
      "Proficiency with design tools (Figma, Adobe Creative Suite)",
      "Understanding of user research methodologies and usability principles",
      "Knowledge of accessibility standards (WCAG)",
      "Experience with design systems and component libraries",
      "Excellent visual design and typography skills",
      "Ability to communicate design decisions effectively"
    ],
    
    qualifications: "Bachelor's degree in Design, HCI, or related field. Portfolio review required.",
    
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Wireframing", "Prototyping", "Design Systems", "Accessibility", "HTML/CSS"],
    
    benefits: [
      "Competitive salary with performance bonuses",
      "Remote-first work environment with flexible schedule",
      "Annual hardware and software upgrade budget",
      "Professional development and conference attendance",
      "Health, dental, and vision insurance",
      "Unlimited PTO with encouraged time off",
      "Home office setup allowance",
      "Creative freedom and ownership over design direction"
    ],
    
    department: "Product Design",
    
    extraSections: [
      {
        title: "Design Philosophy",
        content: "We believe in human-centered design that balances user needs, business goals, and technical constraints. Our team follows a structured design process including discovery, ideation, prototyping, testing, and iteration."
      },
      {
        title: "Collaboration & Impact",
        content: "Work directly with product and engineering teams in an Agile environment. Your designs will impact enterprise users across industries, with opportunities to contribute to our design system used by multiple product teams."
      }
    ]
  },

  "DevOps Engineer": {
    fullDescription: `Join our Infrastructure team as a DevOps Engineer to streamline our CI/CD pipelines and ensure high availability of services across our global platform. In this critical role, you will build, maintain, and optimize our cloud infrastructure, deployment processes, and monitoring systems.

You'll work closely with development teams to implement infrastructure as code, automate deployment processes, and establish robust monitoring and alerting systems. Your expertise will ensure our systems are reliable, scalable, and secure while enabling developers to deliver value quickly and efficiently.

We're looking for someone passionate about automation, infrastructure as code, and cloud-native technologies. You'll have the opportunity to work with cutting-edge tools and technologies while solving complex challenges at scale.`,
    
    responsibilities: [
      "Design and implement CI/CD pipelines for automated deployments",
      "Manage cloud infrastructure using infrastructure as code",
      "Monitor system performance and implement improvements",
      "Ensure system security, backup, and disaster recovery capabilities",
      "Troubleshoot and resolve infrastructure issues",
      "Collaborate with development teams on deployment strategies",
      "Implement and maintain container orchestration platforms",
      "Automate operational processes and reduce manual intervention"
    ],
    
    requirements: [
      "4+ years of experience in DevOps or infrastructure engineering",
      "Expertise in cloud platforms (AWS, Azure, or GCP)",
      "Proficient with infrastructure as code (Terraform, CloudFormation)",
      "Experience with containerization and orchestration (Docker, Kubernetes)",
      "Strong scripting skills (Python, Bash, or similar)",
      "Knowledge of CI/CD tools (Jenkins, GitLab CI, GitHub Actions)",
      "Understanding of monitoring and logging tools",
      "Experience with Linux system administration"
    ],
    
    qualifications: "Bachelor's degree in Computer Science or equivalent experience. Relevant certifications preferred.",
    
    skills: ["AWS", "Terraform", "Kubernetes", "Docker", "CI/CD", "Python", "Bash", "Monitoring", "Security"],
    
    benefits: [
      "Competitive salary with equity options",
      "Remote work with flexible hours",
      "State-of-the-art hardware and software tools",
      "Comprehensive health and wellness benefits",
      "Professional certification reimbursement",
      "On-call compensation and rotation policies",
      "Annual learning and development budget",
      "Opportunity to work with cutting-edge technologies"
    ],
    
    department: "Infrastructure & Operations",
    
    extraSections: [
      {
        title: "Technical Environment",
        content: "You'll work with a modern stack including AWS (EC2, EKS, RDS, S3), Terraform Enterprise, Kubernetes, Docker, GitLab CI, Prometheus, Grafana, and ELK stack. We follow GitOps principles and Infrastructure as Code practices."
      },
      {
        title: "Scale & Impact",
        content: "Support infrastructure serving millions of users globally with 99.99% uptime requirements. Work on systems processing billions of transactions monthly with a focus on scalability, reliability, and security."
      }
    ]
  },

  "Product Manager": {
    fullDescription: `As a Product Manager, you will drive the product vision and strategy for our enterprise solutions, defining and delivering innovative features that solve critical business challenges. In this leadership role, you'll work at the intersection of technology, business, and user experience, translating market needs into actionable product requirements.

You'll be responsible for the entire product lifecycle—from market research and discovery to launch and iteration. Working closely with engineering, design, sales, and marketing teams, you'll ensure we build the right products that deliver maximum value to our customers and business.

We're looking for a strategic thinker with strong analytical skills, business acumen, and the ability to influence cross-functional teams. You should be passionate about solving complex problems and creating products that make a meaningful impact on our customers' success.`,
    
    responsibilities: [
      "Define and communicate product vision, strategy, and roadmap",
      "Conduct market research and competitive analysis",
      "Gather and prioritize product requirements from stakeholders",
      "Collaborate with engineering and design teams on product development",
      "Define and track key product metrics and KPIs",
      "Develop go-to-market strategies and coordinate product launches",
      "Analyze product performance and customer feedback for iteration",
      "Serve as the primary product evangelist internally and externally"
    ],
    
    requirements: [
      "5+ years of product management experience in enterprise SaaS",
      "Proven track record of launching successful products",
      "Strong analytical and data-driven decision-making skills",
      "Experience working in Agile development environments",
      "Excellent communication and stakeholder management abilities",
      "Technical background or ability to work closely with engineering teams",
      "Bachelor's degree in Business, Computer Science, or related field",
      "MBA or advanced degree preferred"
    ],
    
    qualifications: "Bachelor's degree required, MBA or relevant advanced degree preferred. Technical background highly valued.",
    
    skills: ["Product Strategy", "Market Research", "Roadmapping", "Agile", "Data Analysis", "Go-to-Market", "Stakeholder Management", "User Stories"],
    
    benefits: [
      "Competitive salary with significant bonus potential",
      "Equity participation in the company",
      "Full healthcare coverage including family",
      "Executive development and leadership training",
      "Flexible work arrangements with hybrid options",
      "Professional development and conference budget",
      "Annual product team offsites",
      "Opportunity to shape company strategy and direction"
    ],
    
    department: "Product Management",
    
    extraSections: [
      {
        title: "Product Portfolio",
        content: "Manage products serving enterprise clients across financial services, healthcare, retail, and manufacturing sectors. Our solutions address critical business challenges with measurable ROI and industry-specific capabilities."
      },
      {
        title: "Leadership & Impact",
        content: "This role offers direct influence on company strategy, regular interaction with executive leadership, and opportunities to mentor junior product managers. You'll shape product decisions that impact revenue, customer satisfaction, and market position."
      }
    ]
  },

  // Default fallback description
  "default": {
    fullDescription: `We are seeking a talented professional to join our team. In this role, you will contribute to our mission of delivering exceptional value to our customers while growing your skills and career in a dynamic, innovative environment.

As part of our team, you'll work with talented colleagues on challenging projects that have real impact. We believe in fostering a culture of learning, collaboration, and continuous improvement, where every team member has the opportunity to make a difference.

Whether you're just starting your career or looking to take the next step, we provide the support, resources, and opportunities you need to succeed. Join us and be part of building something special.`,
    
    responsibilities: [
      "Contribute to team goals and project objectives",
      "Collaborate with cross-functional teams to deliver results",
      "Continuously improve processes and practices",
      "Stay current with industry trends and best practices",
      "Provide mentorship and support to team members",
      "Communicate effectively with stakeholders",
      "Maintain high standards of quality and professionalism",
      "Drive innovation and positive change within the organization"
    ],
    
    requirements: [
      "Relevant experience in the field",
      "Strong problem-solving and analytical skills",
      "Excellent communication and collaboration abilities",
      "Adaptability and willingness to learn",
      "Commitment to excellence and continuous improvement",
      "Bachelor's degree or equivalent experience",
      "Ability to work effectively in a team environment",
      "Passion for technology and innovation"
    ],
    
    qualifications: "Bachelor's degree or equivalent work experience in relevant field.",
    
    skills: ["Problem Solving", "Communication", "Teamwork", "Adaptability", "Technical Skills"],
    
    benefits: [
      "Competitive compensation package",
      "Comprehensive benefits program",
      "Professional development opportunities",
      "Flexible work arrangements",
      "Health and wellness programs",
      "Retirement savings plan",
      "Paid time off and holidays",
      "Inclusive and supportive work environment"
    ],
    
    department: "Various Departments",
    
    extraSections: []
  }
};

const JobDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const job = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">No job selected</h2>
          <p className="text-gray-600 mb-8">Please select a job from the careers page to view details.</p>
          <button 
            onClick={() => navigate("/careers")}
            className="px-8 py-3 bg-[#0176d3] text-white font-semibold rounded-lg hover:bg-[#015ba3] transition-all shadow-md"
          >
            Back to Careers
          </button>
        </div>
      </div>
    );
  }

  // Get job details based on title or use default
  const jobDetails = jobDescriptions[job.title] || jobDescriptions.default;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-28 md:pt-20 pb-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-blue-100 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <div className="z-10">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  {jobDetails.department}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-gray-900">
                {job.title}
              </h1>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <span className="text-lg font-semibold text-gray-900">{job.location}</span>
                    <p className="text-gray-600 text-sm">Location</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  <div>
                    <span className="text-lg font-semibold text-gray-900">{job.type}</span>
                    <p className="text-gray-600 text-sm">Employment Type</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <span className="text-lg font-semibold text-gray-900">Full-time</span>
                    <p className="text-gray-600 text-sm">Schedule</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/apply", { state: { job: job } })}
                  className="mt-10 px-10 py-4 bg-[#0176d3] text-white text-lg font-bold rounded-lg hover:bg-[#015ba3] shadow-lg transition-all"
                >
                  Apply Now
                </button>  
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={jobImage} 
                  alt={job.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Job ID & Posted Info */}
          <div className="mb-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-gray-600">Job ID:</span>
                <span className="ml-2 font-semibold text-gray-900">{job.id || "JR" + Math.floor(Math.random() * 1000000)}</span>
              </div>
              <div>
                <span className="text-gray-600">Posted:</span>
                <span className="ml-2 font-semibold text-gray-900">{job.postedDate || "Recently"}</span>
              </div>
              <div>
                <span className="text-gray-600">Category:</span>
                <span className="ml-2 font-semibold text-gray-900">{job.category || jobDetails.department}</span>
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-blue-600" />
              Job Description
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {jobDetails.fullDescription}
              </p>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <Layers className="w-8 h-8 text-green-600" />
              Key Responsibilities
            </h2>
            <ul className="space-y-4">
              {jobDetails.responsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements & Qualifications */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-purple-600" />
              Required Qualifications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Requirements</h3>
                <ul className="space-y-3">
                  {jobDetails.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Preferred Qualifications</h3>
                <p className="text-gray-700 mb-4">{jobDetails.qualifications}</p>
                
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {jobDetails.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Extra Sections */}
          {jobDetails.extraSections && jobDetails.extraSections.length > 0 && (
            <div className="mb-12">
              {jobDetails.extraSections.map((section, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{section.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          )}

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-yellow-600" />
              What We Offer
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobDetails.benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all hover:shadow-md"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      {index % 6 === 0 && <Users className="w-5 h-5 text-blue-600" />}
                      {index % 6 === 1 && <Globe className="w-5 h-5 text-blue-600" />}
                      {index % 6 === 2 && <Shield className="w-5 h-5 text-blue-600" />}
                      {index % 6 === 3 && <Zap className="w-5 h-5 text-blue-600" />}
                      {index % 6 === 4 && <Code className="w-5 h-5 text-blue-600" />}
                      {index % 6 === 5 && <Database className="w-5 h-5 text-blue-600" />}
                    </div>
                    <span className="font-semibold text-gray-900">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Apply CTA */}
          <div className="mb-16 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Team?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Take the next step in your career and apply today. We're excited to learn more about you and how you can contribute to our success.
            </p>
            <button
              onClick={() => navigate("/apply", { state: { job: job } })}
              className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Apply Now
            </button>
          </div>

          {/* Equal Opportunity */}
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
            <h4 className="text-xl font-bold mb-3 text-gray-900">Equal Opportunity Employer</h4>
            <p className="text-gray-700 italic">
              "Aparaitech is an Equal Opportunity and Affirmative Action Employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, or veteran status."
            </p>
          </div>
        </div>
      </section>

      {/* TALENT COMMUNITY SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Talent Community
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Not ready to apply? Join our Talent Community to stay connected and receive updates on new opportunities, company news, and career insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Job Alerts</h4>
              <p className="text-gray-600">Get notified when roles matching your profile become available</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Networking</h4>
              <p className="text-gray-600">Connect with our recruiters and hiring managers</p>
            </div>
          </div>

          <a
            href="https://whatsapp.com/channel/0029VbAqzsdCXC3IWPf3uG1O"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="px-12 py-4 bg-[#0176d3] text-white text-lg font-bold rounded-lg hover:bg-[#015ba3] transition-all shadow-lg hover:shadow-xl">
              Join Talent Community
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};


// Add missing icon component
const Bell = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

export default JobDetail;