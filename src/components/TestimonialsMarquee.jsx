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
    avatar: "RK",
    color: "from-primary to-[#2D6A4F]",
    quote: "The teachers at St. Kanakadasa go above and beyond. My son has shown remarkable improvement not just in academics but in discipline and confidence. The smart classrooms make a real difference.",
  },
  {
    name: "Priya S.",
    role: "Alumna (Batch of 2018)",
    avatar: "PS",
    color: "from-accent to-[#c0272f]",
    quote: "The foundation I received here shaped my entire career. The focus on holistic development and the encouragement from the faculty gave me the confidence to pursue engineering at a top university.",
  },
  {
    name: "Karthik M.",
    role: "Parent of Class XII Student",
    avatar: "KM",
    color: "from-secondary to-[#e8882a]",
    quote: "We chose this school for its integrated NEET coaching. The structured approach means my daughter doesn't need to run to separate tuition classes. Everything is handled brilliantly by the school staff.",
  },
];

export default function TestimonialsMarquee() {
  return (
    <section className="relative py-24 bg-lightbg overflow-hidden">
      {/* Large faded background quote mark pattern */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[32rem] font-serif text-primary/[0.03] leading-none select-none">"</span>
      </div>
      {/* Secondary quote on right */}
      <div className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden">
        <span className="text-[20rem] font-serif text-accent/[0.04] leading-none select-none">"</span>
      </div>

      {/* Top gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

      {/* Auto-scrolling Achievement Ticker */}
      <div className="relative flex overflow-x-hidden bg-primary py-4 mb-20 shadow-md">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 px-6">
          {[...achievements, ...achievements, ...achievements].map((text, i) => (
            <span key={i} className="flex items-center gap-3 text-white font-heading font-bold text-lg md:text-xl">
              <Star className="text-secondary fill-secondary" size={16} />
              {text}
            </span>
          ))}
        </div>
        <div className="absolute top-4 animate-marquee2 whitespace-nowrap flex items-center gap-12 px-6">
          {[...achievements, ...achievements, ...achievements].map((text, i) => (
            <span key={i} className="flex items-center gap-3 text-white font-heading font-bold text-lg md:text-xl">
              <Star className="text-secondary fill-secondary" size={16} />
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-label">Community Voices</span>
          <h2 className="section-heading">What Parents &amp; Alumni Say</h2>
          <div className="w-14 h-1 bg-accent mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group hover:-translate-y-1"
            >
              {/* Large faded quote */}
              <Quote className="absolute top-4 right-4 text-gray-100 group-hover:text-gray-200 transition-colors" size={72} />

              {/* Stars */}
              <div className="flex gap-1 mb-5 text-secondary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="fill-secondary" />
                ))}
              </div>

              <p className="text-textmuted text-sm leading-relaxed mb-6 relative z-10 italic">
                "{test.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${test.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {test.avatar}
                </div>
                <div>
                  <p className="font-bold text-primary text-sm">{test.name}</p>
                  <p className="text-xs text-textmuted">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
