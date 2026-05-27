import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import AdmissionsDetails from '../components/AdmissionsDetails';
import pageBg from '../assets/16.jpeg';
import { 
  FileText, CheckCircle, ArrowRight, Book, AlertCircle, 
  UserPlus, Calendar, CreditCard
} from 'lucide-react';

export default function AdmissionsPage() {
  return (
    <>
      <Helmet>
        <title>Admissions | St. Kanakadasa Educational Institutions</title>
        <meta name="description" content="Detailed admission procedure, eligibility criteria, required documents, and Class 11 groups at St. Kanakadasa." />
      </Helmet>

      <PageHero 
        title="Admissions" 
        description="Join our nurturing academic community focused on excellence, discipline, and holistic development."
        imagePlaceholder={pageBg}
      />

      <AdmissionsCTA />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="section-label text-center mb-2">JOIN US</span>
            <h2 className="section-heading text-center">Admission Process & Guidelines</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
            <p className="max-w-3xl mx-auto mt-6 text-textmuted leading-relaxed">
              Admissions are offered from Pre-KG to Higher Secondary levels based on eligibility criteria and seat availability. We ensure a smooth and transparent admission process for parents and students.
            </p>
          </div>

          <div className="mb-20">
            <AdmissionsDetails />
          </div>
          
          <div className="mt-12 bg-primary rounded-2xl p-8 text-white text-center shadow-lg max-w-3xl mx-auto">
              <h4 className="font-bold text-xl mb-3">Need Admission Assistance?</h4>
              <p className="text-white/80 text-sm mb-6">Our admissions office is open Monday to Saturday, 8:45 AM to 4:30 PM.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:9489110668" className="bg-white text-primary font-bold px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                  Call 94891 10668
                </a>
                <a href="tel:9626839420" className="bg-transparent border border-white text-white font-bold px-6 py-2.5 rounded-lg hover:bg-white/10 transition-colors text-sm">
                  Call 96268 39420
                </a>
              </div>
            </div>
          </div>
          
      </section>
    </>
  );
}
