import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import ParentsCornerDetails from '../components/ParentsCornerDetails';
import pageBg from '../assets/11.jpeg';

export default function ParentsPage() {
  return (
    <>
      <Helmet>
        <title>Parents Corner | St. Kanakadasa Matriculation Hr.Sec.School</title>
        <meta name="description" content="Parent-school partnership, communication system, and guidelines for parents at St. Kanakadasa." />
      </Helmet>

      <PageHero 
        title="Parents Corner" 
        description="Fostering a collaborative partnership between parents and the institution for our students' success."
        imagePlaceholder={pageBg}
      />

      <ParentsCornerDetails />
    </>
  );
}
