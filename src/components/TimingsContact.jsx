import { Clock, Users, Building } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Clock,
    title: "School Timings",
    accentColor: "#1A472A",
    bgGradient: "from-[#1A472A] to-[#2D6A4F]",
    details: [
      { label: "LKG & UKG", value: "Mon-Fri: 8:45 AM - 3:30 PM" },
      { label: "Class I to XII", value: "Mon-Sat: 8:45 AM - 3:30 PM" },
    ],
  },
  {
    icon: Users,
    title: "Meeting Hours",
    accentColor: "#E63946",
    bgGradient: "from-[#E63946] to-[#c0272f]",
    details: [
      { label: "Correspondent", value: "Mon-Fri: 10:00 AM - 12:00 PM (By Appt.)" },
      { label: "Principal", value: "Mon-Sat: 4:00 PM - 5:00 PM" },
      { label: "Teachers", value: "Every Saturday: 2:00 PM - 3:00 PM" },
    ],
  },
  {
    icon: Building,
    title: "Office Hours",
    accentColor: "#F4A261",
    bgGradient: "from-[#F4A261] to-[#e8882a]",
    details: [
      { label: "General Office", value: "Mon-Sat: 8:45 AM - 4:30 PM" },
      { label: "Admissions Office", value: "Mon-Sat: 9:00 AM - 4:00 PM" },
    ],
  },
];

export default function TimingsContact() {
  return (
    <section className="relative py-12 bg-white overflow-hidden">
      {/* Striped pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(26,71,42,0.05) 24px, rgba(26,71,42,0.05) 25px), repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(26,71,42,0.05) 24px, rgba(26,71,42,0.05) 25px)"
        }}
      />

      {/* Section header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-label">Timings</span>
          <h2 className="section-heading">School Hours & Schedules</h2>
          <div className="w-14 h-1 bg-accent mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
            >
              {/* Gradient top header */}
              <div className={`bg-gradient-to-r ${card.bgGradient} px-6 py-5 flex items-center gap-4`}>
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <card.icon className="text-white" size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-white">{card.title}</h3>
              </div>

              {/* Details */}
              <div className="px-6 py-6 space-y-4 text-sm">
                {card.details.map((detail, idx) => (
                  <div key={idx} className="flex flex-col gap-0.5 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <p className="font-bold text-primary">{detail.label}</p>
                    <p className="text-textmuted">{detail.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
