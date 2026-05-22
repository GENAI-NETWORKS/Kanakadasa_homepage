import { motion } from "framer-motion";
import {
  Mic, Users, Palette, Brain, HeartHandshake, BookHeart, ShieldCheck, Lightbulb
} from "lucide-react";
import img1 from "../assets/7.jpeg";   // classical dance
import img2 from "../assets/31.jpeg";  // cultural night performance
import img3 from "../assets/41.jpeg";
import img4 from "../assets/22.jpeg";

const programs = [
  {
    icon: Brain,
    title: "Child Interest in Creativity (CIIC)",
    points: ["Identifying unique talents", "Creative activities", "Self-expression exercises"],
    color: "#9B51E0",
  },
  {
    icon: Users,
    title: "Leadership Development",
    points: ["House captain system", "Student councils", "Decision-making skills"],
    color: "#E63946",
  },
  {
    icon: Mic,
    title: "Public Speaking & Communication",
    points: ["Elocution & debate", "Spoken English", "Stage confidence"],
    color: "#2D9CDB",
  },
  {
    icon: Palette,
    title: "Art, Music & Cultural Programs",
    points: ["Classical dance & drama", "Art and craft", "Keyboard & music"],
    color: "#F4A261",
  },
  {
    icon: HeartHandshake,
    title: "Value-Based Education",
    points: ["Moral science classes", "Prayer sessions", "Building integrity"],
    color: "#27AE60",
  },
  {
    icon: Lightbulb,
    title: "Independent Thinking & Innovation",
    points: ["Science clubs", "Math olympiads", "Project-based challenges"],
    color: "#E63946",
  },
  {
    icon: ShieldCheck,
    title: "Spiritual & Moral Discipline",
    points: ["Daily prayer", "Meditation practices", "Spiritual guidance"],
    color: "#1A472A",
  },
  {
    icon: BookHeart,
    title: "Personality Development",
    points: ["Grooming programs", "Etiquette training", "Self-confidence workshops"],
    color: "#F4A261",
  },
];

export default function StudentDevelopment() {
  return (
    <section id="development" className="relative py-24 overflow-hidden bg-white">

      {/* ── Dot pattern background ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, #1A472A18 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Two-column header: text left + images right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Student Growth</span>
            <h2 className="section-heading mb-5">
              Student Development <br />
              <span className="text-[#E63946]">Programs</span>
            </h2>
            <p className="text-textmuted leading-relaxed text-sm sm:text-base font-sans max-w-lg">
              Beyond academics, St. Kanakadasa nurtures the whole child through structured development programs that build creativity, leadership, values, and communication skills - preparing students for life's every challenge.
            </p>
            <div className="mt-6 flex gap-2">
              <div className="h-1 w-12 rounded-full bg-[#E63946]" />
              <div className="h-1 w-4 rounded-full bg-[#F4A261]" />
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg h-36">
                <img src={img1} alt="Cultural dance" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                <img src={img3} alt="Student learning" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                <img src={img2} alt="Cultural performance" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-36">
                <img src={img4} alt="Student creativity" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Editorial Magazine Pattern (No Cards) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-16 pb-10">
          {programs.map((prog, i) => {
            const Icon = prog.icon;
            const num = String(i + 1).padStart(2, '0');
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative group cursor-default"
              >
                {/* Huge Watermark Number */}
                <div 
                  className="absolute -top-12 -left-6 text-[7rem] font-heading font-black opacity-[0.04] pointer-events-none transition-all duration-500 group-hover:opacity-[0.08] group-hover:-translate-y-2 select-none" 
                  style={{ color: prog.color }}
                >
                  {num}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div 
                      className="w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" 
                      style={{ borderColor: prog.color + "40", color: prog.color, backgroundColor: "white" }}
                    >
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <h3 className="font-heading font-bold text-[17px] leading-tight text-[#1A472A] group-hover:text-black transition-colors duration-300">
                      {prog.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {prog.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div 
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-transform duration-300 group-hover:scale-150" 
                          style={{ background: prog.color }} 
                        />
                        <span className="text-sm text-gray-500 font-sans leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
