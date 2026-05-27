import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, GraduationCap, Users, Bus, Trophy } from "lucide-react";

import stickyImg from "../assets/gate.jpeg"; // We'll use one majestic image for the sticky side

const features = [
  { 
    title: "20+ Years of Excellence", 
    desc: "A proven legacy of shaping bright minds and successful futures.",
    icon: Trophy,
    color: "#FF6F00"
  },
  { 
    title: "Smart Digital Classrooms", 
    desc: "Interactive technology integrated into everyday learning.",
    icon: CheckCircle2,
    color: "#0277BD"
  },
  { 
    title: "NEET / JEE Coaching", 
    desc: "Dedicated preparation programs for competitive entrance exams.",
    icon: GraduationCap,
    color: "#C62828"
  },
  { 
    title: "Experienced Faculty", 
    desc: "Highly qualified educators committed to student success.",
    icon: Users,
    color: "#1B5E20"
  },
  { 
    title: "Safe & Secure Campus", 
    desc: "24/7 security ensuring peace of mind for parents.",
    icon: ShieldCheck,
    color: "#6A1B9A"
  },
  { 
    title: "Reliable Transportation", 
    desc: "Extensive fleet covering the entire Bargur region safely.",
    icon: Bus,
    color: "#00695C"
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-[#FFF8F0]">
      {/* Rainbow top bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 flex">
        {["#FF6F00","#F9A825","#C62828","#1A237E","#1B5E20"].map((c, i) => (
          <div key={i} className="flex-1" style={{ background: c }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Header (Hidden on LG) */}
        <div className="lg:hidden text-center mb-12">
          <span className="section-label block text-center">Our Strengths</span>
          <h2 className="section-heading text-center">
            Why Choose{" "}
            <span className="text-gradient animated-underline">St. Kanakadasa?</span>
          </h2>
        </div>

        {/* ── Sticky Split Layout ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Sticky Image Display */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src={stickyImg} 
              alt="Campus Assembly" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1A237E]/80 via-transparent to-transparent" />
            
            {/* Floating text on image */}
            <div className="absolute bottom-10 left-10 right-10">
              <h3 className="text-3xl sm:text-4xl font-black text-white font-heading leading-tight mb-3">
                Building Futures, <br/>Shaping Character.
              </h3>
              <div className="w-16 h-1.5 bg-[#FF6F00] rounded-full" />
            </div>
          </div>

          {/* RIGHT: Scrolling Features */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center py-4 lg:py-20">
            
            {/* Desktop Header */}
            <div className="hidden lg:block mb-16">
              <span className="section-label block">Our Strengths</span>
              <h2 className="section-heading text-[#1A237E] leading-tight">
                Why Choose <br/>
                <span className="text-gradient animated-underline">St. Kanakadasa?</span>
              </h2>
            </div>

            {/* Features List */}
            <div className="space-y-10">
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    {/* Icon Column */}
                    <div className="shrink-0 relative">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-lg border relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" style={{ borderColor: `${feat.color}30` }}>
                        <Icon size={24} style={{ color: feat.color }} strokeWidth={2.5} />
                      </div>
                      {/* Decorative drop shadow line */}
                      {i !== features.length - 1 && (
                        <div className="absolute top-14 bottom-[-40px] left-1/2 -translate-x-1/2 w-0.5 bg-gray-200" />
                      )}
                    </div>
                    
                    {/* Text Column */}
                    <div className="pt-2">
                      <h4 className="text-xl font-bold font-heading text-gray-900 mb-2 group-hover:text-[#1A237E] transition-colors">
                        {feat.title}
                      </h4>
                      <p className="text-gray-600 font-sans leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
