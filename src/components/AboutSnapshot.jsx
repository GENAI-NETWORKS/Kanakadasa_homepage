import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "../assets/WhatsApp Image 2026-05-26 at 7.25.42 AM (1).jpeg";
import img2 from "../assets/WhatsApp Image 2026-05-26 at 7.25.43 AM (1).jpeg";
import img3 from "../assets/26.jpeg";
import img4 from "../assets/WhatsApp Image 2026-05-26 at 7.25.43 AM (1).jpeg";
import img5 from "../assets/14.jpeg";

function Counter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const step = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * end));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(end);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { end: 20, suffix: "+", label: "Years of Legacy" },
  { end: 2000, suffix: "+", label: "Students Nurtured" },
  { end: 100, suffix: "%", label: "Board Results" },
  { end: 4, suffix: "+", label: "Campuses" },
];

export default function AboutSnapshot() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-0">

      {/* ── TOP coloured bar ── */}
      <div className="h-1.5 flex">
        <div className="flex-1" style={{ background: "#1A237E" }} />
        <div className="flex-1" style={{ background: "#FF6F00" }} />
        <div className="flex-1" style={{ background: "#C62828" }} />
        <div className="flex-1" style={{ background: "#F9A825" }} />
        <div className="flex-1" style={{ background: "#1B5E20" }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

        {/* ── LEFT: Colourful image collage ── */}
        <div className="relative overflow-hidden bg-[#1A237E] min-h-[420px] lg:min-h-0">

          {/* diagonal clip for desktop */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{ clipPath: "polygon(0 0, 92% 0, 100% 100%, 0 100%)" }}
          >
            <div className="grid grid-cols-2 h-full">
              <div className="relative overflow-hidden">
                <img src={img1} alt="Campus" className="w-full h-full object-cover ken-burns" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,35,126,0.3) 0%, transparent 100%)" }} />
              </div>
              <div className="flex flex-col">
                <div className="relative flex-1 overflow-hidden">
                  <img src={img2} alt="Assembly" className="w-full h-full object-cover ken-burns-alt" />
                </div>
                <div className="relative flex-1 overflow-hidden">
                  <img src={img3} alt="Awards" className="w-full h-full object-cover ken-burns" />
                </div>
              </div>
            </div>
            {/* gradient over images */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,35,126,0.55) 0%, transparent 60%)" }} />
          </div>

          {/* Mobile: simple image */}
          <div className="lg:hidden h-64 relative overflow-hidden">
            <img src={img1} alt="Campus" className="w-full h-full object-cover ken-burns" />
            <div className="absolute inset-0 bg-[#1A237E]/50" />
          </div>

          {/* Floating badge — CBSE board trust signal */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.4 }}
            className="absolute bottom-8 left-8 z-10 float-badge"
          >
            <div className="bg-[#FF6F00] text-white rounded-2xl px-5 py-3 shadow-2xl flex items-center gap-3">
              <Star className="fill-white" size={20} />
              <div>
                <p className="text-sm font-black leading-tight">Bargur&apos;s</p>
                <p className="text-xs uppercase tracking-widest opacity-80">Trusted School</p>
              </div>
            </div>
          </motion.div>

          {/* Extra photos bottom-right (desktop) */}
          <div className="absolute bottom-4 right-8 hidden lg:flex gap-2 z-10">
            {[img4, img5].map((src, i) => (
              <div key={i} className="w-20 h-20 rounded-xl overflow-hidden border-2 border-white/40 shadow-lg hover:scale-110 transition-transform duration-300">
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Text + Stats ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 bg-white relative"
        >
          {/* Decorative dot cluster */}
          <div className="absolute top-8 right-8 opacity-20 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #FF6F00 1.5px, transparent 1.5px)",
              backgroundSize: "12px 12px",
              width: 80, height: 80,
            }}
          />

          <p className="section-label">Who We Are</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-black leading-tight mb-5" style={{ color: "#1A237E" }}>
            A Legacy of Learning<br />
            in the Heart of{" "}
            <span className="text-gradient-saffron animated-underline">Bargur</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-8 max-w-lg">
            Offering CBSE &amp; Matric streams from Pre-KG to Class XII in Bargur, rooted in discipline, innovation, and the spirit of Sri Kanakadasa.
          </p>

          {/* Animated counter stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-4 text-center hover:-translate-y-1 transition-transform duration-300"
                style={{
                  background: [
                    "linear-gradient(135deg, #1A237E15, #1A237E05)",
                    "linear-gradient(135deg, #FF6F0015, #FF6F0005)",
                    "linear-gradient(135deg, #C6282815, #C6282805)",
                    "linear-gradient(135deg, #1B5E2015, #1B5E2005)",
                  ][i],
                  border: `1px solid ${["#1A237E30","#FF6F0030","#C6282830","#1B5E2030"][i]}`,
                }}
              >
                <p className="text-3xl font-black font-heading leading-none"
                  style={{ color: ["#1A237E","#FF6F00","#C62828","#1B5E20"][i] }}>
                  <Counter end={s.end} suffix={s.suffix} />
                </p>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-sans mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-white w-fit text-sm"
            style={{ background: "linear-gradient(135deg, #1A237E, #0277BD)" }}
          >
            Our Full Story
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>

      {/* ── BOTTOM coloured bar ── */}
      <div className="h-1.5 flex">
        <div className="flex-1" style={{ background: "#1B5E20" }} />
        <div className="flex-1" style={{ background: "#F9A825" }} />
        <div className="flex-1" style={{ background: "#C62828" }} />
        <div className="flex-1" style={{ background: "#FF6F00" }} />
        <div className="flex-1" style={{ background: "#1A237E" }} />
      </div>
    </section>
  );
}
