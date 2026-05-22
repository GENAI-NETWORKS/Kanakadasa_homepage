import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import CareersSection from '../components/CareersSection';


export default function CareersPage() {
  return (
    <>
      <Helmet>
        <title>Careers | St. Kanakadasa Educational Institutions</title>
        <meta name="description" content="Join our team of highly qualified faculty. Explore our teaching methodology and faculty development programs." />
      </Helmet>

      <PageHero 
        title="Careers" 
        description="Join our team of dedicated educators and experience a professional environment focused on innovation and growth."
        imagePlaceholder="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
      />



      <CareersSection />
    </>
  );
}
