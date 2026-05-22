import { Layout, CheckCircle } from "lucide-react";

export default function ExaminationSystemDetails() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="section-label text-center mb-2">ASSESSMENT</span>
          <h2 className="section-heading text-center">Examination System</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">CBSE & General Exams</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "First Mid Term", 
              "Quarterly Examination", 
              "Second Mid Term", 
              "Half yearly Examination", 
              "Third Mid Term", 
              "Annual Examination"
            ].map((exam, i) => (
              <div key={i} className="bg-lightbg py-4 px-4 sm:px-6 rounded-xl border border-gray-100 text-center font-bold text-primary shadow-sm flex flex-col sm:flex-row items-center justify-center gap-2 hover:-translate-y-1 transition-transform">
                 <CheckCircle size={18} className="text-accent shrink-0" /> 
                 <span className="text-sm sm:text-base">{exam}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-lightbg rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-3">Grading System</h3>
            <p className="text-textmuted text-sm leading-relaxed text-left">Grading will be done according to the school standards as prescribed by the Government.</p>
          </div>

          <div className="bg-lightbg rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-3">Assessments</h3>
            <p className="text-textmuted text-sm leading-relaxed text-left">Assessments are conducted periodically to understand the student's performance.</p>
          </div>

          <div className="bg-lightbg rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-3">Oral Tests</h3>
            <p className="text-textmuted text-sm leading-relaxed text-left">Oral tests are given more priority to improve their speaking and listening skills.</p>
          </div>

          <div className="bg-lightbg rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-3">Regular Tests</h3>
            <p className="text-textmuted text-sm leading-relaxed text-left">Apart from that, we do conduct slip tests, weekly tests and monthly tests on a regular basis.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
