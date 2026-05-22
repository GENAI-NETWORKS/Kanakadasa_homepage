import { Trophy, Star, Medal, BookOpen, Target, Flag, Award } from "lucide-react";

export default function AchievementsDetails() {
  return (
    <section className="py-20 bg-lightbg border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="section-label !text-accent text-center mb-2">MILESTONES</span>
          <h2 className="section-heading text-center">Achievements & Highlights</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <Trophy className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Academic Excellence</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The institution consistently maintains high academic standards through disciplined learning practices, excellent teaching methodologies, continuous assessments, and student-centered education that promote outstanding academic performance.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <Star className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Student Achievements</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">Students of the institution actively participate and excel in academics, cultural activities, competitions, public speaking, arts, and co-curricular programs at various levels, bringing recognition and pride to the institution.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <Medal className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Sports Achievements</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The institution encourages active participation in sports and physical activities. Students have demonstrated excellence in indoor and outdoor games including volleyball, basketball, cricket, badminton, chess, martial arts, and athletics.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <BookOpen className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Competitive Exam Success</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The institution provides strong academic guidance and coaching support for competitive examinations including NEET and JEE. Students are trained through concept-based learning, practice sessions, and continuous evaluation methods.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <Flag className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Institutional Milestones</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">Over the years, the institution has achieved remarkable growth in academics, infrastructure, student development, and educational excellence while earning the trust and appreciation of parents and the educational community.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <Target className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Excellence in Education</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The institution is committed to delivering quality education through modern infrastructure, smart learning methodologies, value-based education, and holistic student development that prepare students for successful futures.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-3 lg:w-2/3 mx-auto">
            <Award className="text-accent mb-4 mx-auto" size={28} />
            <h3 className="font-bold text-primary mb-3 text-center">Leadership in Academics</h3>
            <p className="text-textmuted text-sm leading-relaxed text-center">With visionary leadership, dedicated faculty members, innovative academic practices, and a disciplined educational environment, the institution continues to establish itself as a center of academic excellence and student empowerment.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
