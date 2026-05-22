import { motion } from "framer-motion";
import { CheckCircle2, Star, Flame, Gem } from "lucide-react";

// Asset images — diverse school moments
import imgAssembly   from "../assets/1.jpeg";   // grand assembly / school building
import imgCultural   from "../assets/7.jpeg";   // classical dance performance
import imgAward      from "../assets/10.jpeg";  // teacher-student award moment
import imgCaptains   from "../assets/23.jpeg";  // house captains pride

const pillars = [
  {
    img: imgAssembly,
    title: "Discipline & Values",
    desc: "Daily prayer, morning assembly, and a strong code of conduct instil lifelong values in every student.",
    accent: "#E63946",   // crimson
  },
  {
    img: imgCultural,
    title: "Cultural Excellence",
    desc: "Classical dance, drama, and fine arts keep Indian heritage alive while nurturing creativity and stage confidence.",
    accent: "#F4A261",   // amber / saffron
  },
  {
    img: imgAward,
    title: "Academic Recognition",
    desc: "Regular felicitation of achievers motivates students to excel in academics, sports, and co-curricular arenas.",
    accent: "#1A472A",   // forest green
  },
  {
    img: imgCaptains,
    title: "Student Leadership",
    desc: "House captain system and student councils build responsibility, teamwork, and leadership from an early age.",
    accent: "#E63946",   // crimson
  },
];

const reasons = [
  "20+ Years of Educational Excellence",
  "Experienced & Dedicated Faculty Team",
  "Smart Digital Classrooms",
  "Student-Centric Learning Approach",
  "Integrated NEET/JEE Coaching",
  "Well-Equipped Science & Computer Labs",
  "Strong Academic Monitoring System",
  "Spoken English & Communication Skills",
  "Practical & Concept-Based Learning",
  "Individual Attention for Every Student",
  "Safe & Secure Campus Environment",
  "Value-Based & Discipline-Oriented Education",
  "Excellent Sports & Co-Curricular Activities",
  "Creative & Leadership Development Programs",
  "Transportation Facilities Across Bargur Area",
  "Holistic Development Through Clubs",
  "Modern Teaching Methodologies",
  "Parent-Friendly Academic Support System",
  "Focus on Moral, Ethical & Spiritual Values",
  "Future-Ready Academic Environment",
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#FFF8F0]">

      {/* ── Decorative background: subtle Kolam / rangoli dots ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #E6394622 1.5px, transparent 1.5px), radial-gradient(circle, #1A472A22 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px, 60px 60px",
          backgroundPosition: "0 0, 15px 15px",
        }}
      />

      {/* ── Top saffron-to-green tricolour bar ── */}
      <div className="absolute top-0 left-0 right-0 h-1.5 flex">
        <div className="flex-1 bg-[#FF9933]" />
        <div className="flex-1 bg-white border-y border-gray-200" />
        <div className="flex-1 bg-[#138808]" />
      </div>

      {/* ── Decorative corner lotuses (SVG) ── */}
      <svg className="absolute top-6 left-4 w-20 h-20 opacity-10 text-[#FF9933]" viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="50" cy="70" rx="10" ry="30" transform="rotate(-20 50 50)" />
        <ellipse cx="50" cy="70" rx="10" ry="30" />
        <ellipse cx="50" cy="70" rx="10" ry="30" transform="rotate(20 50 50)" />
        <ellipse cx="50" cy="70" rx="10" ry="30" transform="rotate(40 50 50)" />
        <ellipse cx="50" cy="70" rx="10" ry="30" transform="rotate(-40 50 50)" />
        <circle cx="50" cy="55" r="8" />
      </svg>
      <svg className="absolute top-6 right-4 w-20 h-20 opacity-10 text-[#138808]" viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="50" cy="70" rx="10" ry="30" transform="rotate(-20 50 50)" />
        <ellipse cx="50" cy="70" rx="10" ry="30" />
        <ellipse cx="50" cy="70" rx="10" ry="30" transform="rotate(20 50 50)" />
        <ellipse cx="50" cy="70" rx="10" ry="30" transform="rotate(40 50 50)" />
        <ellipse cx="50" cy="70" rx="10" ry="30" transform="rotate(-40 50 50)" />
        <circle cx="50" cy="55" r="8" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#FF9933]" />
            <Flame size={22} className="text-[#FF9933]" strokeWidth={1.5} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#FF9933]" />
          </div>

          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#FF9933] bg-[#FF9933]/10 px-4 py-1 rounded-full mb-3">
            Our Strengths
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A472A] mb-4">
            Why Choose{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#E63946]">St. Kanakadasa?</span>
              <span
                className="absolute -bottom-1 left-0 right-0 h-1 rounded-full"
                style={{ background: "linear-gradient(90deg,#FF9933,#138808)" }}
              />
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#4a5568] leading-relaxed text-base sm:text-lg">
            A legacy of values, discipline, and excellence - rooted in the spirit of Sri Kanakadasa and dedicated to shaping India's future leaders.
          </p>
        </motion.div>

        {/* ── Four Pillar Cards with Assets ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-400 border border-white/60"
            >
              {/* Photo */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${p.accent}ee 0%, ${p.accent}44 50%, transparent 100%)`,
                  }}
                />
                {/* Number badge */}
                <div
                  className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md"
                  style={{ background: p.accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Text body */}
              <div className="bg-white px-5 py-4 border-t-4" style={{ borderColor: p.accent }}>
                <h3 className="font-heading font-bold text-[#1A472A] text-lg mb-1">{p.title}</h3>
                <p className="text-sm text-[#4a5568] leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Reasons Grid — inside a decorated card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-xl"
        >
          {/* Card background — saffron-to-green diagonal */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #fff8f0 0%, #fffde7 40%, #e8f5e9 100%)",
            }}
          />
          {/* Decorative border top */}
          <div className="absolute top-0 left-0 right-0 h-1.5 flex">
            <div className="flex-1 bg-[#FF9933]" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-[#138808]" />
          </div>

          <div className="relative z-10 px-8 py-10 lg:px-14 lg:py-12">
            {/* Inner heading */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <Star className="text-[#FF9933] fill-[#FF9933]/40" size={22} />
              <h3 className="font-heading text-2xl font-bold text-[#1A472A] text-center">
                Why Parents & Students Choose Us
              </h3>
              <Star className="text-[#FF9933] fill-[#FF9933]/40" size={22} />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-y-3 gap-x-10 max-w-4xl mx-auto">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.025 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2
                    className="shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                    size={19}
                    style={{ color: idx % 2 === 0 ? "#138808" : "#E63946" }}
                  />
                  <span className="text-[#2d3748] font-medium text-sm sm:text-base leading-relaxed group-hover:text-[#1A472A] transition-colors">
                    {reason}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom decorative divider */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-[#FF9933]/50" />
              <Gem size={18} className="text-[#FF9933]/80" strokeWidth={1.5} />
              <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-[#138808]/50" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* ── Bottom saffron-green bar ── */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 flex">
        <div className="flex-1 bg-[#FF9933]" />
        <div className="flex-1 bg-white border-y border-gray-200" />
        <div className="flex-1 bg-[#138808]" />
      </div>
    </section>
  );
}
