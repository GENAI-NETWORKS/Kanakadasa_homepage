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
    <section className="relative py-14 bg-accent overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-primary/20 blur-3xl" />
        {/* Diagonal stripe overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(255,255,255,0.4) 12px, rgba(255,255,255,0.4) 24px)"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-white/80 text-xs font-bold uppercase tracking-widest text-center mb-6 flex items-center justify-center gap-3">
          <span className="w-12 h-px bg-white/40" />
          Why We Stand Out
          <span className="w-12 h-px bg-white/40" />
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/15 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/25 hover:bg-white/25 transition-all duration-300 hover:-translate-y-0.5 cursor-default"
            >
              <CheckCircle className="text-white shrink-0" size={16} />
              <span className="text-white text-sm font-semibold leading-tight">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
