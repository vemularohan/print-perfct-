import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";

export const Route = createFileRoute("/services/custom-tshirt-printing")({
  head: () => ({
    meta: [
      { title: "Custom T-Shirt Printing in Hyderabad — Suriyan Prints" },
      { name: "description", content: "Looking for premium custom t-shirt printing in Hyderabad? Suriyan Prints offers high-quality round neck, polo, and event t-shirts with express delivery in Gachibowli, Hitech City, Madhapur, and Kukatpally." },
      { name: "keywords", content: "custom t shirt printing Hyderabad, t shirt printing Hyderabad, bulk t shirt printing Hyderabad, custom logo t shirts Hyderabad" },
      { property: "og:title", content: "Custom T-Shirt Printing in Hyderabad — Suriyan Prints" },
      { property: "og:description", content: "Premium quality custom printed t-shirts in Hyderabad. Bulk printing, DTF, screen printing, and custom embroidery services with fast delivery." },
      { property: "og:image", content: "https://suriyanprints.vercel.app/images/custom-t-shirt-printing-hyderabad.webp" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
  }),
  component: ServicePage,
});

const FAQs = [
  { q: "What is the minimum order quantity for custom t-shirt printing in Hyderabad?", a: "At Suriyan Prints, we accommodate orders starting from just 10 units for events and teams, though ordering 25+ units unlocks better bulk pricing discounts." },
  { q: "Can you deliver customized t-shirts to Gachibowli and Hitech City?", a: "Yes, we offer express delivery services across all major IT hubs in Hyderabad, including Gachibowli, Hitech City, Madhapur, Kondapur, and Kukatpally." },
  { q: "What printing methods do you support?", a: "We support direct-to-film (DTF) printing, screen printing, and premium computer embroidery services." }
];

const FEATURES = [
  "Premium Cotton & DryFit Fabrics",
  "High-resolution DTF & Screen Printing",
  "Express Delivery in Hitech City & Gachibowli",
  "Free Design Verification by Experts"
];

const CONTENT_HTML = `
  <h2>Your Trusted Partner for Custom T-Shirt Printing in Hyderabad</h2>
  <p>
    Welcome to <strong>Suriyan Prints</strong>, the leading custom t-shirt manufacturer in Hyderabad. Whether you are looking to design unique shirts for your startup in Hitech City, plan customized event t-shirts for a college fest in Kukatpally, or print professional employee corporate t-shirts for your office in Madhapur, we have got you covered.
  </p>
  <p>
    We specialize in high-quality <strong>custom t-shirt printing Hyderabad</strong> services, combining state-of-the-art machinery with colorfast premium inks to deliver products that look crisp, clean, and stay vibrant wash after wash. Our extensive catalog includes round neck t-shirts, pique polo t-shirts, dry-fit activewear, and oversized hoodies.
  </p>
  <h3>Premium Bulk T-Shirt Printing Solutions</h3>
  <p>
    Running an organization requires top-notch branding consistency. Our <strong>bulk t-shirt printing Hyderabad</strong> packages are specifically structured for corporate requirements. We assist you in transferring your company logo onto high-quality fabrics, creating a unified corporate culture.
  </p>
  <p>
    Our team has successfully delivered thousands of custom promotional t-shirts, startup onboarding kits, and teamwear solutions for corporate clients located in Banjara Hills, Jubilee Hills, Secunderabad, and Kompally.
  </p>
  <h3>Fast Delivery & Custom Designs</h3>
  <p>
    We understand that event timelines can be strict. That is why Suriyan Prints offers express dispatch and reliable delivery schedules across Hyderabad. Share your custom specifications, mockups, or sketch files with our in-house design specialists, and we will handle the rest—from free file optimization to final premium packaging.
  </p>
`;

function ServicePage() {
  return (
    <ServicePageTemplate
      title="Custom T-Shirt Printing in Hyderabad — Suriyan Prints"
      description="Looking for premium custom t-shirt printing in Hyderabad? Suriyan Prints offers high-quality round neck, polo, and event t-shirts with express delivery in Gachibowli, Hitech City, Madhapur, and Kukatpally."
      h1="Custom T-Shirt Printing"
      tagline="T-Shirt Printing Hyderabad"
      introImage="/images/custom-t-shirt-printing-hyderabad.webp"
      contentHtml={CONTENT_HTML}
      features={FEATURES}
      faqs={FAQs}
      canonicalUrl="https://suriyanprints.vercel.app/services/custom-tshirt-printing"
    />
  );
}
