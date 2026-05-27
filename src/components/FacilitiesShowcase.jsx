import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

import imgClass  from "../assets/20.jpeg";
import imgLab    from "../assets/WhatsApp Image 2026-05-26 at 7.25.45 AM (1).jpeg";
import imgSport  from "../assets/21.jpeg";
import imgCultu  from "../assets/31.jpeg";
import imgLib    from "../assets/19.jpeg";
import imgComp   from "../assets/WhatsApp Image 2026-05-26 at 7.25.47 AM.jpeg";
import imgBus    from "../assets/WhatsApp Image 2026-05-26 at 7.25.43 AM (2).jpeg";
import imgEvent  from "../assets/24.jpeg";

const facilities = [
  { img: imgClass, name: "Smart Classrooms",  sub: "Interactive boards",    color: "#1A237E" },
  { img: imgLab,   name: "Science Labs",       sub: "Physics · Chem · Bio",  color: "#C62828" },
  { img: imgSport, name: "Sports Arena",       sub: "Indoor & outdoor",      color: "#1B5E20" },
  { img: imgCultu, name: "Performing Arts",    sub: "Dance · Drama · Music", color: "#6A1B9A" },
  { img: imgLib,   name: "Digital Library",    sub: "Books & e-resources",   color: "#0277BD" },
  { img: imgComp,  name: "Computer Lab",       sub: "High-speed workstations",color: "#FF6F00" },
  { img: imgBus,   name: "Transportation",     sub: "Bargur area fleet",     color: "#00695C" },
  { img: imgEvent, name: "Event Grounds",      sub: "Auditorium & open area",color: "#F9A825" },
];

export default function FacilitiesShowcase() {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % facilities.length);
    }, 2000);
    return () => clearInterval(t);
  }, [isHovered]);

  return (
    <section id="facility" className="relative py-24 overflow-hidden bg-white">
      {/* wavy top decoration */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-0">
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10">
          <path d="M0,20 C360,40 1080,0 1440,20 L1440,0 L0,0 Z" fill="#F0F4FF" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="section-label block text-center">Our Infrastructure</span>
          <h2 className="section-heading text-center">
            Facilities Built for <span className="text-gradient animated-underline">Excellence</span>
          </h2>
        </motion.div>

        {/* Master-Detail Interactive Layout */}
        <div 
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Main Showcase Display (Left) */}
          <div className="w-full lg:w-3/5 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] lg:aspect-[16/10] bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                initial={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                src={facilities[active].img}
                alt={facilities[active].name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Floating Info */}
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div 
                    className="inline-block px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-4"
                    style={{ background: facilities[active].color }}
                  >
                    Facility 0{active + 1}
                  </div>
                  <h3 className="text-3xl sm:text-5xl font-black text-white font-heading drop-shadow-md mb-2">
                    {facilities[active].name}
                  </h3>
                  <p className="text-lg text-white/80 font-sans">
                    {facilities[active].sub}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Interactive Tab List (Right) */}
          <div className="w-full lg:w-2/5 flex flex-col gap-3">
            {facilities.map((fac, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group relative flex items-center justify-between p-4 rounded-2xl transition-all duration-300 text-left overflow-hidden ${
                    isActive ? "bg-white shadow-xl scale-105 z-10" : "bg-gray-50 hover:bg-white hover:shadow-md"
                  }`}
                >
                  {/* Left indicator bar */}
                  <div 
                    className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"}`} 
                    style={{ background: fac.color }} 
                  />
                  
                  <div className="flex items-center gap-4 pl-2 relative z-10">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-black transition-colors duration-300 ${isActive ? "text-white" : "text-gray-400 bg-gray-200"}`}
                      style={{ background: isActive ? fac.color : undefined }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <p className={`font-bold font-heading transition-colors duration-300 ${isActive ? "text-gray-900" : "text-gray-500 group-hover:text-gray-900"}`}>
                        {fac.name}
                      </p>
                    </div>
                  </div>
                  
                  <ChevronRight 
                    className={`transition-all duration-300 relative z-10 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                    style={{ color: fac.color }}
                  />
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
