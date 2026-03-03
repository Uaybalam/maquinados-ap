import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Industries } from "./components/Industries";
import { WhyUs } from "./components/WhyUs";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function App() {
  useEffect(() => {
    // SEO meta tags
    document.title =
      "Maquinados AP | Maquinado CNC y Diseño de Piezas Industriales en México";

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    const setOG = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setMeta(
      "description",
      "Maquinados AP: empresa especializada en maquinado CNC, maquinado convencional, fabricación de cubetas, soldadura y diseño industrial para el sector automotriz, metalmecánico, plásticos y más. Cotización sin costo."
    );
    setMeta(
      "keywords",
      "maquinado CNC, maquinado convencional, soldadura industrial, diseño de piezas, fabricación de cubetas, industria automotriz, metalmecánica, piezas industriales, México, fresado CNC, torneado CNC"
    );
    setMeta("robots", "index, follow");
    setMeta("author", "Maquinados AP");
    setMeta("language", "Spanish");
    setMeta("geo.region", "MX");

    setOG("og:title", "Maquinados AP | Maquinado CNC y Diseño de Piezas Industriales");
    setOG(
      "og:description",
      "Especialistas en diseño y maquinado de piezas para la industria automotriz, metalmecánica, plásticos y más. CNC, convencional, soldadura y diseño."
    );
    setOG("og:type", "website");
    setOG("og:locale", "es_MX");

    // Structured data (JSON-LD)
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Maquinados AP",
      description:
        "Empresa especializada en maquinado CNC, maquinado convencional, fabricación de cubetas, soldadura y diseño industrial para el sector industrial en México.",
      url: "https://maquinadosap.com",
      telephone: "+52-XXX-XXX-XXXX",
      email: "contacto@maquinadosap.com",
      addressCountry: "MX",
      sameAs: [],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Maquinado Industrial",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maquinado CNC" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maquinado Convencional" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fabricación de Cubetas" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soldadura Industrial" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diseño Industrial" } },
        ],
      },
    });
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans antialiased" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <Navbar />
      <main>
        <Hero onScrollTo={scrollTo} />
        <Services onScrollTo={scrollTo} />
        <Industries />
        <WhyUs />
        <Process />
        <Contact />
      </main>
      <Footer onScrollTo={scrollTo} />

      <WhatsAppButton />
    </div>
  );
}