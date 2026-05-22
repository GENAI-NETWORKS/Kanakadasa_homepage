import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import groupImg from "../assets/26.jpeg";

const leaders = [
  {
    name: "Mr. Samudi Elampuranam",
    qual: "M.A., M.Phil",
    role: "Chairperson",
    icon: Award,
    color: "#E63946",
    message:
      "A visionary educational leader dedicated to shaping young minds through quality education, discipline, and moral values. Under his leadership, the institution nurtures students with confidence, creativity, and social responsibility.",
  },
  {
    name: "Mrs. Vasanthi Elampuranam",
    qual: "M.A., M.Phil",
    role: "Co-Founder",
    icon: Briefcase,
    color: "#F4A261",
    message:
      "Instrumental in strengthening value-based education and student welfare. She strongly believes education should nurture discipline, ethics, confidence, and humanity - developing both intellectual and moral capabilities.",
  },
  {
    name: "Mrs. Elakkiya Elampuranam",
    qual: "B.Tech, MBA (IIT Madras)",
    role: "Director",
    icon: GraduationCap,
    color: "#1A472A",
    message:
      "Brings modern educational vision and progressive leadership, integrating technology and smart learning methodologies. Her commitment towards academic excellence and student empowerment continuously strengthens the institution.",
  },
];

export default function VisionaryLeadership() {
  return (
    <section id="leadership" className="relative py-24 overflow-hidden bg-white">

      {/* ── Background decoration ── */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1A472A]/5 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E63946] via-[#F4A261] to-[#1A472A]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* ═══════════════════════════════
              LEFT — Featured Image
          ═══════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            {/* Header for mobile (shows above image on small screens) */}
            <div className="lg:hidden text-center mb-8">
              <span className="section-label text-center block">Visionary Leadership</span>
              <h2 className="section-heading text-center">
                The People Behind Our <span className="text-[#E63946]">Mission</span>
              </h2>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white border border-gray-100 mt-2 lg:mt-0">
              <img src={groupImg} alt="Leadership Team" className="w-full h-auto object-cover aspect-[4/5] lg:aspect-auto lg:h-[600px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A472A]/90 via-[#1A472A]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-12 h-1 bg-[#F4A261] mb-4" />
                <p className="text-white font-heading font-medium text-lg md:text-xl leading-relaxed">
                  "Guiding the next generation with unwavering dedication, discipline, and a forward-thinking vision."
                </p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#E63946]/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          {/* ═══════════════════════════════
              RIGHT — Header + Leader Cards
          ═══════════════════════════════ */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Header for desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block mb-10"
            >
              <span className="section-label">Visionary Leadership</span>
              <h2 className="section-heading">
                The People Behind Our <br />
                <span className="text-[#E63946]">Mission</span>
              </h2>
              <div className="flex items-center gap-2 mt-5">
                <div className="h-1 w-10 rounded-full bg-[#E63946]" />
                <div className="h-1 w-4 rounded-full bg-[#F4A261]" />
                <div className="h-1 w-2 rounded-full bg-[#1A472A]" />
              </div>
            </motion.div>

            {/* Cards Stack */}
            <div className="flex flex-col gap-5">
              {leaders.map((leader, i) => {
                const Icon = leader.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="relative bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex items-stretch group cursor-default"
                  >
                    {/* Left accent bar */}
                    <div className="w-2 shrink-0 transition-colors duration-300" style={{ background: leader.color }} />

                    <div className="p-5 flex flex-col sm:flex-row gap-5 items-start w-full">
                      
                      {/* Icon */}
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{ background: leader.color + "18" }}
                      >
                        <Icon size={26} strokeWidth={1.5} style={{ color: leader.color }} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <div>
                            <h3 className="font-heading font-bold text-[#1A472A] text-lg leading-tight mb-0.5">
                              {leader.name}
                            </h3>
                            <p className="text-xs text-gray-400 font-sans font-medium">{leader.qual}</p>
                          </div>
                          <span
                            className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full font-sans shrink-0 w-fit"
                            style={{ background: leader.color + "18", color: leader.color }}
                          >
                            {leader.role}
                          </span>
                        </div>
                        
                        <div className="h-px w-full my-3" style={{ background: "linear-gradient(to right, #f3f4f6, transparent)" }} />

                        <p className="text-sm text-gray-500 leading-relaxed font-sans">
                          {leader.message}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
