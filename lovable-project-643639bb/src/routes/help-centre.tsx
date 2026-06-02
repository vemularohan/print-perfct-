import { createFileRoute } from "@tanstack/react-router";
import { Search, Phone, MessageCircle, Mail, Package, RefreshCw, Palette, CreditCard, Truck, RotateCcw, User, ShieldCheck, Boxes } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/help-centre")({
  head: () => ({
    meta: [
      { title: "Help Centre — VistaPrint India" },
      { name: "description", content: "Find answers about orders, design, payment, delivery and returns. Or contact our support team." },
      { property: "og:title", content: "Help Centre — VistaPrint India" },
      { property: "og:description", content: "Answers and support for VistaPrint customers." },
    ],
  }),
  component: HelpCentre,
});

const TOPICS = [
  { Icon: Package, title: "Track My Order", body: "Get the latest status of your shipment." },
  { Icon: RefreshCw, title: "Change or Cancel Order", body: "Make changes before your order goes to print." },
  { Icon: Palette, title: "Design Help", body: "Tips for the online designer and file uploads." },
  { Icon: CreditCard, title: "Payment & Billing", body: "Accepted payment methods and GST invoices." },
  { Icon: Truck, title: "Delivery Information", body: "Turnaround times, shipping zones and rates." },
  { Icon: RotateCcw, title: "Returns & Refunds", body: "Our satisfaction guarantee and refund policy." },
  { Icon: User, title: "Account & Login", body: "Manage your account, addresses and projects." },
  { Icon: ShieldCheck, title: "Product Quality", body: "Materials, finishes and quality standards." },
  { Icon: Boxes, title: "Bulk Orders", body: "Enquire about volume pricing and dedicated support." },
];

const FAQS = [
  { q: "How do I track my order?", a: "Sign in to My Account and open My Orders. Each shipment has a live tracking link from our courier partner." },
  { q: "What is the turnaround time?", a: "Most products print in 2–4 business days, then 2–5 days for delivery depending on your pincode." },
  { q: "Can I reorder a previous design?", a: "Yes — every paid order has a Reorder button in My Orders. Your artwork is stored securely on our servers." },
  { q: "What file formats do you accept?", a: "PDF, PNG, JPG and AI up to 50MB. PDFs with embedded fonts and 300dpi assets give the best results." },
  { q: "What is your return/refund policy?", a: "If you're not satisfied with print quality, contact support within 14 days for a reprint or full refund." },
  { q: "How do I apply a discount code?", a: "Enter your code at checkout in the Discount Code field. Codes apply automatically to eligible items." },
  { q: "Do you offer bulk discounts?", a: "Yes — volume pricing kicks in automatically. For orders above ₹50,000 we can offer custom quotes via the Bulk Orders form." },
  { q: "Can I get a physical proof before printing?", a: "Yes, for orders above ₹5,000 we can ship a single proof for ₹299 before the full run." },
];

function HelpCentre() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-page py-16 text-center">
          <h1 className="text-white mb-6">How can we help you?</h1>
          <div className="max-w-xl mx-auto flex rounded-lg overflow-hidden bg-white">
            <input className="flex-1 px-4 py-3 text-sm text-foreground focus:outline-none" placeholder="Search for answers..." />
            <button className="bg-foreground text-background px-5 inline-flex items-center" aria-label="Search">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOPICS.map(({ Icon, title, body }) => (
            <div key={title} className="rounded-xl border border-border p-6 hover:border-primary hover:shadow-card transition bg-card">
              <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary inline-flex items-center justify-center mb-3">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1.5 text-base">{title}</h3>
              <p className="text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="container-page py-12 grid md:grid-cols-3 gap-6">
          {[
            { Icon: Phone, title: "Call us", body: "02522-669393", sub: "Mon–Sat 9am–6pm" },
            { Icon: MessageCircle, title: "Live chat", body: "Start chat", sub: "Avg wait under 2 min" },
            { Icon: Mail, title: "Email support", body: "help@vistaprint.in", sub: "Replies within 24 hours" },
          ].map(({ Icon, title, body, sub }) => (
            <div key={title} className="flex items-start gap-4 p-5 rounded-xl bg-card shadow-card">
              <span className="h-10 w-10 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">{title}</p>
                <p className="font-semibold">{body}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16 max-w-3xl">
        <h2 className="mb-6 border-l-4 border-primary pl-4">Popular questions</h2>
        <Accordion type="single" collapsible defaultValue="f0">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`f${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
