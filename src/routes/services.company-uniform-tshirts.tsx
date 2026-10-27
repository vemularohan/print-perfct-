import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";

export const Route = createFileRoute("/services/company-uniform-tshirts")({
  head: () => ({
    meta: [
      { title: "Company Uniform T-Shirt Printing Hyderabad — Staff Wear" },
      { name: "description", content: "Optimize your corporate presence with durable company uniform t-shirts in Hyderabad. Suriyan Prints delivers high-quality branded uniforms and employee welcome shirts in Madhapur, Hitech City, and Gachibowli." },
      { name: "keywords", content: "company t shirt printing, employee t shirts, corporate uniforms Hyderabad" }
    ]
  }),
  component: ServicePage
});

const FAQs = [
  { q: "What printing methods are best for company uniform t-shirts?", a: "We recommend logo embroidery for polo shirts and screen printing or DTF transfers for round neck t-shirts, depending on your brand style." },
  { q: "Can we order custom sizes for staff uniforms?", a: "Yes. We offer uniform sizes ranging from XS to 4XL to comfortably fit your entire team." }
];

const FEATURES = [
  "Durable, Wash-resistant Material",
  "Computer Embroidery & DTF Transfer Options",
  "Comfortable Fit for All Staff Members",
  "Professional Corporate Logo Alignment"
];

const CONTENT_HTML = `
  <h2>Durable Company Uniform T-Shirt Printing in Hyderabad</h2>
  <p>
    A uniform is more than just clothing; it represents your brand to clients. At <strong>Suriyan Prints</strong>, we manufacture high-quality <strong>company uniform t shirts</strong> that businesses trust across Hyderabad, including Madhapur, Hitech City, and Gachibowli.
  </p>
  <p>
    Our pre-shrunk, bio-washed cotton and pique polo fabrics are selected for maximum durability, ensuring your staff looks polished and professional day after day.
  </p>
`;

function ServicePage() {
  return (
    <ServicePageTemplate
      title="Company Uniform T-Shirt Printing Hyderabad — Staff Wear"
      description="Optimize your corporate presence with durable company uniform t-shirts in Hyderabad. Suriyan Prints delivers high-quality branded uniforms and employee welcome shirts in Madhapur, Hitech City, and Gachibowli."
      h1="Company Uniform T-Shirts"
      tagline="Professional Staff Wear"
      introImage="/images/dress-shirts.png"
      contentHtml={CONTENT_HTML}
      features={FEATURES}
      faqs={FAQs}
      canonicalUrl="https://suriyanprints.vercel.app/services/company-uniform-tshirts"
    />
  );
}
