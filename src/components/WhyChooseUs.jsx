import { CheckCircle2, ShieldCheck, Heart } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    "20+ Years of Educational Excellence",
    "Experienced & Dedicated Faculty Team",
    "Smart Digital Classrooms",
    "Student-Centric Learning Approach",
    "Integrated NEET/JEE Coaching Support",
    "Well-Equipped Science & Computer Laboratories",
    "Strong Academic Monitoring System",
    "Spoken English & Communication Skill Development",
    "Practical & Concept-Based Learning",
    "Individual Attention for Every Student",
    "Safe & Secure Campus Environment",
    "Value-Based & Discipline-Oriented Education",
    "Excellent Sports & Co-Curricular Activities",
    "Creative & Leadership Development Programs",
    "Transportation Facilities Across Surrounding Areas",
    "Holistic Development Through Clubs & Activities",
    "Modern Teaching Methodologies",
    "Parent-Friendly Academic Support System",
    "Focus on Moral, Ethical & Spiritual Values",
    "Future-Ready Academic Environment for Global Success"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Choose Us Intro */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="section-label text-center mb-2">OUR STRENGTHS</span>
          <h2 className="section-heading text-center">Why Choose Us</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 mb-8 rounded-full" />
          <p className="text-textmuted leading-relaxed text-justify sm:text-center text-base sm:text-lg">
            ST. Kanakadasa Educational Institutions is committed to nurturing young minds through quality education, discipline, innovation, and holistic development. The institution provides a safe, student-friendly, and future-focused learning environment that empowers students to achieve academic excellence and personal success.
          </p>
        </div>

        {/* Why Parents & Students Choose Us */}
        <div className="bg-lightbg rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-sm">
          <h3 className="text-2xl font-bold text-primary font-heading mb-8 flex items-center justify-center gap-3">
            <Heart className="text-accent" /> Why Parents & Students Choose Us
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-8 max-w-5xl mx-auto">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                <span className="text-textdark font-medium leading-relaxed">{reason}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
