import { CheckCircle2, BookOpen } from "lucide-react";

export default function CurriculumDetails() {
  return (
    <section className="py-20 bg-lightbg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Curriculum Structure */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-primary font-heading mb-4">Curriculum Structure</h2>
          <p className="text-textmuted leading-relaxed text-justify">
            The curriculum is carefully designed to ensure balanced academic development, conceptual understanding, skill enhancement, and holistic learning. The institution follows a structured educational framework from Pre-KG to Higher Secondary levels with emphasis on academics, co-curricular activities, communication skills, discipline, and value-based education.
          </p>
        </div>

        {/* Education Levels */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2"><BookOpen className="text-accent" size={20} /> Pre-KG to Kindergarten Education</h3>
            <ul className="space-y-2">
              {["Activity-based learning methodology", "Phonics and language development", "Rhymes, storytelling, and creative activities", "Basic numeracy and communication skills", "Smart classroom learning support", "Individual care and attention", "Fun-filled learning environment", "Social and emotional skill development", "Drawing, colouring, and craft activities", "Play-way learning approach"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-textmuted text-sm"><CheckCircle2 className="text-accent shrink-0 mt-0.5" size={16} /> {item}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2"><BookOpen className="text-primary" size={20} /> Primary School Education</h3>
            <ul className="space-y-2">
              {["Strong foundation in core subjects", "Interactive and student-friendly teaching", "Reading and writing skill development", "Spoken English practice", "Activity-oriented classroom sessions", "Smart learning techniques", "Regular assessments and evaluations", "Moral and value-based education", "Creativity and communication enhancement", "Co-curricular participation opportunities"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-textmuted text-sm"><CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} /> {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2"><BookOpen className="text-secondary" size={20} /> Middle School Education</h3>
            <ul className="space-y-2">
              {["Concept-based academic learning", "Practical and analytical skill development", "Subject-oriented classroom teaching", "Science and computer exposure", "Project-based learning activities", "Leadership and teamwork development", "Communication and presentation skills", "Regular tests and performance monitoring", "Club activities and competitions", "Personality development programs"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-textmuted text-sm"><CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={16} /> {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2"><BookOpen className="text-accent" size={20} /> High School Education</h3>
            <ul className="space-y-2">
              {["Board examination focused training", "Concept-oriented teaching methodology", "Intensive academic coaching", "Subject-wise special guidance", "Regular unit tests and assessments", "Career awareness programs", "Practical laboratory sessions", "Spoken English and communication training", "Time management and study skills", "Discipline and leadership development"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-textmuted text-sm"><CheckCircle2 className="text-accent shrink-0 mt-0.5" size={16} /> {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2"><BookOpen className="text-primary" size={20} /> Higher Secondary Education</h3>
            <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-6">
              {["Science and Commerce group options", "Integrated NEET/JEE coaching support", "Career-oriented academic training", "Advanced laboratory facilities", "Competitive examination preparation", "Expert faculty guidance", "Individual academic mentoring", "Practical and application-based learning", "Higher education counselling", "Future-ready skill development"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-textmuted text-sm"><CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} /> {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Methodologies */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-4">Smart Learning Methodology</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The institution adopts modern smart learning methodologies using interactive digital classrooms, audio-visual teaching aids, presentations, and technology-enabled education. Smart learning enhances conceptual understanding, student participation, and classroom engagement.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-4">Practical & Concept-Based Learning</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The institution strongly believes in practical and concept-oriented education. Laboratory sessions, demonstrations, projects, experiments, activity-based teaching, and real-life applications help students understand subjects deeply and improve analytical thinking abilities.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-4">Continuous Assessment System</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">Continuous assessments are conducted through slip tests, weekly tests, monthly evaluations, oral assessments, assignments, and internal examinations. This system helps monitor academic progress, identify learning gaps, and provide timely academic support to students.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-4">Spoken English Development</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">Special emphasis is given to spoken English and communication skill development through classroom interactions, public speaking activities, presentations, debates, and language improvement programs. Students are encouraged to communicate confidently in English within the campus environment.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-4">Competitive Exam Preparation</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The institution provides continuous guidance and foundation training for competitive examinations through regular practice tests, analytical problem-solving sessions, aptitude development, and concept-based coaching methodologies.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-4">Integrated NEET/JEE Coaching</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">Integrated NEET and JEE coaching programs are designed to prepare students for medical and engineering entrance examinations alongside regular academics. Expert faculty members provide structured preparation, study materials, test series, and performance evaluation for competitive success.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-4">Digital Learning Environment</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The institution provides a modern digital learning environment supported by smart interactive boards, digital resources, e-learning materials, and technology-integrated classrooms that enhance learning effectiveness and academic engagement.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-4">Academic Performance Monitoring</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">Student academic performance is continuously monitored through regular evaluations, parent interactions, counselling sessions, progress tracking, and personalized mentoring. The institution ensures that every student receives proper guidance and support for academic improvement and overall development.</p>
          </div>
        </div>

        {/* Courses & Groups Offered */}
        <div className="text-center mt-12 mb-8">
          <h2 className="section-heading mb-4">Courses & Groups Offered</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-3">Pre-KG & Kindergarten Curriculum</h3>
            <p className="text-sm text-textmuted mb-4 leading-relaxed text-justify">The Kindergarten curriculum is designed to create a joyful and engaging learning experience that develops communication, creativity, social interaction, and foundational academic skills in young learners.</p>
            <h4 className="font-bold text-textdark mb-2 text-sm">Subjects & Activities:</h4>
            <ul className="grid grid-cols-2 gap-2">
              {["Tamil", "English", "Mathematics", "EVS", "Rhymes & Storytelling", "Hindi", "Drawing & Craft", "Computer Basics", "Activity-Based Learning", "Play-Way Learning"].map((s, i) => <li key={i} className="text-xs text-textmuted flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>{s}</li>)}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-3">Primary School Subjects</h3>
            <p className="text-sm text-textmuted mb-4 leading-relaxed text-justify">The Primary School curriculum focuses on building strong academic foundations, communication skills, creativity, and conceptual understanding through interactive learning methodologies.</p>
            <h4 className="font-bold text-textdark mb-2 text-sm">Subjects Offered:</h4>
            <ul className="grid grid-cols-2 gap-2">
              {["Tamil", "English", "Mathematics", "EVS", "Hindi", "General Knowledge", "Drawing", "Computer Science", "Moral Education", "Spoken English Activities"].map((s, i) => <li key={i} className="text-xs text-textmuted flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>{s}</li>)}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-3">Middle School Subjects</h3>
            <p className="text-sm text-textmuted mb-4 leading-relaxed text-justify">The Middle School curriculum encourages analytical thinking, creativity, practical understanding, and academic discipline while preparing students for higher levels of learning.</p>
            <h4 className="font-bold text-textdark mb-2 text-sm">Subjects Offered:</h4>
            <ul className="grid grid-cols-2 gap-2">
              {["Tamil", "English", "Mathematics", "Science", "Social Science", "Hindi", "Computer Science", "General Knowledge", "Drawing & Creative Activities", "Communication Skill Development"].map((s, i) => <li key={i} className="text-xs text-textmuted flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>{s}</li>)}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-3">High School Subjects</h3>
            <p className="text-sm text-textmuted mb-4 leading-relaxed text-justify">The High School curriculum is structured to provide strong conceptual understanding, board examination preparation, and skill-oriented academic development.</p>
            <h4 className="font-bold text-textdark mb-2 text-sm">Subjects Offered:</h4>
            <ul className="grid grid-cols-2 gap-2">
              {["Tamil", "English", "Mathematics", "Science", "Social Science", "Computer Science", "Spoken English", "Value Education", "Practical Learning Sessions", "Competitive Exam Foundation Training"].map((s, i) => <li key={i} className="text-xs text-textmuted flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>{s}</li>)}
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mt-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">Higher Secondary Groups</h3>
            <p className="text-sm text-textmuted max-w-2xl mx-auto leading-relaxed text-center">The Higher Secondary section offers carefully designed academic streams that prepare students for higher education, professional careers, and competitive examinations.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-lightbg p-6 rounded-xl border border-gray-100">
              <h4 className="font-bold text-primary mb-4">Biology with Computer Science</h4>
              <ul className="space-y-2">
                {["Physics", "Chemistry", "Biology", "Computer Science", "Focus on Medical & Technology Careers", "NEET Foundation Support"].map((s, i) => <li key={i} className="text-xs text-textmuted flex items-start gap-2"><CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={14} />{s}</li>)}
              </ul>
            </div>
            <div className="bg-lightbg p-6 rounded-xl border border-gray-100">
              <h4 className="font-bold text-primary mb-4">Biology with Mathematics</h4>
              <ul className="space-y-2">
                {["Physics", "Chemistry", "Biology", "Mathematics", "Suitable for Medical & Research Fields", "Analytical & Scientific Skill Development"].map((s, i) => <li key={i} className="text-xs text-textmuted flex items-start gap-2"><CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={14} />{s}</li>)}
              </ul>
            </div>
            <div className="bg-lightbg p-6 rounded-xl border border-gray-100">
              <h4 className="font-bold text-primary mb-4">Computer Science with Mathematics</h4>
              <ul className="space-y-2">
                {["Physics", "Chemistry", "Computer Science", "Mathematics", "Strong Foundation for Engineering & IT Careers", "Programming & Technical Skill Development"].map((s, i) => <li key={i} className="text-xs text-textmuted flex items-start gap-2"><CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={14} />{s}</li>)}
              </ul>
            </div>
            <div className="bg-lightbg p-6 rounded-xl border border-gray-100">
              <h4 className="font-bold text-primary mb-4">Commerce Group</h4>
              <ul className="space-y-2">
                {["Commerce", "Economics", "Accountancy", "Computer Applications", "Business & Financial Knowledge", "Entrepreneurial Skill Development", "Career Preparation for Commerce & Management Fields"].map((s, i) => <li key={i} className="text-xs text-textmuted flex items-start gap-2"><CheckCircle2 className="text-accent shrink-0 mt-0.5" size={14} />{s}</li>)}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
