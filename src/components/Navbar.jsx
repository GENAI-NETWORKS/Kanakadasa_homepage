import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isSolidNav = !isHomePage || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolidNav
          ? "bg-white shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center shadow-md">
              <span className="text-accent font-heading font-bold text-sm md:text-base leading-none">SKS</span>
            </div>
            <div className="hidden sm:block text-left">
              <p className={`font-heading font-bold text-sm md:text-base leading-tight transition-colors duration-300 ${isSolidNav ? "text-primary" : "text-white"}`}>
                St. Kanakadasa
              </p>
              <p className={`text-xs font-medium tracking-wide transition-colors duration-300 ${isSolidNav ? "text-textmuted" : "text-white/80"}`}>
                Educational Institutions
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
                  onClick={() => window.scrollTo(0, 0)}
                  className={`px-3 py-2 text-sm font-medium rounded transition-all duration-200 relative group
                    ${isSolidNav ? "text-textdark hover:text-primary" : "text-white/90 hover:text-white"}`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent rounded transition-all duration-300
                      ${isActive ? "w-5" : "w-0 group-hover:w-5"}`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/admission"
              onClick={() => window.scrollTo(0, 0)}
              className="hidden md:inline-flex items-center justify-center bg-accent text-white text-sm font-bold px-3 py-2 rounded-lg
                         hover:brightness-110 text-white transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              Apply Now
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`xl:hidden p-2 rounded-lg transition-colors duration-200
                ${isSolidNav ? "text-primary hover:bg-primary/10" : "text-white hover:bg-white/20"}`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <Menu size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer Overlay */}
      {menuOpen && (
        <div 
          className="xl:hidden fixed inset-0 bg-black/50 z-40" 
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile drawer Side Panel */}
      <div
        className={`xl:hidden fixed top-0 right-0 h-full w-[50%] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <span className="font-bold text-primary">Menu</span>
          <button 
            onClick={() => setMenuOpen(false)}
            className="p-2 text-textmuted hover:bg-lightbg rounded-lg"
          >
            <X size={22} />
          </button>
        </div>
        
        <div className="px-4 py-6 flex flex-col gap-2 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => {
                  setMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
                  ${isActive
                    ? "bg-primary/10 text-primary border-l-4 border-accent"
                    : "text-textdark hover:bg-lightbg hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/admission"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
            className="mt-4 w-fit mx-auto bg-accent text-white text-sm font-bold py-2 px-6 rounded-lg hover:brightness-110 transition-colors duration-200 shadow-md"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}
