import { motion } from "framer-motion";
import { Download, Phone, CheckCircle } from "lucide-react";

export default function AdmissionsCTA() {
  const requirements = [
    "Admission Form",
    "Birth Certificate",
    "Aadhaar Card",
    "Community Certificate",
    "Passport Photograph"
  ];

  const handleDownload = () => {
    alert("Downloading Admission Form PDF...");
  };

  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="admission" className="relative overflow-hidden">
      {/* Amber-to-crimson gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-[#e8882a] to-accent" />

      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        {/* Scattered circles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${20 + (i * 13) % 40}px`,
              height: `${20 + (i * 13) % 40}px`,
              top: `${(i * 27) % 80}%`,
              left: `${(i * 37 + 10) % 85}%`,
            }}
          />
        ))}
        {/* Diagonal line pattern */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "repeating-linear-gradient(60deg, transparent, transparent 30px, rgba(255,255,255,0.3) 30px, rgba(255,255,255,0.3) 31px)"
          }}
        />
      </div>

      {/* Top wave from facilities section */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,25 C360,0 1080,50 1440,25 L1440,0 L0,0 Z" fill="#FFF8F0" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left/Center Content */}
          <div className="lg:col-span-7 xl:col-span-8 text-center lg:text-left">
            <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
              Admissions 2026–27
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            >
              Admissions Open for<br />
              <span className="text-primary/90">Academic Year 2026–27</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/90 text-lg md:text-xl font-medium mb-8"
            >
              Applications open from 2nd March. Enrolling Pre-KG to Class XII.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#0D2818] transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                <Download size={20} />
                Download Form
              </button>
              <button
                onClick={handleContact}
                className="inline-flex items-center gap-2 bg-white text-primary font-bold px-7 py-3.5 rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                <Phone size={20} />
                Contact Team
              </button>
            </motion.div>
          </div>

          {/* Right Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 xl:col-span-4"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-7 shadow-2xl border border-white/50">
              <h3 className="font-bold text-primary text-lg mb-5 pb-3 border-b border-gray-200 flex items-center gap-2">
                <span className="w-2 h-5 bg-accent rounded-full inline-block" />
                Required Documents
              </h3>
              <ul className="space-y-3">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <CheckCircle size={18} className="text-primary shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom wave connector */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,0 C360,50 1080,0 1440,40 L1440,50 L0,50 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
