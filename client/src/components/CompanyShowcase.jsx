import React from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Image as ImageIcon,
  MessageSquareQuote,
  Users,
  Code2,
  Clock3,
} from "lucide-react";

/*
 * CONTENT CONFIGURATION
 * Replace demo gallery images, team details, and review placeholders when
 * approved company material is available. Add a project URL to enable its
 * "Open project" link. Keep URLs empty until they are confirmed.
 */
const galleryItems = [
  {
    title: "Team collaboration",
    category: "Team",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Planning and ideas",
    category: "Behind the scenes",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Building together",
    category: "Work culture",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85",
  },
];

const projects = [
  {
    title: "Smart Billing System",
    category: "Business software",
    description:
      "A streamlined billing experience for managing transactions, invoices, and day-to-day business operations.",
    image:
      "https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=1000&q=85",
    url: "",
    stack: ["Billing", "Dashboard", "Business tools"],
  },
  {
    title: "Apana Store",
    category: "E-commerce",
    description:
      "A digital storefront concept for browsing products and making the shopping journey simpler.",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1000&q=85",
    url: "https://apnastore.aparaitech.org/",
    stack: ["E-commerce", "Catalog", "Orders"],
  },
  {
    title: "Service Hub Web",
    category: "Service management",
    description:
      "A web experience for connecting service requests with the people and workflows needed to resolve them.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
    url: "http://servicehub.aparaitech.org/",
    stack: ["Service requests", "Operations", "Web app"],
  },
  {
    title: "PashuSetu",
    category: "Community platform",
    description:
      "A project concept focused on making animal-care information and related services easier to access.",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212fxbe1f?auto=format&fit=crop&w=1000&q=85",
    url: "",
    stack: ["Community", "Information", "Services"],
  },
  {
    title: "Cloud Kitchen",
    category: "Food technology",
    description:
      "A digital workflow concept for coordinating kitchen orders and supporting day-to-day food operations.",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85",
    url: "https://cloudkitchen.aparaitech.org/",
    stack: ["Orders", "Kitchen workflow", "Operations"],
  },
  {
    title: "AI Interview Application",
    category: "Artificial intelligence",
    description:
      "An interview-practice experience concept for helping candidates prepare and organize their practice sessions.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=85",
    url: "",
    stack: ["AI", "Interview practice", "Assessment"],
  },
  {
    title: "CET Test Portal",
    category: "Education",
    description:
      "An online test portal concept for organizing practice questions and helping learners prepare for CET exams.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=85",
    url: "",
    stack: ["Practice tests", "Learning", "Assessment"],
  },
];

const teamRoles = [
  {
    role: "Engineering",
    description: "Software development, testing, and technical delivery.",
    icon: Code2,
  },
  {
    role: "Design & Experience",
    description: "User journeys, interface design, and product usability.",
    icon: ImageIcon,
  },
  {
    role: "Operations & Collaboration",
    description: "Planning, communication, and keeping projects moving.",
    icon: Users,
  },
];

const reviewPlaceholders = [
  {
    label: "Client feedback",
    text: "Approved client feedback will be added here after the original review and permission to publish are confirmed.",
  },
  {
    label: "Team experience",
    text: "A space for a verified team or collaborator review, with the contributor's name and role added only after approval.",
  },
  {
    label: "Project feedback",
    text: "Project-specific feedback will be published here with a source link wherever one is available.",
  },
];

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="max-w-2xl">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-400">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
      {title}
    </h2>
    <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
      {description}
    </p>
  </div>
);

export default function CompanyShowcase() {
  return (
    <div className="bg-slate-50 text-slate-800 dark:bg-[#0B1220] dark:text-slate-100">
      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24 border-y border-slate-200 py-20 dark:border-slate-800 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects built around real needs"
              description="Explore the project collection. Live links are enabled only where a project URL is configured; the remaining entries are ready for the team to update with approved links and screenshots."
            />
            <a
              href="https://www.aparaitech.org/"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-700 dark:border-slate-700 dark:text-slate-200 dark:hover:text-sky-300"
            >
              Aparaitech website <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={`${project.title} sample project visual`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span key={tag} className="rounded-md bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-800 dark:bg-sky-400/10 dark:text-sky-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-200"
                      >
                        Open project <ExternalLink size={15} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <Clock3 size={15} /> Live link to be added
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-slate-500 dark:text-slate-400">
            Note: Gallery and project images are temporary sample visuals. Replace them with approved project screenshots before publishing. Project descriptions are introductory summaries and should be reviewed by the project owners.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Gallery"
            title="A glimpse behind the work"
            description="A visual space for team moments, events, workshops, and project milestones. These are sample images for layout preview and are not represented as actual Aparaitech event photographs."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {galleryItems.map((item) => (
              <figure key={item.title} className="group relative overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800">
                <img
                  src={item.image}
                  alt={`${item.title} sample gallery image`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent p-5 pt-14 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-200">{item.category}</span>
                  <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                </figcaption>
              </figure>
            ))}
          </div>
          <a
            href="https://www.linkedin.com/company/aparaitech_software/posts/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:underline dark:text-sky-300"
          >
            See company updates on LinkedIn <ExternalLink size={15} />
          </a>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="scroll-mt-24 border-y border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-950/40 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="People & collaboration"
            title="Meet the people behind the projects"
            description="This section is structured for approved team member profiles. Add names, roles, portraits, and profile links after the team confirms the details to publish."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {teamRoles.map(({ role, description, icon: Icon }) => (
              <article key={role} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/70 sm:p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-400/10 dark:text-sky-300">
                  <Icon size={23} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{role}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
                <p className="mt-5 border-t border-slate-200 pt-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
                  Team profiles coming soon
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Reviews & feedback"
            title="Feedback deserves to be authentic"
            description="Verified reviews will appear here once the original wording, contributor details, and permission to publish are confirmed. No client quotes or ratings have been invented for this preview."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviewPlaceholders.map((review) => (
              <article key={review.label} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/70 sm:p-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-400/10 dark:text-sky-300">
                  <MessageSquareQuote size={22} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white">{review.label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{review.text}</p>
                <span className="mt-5 inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-400/10 dark:text-amber-200">
                  Awaiting verified content
                </span>
              </article>
            ))}
          </div>
          <a
            href="https://www.linkedin.com/company/aparaitech_software/posts/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:underline dark:text-sky-300"
          >
            Visit Aparaitech on LinkedIn <ExternalLink size={15} />
          </a>
        </div>
      </section>
    </div>
  );
}
