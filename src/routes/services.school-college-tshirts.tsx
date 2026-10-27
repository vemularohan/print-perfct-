import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";

export const Route = createFileRoute("/services/school-college-tshirts")({
  head: () => ({
    meta: [
      { title: "School & College T-Shirt Printing Hyderabad — Student Tees" },
      { name: "description", content: "Custom school and college t-shirt printing in Hyderabad. Suriyan Prints delivers high-quality graduation hoodies, club wear, and fest merchandise to student groups in Kukatpally, Gachibowli, and Miyapur." },
      { name: "keywords", content: "school t shirts, college t shirts, graduation hoodies Hyderabad, student group clothing" }
    ]
  }),
  component: ServicePage
});

const FAQs = [
  { q: "Do you offer student discounts on college fest orders?", a: "Yes. Student club coordinators and fest organizers receive special pricing packages and free graphic optimization assistance." },
  { q: "Can you print custom year and name lists on the back?", a: "Yes, we print graduation name collages and class year tags on the back of t-shirts and hoodies." }
];

const FEATURES = [
  "Special Student & Fest Pricing",
  "High-resolution Class List Back Prints",
  "Vibrant Club & Society Logos",
  "Super Soft Cotton Fleece Hoodies"
];

const CONTENT_HTML = `
  <h2>School & College Custom T-Shirt Printing in Hyderabad</h2>
  <p>
    Celebrate school milestones, college fests, and student club memberships with custom-printed apparel. Suriyan Prints is a top choice for <strong>school and college t-shirt printing</strong> in Hyderabad, supporting student groups in Kukatpally, Secunderabad, Miyapur, and Gachibowli.
  </p>
  <p>
    From graphic design assistance for engineering fests to custom hoodies for graduating batches, we print colors that last.
  </p>
`;

function ServicePage() {
  return (
    <ServicePageTemplate
      title="School & College T-Shirt Printing Hyderabad — Student Tees"
      description="Custom school and college t-shirt printing in Hyderabad. Suriyan Prints delivers high-quality graduation hoodies, club wear, and fest merchandise to student groups in Kukatpally, Gachibowli, and Miyapur."
      h1="School & College T-Shirts"
      tagline="Campus & Fest Wear"
      introImage="/images/backpacks.png"
      contentHtml={CONTENT_HTML}
      features={FEATURES}
      faqs={FAQs}
      canonicalUrl="https://suriyanprints.vercel.app/services/school-college-tshirts"
    />
  );
}
