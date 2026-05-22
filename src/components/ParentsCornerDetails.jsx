import { Users, MessageCircle, HeartHandshake, Presentation, Activity, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ParentsCornerDetails() {
  return (
    <section className="py-20 bg-lightbg border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="section-label !text-accent text-center mb-2">PARENTS CORNER</span>
          <h2 className="section-heading text-center">Parent-School Partnership</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
              <Users size={24} />
            </div>
            <h3 className="text-2xl font-bold text-primary font-heading">Parent-School Partnership</h3>
          </div>
          <p className="text-textmuted leading-relaxed text-justify">ST. Kanakadasa Educational Institutions strongly believes that the combined efforts of parents and teachers play a vital role in the successful development of students. The institution maintains a healthy and supportive partnership with parents to ensure academic excellence, discipline, and overall student well-being.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <MessageCircle className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Parent Communication System</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The institution maintains effective communication with parents through regular meetings, phone communication, notices, academic updates, counselling sessions, and school interaction programs. Parents are kept informed about the academic progress and activities of their children.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <HeartHandshake className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Counselling Support</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">Regular counselling sessions are conducted for students and parents to discuss academic performance, behavioural development, emotional well-being, strengths, and areas requiring improvement. The institution provides continuous guidance for better student growth and confidence.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <Presentation className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Parent Interaction Meetings</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">Periodic parent interaction meetings are organized to strengthen parent-teacher relationships and discuss students’ academic progress, discipline, communication skills, attendance, and overall performance.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <Activity className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Academic Monitoring</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The institution continuously monitors student performance through regular assessments, tests, assignments, classroom activities, and interaction sessions. Parents are encouraged to actively support their child’s learning process at home.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 md:col-span-2">
            <ShieldCheck className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Student Welfare Support</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The institution prioritizes student welfare by providing a safe, disciplined, supportive, and student-friendly environment. Equal attention is given to academic growth, emotional well-being, physical fitness, and moral development.</p>
          </div>
        </div>

        <div className="bg-primary p-8 rounded-2xl shadow-lg text-white">
          <h3 className="text-2xl font-bold text-accent font-heading mb-6 text-center">Guidelines to Parents</h3>
          <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8 max-w-4xl mx-auto">
            <li className="flex items-start gap-3"><CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} /><span className="text-white/90">Students are expected to attend the class regularly without fail.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} /><span className="text-white/90">Students are required to be punctual and should make themselves available ten minutes prior to the school time.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} /><span className="text-white/90">Intimation of leave by the parent is necessary.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} /><span className="text-white/90">Sit with your child every day and follow their routine and home works.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} /><span className="text-white/90">Usage of cell phones, electronic items, money and jewels are discouraged in our school premises.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} /><span className="text-white/90">Individual communication or gifts to the teachers is strictly prohibited.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} /><span className="text-white/90">Parents should attend every interaction meet without fail.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} /><span className="text-white/90">Private tuitions are discouraged.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} /><span className="text-white/90">Students should not leave the school during middle hours.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} /><span className="text-white/90">Half - day leave is not allowed.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} /><span className="text-white/90">Parents must provide school with correct mobile numbers and also inform about the changes if any.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} /><span className="text-white/90">Only parents are allowed to accompany the child during school events.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} /><span className="text-white/90">Parents are not advised to send any fees through your child.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} /><span className="text-white/90">Please ensure balanced diet to your child.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} /><span className="text-white/90">Parents are not allowed to shout at any school staff.</span></li>
          </ul>

          <div className="mt-8 bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm max-w-4xl mx-auto text-left">
            <h4 className="font-bold text-accent mb-2">Parent Responsibilities</h4>
            <p className="text-sm text-white/90 leading-relaxed text-justify">Parents are expected to cooperate with the institution in maintaining discipline, academic consistency, moral values, and positive behaviour among students. Active parental involvement helps students achieve better academic performance, emotional stability, and holistic development.</p>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="section-heading text-center">RULES & REGULATIONS</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-primary flex items-start gap-3">
              <span className="text-accent mt-1">➤</span>
              <p className="text-textmuted text-sm leading-relaxed text-justify">Students are advised to come to school in clean and neat uniform.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-primary flex items-start gap-3">
              <span className="text-accent mt-1">➤</span>
              <p className="text-textmuted text-sm leading-relaxed text-justify">Students are subjected to maintain discipline inside the campus and in the class.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-primary flex items-start gap-3">
              <span className="text-accent mt-1">➤</span>
              <p className="text-textmuted text-sm leading-relaxed text-justify">Student ID Card is compulsory in school campus.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-primary flex items-start gap-3">
              <span className="text-accent mt-1">➤</span>
              <p className="text-textmuted text-sm leading-relaxed text-justify">Good behaviour and discipline is to be followed in the school.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-primary flex items-start gap-3">
              <span className="text-accent mt-1">➤</span>
              <p className="text-textmuted text-sm leading-relaxed text-justify">Hair must be neat, clean, conservative and of one natural colour.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-primary flex items-start gap-3">
              <span className="text-accent mt-1">➤</span>
              <p className="text-textmuted text-sm leading-relaxed text-justify">Students are expected to keep their surroundings clean.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-primary flex items-start gap-3">
              <span className="text-accent mt-1">➤</span>
              <p className="text-textmuted text-sm leading-relaxed text-justify">Students are supposed to speak English in the campus.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-primary flex items-start gap-3">
              <span className="text-accent mt-1">➤</span>
              <p className="text-textmuted text-sm leading-relaxed text-justify">Students should attend all the evaluations without fail.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-primary flex items-start gap-3">
              <span className="text-accent mt-1">➤</span>
              <p className="text-textmuted text-sm leading-relaxed text-justify">Students should not indulge in any physical violence with their fellow students.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-primary flex items-start gap-3">
              <span className="text-accent mt-1">➤</span>
              <p className="text-textmuted text-sm leading-relaxed text-justify">Students are not allowed to damage the school property.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-primary flex items-start gap-3">
              <span className="text-accent mt-1">➤</span>
              <p className="text-textmuted text-sm leading-relaxed text-justify">Students should not be absent for classes without prior permission from the teacher.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-primary flex items-start gap-3">
              <span className="text-accent mt-1">➤</span>
              <p className="text-textmuted text-sm leading-relaxed text-justify">Students should maintain silence in the school corridor and follow the queue.</p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-4">HOMEWORK</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">
              The school management provides free and compulsory coaching classes from 3.30 P.M. to 4.30 P.M. We guide in homework during coaching classes. The same must be repeated by the pupil again at home as Homework. This is to make them understand and write the homework.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
