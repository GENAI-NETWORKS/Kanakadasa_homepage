import { CheckCircle } from "lucide-react";

export default function QuickHighlights() {
  const highlights = [
    "20+ Years of Educational Excellence",
    "Smart Interactive Classrooms",
    "Integrated NEET/JEE Coaching",
    "Modern Laboratories",
    "Experienced Faculty Team",
    "Holistic Development",
    "Transportation Facilities",
    "Safe Campus Environment",
    "Co-Curricular Activities",
    "Leadership-Oriented Education"
  ];

  return (
    <section className="py-12 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl border border-white/20 backdrop-blur-sm">
              <CheckCircle className="text-accent shrink-0" size={18} />
              <span className="text-white text-sm font-medium leading-tight">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
