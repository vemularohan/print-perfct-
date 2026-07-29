import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";

export const Route = createFileRoute("/services/corporate-tshirts")({
  head: () => ({
    meta: [
      { title: "Corporate T-Shirt Printing Hyderabad — Company Logo Wear" },
      { name: "description", content: "Optimize your corporate presence with premium company t-shirts in Hyderabad. Suriyan Prints delivers high-quality branded uniforms and employee welcome shirts in Madhapur, Hitech City, and Gachibowli." },
      { name: "keywords", content: "corporate t shirts Hyderabad, company t shirt printing, custom logo t shirts, employee t shirts" }
    ]
  }),
  component: ServicePage
});

const FAQs = [
  { q: "Do you offer logo embroidery on corporate t-shirts?", a: "Yes. We specialize in high-density computer embroidery for corporate polo t-shirts and jackets, providing a polished and professional company uniform finish." },
  { q: "What locations in Hyderabad do you serve for corporate orders?", a: "We serve all key office districts including Hitech City, Madhapur, Gachibowli, Kukatpally, Secunderabad, and Jubilee Hills." }
];

const FEATURES = [
  "Premium 220gsm Pique Polo Fabrics",
  "High-density Computer Embroidery",
  "Sleek and Comfy Bio-washed Cotton",
  "Custom Corporate Packaging Options"
];

const CONTENT_HTML = `
  <h2>Enhance Your Brand Image with Custom Corporate T-Shirts in Hyderabad</h2>
  <p>
    In today's competitive corporate landscape, a unified brand image speaks volumes. At <strong>Suriyan Prints</strong>, we are dedicated to manufacturing premium <strong>corporate t shirts Hyderabad</strong> businesses trust. From sleek embroidered polos for client meetings in Madhapur to comfortable round-neck tees for Friday dress-downs in Gachibowli, we bring your logo to life.
  </p>
  <p>
    We recognize that corporate uniforms need to be both durable and exceptionally comfortable. That is why we source premium combed cotton, pique polo grids, and lightweight moisture-wicking materials that feel premium throughout long office hours.
  </p>
  <h3>Tailored Company & Employee Welcome Kits</h3>
  <p>
    Onboarding new hires is a crucial brand touchpoint. We coordinate closely with HR managers across Hitech City, Secunderabad, and Banjara Hills to deliver complete brand merchandise packages. Pair your custom employee t-shirts with personalized steel bottles, hardbound diaries, metal pens, and elegant corporate boxes for the ultimate welcome kit.
  </p>
`;

function ServicePage() {
  return (
    <ServicePageTemplate
      title="Corporate T-Shirt Printing Hyderabad — Company Logo Wear"
      description="Optimize your corporate presence with premium company t-shirts in Hyderabad. Suriyan Prints delivers high-quality branded uniforms and employee welcome shirts in Madhapur, Hitech City, and Gachibowli."
      h1="Corporate T-Shirts"
      tagline="Company Logo Branding"
      introImage="/images/corporate-t-shirts.webp"
      contentHtml={CONTENT_HTML}
      features={FEATURES}
      faqs={FAQs}
      canonicalUrl="https://suriyanprints.vercel.app/services/corporate-tshirts"
    />
  );
}
