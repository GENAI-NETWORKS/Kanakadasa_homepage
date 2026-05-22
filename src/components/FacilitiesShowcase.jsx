import { motion } from "framer-motion";
import {
  Library, MonitorPlay, FlaskConical, TestTube, Dna, Calculator,
  Computer, Music, Stethoscope, Trophy, Bus, Presentation
} from "lucide-react";

const facilities = [
  { icon: Library, name: "Library", desc: "Extensive collection of books and digital resources" },
  { icon: MonitorPlay, name: "Smart Classes", desc: "Interactive boards for immersive learning" },
  { icon: FlaskConical, name: "Physics Lab", desc: "Modern equipment for practical experiments" },
  { icon: TestTube, name: "Chemistry Lab", desc: "Safe, well-ventilated analytical setup" },
  { icon: Dna, name: "Biology Lab", desc: "Microscopes and biological specimens" },
  { icon: Calculator, name: "Maths Lab", desc: "Visual tools for complex problem solving" },
  { icon: Computer, name: "Computer Lab", desc: "High-speed internet and latest software" },
  { icon: Music, name: "Dance & Music Room", desc: "Dedicated space for performing arts" },
  { icon: Stethoscope, name: "Medical Room", desc: "First-aid and regular health check-ups" },
  { icon: Trophy, name: "Sports Activities", desc: "Facilities for indoor and outdoor games" },
  { icon: Bus, name: "Transportation", desc: "Safe commuting across surrounding villages" },
  { icon: Presentation, name: "Digital Classrooms", desc: "Tech-enabled teaching methodologies" },
];

export default function FacilitiesShowcase() {
  return (
    <section id="facility" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            Facilities
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
            Built for the Best Learning Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((fac, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="facility-icon-wrap"
            >
              <fac.icon size={48} className="text-accent mb-2" strokeWidth={1.5} />
              <h3 className="font-bold text-lg">{fac.name}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{fac.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
