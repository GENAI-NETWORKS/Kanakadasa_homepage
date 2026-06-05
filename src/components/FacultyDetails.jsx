import { GraduationCap, Lightbulb, UserCheck, Microscope, MonitorPlay, Presentation, Users, Focus } from "lucide-react";

export default function FacultyDetails() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="section-label text-center mb-2">EDUCATORS</span>
          <h2 className="section-heading text-center">Faculty & Teaching Methodology</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-lightbg p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <GraduationCap className="text-primary mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Highly Qualified Faculty</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">St. Kanakadasa Matriculation Hr.Sec.School is supported by a team of highly qualified, experienced, dedicated, and student-friendly faculty members committed to academic excellence and holistic student development. Teachers continuously guide and motivate students to achieve their highest potential through effective teaching and mentorship.</p>
          </div>

          <div className="bg-lightbg p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <Lightbulb className="text-primary mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Innovative Teaching Practices</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The institution adopts innovative teaching methodologies that make learning interactive, engaging, and concept-oriented. Activity-based learning, smart classroom sessions, practical demonstrations, presentations, and collaborative learning methods are integrated into classroom teaching.</p>
          </div>

          <div className="bg-lightbg p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <UserCheck className="text-primary mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Student-Centric Learning</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The institution follows a student-centered learning approach where equal importance is given to conceptual understanding, creativity, communication skills, analytical thinking, and personal growth. Teachers focus on individual learning needs and encourage active classroom participation.</p>
          </div>

          <div className="bg-lightbg p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <Microscope className="text-primary mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Experiential Learning</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">Experiential learning methods such as laboratory sessions, projects, demonstrations, field visits, group discussions, and practical activities help students gain hands-on knowledge and real-world understanding of concepts.</p>
          </div>

          <div className="bg-lightbg p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <MonitorPlay className="text-primary mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Digital Teaching Methods</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">Modern digital teaching techniques including smart interactive boards, audio-visual presentations, digital content, e-learning resources, and technology-enabled classrooms are used to enhance academic effectiveness and student engagement.</p>
          </div>

          <div className="bg-lightbg p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <Presentation className="text-primary mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Academic Conferences</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The institution regularly conducts academic meetings, workshops, brainstorming sessions, and educational discussions to improve teaching quality, curriculum planning, and academic performance standards.</p>
          </div>

          <div className="bg-lightbg p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <Users className="text-primary mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Faculty Development Programs</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">Faculty members are encouraged to participate in training programs, workshops, seminars, and skill enhancement activities to stay updated with modern educational methodologies, technological advancements, and innovative teaching practices.</p>
          </div>

          <div className="bg-lightbg p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <Focus className="text-primary mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Individual Attention System</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">Special attention is provided to every student to identify their strengths, learning abilities, and areas requiring improvement. Continuous mentoring, counselling, and academic support ensure better understanding, confidence, and overall development.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
