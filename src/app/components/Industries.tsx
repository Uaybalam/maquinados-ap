const automotiveImg = "https://images.unsplash.com/photo-1758873263428-f4b2edb45fe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwbWFudWZhY3R1cmluZyUyMGZhY3RvcnklMjBwYXJ0c3xlbnwxfHx8fDE3NzIyNDY3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const plasticsImg = "https://images.unsplash.com/photo-1657186593846-8d3e67155468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwaW5qZWN0aW9uJTIwbW9sZGluZyUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzcyMjQ2ODAxfDA&ixlib=rb-4.1.0&q=80&w=1080";

const industries = [
  {
    id: 1,
    name: "Automotriz",
    description: "Piezas de precisión para ensamblaje de vehículos, componentes de motor, transmisión y carrocería.",
    image: automotiveImg,
    icon: "🚗",
    items: ["Componentes de motor", "Piezas de transmisión", "Herramental", "Prototipos"],
  },
  {
    id: 2,
    name: "Metalmecánica",
    description: "Fabricación de estructuras, marcos, soportes y componentes para maquinaria industrial.",
    image: "https://images.unsplash.com/photo-1645754884761-6ada0d53807b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5pbmclMjBpbmR1c3RyaWFsJTIwcHJlY2lzaW9uJTIwcGFydHN8ZW58MXx8fHwxNzcyMjQ2Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "⚙️",
    items: ["Estructuras metálicas", "Soportes industriales", "Fijaciones y bridas", "Piezas de repuesto"],
  },
  {
    id: 3,
    name: "Plásticos",
    description: "Diseño y maquinado de moldes, insertos y herramental para la industria del plástico.",
    image: plasticsImg,
    icon: "🏭",
    items: ["Moldes de inyección", "Herramental para plásticos", "Insertos de molde", "Calibres y plantillas"],
  },
  {
    id: 4,
    name: "Alimentaria",
    description: "Componentes en acero inoxidable y materiales certificados para la industria de alimentos.",
    image: "https://images.unsplash.com/photo-1727373203627-73457889fe0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBtZXRhbCUyMHBhcnRzJTIwbWFudWZhY3R1cmluZyUyMHF1YWxpdHl8ZW58MXx8fHwxNzcyMjQ2ODAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "🥫",
    items: ["Acero inoxidable 304/316", "Superficies sanitarias", "Contenedores", "Transportadores"],
  },
  {
    id: 5,
    name: "Minería y Energía",
    description: "Piezas robustas de alta resistencia para equipos de minería y generación de energía.",
    image: "https://images.unsplash.com/photo-1641893823219-38b433f736c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMG1ldGFsJTIwd29ya3Nob3B8ZW58MXx8fHwxNzcyMjQ2Nzk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "⛏️",
    items: ["Piezas de desgaste", "Componentes hidráulicos", "Ejes y flechas", "Poleas y engranajes"],
  },
  {
    id: 6,
    name: "Otras Industrias",
    description: "Atendemos cualquier sector que requiera precisión: aeronáutica, farmacéutica, textil y más.",
    image: "https://images.unsplash.com/photo-1769147339214-076740872485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGVzaWduJTIwZW5naW5lZXJpbmclMjBibHVlcHJpbnR8ZW58MXx8fHwxNzcyMjQ2ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "🔩",
    items: ["Aeronáutica", "Farmacéutica", "Textil", "Proyectos especiales"],
  },
];

export function Industries() {
  return (
    <section id="industrias" className="py-20 lg:py-28 bg-gray-50" aria-labelledby="industrias-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#F5C400] text-xs font-bold tracking-widest uppercase mb-3">
            Sectores que atendemos
          </span>
          <h2 id="industrias-title" className="text-[#1a2e4a] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Industrias que Servimos
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            Nuestra versatilidad nos permite atender múltiples sectores industriales con la misma calidad y profesionalismo.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-[#F5C400] rounded-full" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <article
              key={industry.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={industry.image}
                  alt={`Industria ${industry.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e4a] to-[#1a2e4a]/20 opacity-60" />
                <div className="absolute top-3 right-3 w-10 h-10 bg-[#F5C400] rounded-full flex items-center justify-center text-xl">
                  {industry.icon}
                </div>
                <h3 className="absolute bottom-3 left-4 text-white font-bold" style={{ fontSize: "1.1rem" }}>
                  {industry.name}
                </h3>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{industry.description}</p>
                <ul className="space-y-1.5">
                  {industry.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-[#F5C400] shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
