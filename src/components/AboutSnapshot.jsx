import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80&auto=format&fit=crop",
    alt: "St. Kanakadasa School building exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80&auto=format&fit=crop",
    alt: "Students studying in classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80&auto=format&fit=crop",
    alt: "Modern digital classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&q=80&auto=format&fit=crop",
    alt: "Well-stocked school library",
  },
];

export default function AboutSnapshot() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Who We Are</span>
            <h2 className="section-heading mb-6">
              A Legacy of Learning in the Heart of Bargur
            </h2>

            <div className="space-y-4 text-textmuted leading-relaxed text-justify">
              <p>
                Founded over three decades ago, St. Kanakadasa Educational
                Institutions has grown into one of Tamil Nadu's most respected
                academic centres. Situated in the serene environs of Ammeri,
                Bargur, our campus nurtures holistic growth - intellectual,
                moral, and spiritual - in every student.
              </p>
              <p>
                We bring together a team of highly qualified, dedicated faculty
                who use modern pedagogical techniques alongside digital smart
                classrooms to make learning engaging and effective. Our dual
                board offering - CBSE Senior Secondary and Matriculation Higher
                Secondary - ensures every student has the right academic pathway.
              </p>
              <p>
                Rooted in spiritual discipline and guided by the principles of
                Sri Kanakadasa, our institution fosters values of compassion,
                integrity, and excellence. From Pre-KG to Class XII, every child
                here is a future leader in the making.
              </p>
            </div>

            {/* Pull quote */}
            <div className="relative mt-8 pl-6 border-l-4 border-accent bg-lightbg rounded-r-xl py-4 pr-4">
              <Quote className="absolute -top-3 -left-3 text-accent bg-white rounded-full p-1" size={28} />
              <p className="font-heading text-lg italic text-primary font-medium">
                "Intelligence plus character is the goal of true education."
              </p>
              <p className="mt-2 text-sm text-textmuted font-semibold">- Martin Luther King Jr.</p>
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors duration-200 group"
            >
              Read Our Full Story
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Right: Image mosaic */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {images.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl shadow-lg card-hover ${
                  i === 0 ? "row-span-1" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
