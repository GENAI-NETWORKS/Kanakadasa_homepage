import { motion } from "framer-motion";
import img1 from "../assets/7.jpeg";
import img2 from "../assets/31.jpeg";
import img3 from "../assets/41.jpeg";
import img4 from "../assets/22.jpeg";
import img5 from "../assets/42.jpeg";
import img6 from "../assets/43.jpeg";

const activities = [
  { img: img1, label: "Classical Dance", color: "#C62828", desc: "Preserving cultural heritage through disciplined training in traditional dance forms, enhancing grace and focus." },
  { img: img2, label: "Cultural Night", color: "#6A1B9A", desc: "Annual celebrations that provide a grand stage for students to showcase their artistic talents and build confidence." },
  { img: img3, label: "Creative Arts", color: "#FF6F00", desc: "Encouraging imagination and self-expression through painting, crafts, and various artistic mediums." },
  { img: img4, label: "Teamwork & Sports", color: "#1A237E", desc: "Building leadership, cooperation, and physical fitness through organized team activities and sports." },
  { img: img5, label: "Competitions", color: "#00695C", desc: "Fostering a healthy competitive spirit and intellectual growth through debates, quizzes, and olympiads." },
  { img: img6, label: "Celebrations", color: "#F9A825", desc: "Creating joyful memories and a sense of community by celebrating festivals and special occasions together." },
];

export default function StudentDevelopment() {
  return (
    <section id="development" className="relative py-24 overflow-hidden bg-gray-50">

      {/* Decorative background typography */}
      <div className="absolute top-40 left-0 text-[15vw] font-black text-gray-200/40 select-none pointer-events-none font-heading whitespace-nowrap">
        GROWTH
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <span className="section-label block text-center">Student Growth</span>
          <h2 className="section-heading text-center">
            Beyond the <span className="text-gradient animated-underline">Classroom</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base font-sans">
            Arts, sports, leadership, and culture. We provide diverse platforms for every child to discover their unique spark.
          </p>
        </motion.div>

        {/* ── Alternating Zig-Zag Layout ── */}
        <div className="space-y-24 lg:space-y-32">
          {activities.map((a, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}>

                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="w-full lg:w-3/5 relative"
                >
                  {/* Decorative offset box */}
                  <div
                    className={`absolute inset-0 rounded-3xl ${isEven ? "-translate-x-4 translate-y-4" : "translate-x-4 translate-y-4"}`}
                    style={{ background: a.color + "22" }}
                  />

                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                    <img
                      src={a.img}
                      alt={a.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Floating Number */}
                  <div
                    className={`absolute top-8 ${isEven ? "-right-6" : "-left-6"} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-xl z-10 border-4 border-white`}
                    style={{ background: a.color }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="w-full lg:w-2/5 flex flex-col justify-center"
                >
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-8 h-1 rounded-full" style={{ background: a.color }} />
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-500">Activity {i + 1}</span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-black font-heading text-gray-900 mb-6 leading-tight">
                    {a.label}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed font-sans mb-8">
                    {a.desc}
                  </p>

                  <button
                    className="self-start text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
                    style={{ color: a.color }}
                  >
                    Learn More →
                  </button>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
