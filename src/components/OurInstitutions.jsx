import { motion } from "framer-motion";
import { School, MapPin, BookOpen, Users } from "lucide-react";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";

const institutions = [
  {
    img: img1,
    shortName: "Matric Hr. Sec. School",
    board: "State Board",
    grades: "Class I – XII",
    tag: "Matriculation",
    from: "#C62828",
    to: "#FF6F00",
  },
  {
    img: img2,
    shortName: "Senior Secondary Public School",
    board: "State Board",
    grades: "Class I – XII",
    tag: "Matriculation",
    from: "#1A237E",
    to: "#0277BD",
  },
  {
    img: img3,
    shortName: "Nursery & Primary School",
    board: "Early Childhood",
    grades: "Pre-KG – Class V",
    tag: "Primary",
    from: "#1B5E20",
    to: "#00695C",
  },
  {
    img: img4,
    shortName: "Matriculation School",
    board: "State Board",
    grades: "Class VI – X",
    tag: "Matriculation",
    from: "#6A1B9A",
    to: "#0277BD",
  },
];

export default function OurInstitutions() {
  return (
    <section id="institutions" className="relative py-20 overflow-hidden bg-[#FFF8F0]">

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,25 C480,50 960,0 1440,25 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label block text-center">Our Network</span>
          <h2 className="section-heading text-center">
            Our <span className="text-gradient animated-underline">Institutions</span>
          </h2>
          <p className="text-gray-500 mt-3 text-sm max-w-sm mx-auto font-sans">
            Four campuses · Pre-KG to Class XII · Matric
          </p>
        </motion.div>

        {/* ── 4 institution cards — tall image cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {institutions.map((inst, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-default"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Full-bleed image with Ken Burns */}
              <motion.img
                initial={{ scale: 1.2, opacity: 0, filter: "blur(10px)" }}
                whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
                src={inst.img}
                alt={inst.shortName}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient overlay — heavier at bottom */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{ background: `linear-gradient(to top, ${inst.from}f0 0%, ${inst.from}88 40%, transparent 70%)` }}
              />

              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ background: `linear-gradient(90deg, ${inst.from}, ${inst.to})` }}
              />

              {/* Board badge */}
              <div className="absolute top-5 right-4">
                <span
                  className="text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg"
                  style={{ background: inst.from }}
                >
                  {inst.tag}
                </span>
              </div>

              {/* Number watermark */}
              <div
                className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-black shadow-md"
                style={{ background: `${inst.to}99`, border: "2px solid rgba(255,255,255,0.3)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Bottom content — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-0">
                <h3 className="font-heading font-black text-white text-base leading-tight mb-2">
                  {inst.shortName}
                </h3>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <BookOpen size={12} className="text-white/60 shrink-0" />
                    <span className="text-white/80 text-xs font-sans">{inst.board}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={12} className="text-white/60 shrink-0" />
                    <span className="text-white/80 text-xs font-sans">{inst.grades}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-white/60 shrink-0" />
                    <span className="text-white/80 text-xs font-sans">Bargur, Tamil Nadu</span>
                  </div>
                </div>
              </div>

              {/* Hover shimmer */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.3), transparent)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 rounded-3xl p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center"
          style={{ background: "linear-gradient(135deg, #1A237E, #0277BD)" }}
        >
          {[
            { icon: School,   val: "4",     label: "Campus Buildings" },
            { icon: BookOpen, val: "Matric", label: "Boards Offered" },
            { icon: Users,    val: "Pre-KG to XII", label: "Full Schooling" },
            { icon: MapPin,   val: "Bargur", label: "Ammeri, TN" },
          ].map(({ icon: Icon, val, label }, i) => (
            <div key={i} className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-white" />
              </div>
              <div>
                <p className="font-black text-sm sm:text-base font-heading leading-none">{val}</p>
                <p className="text-white/70 text-[11px] sm:text-xs uppercase tracking-widest font-sans mt-1">{label}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
