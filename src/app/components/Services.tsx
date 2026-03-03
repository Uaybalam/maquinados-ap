import { useState } from "react";

const cncImg = "https://images.unsplash.com/photo-1645754884761-6ada0d53807b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5pbmclMjBpbmR1c3RyaWFsJTIwcHJlY2lzaW9uJTIwcGFydHN8ZW58MXx8fHwxNzcyMjQ2Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080";
const weldingImg = "https://images.unsplash.com/photo-1641893823219-38b433f736c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMG1ldGFsJTIwd29ya3Nob3B8ZW58MXx8fHwxNzcyMjQ2Nzk3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const latheImg = "https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGxhdGhlJTIwY29udmVudGlvbmFsJTIwbWFjaGluaW5nfGVufDF8fHx8MTc3MjI0Njc5N3ww&ixlib=rb-4.1.0&q=80&w=1080";
const designImg = "https://images.unsplash.com/photo-1769147339214-076740872485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGVzaWduJTIwZW5naW5lZXJpbmclMjBibHVlcHJpbnR8ZW58MXx8fHwxNzcyMjQ2ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080";
const precisionImg = "https://images.unsplash.com/photo-1727373203627-73457889fe0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBtZXRhbCUyMHBhcnRzJTIwbWFudWZhY3R1cmluZyUyMHF1YWxpdHl8ZW58MXx8fHwxNzcyMjQ2ODAxfDA&ixlib=rb-4.1.0&q=80&w=1080";

const services = [
  {
    id: 1,
    title: "Maquinado CNC",
    shortDesc: "Fresado, torneado y taladrado de alta precisión con control numérico computarizado.",
    description:
      "Contamos con centros de maquinado CNC de última generación para producir piezas con tolerancias mínimas. Fresado, torneado, taladrado y roscado en materiales como acero, aluminio, bronce, nylon y más.",
    features: ["Fresado CNC", "Torneado CNC", "Taladrado de precisión", "Tolerancias ±0.01mm"],
    image: cncImg,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Maquinado Convencional",
    shortDesc: "Torno, fresadora y rectificadora convencional para piezas especiales y prototipos.",
    description:
      "Nuestro equipo de maquinistas especializados trabaja con tornos, fresadoras y rectificadoras convencionales para producir piezas únicas, prototipos y lotes pequeños con gran calidad.",
    features: ["Torno convencional", "Fresadora manual", "Rectificado", "Prototipos y series cortas"],
    image: latheImg,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Fabricación de Cubetas",
    shortDesc: "Diseño y fabricación de cubetas y recipientes metálicos industriales a medida.",
    description:
      "Fabricamos cubetas, contenedores y recipientes metálicos para uso industrial con los materiales y especificaciones que su proceso requiere, garantizando resistencia y durabilidad.",
    features: ["Diseño personalizado", "Acero inoxidable / negro", "Soldadura certificada", "Acabados especiales"],
    image: precisionImg,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Soldadura",
    shortDesc: "Soldadura MIG, TIG y por arco para estructuras, maquinaria y componentes industriales.",
    description:
      "Brindamos servicios de soldadura MIG, TIG y arco eléctrico para unión de estructuras metálicas, reparaciones de maquinaria, fabricación de marcos y componentes industriales de todo tipo.",
    features: ["Soldadura MIG/MAG", "Soldadura TIG", "Arco eléctrico", "Estructuras y recipientes"],
    image: weldingImg,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Diseño Industrial",
    shortDesc: "Modelado 3D, planos técnicos y diseño de piezas para manufactura en CAD/CAM.",
    description:
      "Nuestro equipo de ingenieros diseña piezas y conjuntos en software CAD/CAM de última generación, generando planos técnicos y modelos 3D listos para producción, optimizando materiales y costos.",
    features: ["Modelado 3D CAD", "Planos técnicos", "Diseño CAM/CAD", "Optimización de costos"],
    image: designImg,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Servicios Adicionales",
    shortDesc: "Pulido, desbarbado, tratamientos superficiales y ensamble de componentes.",
    description:
      "Complementamos nuestra producción con servicios de acabado: pulido, desbarbado, granallado, tratamientos térmicos, pintura industrial y ensamble de subconjuntos mecánicos.",
    features: ["Pulido y desbarbado", "Tratamientos superficiales", "Pintura industrial", "Ensamble mecánico"],
    image: precisionImg,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
];

interface ServicesProps {
  onScrollTo: (href: string) => void;
}

export function Services({ onScrollTo }: ServicesProps) {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white" aria-labelledby="servicios-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#F5C400] text-xs font-bold tracking-widest uppercase mb-3">
            ¿Qué hacemos?
          </span>
          <h2 id="servicios-title" className="text-[#1a2e4a] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Nuestros Servicios
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            Ofrecemos soluciones integrales de manufactura y diseño para la industria, con tecnología de punta y personal altamente capacitado.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-[#F5C400] rounded-full" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className={`group relative bg-white rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                activeService === service.id
                  ? "border-[#F5C400] shadow-2xl shadow-[#F5C400]/10 -translate-y-1"
                  : "border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-[#F5C400]/40"
              }`}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              aria-expanded={activeService === service.id}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e4a]/80 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <span className="text-white font-bold text-sm">{service.title}</span>
                  <div className="w-9 h-9 rounded-full bg-[#F5C400] flex items-center justify-center text-[#1a2e4a] shrink-0">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.shortDesc}</p>

                {/* Expanded detail */}
                <div className={`overflow-hidden transition-all duration-400 ${activeService === service.id ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.description}</p>
                  <ul className="space-y-1.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="mt-3 flex items-center gap-1.5 text-[#1a2e4a] text-xs font-semibold hover:text-[#F5C400] transition-colors"
                  aria-label={activeService === service.id ? `Colapsar ${service.title}` : `Ver más sobre ${service.title}`}
                >
                  {activeService === service.id ? "Ver menos" : "Ver más"}
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-3.5 h-3.5 transition-transform ${activeService === service.id ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => onScrollTo("#contacto")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a2e4a] text-white font-bold rounded-xl hover:bg-[#F5C400] hover:text-[#1a2e4a] transition-all duration-300 shadow-lg"
          >
            Solicitar Información
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
