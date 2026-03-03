import { useState, useEffect } from "react";
import logoImg from "figma:asset/e6ebeaf4ca89d730d002324967e403de4db30599.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Industrias", href: "#industrias" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a2e4a] shadow-2xl" : "bg-[#1a2e4a]/95"
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleLinkClick("#inicio"); }}
            className="flex items-center gap-3 shrink-0"
            aria-label="Maquinados AP - Inicio"
          >
            <img
              src={logoImg}
              alt="Maquinados AP - Calidad en diseño y maquinado de piezas industriales"
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                className="px-4 py-2 text-white/85 hover:text-[#F5C400] text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#F5C400] group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); handleLinkClick("#contacto"); }}
              className="ml-4 px-5 py-2.5 bg-[#F5C400] text-[#1a2e4a] text-sm font-bold rounded-lg hover:bg-[#e0b000] transition-colors duration-200 shadow-lg"
            >
              Cotizar Ahora
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 border-t border-white/10 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                className="px-4 py-3 text-white/85 hover:text-[#F5C400] hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); handleLinkClick("#contacto"); }}
              className="mx-4 mt-2 py-3 bg-[#F5C400] text-[#1a2e4a] text-sm font-bold rounded-lg text-center hover:bg-[#e0b000] transition-colors"
            >
              Cotizar Ahora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
