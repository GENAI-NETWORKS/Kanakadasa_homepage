import { Helmet } from 'react-helmet-async'

// ── Section Components ──
import Hero              from '../components/Hero'
import AboutSnapshot     from '../components/AboutSnapshot'
import VisionaryLeadership from '../components/VisionaryLeadership'
import AcademicPrograms  from '../components/AcademicPrograms'
import WhyChooseUs       from '../components/WhyChooseUs'
import OurInstitutions   from '../components/OurInstitutions'
import FacilitiesShowcase from '../components/FacilitiesShowcase'
import StudentDevelopment from '../components/StudentDevelopment'
import CampusLife        from '../components/CampusLife'
import QuickHighlights   from '../components/QuickHighlights'
import AdmissionsCTA     from '../components/AdmissionsCTA'
import TimingsContact    from '../components/TimingsContact'
import ContactSection    from '../components/ContactSection'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>St. Kanakadasa School Bargur | CBSE &amp; Matric - Pre-KG to Class XII</title>
        <meta name="description" content="St. Kanakadasa Educational Institutions, Bargur - a premier CBSE &amp; Matriculation school offering Pre-KG to Class XII with NEET/JEE coaching, smart classrooms, and 20+ years of academic excellence in Tamil Nadu." />
        <meta name="keywords" content="St Kanakadasa School, CBSE school Bargur, Matric school Ammeri, NEET coaching Bargur, JEE coaching Krishnagiri, school admission 2026 Tamil Nadu, best school Bargur" />
        <link rel="canonical" href="https://www.kanakadasaschool.in/" />
        <meta property="og:title" content="St. Kanakadasa Educational Institutions - Bargur" />
        <meta property="og:description" content="Premier CBSE &amp; Matric school in Bargur, Tamil Nadu. Admissions open for 2026–27." />
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

      {/* 1.1 Hero Banner */}
      <Hero />

      {/* 1.2 About Institution Snapshot */}
      <AboutSnapshot />

      {/* Quick Highlights strip */}
      <QuickHighlights />

      {/* 1.3 Visionary Leadership */}
      <VisionaryLeadership />

      {/* 1.4 Academic Excellence */}
      <AcademicPrograms />

      {/* 1.5 Why Choose Us */}
      <WhyChooseUs />

      {/* 1.6 Our Institutions */}
      <OurInstitutions />

      {/* 1.7 Facilities Highlights */}
      <FacilitiesShowcase />

      {/* 1.8 Student Development Programs */}
      <StudentDevelopment />

      {/* 1.9 Campus Life */}
      <CampusLife />

      {/* Admissions CTA */}
      <AdmissionsCTA />

      {/* 1.10 Timings & Contact Enquiry */}
      <TimingsContact />

      {/* 1.11 Contact Section */}
      <ContactSection />
    </>
  )
}
