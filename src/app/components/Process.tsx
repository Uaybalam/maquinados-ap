const steps = [
  {
    number: "01",
    title: "Consulta Inicial",
    desc: "Nos contactas con tu necesidad: plano, muestra física o descripción. Analizamos los requerimientos técnicos y materiales.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Cotización",
    desc: "En menos de 24 horas te enviamos una cotización detallada con precios, tiempos de entrega y especificaciones técnicas.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Diseño y Planificación",
    desc: "Nuestros ingenieros generan los modelos 3D y programas CNC necesarios, planificando el proceso de manufactura más eficiente.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Manufactura",
    desc: "Producimos sus piezas con los equipos y personal especializado adecuados, bajo estrictos estándares de calidad durante todo el proceso.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Control de Calidad",
    desc: "Cada pieza es inspeccionada dimensionalmente y verificada contra los planos o especificaciones originales del cliente.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Entrega",
    desc: "Entregamos en tiempo y forma, con la documentación técnica necesaria. También ofrecemos envíos a toda la República Mexicana.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
];

export function Process() {
  return (
    <section id="proceso" className="py-20 lg:py-28 bg-white" aria-labelledby="proceso-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#F5C400] text-xs font-bold tracking-widest uppercase mb-3">
            Cómo trabajamos
          </span>
          <h2 id="proceso-title" className="text-[#1a2e4a] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            Un proceso claro y eficiente que garantiza resultados de calidad en cada proyecto, desde la consulta hasta la entrega final.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-[#F5C400] rounded-full" />
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative p-6 rounded-2xl border border-gray-100 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-[#F5C400]/40"
            >
              {/* Connector line (only between connected cards on desktop) */}
              {index < steps.length - 1 && index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-[#F5C400]/20 z-10" style={{ transform: "translateX(-50%)" }} />
              )}

              {/* Number badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-4xl font-extrabold"
                  style={{ color: "rgba(245, 196, 0, 0.15)", letterSpacing: "-1px" }}
                >
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#1a2e4a] group-hover:bg-[#F5C400] flex items-center justify-center text-white group-hover:text-[#1a2e4a] transition-all duration-300 shadow-md">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-[#1a2e4a] font-bold mb-2" style={{ fontSize: "1rem" }}>{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>

              {/* Bottom accent */}
              <div className="mt-4 w-0 h-0.5 bg-[#F5C400] group-hover:w-full transition-all duration-400 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
