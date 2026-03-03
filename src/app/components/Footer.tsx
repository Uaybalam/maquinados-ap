import logoImg from "../../assets/logo.png";

const services = [
  "Maquinado CNC",
  "Maquinado Convencional",
  "Fabricación de Cubetas",
  "Soldadura",
  "Diseño Industrial",
  "Servicios Adicionales",
];

const industries = [
  "Automotriz",
  "Metalmecánica",
  "Plásticos",
  "Alimentaria",
  "Minería y Energía",
  "Otras Industrias",
];

interface FooterProps {
  onScrollTo: (href: string) => void;
}

export function Footer({ onScrollTo }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1e33] text-white" role="contentinfo">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-[#F5C400] to-[#e0b000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-[#1a2e4a] font-extrabold" style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}>
              ¿Listo para comenzar tu proyecto?
            </p>
            <p className="text-[#1a2e4a]/70 text-sm">Cotización gratuita en menos de 24 horas</p>
          </div>
          <button
            onClick={() => onScrollTo("#contacto")}
            className="px-7 py-3 bg-[#1a2e4a] text-white font-bold rounded-xl hover:bg-[#253858] transition-colors shrink-0 shadow-xl"
          >
            Contactar Ahora
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={logoImg}
              alt="Maquinados AP"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Especialistas en diseño y maquinado de piezas industriales. Calidad, precisión y cumplimiento en cada proyecto.
            </p>
            <div className="flex gap-3">
              {/* Social links placeholders */}
              {[
                { label: "Facebook", icon: "f" },
                { label: "LinkedIn", icon: "in" },
                { label: "WhatsApp", icon: "wa" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#F5C400] hover:text-[#1a2e4a] hover:border-[#F5C400] transition-all text-xs font-bold"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#F5C400] font-bold text-xs tracking-widest uppercase mb-4">Servicios</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => onScrollTo("#servicios")}
                    className="text-white/50 hover:text-[#F5C400] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#F5C400] transition-colors" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-[#F5C400] font-bold text-xs tracking-widest uppercase mb-4">Industrias</h3>
            <ul className="space-y-2.5">
              {industries.map((ind) => (
                <li key={ind}>
                  <button
                    onClick={() => onScrollTo("#industrias")}
                    className="text-white/50 hover:text-[#F5C400] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#F5C400] transition-colors" />
                    {ind}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#F5C400] font-bold text-xs tracking-widest uppercase mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#F5C400] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white/50 text-sm">+52 (XXX) XXX-XXXX</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#F5C400] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white/50 text-sm">contacto@maquinadosap.com</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#F5C400] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/50 text-sm">México</span>
              </li>
            </ul>

            <div className="mt-5 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-white/70 text-xs font-semibold mb-1">Horario de atención:</p>
              <p className="text-white/40 text-xs">Lunes a Viernes: 8:00 - 18:00</p>
              <p className="text-white/40 text-xs">Sábados: 8:00 - 13:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {year} Maquinados AP. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Diseño y maquinado de piezas industriales · México
          </p>
        </div>
      </div>
    </footer>
  );
}
