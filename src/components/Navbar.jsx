import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academic", href: "/academic" },
  { label: "Facility", href: "/facility" },
  { label: "Curriculum", href: "/curriculum" },
  { label: "Admission", href: "/admission" },
  { label: "Parents", href: "/parents" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const TICKER_H = 36; // px — matches AnnouncementTicker height

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isSolidNav = !isHomePage || scrolled;

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${isSolidNav ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      style={{ top: `${TICKER_H}px` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <img
              src={logo}
              alt="St. Kanakadasa Logo"
              className="w-14 h-14 md:w-20 md:h-20 object-contain"
            />
            <div className="hidden sm:block text-left">
              <p
                className={`font-heading font-bold text-base md:text-lg leading-tight transition-colors duration-300 ${isSolidNav ? "text-[#1A237E]" : "text-white"
                  }`}
              >
                St. Kanakadasa
              </p>
              <p
                className={`text-sm font-bold tracking-wide transition-colors duration-300 ${isSolidNav ? "text-gray-500" : "text-white/80"
                  }`}
              >
                Matriculation Hr.Sec.School
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => {
                    if (link.href !== "/") e.preventDefault();
                  }}
                  className={`px-3 py-2 text-sm font-medium rounded relative group transition-colors duration-200 ${isSolidNav
                      ? isActive
                        ? "text-[#1A237E] font-bold"
                        : "text-gray-700 hover:text-[#1A237E]"
                      : isActive
                        ? "text-white font-bold"
                        : "text-white/80 hover:text-white"
                    }`}
                >
                  {link.label}
                  {link.href !== "/" && (
                    <span className="absolute inset-0 z-10" title="Coming Soon" />
                  )}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded"
                      style={{ background: "#FF6F00" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Hamburger only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`xl:hidden p-2 rounded-lg transition-colors duration-200 ${isSolidNav ? "text-[#1A237E] hover:bg-blue-50" : "text-white hover:bg-white/20"
              }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer Overlay */}
      {menuOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`xl:hidden fixed right-0 h-screen w-[65%] sm:w-[50%] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ top: `${TICKER_H}px` }}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <span className="font-bold text-[#1A237E]">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
          >
            <X size={22} />
          </button>
        </div>

        <div className="px-4 py-6 flex flex-col gap-1 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => {
                  if (link.href !== "/") {
                    e.preventDefault();
                  } else {
                    setMenuOpen(false);
                  }
                }}
                className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg flex items-center gap-2 transition-colors duration-200 ${isActive
                    ? "bg-[#1A237E]/10 text-[#1A237E] font-bold border-l-4 border-[#FF6F00]"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#1A237E]"
                  }`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: "#FF6F00" }}
                />
                {link.label}

              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
