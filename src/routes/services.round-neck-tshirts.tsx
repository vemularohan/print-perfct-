import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";

export const Route = createFileRoute("/services/round-neck-tshirts")({
  head: () => ({
    meta: [
      { title: "Round Neck T-Shirt Printing Hyderabad — Custom Printed Tees" },
      { name: "description", content: "Print custom round neck t-shirts in Hyderabad. High-quality 100% bio-washed cotton, vibrant DTF prints, and screen printing with express shipping in Hitech City, Madhapur, and Secunderabad." },
      { name: "keywords", content: "round neck t shirt printing, printed t shirts Hyderabad, custom promotional tshirts" }
    ]
  }),
  component: ServicePage
});

const FAQs = [
  { q: "Is the fabric 100% cotton?", a: "Yes, our round neck t-shirts are manufactured from premium 180gsm combed cotton, bio-washed for extra softness and optimal printing results." },
  { q: "What printing options are available for round necks?", a: "We offer high-definition DTF (Direct-to-Film) printing for multi-color detailed graphics and industrial screen printing for large bulk orders." }
];

const FEATURES = [
  "180gsm Combed Cotton Fabrics",
  "Bio-washed for Ultra-soft Feel",
  "Seamless DTF & Screen Printing",
  "Perfect for Promotions & Fests"
];

const CONTENT_HTML = `
  <h2>Vibrant Round Neck T-Shirt Printing in Hyderabad</h2>
  <p>
    Round neck t-shirts are the ultimate canvas for creative expression, marketing campaigns, and team spirit. At <strong>Suriyan Prints</strong>, we offer high-speed, premium <strong>round neck t shirt printing</strong> services tailored to startups, event organizations, and educational institutions in Hyderabad.
  </p>
  <p>
    Using 180gsm bio-washed combed cotton, our custom round necks are incredibly soft, comfortable, and optimized for maximum print adhesion. Whether you are running a promotional campaign in Gachibowli, preparing student jerseys in Kukatpally, or starting a new fashion brand in Banjara Hills, we help you get standard-setting results.
  </p>
  <h3>Bulk Event & Promotional Tees</h3>
  <p>
    Hosting an event requires high-impact merchandise. We work alongside event coordinators in Secunderabad, Miyapur, and Jubilee Hills to supply vibrant printed shirts. Our Direct-to-Film (DTF) transfers capture high-detail color gradients with high flexibility, preventing cracking over time.
  </p>
`;

function ServicePage() {
  return (
    <ServicePageTemplate
      title="Round Neck T-Shirt Printing Hyderabad — Custom Printed Tees"
      description="Print custom round neck t-shirts in Hyderabad. High-quality 100% bio-washed cotton, vibrant DTF prints, and screen printing with express shipping in Hitech City, Madhapur, and Secunderabad."
      h1="Round Neck T-Shirts"
      tagline="Vibrant Printed Wear"
      introImage="/images/printed-round-neck-tshirts.webp"
      contentHtml={CONTENT_HTML}
      features={FEATURES}
      faqs={FAQs}
      canonicalUrl="https://suriyanprints.vercel.app/services/round-neck-tshirts"
    />
  );
}
