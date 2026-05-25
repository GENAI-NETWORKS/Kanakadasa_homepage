import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ChevronDown, ChevronLeft, ChevronRight,
  Trophy, BookOpen, GraduationCap, Sparkles, Users,
} from "lucide-react";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/4.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/18.jpeg";
import img5 from "../assets/23.jpeg";

const slides = [
  {
    img: img1,
    TagIcon: Trophy,
    tag: "20+ Years of Excellence",
    title: "Shaping Tomorrow's",
    highlight: "Leaders Today",
    sub: "From Pre-KG to Class XII · CBSE & Matric Boards",
    accent: "#FF6F00",
  },
  {
    img: img2,
    TagIcon: BookOpen,
    tag: "Dual Board Affiliation",
    title: "CBSE & Matric",
    highlight: "Your Choice",
    sub: "World-class education rooted in Indian values",
    accent: "#F9A825",
  },
  {
    img: img3,
    TagIcon: GraduationCap,
    tag: "Competitive Edge",
    title: "NEET / JEE",
    highlight: "Integrated Coaching",
    sub: "Preparing future doctors and engineers",
    accent: "#FF6F00",
  },
  {
    img: img4,
    TagIcon: Sparkles,
    tag: "Holistic Development",
    title: "Academics · Arts",
    highlight: "Sports & Values",
    sub: "Every child's talent nurtured with care",
    accent: "#F9A825",
  },
  {
    img: img5,
    TagIcon: Users,
    tag: "Student Leadership",
    title: "Confident &",
    highlight: "Future-Ready",
    sub: "Character building from day one",
    accent: "#FF6F00",
  },
];

/* Ticker + Navbar together = 36 + ~80 = 116px — hero must clear that */
const HEADER_OFFSET = 116;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const go  = (i) => { setDir(i > current ? 1 : -1); setCurrent(i); };
  const prev = () => { setDir(-1); setCurrent((c) => (c - 1 + slides.length) % slides.length); };
  const next = () => { setDir(1);  setCurrent((c) => (c + 1) % slides.length); };

  const slide = slides[current];

  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative w-full flex flex-col overflow-hidden bg-[#0D1B6E]"
      style={{ minHeight: "100dvh" }}
    >
      {/* ── Carousel area ── */}
      <div className="relative flex-1 flex items-center" style={{ paddingTop: HEADER_OFFSET }}>

        {/* Slide images */}
        <AnimatePresence mode="popLayout" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            variants={{
              enter:  (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit:   (d) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover ken-burns"
            />
            {/* Strong left-to-transparent overlay so text is always readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B6E]/95 via-[#0D1B6E]/75 to-[#0D1B6E]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B6E]/70 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Decorative glow blob */}
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none transition-colors duration-1000"
          style={{ background: slide.accent }}
        />

        {/* ── Text content ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">

            {/* Tag pill — always saffron background so icon + text always visible */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`tag-${current}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="mb-6"
              >
                <span
                  className="inline-flex items-center gap-2 text-white font-bold text-xs px-5 py-2 rounded-full uppercase tracking-widest"
                  style={{ background: "#FF6F00" }}
                >
                  <slide.TagIcon size={13} strokeWidth={2.5} />
                  {slide.tag}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Heading — white base, accent highlight always warm (saffron/gold) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`title-${current}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h1 className="font-heading leading-tight mb-4">
                  <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light drop-shadow-lg">
                    {slide.title}
                  </span>
                  {/* Highlight: always saffron/gold so it shows over dark bg */}
                  <span
                    className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black drop-shadow-lg"
                    style={{ color: slide.accent }}
                  >
                    {slide.highlight}
                  </span>
                </h1>
                <p className="text-white/80 text-lg font-sans mt-4 mb-8 drop-shadow">
                  {slide.sub}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Single CTA — "Explore School" only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection("about")}
                className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl shadow-2xl hover:-translate-y-1 transition-all duration-300 text-base"
                style={{ background: "linear-gradient(135deg, #FF6F00, #F9A825)" }}
              >
                Explore School
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("admission")}
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-base backdrop-blur-sm"
              >
                Admissions
                <ChevronDown size={18} />
              </button>
            </motion.div>

          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? "2rem" : "0.5rem",
                height: "0.5rem",
                background: i === current ? "#FF6F00" : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
