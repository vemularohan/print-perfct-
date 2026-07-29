import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";

export const Route = createFileRoute("/services/oversized-tshirts")({
  head: () => ({
    meta: [
      { title: "Custom Oversized T-Shirt Printing Hyderabad — Streetwear Tees" },
      { name: "description", content: "Print custom oversized t-shirts and streetwear in Hyderabad. Suriyan Prints delivers heavyweight 240gsm cotton tees with drop shoulders and premium graphics in Jubilee Hills, Banjara Hills, and Hitech City." },
      { name: "keywords", content: "oversized t shirt printing, custom streetwear Hyderabad, bulk drop shoulder tshirts" }
    ]
  }),
  component: ServicePage
});

const FAQs = [
  { q: "What fabric is used for oversized t-shirts?", a: "We use 240gsm heavyweight loopknit cotton, providing a structured drop-shoulder fit suitable for modern streetwear designs." },
  { q: "Can we print back-prints on oversized tees?", a: "Yes. We support large-format back-prints and chest prints with high-detail DTF (Direct-to-Film) printing technology." }
];

const FEATURES = [
  "240gsm Heavyweight Loopknit Cotton",
  "Drop Shoulder Streetwear Cut",
  "Vibrant Back & Chest Prints",
  "Perfect for Apparel Brands & Startups"
];

const CONTENT_HTML = `
  <h2>Custom Oversized T-Shirt Printing in Hyderabad</h2>
  <p>
    The drop-shoulder oversized look has taken the fashion and startup world by storm. At <strong>Suriyan Prints</strong>, we help you launch your premium streetwear label or startup merchandise with top-tier <strong>oversized t shirt printing</strong> services in Hyderabad.
  </p>
  <p>
    We utilize heavyweight 240gsm loopknit cotton fabrics that offer the exact drape, feel, and structural weight demanded by street fashion. We coordinate with fashion entrepreneurs in Jubilee Hills, Banjara Hills, Gachibowli, and Madhapur to deliver high-quality, wash-resistant merchandise.
  </p>
  <h3>Premium Graphic Print Application</h3>
  <p>
    Oversized t-shirts require bold, high-fidelity graphics. Our Direct-to-Film (DTF) transfers provide high color density, ensuring gradient shading and typography stay crisp. Explore customized streetwear with pre-shrunk, bio-washed loopknit structures.
  </p>
`;

function ServicePage() {
  return (
    <ServicePageTemplate
      title="Custom Oversized T-Shirt Printing Hyderabad — Streetwear Tees"
      description="Print custom oversized t-shirts and streetwear in Hyderabad. Suriyan Prints delivers heavyweight 240gsm cotton tees with drop shoulders and premium graphics in Jubilee Hills, Banjara Hills, and Hitech City."
      h1="Oversized T-Shirts"
      tagline="Drop Shoulder Streetwear"
      introImage="/images/classic-custom-hoodie-beige.png"
      contentHtml={CONTENT_HTML}
      features={FEATURES}
      faqs={FAQs}
      canonicalUrl="https://suriyanprints.vercel.app/services/oversized-tshirts"
    />
  );
}
