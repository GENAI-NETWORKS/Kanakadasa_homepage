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
    // Placeholder for actual PDF download
    alert("Downloading Admission Form PDF...");
  };

  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="admission" className="bg-accent py-16 md:py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left/Center Content */}
          <div className="lg:col-span-7 xl:col-span-8 text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
            >
              Admissions Open for 2026–27
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary/80 text-lg md:text-xl font-medium mb-8"
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
                className="btn-navy"
              >
                <Download size={20} />
                Download Form
              </button>
              <button 
                onClick={handleContact}
                className="btn-outline border-primary text-primary hover:bg-primary hover:text-white"
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
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
              <h3 className="font-bold text-primary mb-4 pb-3 border-b border-gray-200">
                Required Documents
              </h3>
              <ul className="space-y-3">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <CheckCircle size={18} className="text-secondary shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
