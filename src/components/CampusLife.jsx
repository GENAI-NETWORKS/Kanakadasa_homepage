import { motion } from "framer-motion";
import img1 from "../assets/2.jpeg";
import img2 from "../assets/6.jpeg";
import img3 from "../assets/7.jpeg";
import img4 from "../assets/10.jpeg";
import img5 from "../assets/18.jpeg";
import img6 from "../assets/26.jpeg";
import img7 from "../assets/31.jpeg";
import img8 from "../assets/13.jpeg";
import sdImg1 from "../assets/7.jpeg";
import sdImg2 from "../assets/45.jpeg";
import sdImg3 from "../assets/41.jpeg";
import sdImg4 from "../assets/23.jpeg";
import sdImg5 from "../assets/36.jpeg";
import sdImg6 from "../assets/35.jpeg";

const photos = [
  { src: img1, caption: "Morning Assembly", color: "#1A237E" },
  { src: img2, caption: "Flag Ceremony",    color: "#FF6F00" },
  { src: img3, caption: "Classical Dance",  color: "#C62828" },
  { src: img4, caption: "Award Ceremony",   color: "#6A1B9A" },
  { src: img5, caption: "House Captains",   color: "#F9A825" },
  { src: img6, caption: "Leadership Day",   color: "#00695C" },
  { src: img7, caption: "Cultural Night",   color: "#C62828" },
  { src: img8, caption: "School Day",       color: "#0277BD" },
  { src: sdImg1, caption: "Classical Dance", color: "#C62828" },
  { src: sdImg2, caption: "Cultural Night", color: "#6A1B9A" },
  { src: sdImg3, caption: "Creative Arts", color: "#FF6F00" },
  { src: sdImg4, caption: "Teamwork & Sports", color: "#1A237E" },
  { src: sdImg5, caption: "Competitions", color: "#00695C" },
  { src: sdImg6, caption: "Celebrations", color: "#F9A825" },
];

// Duplicate the array to create a seamless infinite loop
const carouselPhotos = [...photos, ...photos];

const counters = [
  { val: "4+",   label: "Campus Buildings",  color: "#0277BD" },
  { val: "10+",  label: "Clubs & Activities", color: "#FF6F00" },
  { val: "500+", label: "Events Annually",    color: "#C62828" },
  { val: "20+",  label: "Years of Legacy",    color: "#1B5E20" },
];

export default function CampusLife() {
  return (
    <section id="campus" className="relative py-14 overflow-hidden bg-[#0D1B6E]">

      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "#FF6F00" }} />

      <div className="relative z-10 w-full">

        {/* Header (Centered) */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16 px-4">
          <p className="text-[#FF6F00] text-xs font-bold uppercase tracking-[0.25em] mb-3 flex items-center justify-center gap-3">
            <span className="w-10 h-px bg-[#FF6F00]/50" />Campus Life<span className="w-10 h-px bg-[#FF6F00]/50" />
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            Life at <span className="text-gradient-saffron animated-underline">St. Kanakadasa</span>
          </h2>
        </motion.div>

        {/* ── Infinite Horizontal Marquee Carousel ── */}
        <div className="relative w-full overflow-hidden flex items-center mb-20 py-4">
          
          {/* Gradient fading edges for smooth enter/exit */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0D1B6E] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0D1B6E] to-transparent z-20 pointer-events-none" />

          {/* Scrolling Track */}
          <motion.div
            className="flex gap-6 pl-6 w-max"
            animate={{ x: ["0%", "-50%"] }} // Scroll exactly half of the total combined width
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {carouselPhotos.map((photo, i) => (
              <div 
                key={i} 
                className="relative shrink-0 w-72 sm:w-80 h-[400px] rounded-3xl overflow-hidden shadow-2xl group border border-white/10"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B6E]/90 via-[#0D1B6E]/20 to-transparent" />
                
                {/* Top color bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: photo.color }} />

                {/* Caption */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="w-8 h-1 rounded-full mb-3" style={{ background: photo.color }} />
                  <h4 className="text-white text-xl font-bold font-heading">
                    {photo.caption}
                  </h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stat badges */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {counters.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -4 }}
                className="rounded-2xl p-5 sm:p-8 text-center border border-white/10 cursor-default shadow-xl"
                style={{ background: `${s.color}22` }}
              >
                <p className="text-4xl font-black font-heading" style={{ color: s.color }}>{s.val}</p>
                <p className="text-white/70 text-[10px] sm:text-xs uppercase tracking-widest font-bold mt-2">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
