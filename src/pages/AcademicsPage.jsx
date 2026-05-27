import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import CurriculumDetails from '../components/CurriculumDetails';
import ExtraCurricularDetails from '../components/ExtraCurricularDetails';
import ExaminationSystemDetails from '../components/ExaminationSystemDetails';
import pageBg from '../assets/17.jpeg';
import { BookOpen, Star, ShieldCheck, Target, PenTool, Layout, CheckCircle, 
  Laptop, FlaskConical, Languages, Trophy, 
  BrainCircuit, Users, Activity, Sparkles
} from 'lucide-react';

export default function AcademicsPage() {
  return (
    <>
      <Helmet>
        <title>Academics | St. Kanakadasa Educational Institutions</title>
        <meta name="description" content="Explore our qualitative attributes, student development programs, and examination system." />
      </Helmet>

      <PageHero 
        title="Academic Excellence" 
        description="Fostering intellectual growth through dynamic learning methodologies and comprehensive assessment systems."
        imagePlaceholder={pageBg}
      />

      {/* Academic Overview */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading mb-6">Academic Overview</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8 rounded-full" />
          <p className="text-textmuted leading-relaxed text-lg text-center">
            ST. Kanakadasa Educational Institutions follows a progressive academic system that combines traditional values with modern educational practices. The institution provides a well-structured curriculum supported by experienced faculty members, smart classrooms, practical learning methodologies, and continuous academic guidance. The academic environment is designed to nurture intellectual growth, creativity, confidence, communication skills, and leadership qualities among students.
          </p>
        </div>
      </section>

      <CurriculumDetails />

      {/* Academic Highlights / Teaching Methods */}
      <section className="py-20 bg-lightbg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label text-center mb-2">TEACHING METHODS</span>
            <h2 className="section-heading text-center">Academic Highlights</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <Laptop className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-bold text-primary mb-2">Smart Learning Methodology</h3>
              <p className="text-sm text-textmuted leading-relaxed">Interactive digital classrooms, audio-visual teaching aids, and technology-enabled education to enhance conceptual understanding.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <FlaskConical className="text-secondary mb-4" size={32} />
              <h3 className="text-lg font-bold text-primary mb-2">Practical & Concept-Based</h3>
              <p className="text-sm text-textmuted leading-relaxed">Laboratory sessions, demonstrations, projects, and real-life applications help students understand subjects deeply.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <Languages className="text-accent mb-4" size={32} />
              <h3 className="text-lg font-bold text-primary mb-2">Spoken English Development</h3>
              <p className="text-sm text-textmuted leading-relaxed">Emphasis through classroom interactions, public speaking, debates, and language improvement programs.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <Trophy className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-bold text-primary mb-2">Competitive Exam Preparation</h3>
              <p className="text-sm text-textmuted leading-relaxed">Guidance for competitive examinations through practice tests, aptitude development, and concept-based coaching.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <Layout className="text-secondary mb-4" size={32} />
              <h3 className="text-lg font-bold text-primary mb-2">Integrated NEET/JEE Coaching</h3>
              <p className="text-sm text-textmuted leading-relaxed">Expert faculty members provide structured preparation, study materials, and test series alongside regular academics.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <Star className="text-accent mb-4" size={32} />
              <h3 className="text-lg font-bold text-primary mb-2">Continuous Assessment</h3>
              <p className="text-sm text-textmuted leading-relaxed">Slip tests, weekly tests, monthly evaluations, oral assessments, and assignments to monitor academic progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualitative Attributes & Student Development */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label !text-accent text-center mb-2">HOLISTIC APPROACH</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Student Development</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
              <Sparkles className="text-accent mb-4" size={28} />
              <h3 className="font-bold text-accent mb-3">Child Interest in Creativity (CIIC)</h3>
              <p className="text-white/80 text-sm leading-relaxed text-justify">This program in our school has been designed to understand the inborn qualities of the child. This includes drawing, painting, origami, handwriting and speech. We encourage the students to flourish in their interests at the some time to be in pace with academics.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
              <BookOpen className="text-accent mb-4" size={28} />
              <h3 className="font-bold text-accent mb-3">Entrance Exams</h3>
              <p className="text-white/80 text-sm leading-relaxed text-justify">Regular academic activities also includes out of the box knowledge and creativity. We motivate the students to think and apply to solve the problems. This approach is better for them to gear up for their entrance exams. Individual exams are conducted every Saturday in all the subjects</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
              <Users className="text-accent mb-4" size={28} />
              <h3 className="font-bold text-accent mb-3">Leadership Development</h3>
              <p className="text-white/80 text-sm leading-relaxed text-justify">The institution provides various opportunities for students to develop leadership qualities, responsibility, teamwork, and decision-making skills through academic activities, group projects, competitions, and club participation. Students are guided to become confident and responsible future leaders.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
              <Star className="text-accent mb-4" size={28} />
              <h3 className="font-bold text-accent mb-3">Personality Development</h3>
              <p className="text-white/80 text-sm leading-relaxed text-justify">Special programs are conducted to improve students’ confidence, discipline, communication abilities, positive attitude, grooming, and social behaviour. Personality development activities help students build self-esteem and prepare them for future challenges.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
              <Languages className="text-accent mb-4" size={28} />
              <h3 className="font-bold text-accent mb-3">Communication Skills</h3>
              <p className="text-white/80 text-sm leading-relaxed text-justify">The institution gives strong importance to communication skill development through spoken English practice, classroom discussions, presentations, debates, interactive sessions, and public speaking activities. Students are encouraged to communicate confidently and effectively.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
              <PenTool className="text-accent mb-4" size={28} />
              <h3 className="font-bold text-accent mb-3">Creativity Enhancement</h3>
              <p className="text-white/80 text-sm leading-relaxed text-justify">Creative thinking and innovation are promoted through art, craft, music, projects, competitions, activity-based learning, and practical exposure. Students are motivated to think independently and express their ideas creatively.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
              <Activity className="text-accent mb-4" size={28} />
              <h3 className="font-bold text-accent mb-3">Public Speaking Activities</h3>
              <p className="text-white/80 text-sm leading-relaxed text-justify">Students are regularly encouraged to participate in speeches, seminars, extempore, storytelling, presentations, and stage programs to improve confidence, leadership qualities, and effective communication skills.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
              <ShieldCheck className="text-accent mb-4" size={28} />
              <h3 className="font-bold text-accent mb-3">Value-Based Education</h3>
              <p className="text-white/80 text-sm leading-relaxed text-justify">The institution follows a value-based educational system that promotes honesty, discipline, respect, compassion, responsibility, and ethical behaviour. Students are guided to become responsible citizens with strong moral values.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
              <BookOpen className="text-accent mb-4" size={28} />
              <h3 className="font-bold text-accent mb-3">Spiritual & Moral Discipline</h3>
              <p className="text-white/80 text-sm leading-relaxed text-justify">Spiritual awareness and moral discipline are integrated into the educational environment to help students develop positive attitudes, self-control, humility, and respect towards others while maintaining emotional balance and inner confidence.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
              <BrainCircuit className="text-accent mb-4" size={28} />
              <h3 className="font-bold text-accent mb-3">Independent Thinking Development</h3>
              <p className="text-white/80 text-sm leading-relaxed text-justify">The institution encourages students to think independently, analyze situations critically, solve problems creatively, and make responsible decisions through practical learning methods and interactive academic activities.</p>
            </div>
          </div>
        </div>
      </section>

      <ExtraCurricularDetails />
      <ExaminationSystemDetails />
    </>
  );
}
