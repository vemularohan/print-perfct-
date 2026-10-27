import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";

export const Route = createFileRoute("/services/event-tshirts")({
  head: () => ({
    meta: [
      { title: "Custom Event T-Shirt Printing Hyderabad — Fast Bulk Turnaround" },
      { name: "description", content: "Print event t-shirts in Hyderabad for college fests, corporate events, fests, and promotional campaigns with Suriyan Prints. Fast express delivery in Gachibowli, Kukatpally, and Madhapur." },
      { name: "keywords", content: "event t shirts, promotional t shirts, bulk t shirt printing Hyderabad, college fest tshirts" }
    ]
  }),
  component: ServicePage
});

const FAQs = [
  { q: "Do you support last-minute express orders for events?", a: "Yes. We offer rush-delivery and production services for time-critical events, fests, and campaigns across Hyderabad." },
  { q: "Can we mix sizes in a bulk event order?", a: "Absolutely. You can request any size mix from XS to 4XL within your bulk quantity order." }
];

const FEATURES = [
  "Fast Express Turnaround & Shipping",
  "Lightweight & Budget-friendly Options",
  "Vibrant Multi-color DTF Branding",
  "Full Size Mix (XS to 4XL)"
];

const CONTENT_HTML = `
  <h2>Vibrant Event T-Shirt Printing in Hyderabad</h2>
  <p>
    Organizing a marathon, college fest, corporate exhibition, or product launch? At <strong>Suriyan Prints</strong>, we are experts in delivering bulk <strong>event t-shirts</strong> on tight schedules. 
  </p>
  <p>
    We understand that event timelines are absolute. Our logistics team handles direct deliveries to convention centers, fests, and companies in Hitech City, Madhapur, Kukatpally, and Secunderabad. We offer high-contrast, budget-friendly promotional options that make your message pop.
  </p>
`;

function ServicePage() {
  return (
    <ServicePageTemplate
      title="Custom Event T-Shirt Printing Hyderabad — Fast Bulk Turnaround"
      description="Print event t-shirts in Hyderabad for college fests, corporate events, fests, and promotional campaigns with Suriyan Prints. Fast express delivery in Gachibowli, Kukatpally, and Madhapur."
      h1="Event T-Shirts"
      tagline="Promotion & Expo Merch"
      introImage="/images/banners.png"
      contentHtml={CONTENT_HTML}
      features={FEATURES}
      faqs={FAQs}
      canonicalUrl="https://suriyanprints.vercel.app/services/event-tshirts"
    />
  );
}
