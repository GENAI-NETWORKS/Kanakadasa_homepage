import { Routes, Route, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnnouncementTicker from "./components/AnnouncementTicker";

// Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import CurriculumPage from "./pages/CurriculumPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import ParentsPage from "./pages/ParentsPage";
import GalleryPage from "./pages/GalleryPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-lightbg text-textdark overflow-x-hidden">
      <ScrollToTop />
      {/* Fixed ticker at very top */}
      <AnnouncementTicker />
      {/* Navbar below ticker */}
      <Navbar />

      {/* Floating Vertical Admissions Tab */}
      <Link
        to="/admission"
        className="fixed top-1/2 right-0 -translate-y-1/2 bg-[#FF6F00] text-white font-bold py-3 px-1 sm:py-4 sm:px-2 rounded-l-lg shadow-2xl z-[100] transition-transform hover:-translate-x-1 cursor-pointer flex items-center justify-center border-y-2 border-l-2 border-white/20"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        <span className="tracking-[0.15em] uppercase text-[10px] sm:text-sm drop-shadow-md whitespace-nowrap">Admissions Open</span>
      </Link>

      <main className="flex-grow">
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/about"     element={<AboutPage />} />
          <Route path="/academic"  element={<AcademicsPage />} />
          <Route path="/facility"  element={<FacilitiesPage />} />
          <Route path="/curriculum" element={<CurriculumPage />} />
          <Route path="/admission" element={<AdmissionsPage />} />
          <Route path="/gallery"   element={<GalleryPage />} />
          <Route path="/parents"   element={<ParentsPage />} />
          <Route path="/careers"   element={<CareersPage />} />
          <Route path="/contact"   element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
