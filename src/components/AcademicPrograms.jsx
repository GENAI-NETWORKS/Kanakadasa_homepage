import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Calendar, CheckCircle2, GraduationCap,
  Sprout, BookMarked, FlaskConical, Trophy, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

import imgAssembly from "../assets/WhatsApp Image 2026-05-26 at 7.25.43 AM.jpeg";

const stages = [
  {
    id: "pre-primary",
    label: "Pre-Primary",
    grade: "Pre-KG to UKG",
    icon: Sprout,
    color: "#27AE60",
    bg: "#27AE6015",
    title: "Foundational Learning",
    desc: "A nurturing environment focusing on motor skills, social interaction, and early cognitive development through play-way methods, phonics, and joyful activities.",
    details: [
      "Activity-based and play-way learning",
      "Phonics and early language development",
      "Safe, vibrant and child-friendly classrooms",
      "Concept of sharing and social behaviour",
    ],
    exam: "Continuous Formative Assessment",
  },
  {
    id: "primary",
    label: "Primary",
    grade: "Class I - V",
    icon: BookMarked,
    color: "#2D9CDB",
    bg: "#2D9CDB15",
    title: "Primary Education",
    desc: "Building a strong foundation in core subjects while encouraging curiosity, creative thinking, and an independent learning mindset through interactive and digital methods.",
    details: [
      "Interactive digital and smart board learning",
      "Focus on reading, writing, and arithmetic",
      "Extracurricular exposure from an early age",
      "Weekly and monthly formative tests",
    ],
    exam: "Term I → Term II → Term III (Formative Assessments)",
  },
  {
    id: "secondary",
    label: "Secondary",
    grade: "Class VI - X",
    icon: FlaskConical,
    color: "#9B51E0",
    bg: "#9B51E015",
    title: "Secondary Education",
    desc: "A rigorous academic curriculum integrated with life skills, lab-based learning, career counselling, and systematic exam preparation leading to board examinations.",
    details: [
      "Subject-specific science and maths labs",
      "Project-based and concept learning",
      "Introduction to career counselling",
      "Regular board exam preparation",
    ],
    exam: "First Mid Term → Quarterly → Second Mid Term → Half Yearly → Third Mid Term → Annual",
  },
  {
    id: "senior",
    label: "Senior Secondary",
    grade: "Class XI - XII",
    icon: Trophy,
    color: "#E63946",
    bg: "#E6394615",
    badge: "NEET / JEE Coaching",
    title: "Senior Secondary Education",
    desc: "Specialized science and commerce streams, designed for board exam excellence and competitive entrance success, with integrated NEET/JEE coaching for aspiring students.",
    details: [
      "Science: Biology (PCB) with integrated NEET coaching",
      "Science: Mathematics (PCM) with integrated JEE coaching",
      "Commerce: Economics, Accountancy, Computer Applications",
      "Mock tests and exam strategies",
    ],
    exam: "First Mid Term → Quarterly → Second Mid Term → Half Yearly → Third Mid Term → Annual",
  },
];

export default function AcademicPrograms() {
  const [active, setActive] = useState(stages[0].id);
  const current = stages.find((s) => s.id === active);
  const Icon = current.icon;

  return (
    <section id="academic" className="relative py-14 overflow-hidden bg-[#FFF8F0]">


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">Academics</span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="section-heading max-w-xl">
              Comprehensive Programs<br />
              <span className="text-[#E63946]">Pre-KG to Class XII</span>
            </h2>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A472A] hover:text-[#E63946] transition-colors group shrink-0 cursor-default"
            >
              View Full Academics
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          {/* Underline rule */}
          <div className="mt-4 flex gap-2">
            <div className="h-1 w-16 rounded-full bg-[#E63946]" />
            <div className="h-1 w-6 rounded-full bg-[#F4A261]" />
          </div>
        </motion.div>

        {/* ── Two-column layout: Stage selector left + Details right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ─── LEFT: Stage selector cards (2 col out of 5) ─── */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {stages.map((stage, i) => {
              const StageIcon = stage.icon;
              const isActive = active === stage.id;
              return (
                <motion.button
                  key={stage.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  onClick={() => setActive(stage.id)}
                  className={`relative group text-left rounded-xl p-4 border-2 transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "border-transparent shadow-lg scale-[1.02]"
                      : "border-transparent bg-white hover:shadow-md"
                  }`}
                  style={isActive ? { background: stage.bg, borderColor: stage.color + "60" } : {}}
                >
                  {/* Active left bar */}
                  {isActive && (
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                      style={{ background: stage.color }}
                    />
                  )}

                  <div className="flex items-center gap-3 pl-1">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300"
                      style={{ background: isActive ? stage.color + "25" : "#f0f0f0" }}
                    >
                      <StageIcon size={20} strokeWidth={1.8} style={{ color: isActive ? stage.color : "#888" }} />
                    </div>
                    <div>
                      <p
                        className="font-heading font-bold text-base leading-tight transition-colors"
                        style={{ color: isActive ? stage.color : "#1C1C1E" }}
                      >
                        {stage.label}
                      </p>
                      <p className="text-xs text-gray-500 font-sans mt-0.5">{stage.grade}</p>
                    </div>
                    {isActive && (
                      <ArrowRight size={14} className="ml-auto shrink-0" style={{ color: stage.color }} />
                    )}
                  </div>
                </motion.button>
              );
            })}

            {/* Campus image under selector */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative rounded-2xl overflow-hidden shadow-xl mt-2 h-40"
            >
              <img
                src={imgAssembly}
                alt="School campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A472A]/70 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <p className="text-white text-xs font-semibold font-sans uppercase tracking-widest">
                  St. Kanakadasa Campus
                </p>
              </div>
            </motion.div>
          </div>

          {/* ─── RIGHT: Detail panel (3 col out of 5) ─── */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              >
                {/* Top colour bar */}
                <div className="h-1.5 w-full" style={{ background: current.color }} />

                <div className="p-7 md:p-9">
                  {/* Heading row */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: current.bg }}
                      >
                        <Icon size={24} strokeWidth={1.8} style={{ color: current.color }} />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-[#1A472A] leading-tight">
                          {current.title}
                        </h3>
                        <p className="text-xs font-sans text-gray-500 mt-0.5">{current.grade}</p>
                      </div>
                    </div>
                    {current.badge && (
                      <span
                        className="shrink-0 text-xs font-bold px-3 py-1.5 rounded-full text-white font-sans"
                        style={{ background: current.color }}
                      >
                        {current.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6 font-sans">{current.desc}</p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A472A] mb-3 font-sans">
                      <BookOpen size={14} style={{ color: current.color }} />
                      Key Highlights
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {current.details.map((d, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: current.color }} />
                          <span className="text-sm text-gray-700 font-sans">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Exam Structure */}
                  <div
                    className="rounded-xl p-4"
                    style={{ background: current.bg }}
                  >
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2 font-sans" style={{ color: current.color }}>
                      <Calendar size={14} />
                      Examination Structure
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed font-sans font-medium">
                      {current.exam.split(" → ").map((item, idx, arr) => (
                        <span key={idx}>
                          {item}
                          {idx < arr.length - 1 && (
                            <span className="mx-1 font-bold" style={{ color: current.color }}>→</span>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>


          </div>
        </div>
      </div>
    </section>
  );
}
