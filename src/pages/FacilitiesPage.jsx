import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import FacilitiesShowcase from '../components/FacilitiesShowcase';
import pageBg from '../assets/12.jpeg';
import { 
  Bus, Users, BookOpen, FlaskConical, MonitorPlay, 
  Sparkles, Leaf, Calculator, Gamepad2, Music, ShieldCheck, 
  Brain, Building2
} from 'lucide-react';

const detailedAmenities = [
  {
    icon: Leaf,
    title: "Spacious Green Campus",
    description: "ST. Kanakadasa Educational Institutions provides a peaceful and eco-friendly campus surrounded by a lush green environment that creates a positive and refreshing atmosphere for learning. The spacious campus supports both academic and extracurricular activities while ensuring comfort and safety for students.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    icon: MonitorPlay,
    title: "Digital Classrooms",
    description: "Smart Interactive boards has been implemented for each classroom. Each student gets hands-on approach by learning through smart board.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: FlaskConical,
    title: "Laboratories",
    description: "Our labs are equipped with enough apparatus for physics, chemistry, computer and biology. The students would get first hand knowledge through practical sessions.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: MonitorPlay,
    title: "Computer Science Lab",
    description: "The Computer Science Lab is equipped with modern computer systems, internet connectivity, and updated software to help students develop technical knowledge, programming skills, and digital literacy in a technology-driven learning environment.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10"
  },
  {
    icon: Calculator,
    title: "Mathematics Lab",
    description: "The Mathematics Lab helps students understand mathematical concepts through practical activities, visual learning methods, models, charts, and interactive problem-solving techniques that make learning more engaging and effective.",
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  },
  {
    icon: BookOpen,
    title: "Library",
    description: "The school provides both digital and printed copies of various interesting books. There are encyclopedias, picture books, dictionaries and activity books for students at each level.",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    icon: Gamepad2,
    title: "Sports Infrastructure",
    description: "The institution offers excellent sports facilities that support physical fitness, teamwork, discipline, and sportsmanship. Students are encouraged to participate in various indoor and outdoor games including volleyball, basketball, cricket, badminton, chess, carrom, yoga, and martial arts.",
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    icon: Music,
    title: "Music & Dance Room",
    description: "Dedicated Music and Dance rooms provide students with opportunities to develop their artistic talents and creative expression. Training is provided in music, keyboard, dance forms, cultural performances, and stage activities.",
    color: "text-pink-500",
    bg: "bg-pink-500/10"
  },
  {
    icon: Bus,
    title: "Transport",
    description: "The School provides umpteen buses to commute everyday. Strong transportation has been built around the villages of Barugur.",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10"
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Campus",
    description: "Student safety and well-being are given top priority within the campus. The institution maintains a disciplined and secure environment supported by safety protocols, responsible supervision, and student-friendly campus management practices.",
    color: "text-teal-500",
    bg: "bg-teal-500/10"
  },
  {
    icon: Building2,
    title: "Excellent Learning Atmosphere",
    description: "The institution creates a positive and motivating academic atmosphere supported by experienced faculty members, disciplined learning practices, interactive classrooms, and student-centered educational approaches that inspire academic excellence.",
    color: "text-fuchsia-500",
    bg: "bg-fuchsia-500/10"
  },
  {
    icon: Sparkles,
    title: "Modern Teaching Facilities",
    description: "Modern teaching facilities including smart boards, digital learning tools, laboratories, presentations, and technology-integrated classrooms help deliver effective, innovative, and engaging educational experiences for students across all levels.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10"
  }
];

export default function FacilitiesPage() {
  return (
    <>
      <Helmet>
        <title>Facilities & Infrastructure | St. Kanakadasa Educational Institutions</title>
        <meta name="description" content="Explore the comprehensive infrastructure at St. Kanakadasa including a green campus, smart classrooms, science labs, and sports facilities." />
      </Helmet>

      <PageHero 
        title="Facilities & Infrastructure" 
        description="A comprehensive and secure environment designed to facilitate holistic learning and personal growth."
        imagePlaceholder={pageBg}
      />

      <FacilitiesShowcase />

      {/* Detailed Amenities Grid */}
      <section className="py-20 bg-lightbg border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label text-center mb-2">OUR INFRASTRUCTURE</span>
            <h2 className="section-heading text-center">Detailed Campus Amenities</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedAmenities.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${item.bg}`}>
                  <item.icon size={28} className={item.color} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">{item.title}</h3>
                <p className="text-textmuted text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
