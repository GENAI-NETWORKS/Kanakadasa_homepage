import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-lightbg text-textdark overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academic" element={<AcademicsPage />} />
          <Route path="/facility" element={<FacilitiesPage />} />
          <Route path="/curriculum" element={<CurriculumPage />} />
          <Route path="/admission" element={<AdmissionsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/parents" element={<ParentsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
