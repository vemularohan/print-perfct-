import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";

export const Route = createFileRoute("/services/polo-tshirts")({
  head: () => ({
    meta: [
      { title: "Custom Polo T-Shirt Printing Hyderabad — Branded Collared Tees" },
      { name: "description", content: "Looking for premium collared polo shirts? Suriyan Prints is a top custom polo t-shirt printing company in Hyderabad, serving Gachibowli, Kukatpally, Hitech City, and Secunderabad with bulk pricing." },
      { name: "keywords", content: "polo t shirt printing, corporate polo shirts, customized polo t shirts Hyderabad" }
    ]
  }),
  component: ServicePage
});

const FAQs = [
  { q: "What fabric weight is used for polo shirts?", a: "We primarily use 220gsm to 240gsm premium pique cotton grids, ensuring optimal structural weight, breathability, and durability for daily wear." },
  { q: "Do you offer bulk volume pricing on embroidered polos?", a: "Yes. Direct custom inquiries are welcome. We provide volume-tiered quotes starting from orders of 25 units." }
];

const FEATURES = [
  "Heavyweight Pique Cotton Grids",
  "Pre-shrunk Double-Stitched Seams",
  "Perfect for Logo Embroidery",
  "Available in 15+ Classic Colors"
];

const CONTENT_HTML = `
  <h2>Branded Polo T-Shirt Printing in Hyderabad</h2>
  <p>
    Give your team a sharp, coordinated edge with professional <strong>polo t shirt printing</strong> solutions from Suriyan Prints. Designed with a structured collar, double-button plackets, and ribbed cuffs, customized polo shirts present the perfect blend of casual comfort and business authority.
  </p>
  <p>
    Whether coordinating corporate uniforms for Hitech City IT executives, teamwear for event managers in Banjara Hills, or startup polos in Kukatpally, we offer precise brand representation. Our multi-head computer embroidery yields tight, color-rich stitches that make your company logo stand out cleanly.
  </p>
  <h3>Premium Quality Fabric Selection</h3>
  <p>
    We manufacture our polo t-shirts from high-grade pique knit fabrics, pre-shrunk to prevent size changes after washing. We service office parks and businesses in Madhapur, Jubilee Hills, and Secunderabad with tailored delivery schedules.
  </p>
`;

function ServicePage() {
  return (
    <ServicePageTemplate
      title="Custom Polo T-Shirt Printing Hyderabad — Branded Collared Tees"
      description="Looking for premium collared polo shirts? Suriyan Prints is a top custom polo t-shirt printing company in Hyderabad, serving Gachibowli, Kukatpally, Hitech City, and Secunderabad with bulk pricing."
      h1="Polo T-Shirts"
      tagline="Collared Brand Wear"
      introImage="/images/polo-t-shirt-printing.webp"
      contentHtml={CONTENT_HTML}
      features={FEATURES}
      faqs={FAQs}
      canonicalUrl="https://suriyanprints.vercel.app/services/polo-tshirts"
    />
  );
}
