import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const FacebookIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const YoutubeIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-16 pb-8 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="St. Kanakadasa Logo"
                className="w-20 h-20 object-contain bg-white rounded-full p-0.5"
              />
              <div>
                <p className="font-heading font-bold text-white text-xl leading-tight">
                  St. Kanakadasa
                </p>
                <p className="text-sm font-bold text-white/70 tracking-wide">
                  Matriculation Hr.Sec.School
                </p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Shaping Minds. Building Futures. A premier Matriculation school nurturing students from Pre-KG to Class XII. We are committed to academic excellence, holistic development, and instilling strong moral values. Our dedicated faculty empowers students through innovative learning in a highly supportive environment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-colors">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links — DISABLED (text preserved, no navigation) */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Academic', path: '/academic' },
                { name: 'Facility', path: '/facility' },
                { name: 'Curriculum', path: '/curriculum' },
                { name: 'Admission', path: '/admission' },
                { name: 'Parents', path: '/parents' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  {/* DISABLED — span replaces Link, content preserved */}
                  <span
                    title="Navigation coming soon"
                    className="text-white/50 text-sm text-left w-full flex items-center gap-2 before:content-['›'] before:text-accent/40 cursor-not-allowed select-none"
                  >
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm leading-relaxed">
                  Kanakadasa Avenue, Ammeri,<br />Bargur - 635104, Tamil Nadu
                </span>
              </li>
              <li className="flex flex-col gap-2">
                <a href="tel:+919489110668" className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors text-sm">
                  <Phone size={18} className="text-accent shrink-0" />
                  +91 94891 10668
                </a>
                <a href="tel:+919489110669" className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors text-sm pl-7">
                  +91 94891 10669
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:principal@kanakadasaschool.in" className="text-white/80 hover:text-accent transition-colors text-sm break-all">
                  principal@kanakadasaschool.in
                </a>
              </li>
              <li>
                <div className="mt-2 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                  <iframe
                    title="St. Kanakadasa School Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5!2d78.3541!3d12.5488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDMyJzU1LjciTiA3OMKwMjEnMTQuOCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin&q=Ammeri,+Bargur+-+635104,+Tamil+Nadu"
                    width="100%"
                    height="150"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href="https://maps.google.com/?q=Ammeri,+Bargur+-+635104,+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-accent text-xs font-semibold hover:underline"
                >
                  <MapPin size={12} />
                  Get Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Academics Summary */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 relative inline-block">
              Class XI Groups
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="text-white/80 text-sm flex justify-between border-b border-white/10 pb-2">
                <span>Science (PCB + CS)</span>
                <span className="text-accent font-medium">NEET</span>
              </li>
              <li className="text-white/80 text-sm flex justify-between border-b border-white/10 pb-2">
                <span>Science (PCM + CS)</span>
                <span className="text-accent font-medium">JEE</span>
              </li>
              <li className="text-white/80 text-sm flex justify-between border-b border-white/10 pb-2">
                <span>Commerce</span>
              </li>
            </ul>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-accent font-semibold text-sm mb-3">School Timings</p>
              <div className="space-y-2">
                <div>
                  <p className="text-white/60 text-[11px] uppercase tracking-widest mb-0.5">LKG &amp; UKG</p>
                  <p className="text-white/80 text-xs">Mon-Fri: 8:45 AM - 3:30 PM</p>
                </div>
                <div className="border-t border-white/10 pt-2">
                  <p className="text-white/60 text-[11px] uppercase tracking-widest mb-0.5">Class I to XII</p>
                  <p className="text-white/80 text-xs">Mon-Sat: 8:45 AM - 3:30 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-white/60 text-sm">
            © {currentYear} St. Kanakadasa Matriculation Hr.Sec.School. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            <a href="https://www.kanakadasaschool.in" className="hover:text-accent transition-colors">www.kanakadasaschool.in</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
