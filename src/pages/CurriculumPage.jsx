import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import pageBg from '../assets/14.jpeg';
import { 
  CheckCircle, GraduationCap, 
  FlaskConical, BookOpen, Sprout, Target, Activity, Palette, Gamepad2, BrainCircuit 
} from 'lucide-react';

const curriculumLevels = [
  {
    id: "pre-kg",
    title: "Pre-KG to Kindergarten",
    features: [
      "Activity-based learning methodology",
      "Phonics and language development",
      "Rhymes, storytelling, and creative activities",
      "Basic numeracy and communication skills",
      "Smart classroom learning support",
      "Individual care and attention",
      "Fun-filled learning environment",
      "Social and emotional skill development",
      "Drawing, colouring, and craft activities",
      "Play-way learning approach"
    ]
  },
  {
    id: "primary",
    title: "Primary School",
    features: [
      "Strong foundation in core subjects",
      "Interactive and student-friendly teaching",
      "Reading and writing skill development",
      "Spoken English practice",
      "Activity-oriented classroom sessions",
      "Smart learning techniques",
      "Regular assessments and evaluations",
      "Moral and value-based education",
      "Creativity and communication enhancement",
      "Co-curricular participation opportunities"
    ]
  },
  {
    id: "middle",
    title: "Middle School",
    features: [
      "Concept-based academic learning",
      "Practical and analytical skill development",
      "Subject-oriented classroom teaching",
      "Science and computer exposure",
      "Project-based learning activities",
      "Leadership and teamwork development",
      "Communication and presentation skills",
      "Regular tests and performance monitoring",
      "Club activities and competitions",
      "Personality development programs"
    ]
  },
  {
    id: "high",
    title: "High School",
    features: [
      "Board examination focused training",
      "Concept-oriented teaching methodology",
      "Intensive academic coaching",
      "Subject-wise special guidance",
      "Regular unit tests and assessments",
      "Career awareness programs",
      "Practical laboratory sessions",
      "Spoken English and communication training",
      "Time management and study skills",
      "Discipline and leadership development"
    ]
  },
  {
    id: "higher-secondary",
    title: "Higher Secondary",
    features: [
      "Science and Commerce group options",
      "Integrated NEET/JEE coaching support",
      "Career-oriented academic training",
      "Advanced laboratory facilities",
      "Competitive examination preparation",
      "Expert faculty guidance",
      "Individual academic mentoring",
      "Practical and application-based learning",
      "Higher education counselling",
      "Future-ready skill development"
    ]
  }
];

const clubs = [
  { icon: FlaskConical, name: "Science Club", desc: "Explore concepts, experiments, and innovative ideas." },
  { icon: BookOpen, name: "Literature Club", desc: "Improve reading, writing, speaking, and poetry skills." },
  { icon: Sprout, name: "Nature Club", desc: "Environmental awareness and conservation initiatives." },
  { icon: Target, name: "Heritage Club", desc: "Understand cultural traditions and national heritage." },
  { icon: Activity, name: "Wellness Club", desc: "Promotes physical fitness and mental well-being." },
  { icon: Palette, name: "Art & Craft Club", desc: "Encourages imagination and artistic expression." },
  { icon: Gamepad2, name: "Sports Club", desc: "Promotes fitness, teamwork, and active participation." },
  { icon: BrainCircuit, name: "Mathematics Club", desc: "Develops logical thinking and problem-solving skills." }
];

export default function CurriculumPage() {
  const [activeTab, setActiveTab] = useState("pre-kg");

  return (
    <>
      <Helmet>
        <title>Curriculum & Co-Curriculars | St. Kanakadasa Educational Institutions</title>
        <meta name="description" content="Explore our structured curriculum from Pre-KG to Higher Secondary and our wide range of clubs and co-curricular activities." />
      </Helmet>

      <PageHero 
        title="Curriculum & Co-Curriculars" 
        description="A structured educational framework designed to ensure balanced academic development, skill enhancement, and holistic learning."
        imagePlaceholder={pageBg}
      />

      {/* Curriculum Levels (Tabs) */}
      <section className="py-20 bg-lightbg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label text-center mb-2">STRUCTURED PATHWAYS</span>
            <h2 className="section-heading text-center">Curriculum Structure</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs Sidebar */}
            <div className="lg:w-1/3 flex flex-col gap-2">
              {curriculumLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setActiveTab(level.id)}
                  className={`text-left px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-between
                    ${activeTab === level.id 
                      ? 'bg-primary text-white shadow-lg border-l-4 border-accent translate-x-2' 
                      : 'bg-white text-textdark hover:bg-white/60 hover:text-primary'}`}
                >
                  {level.title}
                  {activeTab === level.id && <CheckCircle size={18} className="text-accent" />}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="lg:w-2/3 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
              {curriculumLevels.map((level) => (
                <div key={level.id} className={activeTab === level.id ? 'block' : 'hidden'}>
                  <h3 className="text-2xl font-bold text-primary mb-6 font-heading flex items-center gap-3">
                    <GraduationCap className="text-accent" /> {level.title} Subjects & Focus
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                    {level.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2"></span>
                        <span className="text-textmuted text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clubs & Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label text-center mb-2">BEYOND ACADEMICS</span>
            <h2 className="section-heading text-center">Clubs & Activities</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
            <p className="max-w-2xl mx-auto mt-6 text-textmuted leading-relaxed">
              Our co-curricular clubs provide excellent opportunities for students to explore their interests, develop new skills, and engage in creative and physical activities outside the classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubs.map((club, i) => (
              <div key={i} className="bg-lightbg p-6 rounded-xl shadow-sm border border-gray-100 hover:border-accent hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <club.icon className="text-primary group-hover:text-accent transition-colors" size={24} />
                </div>
                <h3 className="font-bold text-primary mb-2">{club.name}</h3>
                <p className="text-sm text-textmuted leading-relaxed">{club.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 4C Curriculum Overview */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">4C Based Learning Curriculum</h2>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Our curriculum is specially designed to inculcate and imbibe four essential pillars of modern learning into the minds of our students.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-accent mb-3">Creativity</h3>
              <p className="text-sm text-white/80 leading-relaxed">Students are encouraged to explore imagination, innovation, and artistic expression through activity-based learning.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-accent mb-3">Critical Thinking</h3>
              <p className="text-sm text-white/80 leading-relaxed">The curriculum develops analytical skills, logical reasoning, and independent problem-solving abilities.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-accent mb-3">Collaboration</h3>
              <p className="text-sm text-white/80 leading-relaxed">Team activities and group learning help students build cooperation, leadership, and interpersonal skills.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-accent mb-3">Communication</h3>
              <p className="text-sm text-white/80 leading-relaxed">Special emphasis is given to spoken English, presentations, discussions, and public speaking skills.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
