import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, GraduationCap, BookOpen, Award, Users } from "lucide-react";
import heroBg from "../assets/1.jpeg";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/4.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/7.jpeg";

const stats = [
  { val: "20+",     label: "Years of Excellence", icon: Award },
  { val: "Pre-KG",  label: "to Class XII",        icon: BookOpen },
  { val: "CBSE",    label: "& Matric Boards",     icon: GraduationCap },
  { val: "NEET",    label: "/ JEE Coaching",      icon: Users },
];

export default function Hero() {
  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  const scrollToAdmission = () =>
    document.getElementById("admission")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] flex items-center overflow-hidden bg-[#0D2818]"
    >
      {/* ── Background photo ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* ── Dark green overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D2818] via-[#0D2818]/90 to-transparent" />

      {/* ── Green glow blob bottom-left ── */}
      <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-[#2D6A4F]/40 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-[20rem] h-[20rem] rounded-full bg-[#E63946]/10 blur-3xl pointer-events-none" />

      {/* ── Main layout: left text | right images ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-0 md:min-h-[100dvh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

          {/* ════════════════════════════════
              LEFT — Text Content
          ════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >

            {/* Heading */}
            <h1 className="font-heading text-white leading-[1.15] mb-6">
              <span className="block text-3xl sm:text-4xl md:text-5xl font-light mb-1 opacity-80">
                Welcome to
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl font-bold text-[#F4A261]">
                St. Kanakadasa
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-normal text-white/90 mt-1">
                Educational Institutions
              </span>
            </h1>



            {/* Tagline */}
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 font-sans max-w-lg">
              Holistic Learning · Future-Ready Education · Rooted in Values
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.val}
                    className="flex flex-col items-start gap-1 border-l-2 border-[#F4A261]/40 pl-3"
                  >
                    <Icon size={16} className="text-[#F4A261] mb-0.5" strokeWidth={1.8} />
                    <p className="text-xl sm:text-2xl font-bold text-[#F4A261] font-heading leading-none">
                      {s.val}
                    </p>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest leading-tight font-sans">
                      {s.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons (Desktop) */}
            <div className="hidden lg:flex flex-row gap-4 mt-2">
              <button
                onClick={scrollToAdmission}
                className="group inline-flex items-center justify-center gap-2 bg-[#E63946] hover:bg-[#c0272f] text-white font-bold px-7 py-3.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-sans text-sm sm:text-base"
              >
                Admissions Open
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToAbout}
                className="group inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-lg transition-all duration-300 font-sans text-sm sm:text-base"
              >
                Learn More
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* ════════════════════════════════
              RIGHT — Image Mosaic with Pattern
          ════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center w-full"
          >
            {/* Outer decorative ring */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-[#F4A261]/20 pointer-events-none" />

            {/* ── Unique staggered image grid ── */}
            <div className="relative w-full max-w-xl mx-auto">

              {/* Large top-left image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute top-0 left-0 w-[55%] aspect-[4/3] rounded-2xl overflow-hidden ring-4 ring-[#F4A261]/30 shadow-2xl z-10"
              >
                <img src={img1} alt="School assembly" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D2818]/30" />
              </motion.div>

              {/* Top-right smaller image — offset down */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="absolute top-[8%] right-0 w-[42%] aspect-square rounded-2xl overflow-hidden ring-4 ring-[#E63946]/30 shadow-2xl z-20"
              >
                <img src={img2} alt="Students saluting" className="w-full h-full object-cover" />
              </motion.div>

              {/* Bottom-left — offset up */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="absolute bottom-0 left-[8%] w-[42%] aspect-square rounded-2xl overflow-hidden ring-4 ring-[#2D6A4F]/50 shadow-2xl z-20"
              >
                <img src={img3} alt="School campus" className="w-full h-full object-cover" />
              </motion.div>

              {/* Bottom-right large image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.85 }}
                className="absolute bottom-0 right-0 w-[50%] aspect-[4/3] rounded-2xl overflow-hidden ring-4 ring-[#F4A261]/20 shadow-2xl z-10"
              >
                <img src={img4} alt="Cultural performance" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2818]/40 to-transparent" />
              </motion.div>

              {/* Spacer to hold container height */}
              <div className="relative" style={{ paddingTop: "80%" }} />

              {/* Floating badge — centre overlap */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1, type: "spring" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
              >
                <div className="bg-[#1A472A] border-2 border-[#F4A261] text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-xl">
                  <p className="text-lg font-bold text-[#F4A261] font-heading leading-none">20+</p>
                  <p className="text-[9px] uppercase tracking-widest text-white/80 text-center leading-tight font-sans">
                    Yrs of<br />Excellence
                  </p>
                </div>
              </motion.div>

              {/* Decorative dot grid behind images */}
              <div
                className="absolute -bottom-6 -right-6 w-28 h-28 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #F4A261 1.5px, transparent 1.5px)",
                  backgroundSize: "10px 10px",
                }}
              />
              <div
                className="absolute -top-6 -left-6 w-24 h-24 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #E63946 1.5px, transparent 1.5px)",
                  backgroundSize: "10px 10px",
                }}
              />
            </div>

            {/* CTA Buttons (Mobile) */}
            <div className="flex lg:hidden flex-col sm:flex-row gap-4 w-full mt-12 px-2 items-start">
              <button
                onClick={(e) => e.preventDefault()}
                className="group inline-flex items-center justify-center gap-2 bg-[#E63946] hover:bg-[#c0272f] text-white font-bold px-7 py-3.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-sans text-sm sm:text-base w-fit"
              >
                Admissions Open
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={(e) => e.preventDefault()}
                className="group inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-lg transition-all duration-300 font-sans text-sm sm:text-base w-fit"
              >
                Learn More
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Bottom wave ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#FFF8F0" />
        </svg>
      </div>
    </section>
  );
}
