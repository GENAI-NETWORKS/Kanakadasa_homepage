import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import AboutSnapshot from '../components/AboutSnapshot'
import AcademicPrograms from '../components/AcademicPrograms'
import FacilitiesShowcase from '../components/FacilitiesShowcase'
import AdmissionsCTA from '../components/AdmissionsCTA'
import WhyChooseUs from '../components/WhyChooseUs'
import QuickHighlights from '../components/QuickHighlights'
import TestimonialsMarquee from '../components/TestimonialsMarquee'

import ContactSection from '../components/ContactSection'
import CareersSection from '../components/CareersSection'
import TimingsContact from '../components/TimingsContact'
import { GraduationCap, Lightbulb, MonitorPlay, FlaskConical, Bus, Trophy } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>St. Kanakadasa School Bargur | CBSE & Matric - Pre-KG to Class XII</title>
        <meta name="description" content="St. Kanakadasa Educational Institutions, Bargur - a premier CBSE & Matriculation school offering Pre-KG to Class XII with NEET/JEE coaching, smart classrooms, and 30+ years of academic excellence in Tamil Nadu." />
        <meta name="keywords" content="St Kanakadasa School, CBSE school Bargur, Matric school Ammeri, NEET coaching Bargur, JEE coaching Krishnagiri, school admission 2026 Tamil Nadu, best school Bargur" />
        <link rel="canonical" href="https://www.kanakadasaschool.in/" />
        <meta property="og:title" content="St. Kanakadasa Educational Institutions - Bargur" />
        <meta property="og:description" content="Premier CBSE & Matric school in Bargur, Tamil Nadu. Admissions open for 2026–27." />
        <meta property="og:url" content="https://www.kanakadasaschool.in/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "School",
            "name": "St. Kanakadasa Educational Institutions",
            "url": "https://www.kanakadasaschool.in/",
            "telephone": "+919489110668",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kanakadasa Avenue, Ammeri",
              "addressLocality": "Bargur",
              "addressRegion": "Tamil Nadu",
              "postalCode": "635104",
              "addressCountry": "IN"
            }
          })}
        </script>
      </Helmet>

      <Hero />
      
      <AboutSnapshot />

      <QuickHighlights />
      <WhyChooseUs />


      <AcademicPrograms />
      
      <FacilitiesShowcase />
      
      <AdmissionsCTA />
      
      <TimingsContact />
      
      <TestimonialsMarquee />
      
      <CareersSection />
      
      <ContactSection />
    </>
  )
}
