import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import ContactSection from '../components/ContactSection';
import TimingsContact from '../components/TimingsContact';import { MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | St. Kanakadasa Educational Institutions</title>
        <meta name="description" content="Get in touch with St. Kanakadasa Educational Institutions. View our contact details, map, and office timings." />
      </Helmet>

      <PageHero 
        title="Contact Us" 
        description="We are here to help and answer any question you might have."
      />

      <TimingsContact />
      <ContactSection />
      
      {/* Branch Locations & Contact */}
      <section className="py-20 bg-lightbg border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="section-label text-center mb-2">OUR NETWORK</span>
            <h2 className="section-heading text-center">Institution Branches</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <MapPin className="text-primary group-hover:text-white transition-colors" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">ST. Kanakadasa Matric Hr. Sec School</h3>
                <p className="text-sm text-textmuted mb-4">Kanakadasa Avenue, Ammeri, Bargur - 635104</p>
                <p className="text-sm font-semibold text-textdark flex items-center gap-2">
                  <Phone size={16} className="text-accent" /> +91 94891 10668
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <MapPin className="text-primary group-hover:text-white transition-colors" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">ST. Kanakadasa Senior Secondary Public School (CBSE)</h3>
                <p className="text-sm text-textmuted mb-4">Kanakadasa Avenue, Ammeri, Bargur</p>
                <p className="text-sm font-semibold text-textdark flex items-center gap-2">
                  <Phone size={16} className="text-accent" /> +91 95973 45893
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <MapPin className="text-primary group-hover:text-white transition-colors" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">ST. Kanakadasa Nursery & Primary School</h3>
                <p className="text-sm text-textmuted mb-4">Old High School Road, Bargur - 635104</p>
                <p className="text-sm font-semibold text-textdark flex items-center gap-2">
                  <Phone size={16} className="text-accent" /> +91 94891 10669
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <MapPin className="text-primary group-hover:text-white transition-colors" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">ST. Kanakadasa Matriculation School</h3>
                <p className="text-sm text-textmuted mb-4">Bargur, Krishnagiri District</p>
                <p className="text-sm font-semibold text-textdark flex items-center gap-2">
                  <Phone size={16} className="text-accent" /> +91 72004 20805
                </p>
              </div>
            </div>

          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 text-center max-w-2xl mx-auto">
             <h4 className="text-accent font-bold text-lg mb-2">Admissions Open (Pre.KG to Class 12)</h4>
             <p className="text-textdark text-sm">Applications will be issued from 2nd March onwards.</p>
          </div>

        </div>
      </section>
    </>
  );
}
