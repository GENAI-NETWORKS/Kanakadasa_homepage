import { motion } from "framer-motion";
import { School, ArrowRight } from "lucide-react";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";

const institutions = [
  {
    img: img1,
    name: "ST. Kanakadasa Matric Hr. Sec School",
    shortName: "Matric Higher Secondary",
    board: "State Board - Matriculation",
    grades: "Class I to Class XII",
    color: "#E63946",
    desc: "Our flagship Matriculation Higher Secondary school, offering State Board education from Class I to XII with comprehensive academic programs and holistic student development.",
  },
  {
    img: img2,
    name: "ST. Kanakadasa Senior Secondary Public School",
    shortName: "CBSE Senior Secondary",
    board: "CBSE Board",
    grades: "Class I to Class XII",
    color: "#1A472A",
    desc: "CBSE-affiliated senior secondary school providing nationally recognised quality education with modern pedagogy, digital classrooms, and integrated competitive exam coaching.",
  },
  {
    img: img3,
    name: "ST. Kanakadasa Nursery & Primary School",
    shortName: "Nursery & Primary",
    board: "Early Childhood Education",
    grades: "Pre-KG to Class V",
    color: "#F4A261",
    desc: "A nurturing pre-primary and primary school focused on play-way learning, early literacy, numeracy, and the joyful development of young children aged 3 to 10.",
  },
  {
    img: img4,
    name: "ST. Kanakadasa Matriculation School",
    shortName: "Matriculation School",
    board: "State Board - Matriculation",
    grades: "Class VI to Class X",
    color: "#2D9CDB",
    desc: "A dedicated Middle and High School campus offering strong academic grounding, character building, and systematic board exam preparation under experienced faculty.",
  },
];

export default function OurInstitutions() {
  return (
    <section id="institutions" className="relative py-24 overflow-hidden bg-[#0D2818]">

      {/* ── Subtle grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* ── Top wave ── */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10">
          <path d="M0,25 C480,50 960,0 1440,25 L1440,0 L0,0 Z" fill="#ffffff" fillOpacity="0.03" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4A261] mb-3 block font-sans">
            Our Network
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Our <span className="text-[#F4A261]">Institutions</span>
          </h2>
          <p className="text-white/90 mt-4 max-w-xl mx-auto text-sm sm:text-base font-sans leading-relaxed">
            Four distinct campuses serving students from Pre-KG to Class XII across both CBSE and State Board streams.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-0.5 w-10 rounded-full bg-[#E63946]" />
            <School size={18} className="text-[#F4A261]" />
            <div className="h-0.5 w-10 rounded-full bg-[#F4A261]" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {institutions.map((inst, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-xl hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-400 cursor-default"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={inst.img}
                  alt={inst.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${inst.color}dd, ${inst.color}44, transparent)` }}
                />
                {/* Board badge */}
                <div
                  className="absolute top-3 right-3 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full font-sans"
                  style={{ background: inst.color }}
                >
                  {inst.board.split("-")[0].trim()}
                </div>
              </div>

              {/* Body */}
              <div
                className="p-5 border-t-4"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderColor: inst.color,
                  backdropFilter: "blur(8px)",
                }}
              >
                <h3 className="font-heading font-bold text-white text-base leading-tight mb-1">
                  {inst.shortName}
                </h3>
                <p className="text-xs font-sans mb-3 text-[#F4A261] font-medium tracking-wide">
                  {inst.grades}
                </p>
                <p className="text-sm text-white/80 leading-relaxed font-sans">{inst.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Bottom wave ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#FFF8F0" />
        </svg>
      </div>
    </section>
  );
}
