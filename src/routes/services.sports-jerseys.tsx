import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";

export const Route = createFileRoute("/services/sports-jerseys")({
  head: () => ({
    meta: [
      { title: "Custom Sports Jersey Printing Hyderabad — Teamwear Printing" },
      { name: "description", content: "Print custom sports jerseys in Hyderabad. Sweat-wicking dryfit fabric, player name and number printing, and high-detail team logos in Kukatpally, Gachibowli, and Secunderabad." },
      { name: "keywords", content: "sports jerseys Hyderabad, custom teamwear printing, dryfit jersey printing" }
    ]
  }),
  component: ServicePage
});

const FAQs = [
  { q: "Do you print individual player names and numbers?", a: "Yes. We offer customized numbering and name printing for each team member on player jerseys." },
  { q: "What is the turnaround time for league orders?", a: "Turnaround time is typically 5 to 7 business days, depending on quantity, color schemes, and final approvals." }
];

const FEATURES = [
  "Premium DryFit Sweat-wicking Fabric",
  "Custom Player Name & Number",
  "High-resolution DTF Printing",
  "Pre-shrunk Athletic Fit Cut"
];

const CONTENT_HTML = `
  <h2>Sports Teamwear & Jersey Printing in Hyderabad</h2>
  <p>
    Bring your squad onto the field in style. Suriyan Prints is your premier destination for high-performance <strong>sports jersey printing</strong> in Hyderabad. We supply dry-fit, moisture-wicking jerseys to corporate cricket leagues, football clubs, school teams, and local academies.
  </p>
  <p>
    Our lightweight, stretchable activewear fabrics keep players cool under pressure. We service teams in Kukatpally, Gachibowli, Madhapur, Hitech City, and Secunderabad, offering dynamic colorways, custom sponsors logos, and vibrant player details.
  </p>
`;

function ServicePage() {
  return (
    <ServicePageTemplate
      title="Custom Sports Jersey Printing Hyderabad — Teamwear Printing"
      description="Print custom sports jerseys in Hyderabad. Sweat-wicking dryfit fabric, player name and number printing, and high-detail team logos in Kukatpally, Gachibowli, and Secunderabad."
      h1="Sports Jerseys"
      tagline="Athletic Performance Teamwear"
      introImage="/images/sports-jerseys.png"
      contentHtml={CONTENT_HTML}
      features={FEATURES}
      faqs={FAQs}
      canonicalUrl="https://suriyanprints.vercel.app/services/sports-jerseys"
    />
  );
}
