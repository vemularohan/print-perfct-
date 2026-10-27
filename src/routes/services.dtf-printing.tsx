import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";

export const Route = createFileRoute("/services/dtf-printing")({
  head: () => ({
    meta: [
      { title: "High-Quality DTF Printing Services Hyderabad — Custom Tees" },
      { name: "description", content: "Optimize your corporate presence with premium DTF printing services in Hyderabad. Suriyan Prints delivers high-quality branded uniforms and employee welcome shirts in Madhapur, Hitech City, and Gachibowli." },
      { name: "keywords", content: "DTF printing Hyderabad, direct to film transfers, activewear printing Hyderabad" }
    ]
  }),
  component: ServicePage
});

const FAQs = [
  { q: "Does DTF printing support gradient colors?", a: "Yes. DTF printing supports full-color digital graphics and gradient colors with photographic clarity." },
  { q: "Is DTF print stretchable?", a: "Yes, our DTF inks are highly stretchable and wash-resistant, making them ideal for activewear and sports jerseys." }
];

const FEATURES = [
  "Photographic Color Clarity",
  "High Stretch & Crack-resistant Inks",
  "Wash-resistant Digital Transfers",
  "Perfect for Activewear & Cotton Tees"
];

const CONTENT_HTML = `
  <h2>Vibrant DTF (Direct-to-Film) Printing in Hyderabad</h2>
  <p>
    Get vibrant, complex graphics printed with precision. Suriyan Prints provides top-tier <strong>DTF printing Hyderabad</strong> services, delivering high-resolution digital print transfers for teams, fests, and brands in Madhapur, Hitech City, Gachibowli, Kukatpally, and Secunderabad.
  </p>
  <p>
    Our DTF prints feature high flexibility and wash longevity, ensuring that multi-color logos stay sharp without cracking or peeling over time.
  </p>
`;

function ServicePage() {
  return (
    <ServicePageTemplate
      title="High-Quality DTF Printing Services Hyderabad — Custom Tees"
      description="Optimize your corporate presence with premium DTF printing services in Hyderabad. Suriyan Prints delivers high-quality branded uniforms and employee welcome shirts in Madhapur, Hitech City, and Gachibowli."
      h1="DTF Printing"
      tagline="Vibrant Digital Transfers"
      introImage="/images/banners.png"
      contentHtml={CONTENT_HTML}
      features={FEATURES}
      faqs={FAQs}
      canonicalUrl="https://suriyanprints.vercel.app/services/dtf-printing"
    />
  );
}
