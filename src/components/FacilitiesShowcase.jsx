import { motion } from "framer-motion";
import {
  Library, MonitorPlay, FlaskConical, TestTube, Dna, Calculator,
  Computer, Music2, Stethoscope, Trophy, Bus, Presentation,
} from "lucide-react";

const facilities = [
  { icon: Library, name: "Digital Library", desc: "Extensive collection of books, e-journals, and digital resources for every grade.", color: "#E63946" },
  { icon: MonitorPlay, name: "Smart Classes", desc: "Interactive smart boards for immersive, engaging, and visual learning.", color: "#F4A261" },
  { icon: FlaskConical, name: "Physics Lab", desc: "Modern apparatus and equipment for practical experiments and research.", color: "#2D9CDB" },
  { icon: TestTube, name: "Chemistry Lab", desc: "Safe, well-ventilated analytical and reaction setups for students.", color: "#27AE60" },
  { icon: Dna, name: "Biology Lab", desc: "Microscopes, specimens, and biological models for in-depth study.", color: "#9B51E0" },
  { icon: Calculator, name: "Maths Lab", desc: "Visual tools and kits for concept-based problem solving and logic.", color: "#E63946" },
  { icon: Computer, name: "Computer Lab", desc: "High-speed internet, latest software, and individual workstations.", color: "#2D9CDB" },
  { icon: Music2, name: "Dance & Music", desc: "Dedicated studio for performing arts, instruments, and cultural expression.", color: "#F4A261" },
  { icon: Stethoscope, name: "Medical Room", desc: "First-aid facility and regular student health check-ups by professionals.", color: "#27AE60" },
  { icon: Trophy, name: "Sports Arenas", desc: "Indoor and outdoor sports facilities for holistic physical development.", color: "#9B51E0" },
  { icon: Bus, name: "Transportation", desc: "Safe and reliable transport fleet across Bargur and surrounding villages.", color: "#E63946" },
  { icon: Presentation, name: "Tech Classrooms", desc: "Tech-enabled teaching with multimedia and modern online resources.", color: "#F4A261" },
];

export default function FacilitiesShowcase() {
  return (
    <section id="facility" className="relative py-24 overflow-hidden bg-white">

      {/* ── Background Pattern ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #E6394615 2px, transparent 2px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#F4A261]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-[#2D9CDB]/5 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#1A472A]/5 text-[#1A472A] text-xs font-bold uppercase tracking-widest mb-4 font-sans border border-[#1A472A]/10">
            Our Infrastructure
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A472A] leading-tight">
            Facilities Built for <span className="text-[#E63946]">Excellence</span>
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base font-sans">
            Providing a world-class environment where students can explore, experiment, and excel in every academic and co-curricular pursuit.
          </p>
        </motion.div>

        {/* ── Directory Layout (No Cards) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16 mt-8">
          {facilities.map((fac, i) => {
            const Icon = fac.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-5 py-8 border-b border-gray-200 hover:border-gray-400 transition-all duration-300 group cursor-default"
              >
                {/* Minimalist Icon */}
                <div className="shrink-0 mt-0.5 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon size={30} strokeWidth={1.2} style={{ color: fac.color }} className="opacity-80 group-hover:opacity-100" />
                </div>

                <div>
                  <h3 className="font-heading font-bold text-[#1A472A] text-[17px] mb-2 group-hover:text-black transition-colors duration-300">
                    {fac.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans group-hover:text-gray-700 transition-colors duration-300">
                    {fac.desc}
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
