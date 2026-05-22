import { Microscope, Book, Leaf, Landmark, HeartPulse, Palette, Music, Trophy, Calculator, CheckCircle2 } from "lucide-react";

export default function ExtraCurricularDetails() {
  return (
    <section className="py-20 bg-lightbg border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clubs & Activities */}
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">Clubs & Activities</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <Microscope className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Science Club</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The Science Club encourages students to explore scientific concepts, experiments, discoveries, and innovative ideas through projects, exhibitions, practical activities, and awareness programs.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <Book className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Literature Club</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The Literature Club helps students improve reading, writing, speaking, storytelling, poetry, and language skills while encouraging creativity and appreciation for literature.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <Leaf className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Nature Club</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The Nature Club creates environmental awareness among students through eco-friendly activities, tree plantation programs, nature observation, and conservation initiatives.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <Landmark className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Heritage Club</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The Heritage Club helps students understand and appreciate cultural traditions, historical values, national heritage, and social responsibilities through educational activities and celebrations.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <HeartPulse className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Wellness Club</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The Wellness Club promotes physical fitness, mental well-being, healthy habits, yoga practices, and emotional balance among students through awareness programs and wellness activities.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <Palette className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Art & Craft Club</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The Art & Craft Club encourages imagination, creativity, and artistic expression through drawing, painting, craft making, decoration work, and creative exhibitions.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <Music className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Music & Dance Club</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The Music & Dance Club provides opportunities for students to develop their talents in music, keyboard, singing, cultural performances, and various dance forms while enhancing stage confidence.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <Trophy className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Sports Club</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The Sports Club promotes physical fitness, teamwork, discipline, sportsmanship, and active participation in indoor and outdoor games including cricket, volleyball, basketball, badminton, chess, and martial arts.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <Calculator className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-primary mb-3">Mathematics Club</h3>
            <p className="text-textmuted text-sm leading-relaxed text-justify">The Mathematics Club develops logical thinking, analytical abilities, problem-solving skills, and mathematical creativity through puzzles, quizzes, practical activities, and interactive learning sessions.</p>
          </div>
        </div>

        {/* Sports & Extra-Curricular Activities */}
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">Sports & Extra-Curricular Activities</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
            {[
              "11.1 Yoga",
              "11.2 Karate & Martial Arts",
              "11.3 Volleyball",
              "11.4 Basketball",
              "11.5 Cricket",
              "11.6 Badminton",
              "11.7 Chess & Carrom",
              "11.8 Cycling",
              "11.9 Music & Keyboard",
              "11.10 Dance Programs",
              "11.11 Drama Activities",
              "11.12 Art & Craft",
              "11.13 Field Trips",
              "11.14 Learn & Play Sessions",
              "11.15 Competitive Activities"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-textdark font-medium">
                <CheckCircle2 className="text-accent shrink-0" size={18} />
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
