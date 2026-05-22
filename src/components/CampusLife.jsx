import { motion } from "framer-motion";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/6.jpeg";
import img3 from "../assets/7.jpeg";
import img4 from "../assets/10.jpeg";
import img5 from "../assets/18.jpeg";
import img6 from "../assets/23.jpeg";
import img7 from "../assets/31.jpeg";
import img8 from "../assets/13.jpeg";

const photos = [
  { src: img1, caption: "Morning Assembly", span: "col-span-2 row-span-2" },
  { src: img2, caption: "Flag Ceremony", span: "" },
  { src: img3, caption: "Classical Dance", span: "" },
  { src: img4, caption: "Award Ceremony", span: "" },
  { src: img5, caption: "House Captains", span: "" },
  { src: img6, caption: "Leadership Day", span: "" },
  { src: img7, caption: "Cultural Night", span: "col-span-2" },
  { src: img8, caption: "School Celebration", span: "" },
];

export default function CampusLife() {
  return (
    <section id="campus" className="relative py-24 overflow-hidden bg-[#FFF8F0]">

      {/* ── Left diagonal accent ── */}
      <div
        className="absolute top-0 left-0 h-full w-[28%] bg-[#1A472A]/4 pointer-events-none"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 70% 100%, 0% 100%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label text-center block">Campus Life</span>
          <h2 className="section-heading text-center">
            Life at <span className="text-[#E63946]">St. Kanakadasa</span>
          </h2>
          <p className="text-textmuted mt-4 max-w-xl mx-auto text-sm sm:text-base font-sans">
            Every corner of our campus tells a story - of discipline, celebration, creativity, and unforgettable learning experiences that shape future leaders.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-1 w-12 rounded-full bg-[#E63946]" />
            <div className="h-1 w-4 rounded-full bg-[#F4A261]" />
          </div>
        </motion.div>

        {/* ── Photo masonry grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:z-10 transition-all duration-300 ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-xs font-semibold font-sans uppercase tracking-wider">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stat badges below grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          {[
            { val: "4+", label: "Campus Buildings" },
            { val: "10+", label: "Clubs & Activities" },
            { val: "500+", label: "Events Annually" },
            { val: "20+", label: "Years of Legacy" },
          ].map((stat) => (
            <div
              key={stat.val}
              className="flex items-center gap-3 bg-white rounded-full px-5 py-2.5 shadow-md border border-gray-100"
            >
              <span className="font-heading font-bold text-[#E63946] text-lg">{stat.val}</span>
              <span className="text-xs text-gray-500 font-sans uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
