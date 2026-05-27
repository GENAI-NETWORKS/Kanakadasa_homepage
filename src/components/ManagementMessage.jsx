import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

import imgDirector from "../assets/46.jpeg";
import imgCorrespondent from "../assets/45.jpeg";

export default function ManagementMessage() {
  const [directorExpanded, setDirectorExpanded] = useState(false);
  const [correspondentExpanded, setCorrespondentExpanded] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        {/* Director's Message */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 relative"
          >
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-4 border-accent p-1 bg-white shadow-xl">
              <img
                src={imgDirector}
                alt="Mrs. Elakkiya Elampuranam - Director"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-md">
              Director
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-grow"
          >
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-1">
              Mrs. Elakkiya Elampuranam
            </h3>
            <p className="text-accent text-sm font-semibold tracking-wide mb-6">
              B.Tech., MBA (IIT Madras)
            </p>

            <div className="relative">
              <p className="text-textmuted leading-relaxed text-justify mb-4 whitespace-pre-line">
                Dear Parents and Students,<br/><br/>
                Warm greetings to each one of you.<br/><br/>
                The academic year 2025-26 has been a year of meaningful progress and achievements, reflecting the excellence of our students and the dedication of our teachers. As we step into the new academic year 2026-27, we look forward to building on this journey of growth and success.<br/><br/>
                At our institution, we continuously strive to nurture curiosity, creativity, and independent thinking among our students.
              </p>

              <AnimatePresence>
                {directorExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-textmuted leading-relaxed text-justify pb-4 whitespace-pre-line">
                      In this era of digital advancement, our focus is not only to equip them with academic knowledge but also to prepare them to face real-world challenges with confidence and resilience.<br/><br/>
                      As Martin Luther King Jr. rightly said, "Intelligence plus character is the goal of true education."<br/><br/>
                      We believe in shaping not only successful professionals but also individuals with strong values. We aim to develop future citizens who are tolerant, kind, adaptable, and responsible. Such a spirit of fraternity can build a peace loving world. As the quote goes, "Every citizen adds to the strength of the nation." Our vision is to build a progressive and harmonious nation.<br/><br/>
                      We are proud of our great team of qualified, committed, and dedicated teachers who strive tirelessly for the well-being of every student.<br/><br/>
                      We sincerely thank our parents for their trust, support, and encouragement, and would also like to re-emphasize that your dreams for your child are our mission and passion.<br/><br/>
                      May the Almighty bless us all in our journey ahead and guide our path.<br/><br/>
                      With Warm Regards,<br/>
                      Mrs. Elakkiya Elampuranam<br/>
                      Director
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setDirectorExpanded(!directorExpanded)}
                className="flex items-center gap-1.5 text-primary font-semibold hover:text-accent transition-colors text-sm"
              >
                {directorExpanded ? (
                  <>Read Less <ChevronUp size={16} /></>
                ) : (
                  <>Read More <ChevronDown size={16} /></>
                )}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Correspondent's Message (Reverse Layout) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 relative"
          >
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-4 border-secondary p-1 bg-white shadow-xl">
              <img
                src={imgCorrespondent}
                alt="Mr. Samudi Elampuranam - Correspondent"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-md">
              Correspondent
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-grow lg:text-right"
          >
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-1">
              Mr. Samudi Elampuranam
            </h3>
            <p className="text-secondary text-sm font-semibold tracking-wide mb-6">
              Chairperson & Correspondent - M.A., M.Phil
            </p>

            <div className="relative">
              <p className="text-textmuted leading-relaxed text-justify mb-4 whitespace-pre-line">
                We are a 20-year-old institution located in Ammeri with an endearing campus and pleasant aura. We are endowed with highly qualified teachers, extraordinary classrooms and different learning experience combined with digital resources. The look and feel for our institution will surely be a distinguishable one.
              </p>

              <AnimatePresence>
                {correspondentExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-textmuted leading-relaxed text-justify pb-4 whitespace-pre-line">
                      We assure you that your child will get excellent education combined with good leadership qualities and spiritual discipline as we have always aided ourselves with cutting edge and up-to-date curriculum. We really value your patronage and are aware of your expectations. We strive hard to work on our promises and satisfy your concerns. The cordial relationship between parents and management has always been an anchor for our future progress.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setCorrespondentExpanded(!correspondentExpanded)}
                className="flex items-center gap-1.5 text-primary font-semibold hover:text-secondary transition-colors text-sm lg:justify-end w-full"
              >
                {correspondentExpanded ? (
                  <>Read Less <ChevronUp size={16} /></>
                ) : (
                  <>Read More <ChevronDown size={16} /></>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
