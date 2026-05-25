import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, User } from "lucide-react";

/* ─── Leader data ─── */
const leaders = [
  {
    name: "Mr. Samudi Elampuranam",
    initials: "SE",
    qual: "M.A., M.Phil",
    role: "Chairperson",
    Icon: Award,
    color: "#0277BD", // Blue
    gradient: "linear-gradient(135deg, #1A237E, #0277BD)",
    quote: "Quality education, discipline & moral values — the pillars that shape every student's future.",
    // To use real photos, replace null with: import("../assets/YOUR_PHOTO.jpeg")
    img: null,
  },
  {
    name: "Mrs. Vasanthi Elampuranam",
    initials: "VE",
    qual: "M.A., M.Phil",
    role: "Co-Founder",
    Icon: Briefcase,
    color: "#FF6F00", // Saffron
    gradient: "linear-gradient(135deg, #C62828, #FF6F00)",
    quote: "Nurturing discipline, ethics & confidence — building both intellect and character in every child.",
    img: null,
  },
  {
    name: "Mrs. Elakkiya Elampuranam",
    initials: "EE",
    qual: "B.Tech, MBA (IIT Madras)",
    role: "Director",
    Icon: GraduationCap,
    color: "#00695C", // Emerald
    gradient: "linear-gradient(135deg, #1B5E20, #00695C)",
    quote: "Technology + modern pedagogy = empowered students ready to lead tomorrow's world.",
    img: null,
  },
];

export default function VisionaryLeadership() {
  return (
    <section id="leadership" className="relative py-24 overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1A237E]/5 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #1A237E, #FF6F00, #1B5E20)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label block text-center">Visionary Leadership</span>
          <h2 className="section-heading text-center">
            The People Behind Our <span className="text-[#FF6F00] animated-underline">Mission</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-sans leading-relaxed">
            Guiding the next generation with unwavering dedication, discipline, and a forward-thinking vision to shape tomorrow's leaders.
          </p>
        </motion.div>

        {/* ── 3-Card Layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {leaders.map((leader, i) => {
            const Icon = leader.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 cursor-default flex flex-col h-[450px]"
                style={{
                  boxShadow: `0 20px 40px -15px ${leader.color}30, 0 0 0 1px rgba(0,0,0,0.05)`,
                }}
              >
                {/* Large Portrait Image / Placeholder */}
                <div 
                  className="relative w-full h-3/5 overflow-hidden flex items-center justify-center font-black text-white text-6xl font-heading"
                  style={{ background: leader.img ? "white" : leader.gradient }}
                >
                  {leader.img ? (
                    <img src={leader.img} alt={leader.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <User size={120} strokeWidth={1} className="text-white/80" />
                  )}
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  
                  {/* Icon badge floating at the bottom right of the image */}
                  <div 
                    className="absolute -bottom-5 right-6 w-12 h-12 rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg z-20 group-hover:rotate-12 transition-transform duration-300"
                    style={{ background: leader.color }}
                  >
                    <Icon size={20} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-1 bg-white relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black font-heading mb-1 transition-colors duration-300"
                      style={{ color: leader.color }}>
                    {leader.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: leader.color }}>
                    {leader.role}
                  </p>
                  <p className="text-sm text-gray-500 font-sans font-medium">
                    {leader.qual}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
