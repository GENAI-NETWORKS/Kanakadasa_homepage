import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import TestimonialsMarquee from '../components/TestimonialsMarquee';
import PhotoGallery from '../components/PhotoGallery';

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Gallery | St. Kanakadasa Educational Institutions</title>
        <meta name="description" content="View our campus life and read what parents have to say about St. Kanakadasa Educational Institutions." />
      </Helmet>

      <PageHero 
        title="Gallery " 
        description="A glimpse into our vibrant campus life and the experiences of our community."
      />

      <PhotoGallery />

    </>
  );
}
