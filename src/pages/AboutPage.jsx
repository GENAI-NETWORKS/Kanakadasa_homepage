import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import FacultyDetails from '../components/FacultyDetails';
import AchievementsDetails from '../components/AchievementsDetails';
import VisionaryLeadership from '../components/VisionaryLeadership';
import { Target, Lightbulb, Heart, Quote, Star, Users, Brain, Shield, Sparkles, BookOpen, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | St. Kanakadasa Educational Institutions</title>
        <meta name="description" content="Learn about our Institution History, Educational Legacy, Philosophy, and our dedicated Management Team at St. Kanakadasa Educational Institutions, Bargur." />
      </Helmet>

      <PageHero 
        title="About Our Institution" 
        description="A legacy of academic excellence, value-based education, and holistic development."
        imagePlaceholder="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Inspirational Quotes Section from Writeup */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-lightbg p-8 rounded-2xl border border-gray-100 relative">
              <Quote className="text-accent/20 absolute top-4 right-4" size={48} />
              <p className="text-textmuted italic mb-4 leading-relaxed relative z-10">
                "We want that education by which character is formed, strength of mind is increased, the intellect is expanded, and by which one can stand on one's own feet."
              </p>
              <p className="font-bold text-primary text-sm">- Saint Vivekananda</p>
            </div>
            
            <div className="bg-lightbg p-8 rounded-2xl border border-gray-100 relative">
              <Quote className="text-secondary/20 absolute top-4 right-4" size={48} />
              <p className="text-textmuted italic mb-4 leading-relaxed font-tamil relative z-10">
                "தொட்டனைத் தூறும் மணற்கேணி மாந்தர்க்குக் கற்றனைத் தூறும் அறிவு."
              </p>
              <p className="font-bold text-primary text-sm">- திருக்குறள் 396</p>
            </div>

            <div className="bg-lightbg p-8 rounded-2xl border border-gray-100 relative">
              <Quote className="text-primary/10 absolute top-4 right-4" size={48} />
              <p className="text-textmuted italic mb-4 leading-relaxed relative z-10">
                "Education never ends, because learning is a life game."
              </p>
              <p className="font-bold text-primary text-sm">- Correspondent</p>
            </div>
          </div>
        </div>
      </section>

      {/* About The Institution Sections (From Full Content) */}
      <section className="py-20 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-primary font-heading mb-6 flex items-center gap-3">
                  <Star className="text-accent shrink-0" /> 2.1 About the Institution
                </h2>
                <p className="text-textmuted leading-relaxed text-justify">
                  ST. Kanakadasa Educational Institutions stands as a beacon of academic excellence, value-based education, and holistic development. Established with a vision to nurture young minds through quality education and disciplined learning, the institution has emerged as one of the trusted educational destinations in the region. With a strong commitment towards academic standards, character formation, leadership development, and innovative teaching practices, the institution continuously empowers students to become confident, responsible, and future-ready citizens. The institution provides a vibrant educational environment supported by experienced faculty members, smart classrooms, modern laboratories, co-curricular activities, and student-centered learning methodologies that inspire excellence in every learner.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary font-heading mb-6 flex items-center gap-3">
                  <BookOpen className="text-secondary shrink-0" /> 2.2 Educational Legacy
                </h2>
                <p className="text-textmuted leading-relaxed text-justify">
                  With more than two decades of dedicated service in the field of education, ST. Kanakadasa Educational Institutions have successfully built a legacy rooted in discipline, academic achievement, and moral values. The institution has consistently guided generations of students towards academic success and personal growth through a balanced educational approach. Its unwavering focus on quality education, ethical practices, and holistic student development has earned the trust of parents and the respect of the educational community. The institution continues to uphold its legacy by adapting modern educational practices while preserving strong cultural and moral foundations.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary font-heading mb-6 flex items-center gap-3">
                  <Users className="text-primary shrink-0" /> 2.3 Our Philosophy of Education
                </h2>
                <p className="text-textmuted leading-relaxed text-justify">
                  The philosophy of education at ST. Kanakadasa Educational Institutions is centered on the belief that every child possesses unique talents and limitless potential. The institution strives to create an environment where students are encouraged to think independently, explore creatively, and grow intellectually, emotionally, socially, and morally. Education is viewed not merely as academic instruction but as a process of shaping responsible individuals with strong character, compassion, confidence, and leadership qualities. Through a learner-friendly atmosphere and innovative teaching methods, the institution aims to cultivate lifelong learners capable of contributing positively to society.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary font-heading mb-6 flex items-center gap-3">
                  <Target className="text-accent shrink-0" /> 2.4 Institution History
                </h2>
                <p className="text-textmuted leading-relaxed text-justify">
                  ST. Kanakadasa Educational Institutions were founded with the noble objective of providing quality education accessible to students from all backgrounds. Beginning as a modest educational initiative, the institution gradually expanded through its dedication to academic excellence, disciplined administration, and community trust. Over the years, the institution has grown into a comprehensive educational group offering Matriculation, CBSE, Nursery, and Primary education. Its journey reflects continuous growth, modernization, and a strong commitment to nurturing students with knowledge, values, and future-oriented skills.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-primary font-heading mb-6 flex items-center gap-3">
                  <Sparkles className="text-accent shrink-0" /> 2.5 Excellence Through Innovation
                </h2>
                <p className="text-textmuted leading-relaxed text-justify">
                  The institution strongly believes that innovation is the foundation of modern education. By integrating smart classroom technologies, digital learning resources, practical-oriented teaching methodologies, and skill-based learning activities, ST. Kanakadasa Educational Institutions create an engaging and future-focused academic environment. Students are encouraged to explore, question, analyze, and apply knowledge through interactive learning experiences. The institution continuously upgrades its academic practices, infrastructure, and teaching techniques to ensure students receive globally relevant and technologically advanced education.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary font-heading mb-6 flex items-center gap-3">
                  <Heart className="text-secondary shrink-0" /> 2.6 Student-Centric Learning Approach
                </h2>
                <p className="text-textmuted leading-relaxed text-justify">
                  At ST. Kanakadasa Educational Institutions, every student is recognized as a unique learner with individual strengths, interests, and aspirations. The institution adopts a student-centric learning approach that focuses on personalized attention, conceptual understanding, practical exposure, and continuous mentoring. Teachers serve as facilitators who guide students through interactive classroom sessions, collaborative activities, creative projects, and real-world learning experiences. This approach helps students develop confidence, curiosity, communication skills, leadership qualities, and independent thinking abilities essential for lifelong success.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary font-heading mb-6 flex items-center gap-3">
                  <Lightbulb className="text-primary shrink-0" /> 2.7 Future-Ready Academic Environment
                </h2>
                <p className="text-textmuted leading-relaxed text-justify">
                  The institution provides a future-ready academic environment designed to prepare students for the challenges of the modern world. With smart interactive classrooms, advanced laboratories, digital learning support, competitive exam coaching, communication skill development, and activity-based learning methodologies, students gain exposure to contemporary educational standards. The curriculum is carefully designed to promote analytical thinking, technological awareness, creativity, and problem-solving skills, enabling students to excel in higher education and professional careers in an ever-evolving global landscape.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary font-heading mb-6 flex items-center gap-3">
                  <Shield className="text-accent shrink-0" /> 2.8 Holistic Development System
                </h2>
                <p className="text-textmuted leading-relaxed text-justify">
                  ST. Kanakadasa Educational Institutions emphasize the holistic development of students by nurturing their academic, physical, emotional, social, cultural, and moral growth. Along with scholastic excellence, equal importance is given to sports, yoga, martial arts, music, dance, arts, leadership activities, and value education. The institution creates opportunities for students to participate in clubs, competitions, cultural programs, field trips, and community-oriented activities that help them discover their talents and build self-confidence. This balanced educational system ensures the overall personality development of every student.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label text-center mb-2">Our Guding Light</span>
            <h2 className="section-heading text-center">Vision, Mission & Values</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-lightbg p-8 rounded-2xl shadow-sm border-t-4 border-accent hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Target size={24} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-textmuted leading-relaxed mb-4">
To nurture confident, creative, disciplined, and responsible students through quality education, leadership development, and value-based learning that prepares them for future success.
              </p>
            </div>

            <div className="bg-lightbg p-8 rounded-2xl shadow-sm border-t-4 border-primary hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-textmuted leading-relaxed mb-4">
To provide student-centered education through innovative teaching methods, modern infrastructure, moral values, and holistic development programs that inspire academic excellence and lifelong learning.
              </p>
            </div>

            <div className="bg-lightbg p-8 rounded-2xl shadow-sm border-t-4 border-secondary hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Heart size={24} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Core Values</h3>
              <ul className="grid grid-cols-1 gap-2">
                {["Academic Excellence", "Discipline & Integrity", "Creativity & Innovation", "Leadership & Responsibility", "Respect & Compassion", "Teamwork & Collaboration", "Moral & Ethical Values", "Lifelong Learning"].map((value, i) => (
                  <li key={i} className="flex items-center gap-2 text-textmuted text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 opacity-10">
                <Brain size={150} />
              </div>
              <h3 className="text-2xl font-bold mb-6 relative z-10">4C Based Curriculum</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6 relative z-10">
                A curriculum that inculcates and imbibes Creativity, Critical Thinking, Collaboration, and Communication in the minds of the students.
              </p>
              <ul className="space-y-4 relative z-10">
                <li>
                  <strong className="text-accent block">Creativity</strong>
                  <span className="text-white/70 text-xs">Explore imagination and artistic expression.</span>
                </li>
                <li>
                  <strong className="text-accent block">Critical Thinking</strong>
                  <span className="text-white/70 text-xs">Develop analytical skills and logical reasoning.</span>
                </li>
                <li>
                  <strong className="text-accent block">Collaboration</strong>
                  <span className="text-white/70 text-xs">Build cooperation and interpersonal skills.</span>
                </li>
                <li>
                  <strong className="text-accent block">Communication</strong>
                  <span className="text-white/70 text-xs">Emphasis on spoken English and public speaking.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              <div className="bg-lightbg p-8 rounded-2xl border border-gray-100">
                <Shield className="text-primary mb-4" size={32} />
                <h4 className="text-lg font-bold text-primary mb-3">Character Building & Leadership</h4>
                <p className="text-sm text-textmuted leading-relaxed">
                  The institution focuses on developing discipline, confidence, responsibility, and leadership qualities through academics, co-curricular activities, and value-based education. Students are guided to become confident individuals with strong character and positive attitudes.
                </p>
              </div>
              <div className="bg-lightbg p-8 rounded-2xl border border-gray-100">
                <Heart className="text-secondary mb-4" size={32} />
                <h4 className="text-lg font-bold text-primary mb-3">Moral & Ethical Education</h4>
                <p className="text-sm text-textmuted leading-relaxed">
                  Moral and ethical values are integrated into the learning process to help students practice honesty, respect, kindness, humility, and social responsibility. The institution strives to create disciplined and compassionate individuals who contribute positively to society.
                </p>
              </div>
              <div className="sm:col-span-2 bg-lightbg p-8 rounded-2xl border border-gray-100">
                <h4 className="text-lg font-bold text-primary mb-3">Our Commitments</h4>
                <ul className="grid sm:grid-cols-2 gap-4">
                  <li className="flex items-start gap-2 text-textmuted text-sm leading-relaxed">
                    <span className="text-accent mt-1">•</span> To instill moral value in the behaviour of the students.
                  </li>
                  <li className="flex items-start gap-2 text-textmuted text-sm leading-relaxed">
                    <span className="text-accent mt-1">•</span> To influence their thought process to a creative mode.
                  </li>
                  <li className="flex items-start gap-2 text-textmuted text-sm leading-relaxed">
                    <span className="text-accent mt-1">•</span> To assure them a safe and calm environment.
                  </li>
                  <li className="flex items-start gap-2 text-textmuted text-sm leading-relaxed">
                    <span className="text-accent mt-1">•</span> To ignite their minds and energize them for a prosperous future.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>



      <VisionaryLeadership />

      <FacultyDetails />
      <AchievementsDetails />

      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-8">Our Institutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm flex flex-col justify-between">
              <h3 className="font-bold text-accent mb-4">ST. Kanakadasa Matric Hr. Sec School</h3>
              <p className="text-white/80 text-sm flex items-center gap-2">
                <span className="font-semibold text-white">Contact:</span> 94891 10668
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm flex flex-col justify-between">
              <h3 className="font-bold text-accent mb-4">ST. Kanakadasa Senior Secondary Public School CBSE</h3>
              <p className="text-white/80 text-sm flex items-center gap-2">
                <span className="font-semibold text-white">Contact:</span> 95973 45893
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm flex flex-col justify-between">
              <h3 className="font-bold text-accent mb-4">ST. Kanakadasa Nursery & Primary School</h3>
              <p className="text-white/80 text-sm flex items-center gap-2">
                <span className="font-semibold text-white">Contact:</span> 94891 10669
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm flex flex-col justify-between">
              <h3 className="font-bold text-accent mb-4">ST. Kanakadasa Matriculation School</h3>
              <p className="text-white/80 text-sm flex items-center gap-2">
                <span className="font-semibold text-white">Contact:</span> 72004 20805
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
