import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calendar, CheckCircle2 } from "lucide-react";

const programs = [
  {
    id: "pre-primary",
    label: "Pre-Primary",
    title: "Foundational Learning (Pre-KG to UKG)",
    desc: "A nurturing environment focusing on motor skills, social interaction, and early cognitive development through play-way methods.",
    details: ["Activity-based learning", "Phonics and language development", "Safe, vibrant classrooms"],
    examStructure: "Continuous Formative Assessment",
  },
  {
    id: "primary",
    label: "Primary",
    title: "Primary Education (Class I to V)",
    desc: "Building a strong foundation in core subjects while encouraging curiosity and independent thinking.",
    details: ["Interactive digital learning", "Focus on reading and arithmetic", "Extracurricular exposure"],
    examStructure: "Term-wise Assessments (Term I, Term II, Term III)",
  },
  {
    id: "secondary",
    label: "Secondary",
    title: "Secondary Education (Class VI to X)",
    desc: "A rigorous academic curriculum integrated with life skills, preparing students for board examinations.",
    details: ["Subject-specific labs", "Project-based learning", "Career counseling introduction"],
    examStructure: "First Mid Term → Quarterly → Second Mid Term → Half Yearly → Third Mid Term → Annual",
  },
  {
    id: "senior",
    label: "Senior Secondary",
    title: "Senior Secondary (Class XI to XII)",
    desc: "Specialized streams designed for higher education readiness and competitive exam success.",
    details: [
      "Science (PCB + CS) with integrated NEET coaching",
      "Science (PCM + CS) with integrated JEE coaching",
      "Commerce (Economics, Accountancy, Computer Applications)",
    ],
    examStructure: "First Mid Term → Quarterly → Second Mid Term → Half Yearly → Third Mid Term → Annual",
    badge: "Integrated NEET/JEE",
  },
];

export default function AcademicPrograms() {
  const [activeTab, setActiveTab] = useState(programs[3].id); // Default to senior secondary

  const activeProgram = programs.find((p) => p.id === activeTab);

  return (
    <section id="academic" className="py-24 bg-lightbg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-label">Academics</span>
          <h2 className="section-heading">Comprehensive Programs from Pre-KG to Class XII</h2>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-start md:justify-center overflow-x-auto pb-4 mb-8 hide-scrollbar">
          <div className="flex space-x-2 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => setActiveTab(program.id)}
                className={`whitespace-nowrap px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === program.id
                    ? "bg-primary text-white shadow-md"
                    : "text-textmuted hover:text-primary hover:bg-gray-50"
                }`}
              >
                {program.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 relative overflow-hidden"
            >
              {activeProgram.badge && (
                <div className="absolute top-6 right-6 bg-accent text-primary text-xs font-bold px-3 py-1.5 rounded-full">
                  {activeProgram.badge}
                </div>
              )}

              <h3 className="font-heading text-2xl font-bold text-primary mb-4 pr-24">
                {activeProgram.title}
              </h3>
              <p className="text-textmuted leading-relaxed mb-8">
                {activeProgram.desc}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary mb-4">
                    <BookOpen size={18} className="text-accent" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-3">
                    {activeProgram.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-lightbg rounded-xl p-6 border border-gray-100">
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary mb-4">
                    <Calendar size={18} className="text-accent" />
                    Examination Structure
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    {activeProgram.examStructure.split(' → ').map((item, idx, arr) => (
                      <span key={idx}>
                        {item}
                        {idx < arr.length - 1 && <span className="text-accent mx-1">→</span>}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
