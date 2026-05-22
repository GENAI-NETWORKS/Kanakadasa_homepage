import { Calendar, UserPlus, CheckCircle, AlertCircle, CreditCard, Clock, Users } from "lucide-react";

export default function AdmissionsDetails() {
  return (
    <div className="space-y-16">
      
      <div>
        <h3 className="text-2xl font-bold text-primary font-heading mb-6 flex items-center justify-center gap-3">
          <UserPlus className="text-accent" /> Admission Overview
        </h3>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-textmuted leading-relaxed text-center">ST. Kanakadasa Educational Institutions welcomes students into a nurturing academic environment focused on excellence, discipline, creativity, and holistic development. Admissions are offered from Pre-KG to Higher Secondary levels based on eligibility criteria and seat availability. The institution ensures a smooth and transparent admission process for parents and students.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-2xl font-bold text-primary font-heading mb-6 flex items-center justify-center gap-3">
            <CheckCircle className="text-secondary" /> Eligibility Criteria
          </h3>
          <div className="bg-lightbg rounded-2xl p-6 border border-gray-100 h-full">
            <p className="text-textmuted text-sm leading-relaxed text-center">Admissions are granted based on the student’s age, academic qualification, and previous educational records. Students seeking admission to higher classes must submit Transfer Certificate and relevant academic documents from the previous institution.</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-primary font-heading mb-6 flex items-center justify-center gap-3">
            <Calendar className="text-primary" /> Age Criteria
          </h3>
          <div className="bg-lightbg rounded-2xl p-6 border border-gray-100 h-full">
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-textdark font-medium"><span className="text-accent mt-0.5">•</span> Pre-KG – Minimum 2½ Years</li>
              <li className="flex items-start gap-2 text-sm text-textdark font-medium"><span className="text-accent mt-0.5">•</span> LKG – Minimum 3 Years</li>
              <li className="flex items-start gap-2 text-sm text-textmuted"><span className="text-accent mt-0.5">•</span> Age eligibility is calculated as per academic year norms</li>
              <li className="flex items-start gap-2 text-sm text-textmuted"><span className="text-accent mt-0.5">•</span> Birth Certificate is mandatory for verification</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-primary font-heading mb-6 flex items-center justify-center gap-3">
          <UserPlus className="text-primary" /> Admission Procedure
        </h3>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-textmuted"><span className="w-2 h-2 rounded-full bg-accent shrink-0"></span> Collect the admission application form from the school office</li>
            <li className="flex items-center gap-3 text-textmuted"><span className="w-2 h-2 rounded-full bg-accent shrink-0"></span> Fill in all required details clearly and accurately</li>
            <li className="flex items-center gap-3 text-textmuted"><span className="w-2 h-2 rounded-full bg-accent shrink-0"></span> Submit the completed application form with necessary documents</li>
            <li className="flex items-center gap-3 text-textmuted"><span className="w-2 h-2 rounded-full bg-accent shrink-0"></span> Admission will be confirmed after document verification and fee payment</li>
            <li className="flex items-center gap-3 text-textmuted"><span className="w-2 h-2 rounded-full bg-accent shrink-0"></span> Admissions are subject to seat availability and institutional guidelines</li>
          </ul>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-2xl font-bold text-primary font-heading mb-6 flex items-center justify-center gap-3">
            <CheckCircle className="text-secondary" /> Required Documents
          </h3>
          <div className="bg-lightbg rounded-2xl p-6 border border-gray-100 h-full">
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-textmuted"><span className="text-primary mt-0.5">•</span> Filled Admission Application Form</li>
              <li className="flex items-start gap-2 text-sm text-textmuted"><span className="text-primary mt-0.5">•</span> Xerox Copy of Birth Certificate</li>
              <li className="flex items-start gap-2 text-sm text-textmuted"><span className="text-primary mt-0.5">•</span> Recent Passport Size Photograph</li>
              <li className="flex items-start gap-2 text-sm text-textmuted"><span className="text-primary mt-0.5">•</span> Xerox Copy of Aadhaar Card</li>
              <li className="flex items-start gap-2 text-sm text-textmuted"><span className="text-primary mt-0.5">•</span> Xerox Copy of Community Certificate</li>
              <li className="flex items-start gap-2 text-sm text-textmuted"><span className="text-primary mt-0.5">•</span> Transfer Certificate (for higher classes)</li>
              <li className="flex items-start gap-2 text-sm text-textmuted"><span className="text-primary mt-0.5">•</span> Previous Academic Records (if applicable)</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-primary font-heading mb-6 flex items-center justify-center gap-3">
            <AlertCircle className="text-accent" /> Admission Guidelines
          </h3>
          <div className="bg-lightbg rounded-2xl p-6 border border-gray-100 h-full">
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-textmuted"><span className="text-secondary mt-0.5">•</span> Admission fees once paid are non-refundable</li>
              <li className="flex items-start gap-2 text-sm text-textmuted"><span className="text-secondary mt-0.5">•</span> Students must maintain discipline and regular attendance</li>
              <li className="flex items-start gap-2 text-sm text-textmuted"><span className="text-secondary mt-0.5">•</span> Parents should provide correct contact details during admission</li>
              <li className="flex items-start gap-2 text-sm text-textmuted"><span className="text-secondary mt-0.5">•</span> Students are expected to follow school rules and regulations</li>
              <li className="flex items-start gap-2 text-sm text-textmuted"><span className="text-secondary mt-0.5">•</span> Admission is confirmed only after successful document verification</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-primary font-heading mb-6 flex items-center justify-center gap-3">
          <CreditCard className="text-primary" /> Fee Information
        </h3>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-textmuted leading-relaxed text-center">The institution follows a transparent fee structure designed to provide quality education with modern facilities and academic support. Detailed fee information can be obtained directly from the school administrative office during the admission process.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-2xl font-bold text-primary font-heading mb-6 flex items-center justify-center gap-3">
            <Clock className="text-accent" /> School Timings
          </h3>
          <div className="bg-lightbg rounded-2xl p-6 border border-gray-100 h-full">
            <div className="mb-6">
              <h4 className="font-bold text-primary mb-2">Monday to Friday</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-textdark font-medium"><span className="text-accent mt-0.5">•</span> LKG to UKG : 8.45 AM to 3.30 PM</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">Monday to Saturday</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-textdark font-medium"><span className="text-accent mt-0.5">•</span> Classes I to XII : 8.45 AM to 3.30 PM</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-primary font-heading mb-6 flex items-center justify-center gap-3">
            <Clock className="text-secondary" /> Office Hours
          </h3>
          <div className="bg-lightbg rounded-2xl p-6 border border-gray-100 h-full">
            <div className="mb-4">
              <h4 className="font-bold text-primary mb-2">School Office Working Hours</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-textdark font-medium"><span className="text-secondary mt-0.5">•</span> Monday to Saturday : 8.45 AM to 4.30 PM</li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-primary mb-2">Meeting the Correspondent</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-textdark font-medium"><span className="text-secondary mt-0.5">•</span> With Prior Appointment Only</li>
                <li className="flex items-start gap-2 text-sm text-textdark font-medium"><span className="text-secondary mt-0.5">•</span> Monday to Friday : 10.00 AM to 12.00 PM</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">Meeting the Principal</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-textdark font-medium"><span className="text-secondary mt-0.5">•</span> Monday to Saturday : 4.00 PM to 5.00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-primary font-heading mb-6 flex items-center justify-center gap-3">
          <Users className="text-primary" /> Parent Interaction Schedule
        </h3>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-textmuted leading-relaxed text-center">The institution maintains strong parent-school communication through regular interaction meetings, counselling sessions, and academic discussions. Parents are encouraged to meet teachers and school authorities periodically to monitor the academic progress, discipline, and overall development of their children.</p>
        </div>
      </div>

    </div>
  );
}
