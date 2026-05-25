import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, Sparkles } from "lucide-react";

const keyFacts = [
  {
    icon: BookOpen,
    value: "Pre-KG",
    label: "to Class XII",
    desc: "Complete 15-year schooling under one roof.",
    from: "#1A237E",
    to: "#0277BD",
    border: "#1A237E",
    iconBg: "#1A237E20",
  },
  {
    icon: GraduationCap,
    value: "CBSE",
    label: "& Matric Boards",
    desc: "Dual board — your choice, your path.",
    from: "#FF6F00",
    to: "#F9A825",
    border: "#FF6F00",
    iconBg: "#FF6F0020",
  },
  {
    icon: Users,
    value: "NEET",
    label: "/ JEE Coaching",
    desc: "Doctors & engineers in the making.",
    from: "#C62828",
    to: "#E53935",
    border: "#C62828",
    iconBg: "#C6282820",
  },
];

const highlights = [
  "Smart Classrooms", "Modern Labs", "Experienced Faculty",
  "Holistic Growth", "Transportation", "Safe Campus",
  "Co-Curricular", "Leadership Programs",
];

export default function QuickHighlights() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0D1B6E 0%, #1A237E 40%, #0277BD 100%)" }}>
      {/* Animated background circles */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "#FF6F00" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "#F9A825" }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full mb-4">
            <Sparkles size={14} className="text-[#F9A825]" />
            <span className="text-white/80 text-xs font-bold uppercase tracking-widest">What We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            Everything Under <span className="text-gradient-saffron">One Roof</span>
          </h2>
        </motion.div>

        {/* 3 colored stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {keyFacts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ scale: 1.03, y: -6 }}
                className="relative rounded-3xl p-7 overflow-hidden cursor-default"
                style={{ background: `linear-gradient(135deg, ${fact.from}, ${fact.to})` }}
              >
                {/* shine overlay */}
                <div className="absolute inset-0 rounded-3xl" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)" }} />
                {/* big watermark */}
                <div className="absolute -right-4 -bottom-4 text-[6rem] font-black opacity-10 text-white font-heading select-none">{i + 1}</div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                    <Icon size={26} className="text-white" strokeWidth={1.8} />
                  </div>
                  <p className="text-5xl sm:text-6xl font-black text-white font-heading leading-none mb-2">{fact.value}</p>
                  <p className="text-white font-bold text-lg mb-2 font-sans">{fact.label}</p>
                  <p className="text-white/70 text-sm font-sans">{fact.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pills */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap justify-center gap-3">
          {highlights.map((h, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              whileHover={{ scale: 1.08 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-full cursor-default backdrop-blur-sm hover:bg-white/20 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-[#F9A825]" />
              {h}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
