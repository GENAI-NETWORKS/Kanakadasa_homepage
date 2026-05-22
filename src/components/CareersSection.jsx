import { Briefcase, Send } from "lucide-react";

export default function CareersSection() {
  return (
    <section id="careers" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label !text-accent text-center mb-2">JOIN OUR TEAM</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Careers at St. Kanakadasa</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg text-white/90 leading-relaxed mb-6">
            Highly qualified, dedicated teachers drawn from several cultures are a part of our faculty. The management is keen on conducting academic conferences and brainstorming sessions to develop the faculty in various areas.
          </p>
          <p className="text-lg text-white/90 leading-relaxed mb-8">
            By fostering continuous learning, the members of our faculty can accept any challenge that is likely to arise at any time. If you are passionate about education and shaping young minds, we would love to hear from you.
          </p>
          
          <div className="flex justify-center mt-10">
            <a href="mailto:kanakadasaschool@gmail.com" className="inline-flex items-center gap-2 bg-accent text-white font-bold px-8 py-4 rounded-xl hover:brightness-110 text-white transition-colors shadow-lg">
              <Send size={20} /> Email Your Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
