// Webinar Data Source
export const upcomingWebinarData = {
  id: 1,
  title: "The Future of Generative AI in Enterprise",
  description: "Join our expert panel as we discuss how Large Language Models are reshaping business operations and decision-making.",
  date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  time: "4:25 PM",
  duration: "60 minutes",
  speaker: "Dr. Sarah Miller",
  role: "AI Research Lead at TechCorp",
  image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80",
  category: "AI & Machine Learning",
  meetingLink: "#", // Configurable meeting link
  startTimeISO: new Date().toISOString().split("T")[0] + "T16:25:00+05:30" // ISO time for logic
};

export const pastWebinarsData = [
  {
    id: 2,
    title: "Cloud Migration Strategies",
    speaker: "Sarah Johnson, Cloud Architect",
    date: "Sep 15, 2023",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    category: "Cloud Computing",
    views: "2.4K"
  },
  {
    id: 3,
    title: "Securing Your API Infrastructure",
    speaker: "David Chen, Security Lead",
    date: "Aug 28, 2023",
    duration: "50 min",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    category: "Cybersecurity",
    views: "1.8K"
  },
  {
    id: 4,
    title: "Building Scalable Microservices",
    speaker: "Alex Rivera, DevOps Engineer",
    date: "Aug 10, 2023",
    duration: "55 min",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    category: "DevOps",
    views: "3.2K"
  }
];