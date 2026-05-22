import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAdmission = () => {
    document.getElementById("admission")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden py-24 md:py-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop')` }}
      />
      
      {/* Minor blue transparency overlay */}
      <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
      <div className="absolute inset-0 bg-primary/40" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-6 md:mt-12 lg:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Eyebrow label exactly like the screenshot */}
          <div className="flex justify-center mb-6 px-2">
            <span className="inline-flex items-center text-center justify-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full border border-accent/60 bg-accent/10 text-accent font-bold tracking-wider sm:tracking-widest uppercase text-[10px] sm:text-sm backdrop-blur-sm leading-tight">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
              Excellence in Education Since 20+ Years
            </span>
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold mb-6 leading-[1.1] drop-shadow-md text-white">
            Welcome to <br />
            <span className="text-accent">ST. Kanakadasa Educational Institutions</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto mb-10 md:mb-12 drop-shadow-md font-medium leading-relaxed flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
            <span>Holistic Learning Environment</span>
            <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span>Future-Ready Education</span>
          </p>
          
          {/* CTA Buttons exactly like the screenshot */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button 
              onClick={scrollToAdmission} 
              className="w-auto bg-accent text-white font-bold px-8 py-3 rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-base flex items-center justify-center gap-2"
            >
              Admissions Open <ArrowRight size={18} />
            </button>
            <button 
              onClick={scrollToAbout} 
              className="w-auto border border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-base"
            >
              Learn More <ChevronDown size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
