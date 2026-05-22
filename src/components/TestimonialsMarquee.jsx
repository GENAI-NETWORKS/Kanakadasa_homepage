import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const achievements = [
  "100% Board Pass Rate",
  "NEET Achievers 2024",
  "20+ Years of Excellence",
  "Smart Campus - Bargur",
  "Integrated JEE Coaching",
  "Digital Classrooms in Every Room",
];

const testimonials = [
  {
    name: "Rajesh K.",
    role: "Parent of Class X Student",
    quote: "The teachers at St. Kanakadasa go above and beyond. My son has shown remarkable improvement not just in academics but in discipline and confidence. The smart classrooms make a real difference.",
  },
  {
    name: "Priya S.",
    role: "Alumna (Batch of 2018)",
    quote: "The foundation I received here shaped my entire career. The focus on holistic development and the encouragement from the faculty gave me the confidence to pursue engineering at a top university.",
  },
  {
    name: "Karthik M.",
    role: "Parent of Class XII Student",
    quote: "We chose this school for its integrated NEET coaching. The structured approach means my daughter doesn't need to run to separate tuition classes. Everything is handled brilliantly by the school staff.",
  },
];

export default function TestimonialsMarquee() {
  return (
    <section className="py-24 bg-lightbg overflow-hidden">
      {/* Auto-scrolling Achievement Ticker */}
      <div className="relative flex overflow-x-hidden border-y border-gray-200 bg-white py-4 mb-20 shadow-sm">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 px-6">
          {[...achievements, ...achievements, ...achievements].map((text, i) => (
            <span key={i} className="flex items-center gap-3 text-primary font-heading font-bold text-lg md:text-xl">
              <Star className="text-accent fill-accent" size={16} />
              {text}
            </span>
          ))}
        </div>
        {/* Secondary marquee for seamless loop */}
        <div className="absolute top-4 animate-marquee2 whitespace-nowrap flex items-center gap-12 px-6">
           {[...achievements, ...achievements, ...achievements].map((text, i) => (
            <span key={i} className="flex items-center gap-3 text-primary font-heading font-bold text-lg md:text-xl">
              <Star className="text-accent fill-accent" size={16} />
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-label">Community Voices</span>
          <h2 className="section-heading">What Parents & Alumni Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-md relative"
            >
              <Quote className="absolute top-6 right-6 text-gray-100" size={64} />
              
              <div className="flex gap-1 mb-6 text-accent">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="fill-accent" />
                ))}
              </div>
              
              <p className="text-textmuted text-sm leading-relaxed mb-6 relative z-10 italic">
                "{test.quote}"
              </p>
              
              <div className="pt-4 border-t border-gray-100">
                <p className="font-bold text-primary">{test.name}</p>
                <p className="text-xs text-textmuted">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
