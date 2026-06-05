import { motion } from "framer-motion";
import { Eye, Target, Star, Sparkles } from "lucide-react";

/* ── Core Values ── */
const values = [
  { label: "Academic Excellence", color: "#FF6F00" },
  { label: "Discipline & Integrity", color: "#1A237E" },
  { label: "Creativity & Innovation", color: "#0277BD" },
  { label: "Compassion & Respect", color: "#C62828" },
  { label: "Leadership & Service", color: "#2E7D32" },
  { label: "Lifelong Learning", color: "#6A1B9A" },
];

/* Animation helpers */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function VisionMission() {
  return (
    <section
      id="vision-mission"
      className="relative overflow-hidden bg-white"
    >


      {/* ── Dot-grid watermark ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1A237E 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14">

        {/* ── Section label ── */}
        <motion.div {...fadeUp(0)} className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0D1B6E]/8 border border-[#0D1B6E]/15 px-5 py-2 rounded-full mb-4">
            <Sparkles size={13} className="text-[#FF6F00]" />
            <span className="text-[#0D1B6E] text-[11px] font-black uppercase tracking-[0.2em]">
              Vision · Mission · Values
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#0D1B6E] text-center">
            The Compass That{" "}
            <span className="text-[#FF6F00]">Guides Us</span>
          </h2>
        </motion.div>

        {/* ── Vision + Mission cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">

          {/* VISION card */}
          <motion.div {...fadeUp(0.1)} className="group relative">
            {/* Offset glow shadow */}
            <div className="absolute inset-0 rounded-3xl translate-x-2 translate-y-2 bg-[#0D1B6E]/10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-400" />

            <div className="relative rounded-3xl overflow-hidden border border-[#0D1B6E]/10 shadow-lg bg-white">
              {/* Top accent bar — gradient */}
              <div
                className="h-1.5 w-full"
                style={{
                  background: "linear-gradient(90deg, #0D1B6E, #0277BD)",
                }}
              />

              {/* Diagonal colour panel */}
              <div className="relative flex flex-col sm:flex-row items-stretch">
                {/* Coloured left panel */}
                <div
                  className="relative sm:w-44 shrink-0 flex items-center justify-center py-8 sm:py-0"
                  style={{
                    background: "linear-gradient(160deg, #0D1B6E 0%, #0277BD 100%)",
                    clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
                  }}
                >
                  <div className="flex flex-col items-center gap-3 pr-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
                      <Eye size={28} className="text-white" strokeWidth={1.8} />
                    </div>
                    <p className="text-white font-black text-sm uppercase tracking-widest rotate-0">
                      Vision
                    </p>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <p className="text-gray-600 leading-relaxed text-[15px] font-sans">
                    To nurture{" "}
                    <strong className="text-[#0D1B6E]">confident, creative, disciplined,</strong> and{" "}
                    <strong className="text-[#0D1B6E]">responsible students</strong> through quality
                    education, leadership development, and value-based learning that prepares them for
                    future success.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MISSION card */}
          <motion.div {...fadeUp(0.2)} className="group relative">
            <div className="absolute inset-0 rounded-3xl translate-x-2 translate-y-2 bg-[#FF6F00]/10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-400" />

            <div className="relative rounded-3xl overflow-hidden border border-[#FF6F00]/15 shadow-lg bg-white">
              <div
                className="h-1.5 w-full"
                style={{
                  background: "linear-gradient(90deg, #FF6F00, #F9A825)",
                }}
              />

              <div className="relative flex flex-col sm:flex-row items-stretch">
                <div
                  className="relative sm:w-44 shrink-0 flex items-center justify-center py-8 sm:py-0"
                  style={{
                    background: "linear-gradient(160deg, #FF6F00 0%, #F9A825 100%)",
                    clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
                  }}
                >
                  <div className="flex flex-col items-center gap-3 pr-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
                      <Target size={28} className="text-white" strokeWidth={1.8} />
                    </div>
                    <p className="text-white font-black text-sm uppercase tracking-widest">
                      Mission
                    </p>
                  </div>
                </div>

                <div className="flex-1 p-8 flex flex-col justify-center">
                  <p className="text-gray-600 leading-relaxed text-[15px] font-sans">
                    To provide{" "}
                    <strong className="text-[#C62828]">student-centered education</strong> through
                    innovative teaching methods, modern infrastructure, moral values, and holistic
                    development programs that inspire{" "}
                    <strong className="text-[#C62828]">academic excellence</strong> and lifelong
                    learning.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Values row ── */}
        <motion.div {...fadeUp(0.3)}>
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Star size={16} className="text-[#FF6F00]" fill="#FF6F00" />
            <p className="text-[#0D1B6E] font-black text-sm uppercase tracking-[0.18em]">
              Core Educational Values
            </p>
            <Star size={16} className="text-[#FF6F00]" fill="#FF6F00" />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {values.map((v, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.35 + i * 0.07 }}
                whileHover={{ y: -4, scale: 1.06 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-[13px] font-bold shadow-md cursor-default select-none"
                style={{ background: `linear-gradient(135deg, ${v.color}, ${v.color}cc)` }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                {v.label}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>

      {/* ── Bottom diagonal connector ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 50"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-10"
        >
          <path d="M0,0 C480,50 960,0 1440,40 L1440,50 L0,50 Z" fill="#FFF8F0" />
        </svg>
      </div>
    </section>
  );
}
