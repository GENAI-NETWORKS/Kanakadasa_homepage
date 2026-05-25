import {
  GraduationCap, BookOpen, Trophy, FlaskConical, Bus, Star, Music2,
} from "lucide-react";

const ticker = [
  { icon: GraduationCap, text: "Admissions Open 2026–27" },
  { icon: BookOpen,       text: "CBSE & Matric Boards" },
  { icon: Trophy,         text: "100% Board Results" },
  { icon: FlaskConical,   text: "NEET / JEE Coaching" },
  { icon: Bus,            text: "Transportation Available" },
  { icon: Star,           text: "20+ Years of Excellence" },
  { icon: Music2,         text: "Cultural & Sports Programs" },
];

export default function AnnouncementTicker() {
  const items = [...ticker, ...ticker]; // duplicate for seamless loop

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
      style={{ background: "#FF6F00", height: "36px" }}
    >
      <div
        className="flex items-center w-max h-full"
        style={{ animation: "marquee 32s linear infinite" }}
      >
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-white font-bold text-[11px] px-8 uppercase tracking-wider shrink-0 h-full"
            >
              <Icon size={13} strokeWidth={2.5} className="text-white/80 shrink-0" />
              {item.text}
              <span className="text-white/30 ml-4">|</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
