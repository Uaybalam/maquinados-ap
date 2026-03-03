const stats = [
  { value: "15+", label: "Años de experiencia", desc: "Más de una década y media en la industria" },
  { value: "500+", label: "Proyectos entregados", desc: "Piezas y conjuntos completados con éxito" },
  { value: "50+", label: "Clientes activos", desc: "Empresas que confían en nosotros" },
  { value: "100%", label: "Calidad garantizada", desc: "Control de calidad en cada pieza" },
];

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Calidad Certificada",
    desc: "Cada pieza pasa por riguroso control dimensional y de calidad antes de su entrega.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Entregas a Tiempo",
    desc: "Cumplimos con los plazos acordados porque sabemos que su tiempo de producción es valioso.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Precios Competitivos",
    desc: "Ofrecemos tarifas justas y transparentes sin sacrificar la calidad de nuestros trabajos.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Tecnología de Punta",
    desc: "Contamos con centros de maquinado CNC, software CAD/CAM y equipos de medición de precisión.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Equipo Especializado",
    desc: "Nuestros maquinistas e ingenieros tienen amplia experiencia en manufactura industrial.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Soporte Integral",
    desc: "Desde el diseño hasta la entrega, acompañamos cada etapa de su proyecto.",
  },
];

export function WhyUs() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-[#1a2e4a]" aria-labelledby="nosotros-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#F5C400] text-xs font-bold tracking-widest uppercase mb-3">
            ¿Por qué elegirnos?
          </span>
          <h2 id="nosotros-title" className="text-white mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.2 }}>
            La Diferencia Maquinados AP
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            Con más de 15 años en el sector, nos hemos consolidado como un aliado confiable para empresas que exigen precisión, calidad y cumplimiento.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-[#F5C400] rounded-full" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#F5C400]/30 transition-all duration-300"
            >
              <div className="text-[#F5C400] font-extrabold mb-1" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-white/40 text-xs">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#F5C400]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-[#F5C400]/10 border border-[#F5C400]/20 flex items-center justify-center text-[#F5C400] group-hover:bg-[#F5C400] group-hover:text-[#1a2e4a] transition-all duration-300">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">{benefit.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
