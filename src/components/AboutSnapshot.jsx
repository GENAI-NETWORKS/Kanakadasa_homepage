import { motion } from "framer-motion";
import { ArrowRight, Quote, BookOpen, HeartHandshake, MonitorPlay } from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "../assets/2.jpeg";
import img2 from "../assets/6.jpeg";
import img3 from "../assets/10.jpeg";
import img4 from "../assets/18.jpeg";

const images = [
  { src: img1, alt: "St. Kanakadasa School campus assembly" },
  { src: img2, alt: "Students in school assembly with flags" },
  { src: img3, alt: "Teacher presenting award to student" },
  { src: img4, alt: "House captains with colourful sashes" },
];

export default function AboutSnapshot() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#FFF8F0]">
      {/* Diagonal green split on right */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 h-full w-[52%] bg-[#1A472A] hidden lg:block"
          style={{ clipPath: "polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        />
        <div className="absolute left-0 top-0 h-full w-[50%] opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle, #1A472A22 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ═══════════════════════════════
              LEFT — Text + Quote (prominent)
          ═══════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="section-label">Who We Are</span>
              <h2 className="section-heading mb-6">
                A Legacy of Learning in the Heart of Bargur
              </h2>

              <div className="space-y-4 text-textmuted leading-relaxed text-justify">
                <p>
                  Founded over three decades ago, St. Kanakadasa Educational
                  Institutions has grown into one of Tamil Nadu's most respected
                  academic centres. Situated in the serene environs of Ammeri,
                  Bargur, our campus nurtures holistic growth - intellectual,
                  moral, and spiritual - in every student.
                </p>
                <p>
                  We bring together a team of highly qualified, dedicated faculty
                  who use modern pedagogical techniques alongside digital smart
                  classrooms to make learning engaging and effective. Our dual
                  board offering - CBSE Senior Secondary and Matriculation Higher
                  Secondary - ensures every student has the right academic pathway.
                </p>
                <p>
                  Rooted in spiritual discipline and guided by the principles of
                  Sri Kanakadasa, our institution fosters values of compassion,
                  integrity, and excellence. From Pre-KG to Class XII, every child
                  here is a future leader in the making.
                </p>
              </div>
            </div>

            {/* ── Quote Card — full-width on the left ── */}
            <div className="relative bg-[#1A472A] rounded-2xl p-6 shadow-xl border-l-4 border-[#E63946] overflow-hidden">
              {/* Decorative quote mark background */}
              <div className="absolute -top-4 -right-4 text-white/5 font-heading font-bold text-[10rem] leading-none select-none pointer-events-none">"</div>
              <Quote className="text-[#F4A261] mb-3" size={28} />
              <p className="font-heading text-lg md:text-xl italic text-white font-medium leading-relaxed mb-3">
                "Intelligence plus character is the goal of true education."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#E63946]" />
                <p className="text-sm text-white/70 font-semibold font-sans tracking-wide">Martin Luther King Jr.</p>
              </div>
            </div>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 bg-[#E63946] text-white font-semibold px-6 py-3 rounded-xl hover:brightness-110 transition-all duration-300 shadow-md hover:-translate-y-0.5 group w-fit cursor-default"
            >
              Read Our Full Story
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>

          {/* ═══════════════════════════════
              RIGHT — Image mosaic
          ═══════════════════════════════ */}
          <div className="relative w-full mt-10 lg:mt-0">
            {/* Mobile full-bleed dark green background */}
            <div className="absolute top-[-4rem] bottom-[-8rem] w-[200%] -left-[50%] bg-[#1A472A] -z-10 lg:hidden" />

            <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl shadow-xl ring-2 ring-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
            {/* Badge */}
            <div className="col-span-2 flex justify-center mt-2">
              <div className="bg-[#E63946] text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg tracking-widest uppercase font-sans">
                ★ 20+ Years of Excellence
              </div>
            </div>

            {/* Unique Component to fill the space */}
            <div className="col-span-2 mt-6 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm shadow-2xl hover:bg-white/10 transition-colors duration-300">
              <h3 className="text-white font-heading font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-10 h-0.5 bg-[#F4A261]" />
                Pillars of Excellence
              </h3>
              <div className="space-y-6">
                {[
                  { title: "Academic Rigor", desc: "Consistently achieving 100% board results with top district ranks.", icon: BookOpen },
                  { title: "Moral Values", desc: "Rooted deeply in the spiritual teachings of Sri Kanakadasa.", icon: HeartHandshake },
                  { title: "Modern Facilities", desc: "Smart classrooms, advanced labs, and robust digital infrastructure.", icon: MonitorPlay },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4 items-start group cursor-default">
                      <div className="w-11 h-11 rounded-xl bg-[#F4A261]/20 flex items-center justify-center shrink-0 group-hover:bg-[#F4A261] group-hover:scale-110 transition-all duration-300 shadow-inner">
                        <Icon size={20} className="text-[#F4A261] group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold font-sans text-sm md:text-base tracking-wide mb-1">{item.title}</h4>
                        <p className="text-white/70 text-xs md:text-sm font-sans leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
