import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";

export const Route = createFileRoute("/services/embroidery")({
  head: () => ({
    meta: [
      { title: "Custom Logo Embroidery Services Hyderabad — Branded Apparel" },
      { name: "description", content: "Optimize your corporate presence with premium logo embroidery services in Hyderabad. Suriyan Prints delivers high-quality branded uniforms and employee welcome shirts in Madhapur, Hitech City, and Gachibowli." },
      { name: "keywords", content: "embroidery services Hyderabad, logo embroidery, polo shirt embroidery Hyderabad" }
    ]
  }),
  component: ServicePage
});

const FAQs = [
  { q: "What types of apparel support custom embroidery?", a: "Polo t-shirts, business shirts, hoodies, jackets, caps, and heavy canvas tote bags support custom embroidery." },
  { q: "What is the maximum number of colors we can include in our embroidered logo?", a: "We support logos with up to 12 colors using premium colorfast polyester threads." }
];

const FEATURES = [
  "Digitally Calibrated Stitch Paths",
  "Premium Colorfast Polyester Threads",
  "High Thread-Count Logo Density",
  "Polos, Caps, and Jackets Supported"
];

const CONTENT_HTML = `
  <h2>Premium Logo Embroidery Services in Hyderabad</h2>
  <p>
    Embroidery adds a classic, premium look to any branded merchandise. Suriyan Prints offers expert <strong>embroidery services Hyderabad</strong> teams trust for professional branding, servicing Hitech City, Madhapur, Gachibowli, Kukatpally, and Secunderabad.
  </p>
  <p>
    Our computer-controlled embroidery machines ensure stitch consistency, translating your logo onto pique polos, structured caps, and hoodies.
  </p>
`;

function ServicePage() {
  return (
    <ServicePageTemplate
      title="Custom Logo Embroidery Services Hyderabad — Branded Apparel"
      description="Optimize your corporate presence with premium logo embroidery services in Hyderabad. Suriyan Prints delivers high-quality branded uniforms and employee welcome shirts in Madhapur, Hitech City, and Gachibowli."
      h1="Embroidery"
      tagline="Premium Logo Stitching"
      introImage="/images/polo-t-shirt-printing.webp"
      contentHtml={CONTENT_HTML}
      features={FEATURES}
      faqs={FAQs}
      canonicalUrl="https://suriyanprints.vercel.app/services/embroidery"
    />
  );
}
