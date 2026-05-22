import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import ParentsCornerDetails from '../components/ParentsCornerDetails';

export default function ParentsPage() {
  return (
    <>
      <Helmet>
        <title>Parents Corner | St. Kanakadasa Educational Institutions</title>
        <meta name="description" content="Parent-school partnership, communication system, and guidelines for parents at St. Kanakadasa." />
      </Helmet>

      <PageHero 
        title="Parents Corner" 
        description="Fostering a collaborative partnership between parents and the institution for our students' success."
        imagePlaceholder="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
      />

      <ParentsCornerDetails />
    </>
  );
}
