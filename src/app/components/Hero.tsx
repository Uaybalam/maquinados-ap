import logoImg from "../../assets/logo.png";

const cncImage = "https://images.unsplash.com/photo-1645754884761-6ada0d53807b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5pbmclMjBpbmR1c3RyaWFsJTIwcHJlY2lzaW9uJTIwcGFydHN8ZW58MXx8fHwxNzcyMjQ2Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080";

interface HeroProps {
  onScrollTo: (href: string) => void;
}

export function Hero({ onScrollTo }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={cncImage}
          alt="Maquinado CNC de precisión industrial"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e33]/92 via-[#1a2e4a]/80 to-[#1a2e4a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e33]/60 via-transparent to-transparent" />
      </div>

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#F5C400 1px, transparent 1px), linear-gradient(90deg, #F5C400 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F5C400]/15 border border-[#F5C400]/30 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#F5C400] animate-pulse" />
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase">
              Precision Industrial · México
            </span>
          </div>

          {/* Logo */}
          <div className="mb-6">
            <img
              src={logoImg}
              alt="Maquinados AP"
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </div>

          <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.15 }}>
            Diseño y Maquinado de{" "}
            <span className="text-[#F5C400]">Piezas Industriales</span>{" "}
            de Alta Precisión
          </h1>

          <p className="text-white/75 mb-8 max-w-xl" style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7 }}>
            Somos expertos en maquinado CNC, maquinado convencional, fabricación
            de cubetas, soldadura y diseño para la industria automotriz,
            metalmecánica, plásticos y más.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onScrollTo("#contacto")}
              className="group px-7 py-3.5 bg-[#F5C400] text-[#1a2e4a] font-bold rounded-xl hover:bg-[#e0b000] transition-all duration-300 shadow-xl hover:shadow-[#F5C400]/30 hover:-translate-y-0.5 flex items-center gap-2"
            >
              Solicitar Cotización
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => onScrollTo("#servicios")}
              className="px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-[#F5C400] hover:text-[#F5C400] transition-all duration-300 backdrop-blur-sm"
            >
              Ver Servicios
            </button>
          </div>

          {/* Trust stats */}
          <div className="mt-14 flex flex-wrap gap-8">
            {[
              { value: "15+", label: "Años de Experiencia" },
              { value: "500+", label: "Proyectos Completados" },
              { value: "100%", label: "Calidad Garantizada" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-[#F5C400] font-extrabold" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                  {stat.value}
                </span>
                <span className="text-white/60 text-xs font-medium tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-white text-xs tracking-widest uppercase">Explorar</span>
        <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
