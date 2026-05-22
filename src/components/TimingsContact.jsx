import { Clock, Users, Building } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Clock,
    title: "School Timings",
    color: "text-primary",
    bgColor: "bg-primary/10",
    details: [
      { label: "LKG & UKG", value: "Mon–Fri: 8:45 AM – 3:30 PM" },
      { label: "Class I to XII", value: "Mon–Sat: 8:45 AM – 3:30 PM" },
    ],
  },
  {
    icon: Users,
    title: "Meeting Hours",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    details: [
      { label: "Correspondent", value: "Mon–Fri: 10:00 AM – 12:00 PM (By Appt.)" },
      { label: "Principal", value: "Mon–Sat: 4:00 PM – 5:00 PM" },
      { label: "Teachers", value: "Every Saturday: 2:00 PM – 3:00 PM" },
    ],
  },
  {
    icon: Building,
    title: "Office Hours",
    color: "text-accent",
    bgColor: "bg-accent/10",
    details: [
      { label: "General Office", value: "Mon–Sat: 8:45 AM – 4:30 PM" },
      { label: "Admissions Office", value: "Mon–Sat: 9:00 AM – 4:00 PM" },
    ],
  },
];

export default function TimingsContact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-lightbg rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${card.bgColor}`}>
                <card.icon className={card.color} size={24} />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-5 border-b border-gray-200 pb-3">
                {card.title}
              </h3>
              <div className="space-y-4 text-sm">
                {card.details.map((detail, idx) => (
                  <div key={idx}>
                    <p className="font-semibold text-gray-900">{detail.label}</p>
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
