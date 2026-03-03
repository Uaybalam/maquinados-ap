import { useState } from "react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const serviceOptions = [
  "Maquinado CNC",
  "Maquinado Convencional",
  "Fabricación de Cubetas",
  "Soldadura",
  "Diseño Industrial",
  "Servicios Adicionales",
  "Proyecto Completo",
];

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-gray-50" aria-labelledby="contacto-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#F5C400] text-xs font-bold tracking-widest uppercase mb-3">
            Hablemos de tu proyecto
          </span>
          <h2 id="contacto-title" className="text-[#1a2e4a] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Solicita tu Cotización
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            Cuéntanos sobre tu proyecto y en menos de 24 horas te enviaremos una propuesta personalizada sin costo.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-[#F5C400] rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#1a2e4a] rounded-2xl p-7 text-white">
              <h3 className="font-bold text-base mb-5 text-[#F5C400]">Información de Contacto</h3>

              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: "Teléfono",
                    value: "+52 (XXX) XXX-XXXX",
                    sub: "Lun - Vie: 8:00 - 18:00",
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: "Correo Electrónico",
                    value: "contacto@maquinadosap.com",
                    sub: "Respondemos en menos de 24 hrs",
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: "Ubicación",
                    value: "México",
                    sub: "Atendemos a nivel nacional",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-[#F5C400]/15 flex items-center justify-center text-[#F5C400]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/50 text-xs mb-0.5">{item.label}</p>
                      <p className="text-white font-semibold text-sm">{item.value}</p>
                      <p className="text-white/40 text-xs">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp button */}
              <a
                href="https://wa.me/52XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex items-center justify-center gap-2 w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contactar por WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: "🏆", label: "Calidad" },
                { icon: "⚡", label: "Rapidez" },
                { icon: "🤝", label: "Confianza" },
              ].map((badge) => (
                <div key={badge.label} className="text-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="text-2xl mb-1">{badge.icon}</div>
                  <p className="text-[#1a2e4a] text-xs font-bold">{badge.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-7 lg:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[#1a2e4a] font-bold mb-2" style={{ fontSize: "1.3rem" }}>
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-gray-500 text-sm max-w-sm">
                    Hemos recibido tu solicitud. Nuestro equipo te contactará en menos de 24 horas con una cotización personalizada.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm); }}
                    className="mt-6 px-6 py-2.5 bg-[#F5C400] text-[#1a2e4a] font-bold rounded-xl text-sm hover:bg-[#e0b000] transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-[#1a2e4a] text-xs font-bold mb-1.5">
                        Nombre completo <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Juan Pérez"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#F5C400] focus:ring-2 focus:ring-[#F5C400]/20 transition-all bg-gray-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-[#1a2e4a] text-xs font-bold mb-1.5">
                        Empresa
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Mi Empresa S.A. de C.V."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#F5C400] focus:ring-2 focus:ring-[#F5C400]/20 transition-all bg-gray-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[#1a2e4a] text-xs font-bold mb-1.5">
                        Correo electrónico <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="correo@empresa.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#F5C400] focus:ring-2 focus:ring-[#F5C400]/20 transition-all bg-gray-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[#1a2e4a] text-xs font-bold mb-1.5">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+52 (XXX) XXX-XXXX"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#F5C400] focus:ring-2 focus:ring-[#F5C400]/20 transition-all bg-gray-50"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="service" className="block text-[#1a2e4a] text-xs font-bold mb-1.5">
                      Servicio requerido <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#F5C400] focus:ring-2 focus:ring-[#F5C400]/20 transition-all bg-gray-50 text-gray-700"
                    >
                      <option value="">Selecciona un servicio...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="message" className="block text-[#1a2e4a] text-xs font-bold mb-1.5">
                      Descripción del proyecto <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe tu proyecto: tipo de pieza, material, cantidad, tolerancias, plazos de entrega..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#F5C400] focus:ring-2 focus:ring-[#F5C400]/20 transition-all bg-gray-50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#F5C400] text-[#1a2e4a] font-bold rounded-xl hover:bg-[#e0b000] disabled:opacity-60 transition-all duration-300 shadow-lg hover:shadow-[#F5C400]/30 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Solicitar Cotización Gratuita
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-center text-gray-400 text-xs mt-3">
                    Sin compromiso · Respuesta en menos de 24 horas
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
