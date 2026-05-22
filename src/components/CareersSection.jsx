import { Briefcase, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const perks = [
  "Competitive Salary Package",
  "Professional Development",
  "Collaborative Environment",
  "Academic Conferences",
];

export default function CareersSection() {
  return (
    <section id="careers" className="relative py-24 overflow-hidden">
      {/* Deep green background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D2818] via-primary to-[#1A472A]" />

      {/* Scattered dot / confetti pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${6 + (i * 7) % 14}px`,
              height: `${6 + (i * 7) % 14}px`,
              top: `${(i * 19 + 5) % 90}%`,
              left: `${(i * 23 + 8) % 92}%`,
              background: i % 3 === 0 ? "rgba(230,57,70,0.25)" : i % 3 === 1 ? "rgba(244,162,97,0.2)" : "rgba(255,255,255,0.08)",
            }}
          />
        ))}
        {/* Subtle arc lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="10%" cy="50%" rx="200" ry="200" stroke="#F4A261" strokeWidth="1" fill="none" />
          <ellipse cx="90%" cy="50%" rx="150" ry="150" stroke="#E63946" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-accent/20 text-accent text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Join Our Team
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Careers at St. Kanakadasa
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/8 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 text-center"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Briefcase className="text-accent" size={32} />
            </div>
            <p className="text-lg text-white/85 leading-relaxed mb-4">
              Highly qualified, dedicated teachers drawn from several cultures are a part of our faculty. The management is keen on conducting academic conferences and brainstorming sessions to develop the faculty in various areas.
            </p>
            <p className="text-lg text-white/85 leading-relaxed mb-8">
              By fostering continuous learning, the members of our faculty can accept any challenge that is likely to arise at any time. If you are passionate about education and shaping young minds, we would love to hear from you.
            </p>

            {/* Perks row */}
            <div className="grid grid-cols-2 gap-3 mb-8 text-left">
              {perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2.5">
                  <CheckCircle className="text-secondary shrink-0" size={16} />
                  <span className="text-white/80 text-sm font-medium">{perk}</span>
                </div>
              ))}
            </div>

            <a
              href="mailto:kanakadasaschool@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-[#c0272f] text-white font-bold px-8 py-4 rounded-xl hover:brightness-110 transition-colors shadow-lg hover:-translate-y-0.5 hover:shadow-xl duration-300"
            >
              <Send size={20} />
              Email Your Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
