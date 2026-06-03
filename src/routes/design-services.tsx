import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, CreditCard, Image, Check, ArrowRight } from "lucide-react";
import { GradientPlaceholder } from "@/components/ui/gradient-placeholder";
import { FadeIn } from "@/components/ui/fade-in";

export const Route = createFileRoute("/design-services")({
  head: () => ({
    meta: [
      { title: "Professional Design Services — PrintPerfect" },
      { name: "description", content: "Hire expert designers for logos, business cards, banners and more. Briefs delivered in 48 hours." },
      { property: "og:title", content: "Professional Design Services — PrintPerfect" },
      { property: "og:description", content: "Let our experts handle your brand design." },
    ],
  }),
  component: DesignServices,
});

const SERVICES = [
  { Icon: CreditCard, title: "Logo Design", body: "Distinct, scalable marks that work everywhere your brand shows up.", from: 2499 },
  { Icon: FileText, title: "Business Card Design", body: "Print-ready card designs in matte, glossy or spot UV finishes.", from: 999 },
  { Icon: Image, title: "Banner Design", body: "Eye-catching banners for events, storefronts and online ads.", from: 1499 },
];

const STEPS = ["Submit Brief", "Designer Assigned", "2 Rounds of Revisions", "Final Delivery"];

const TIERS = [
  {
    name: "Basic", price: 2499,
    features: ["1 concept", "2 revisions", "PNG + JPG delivery", "5-day turnaround"],
  },
  {
    name: "Standard", price: 4999, popular: true,
    features: ["3 concepts", "Unlimited revisions", "PNG + JPG + SVG + AI", "3-day turnaround", "Brand colours guide"],
  },
  {
    name: "Premium", price: 9999,
    features: ["5 concepts", "Unlimited revisions", "All file formats", "2-day turnaround", "Full brand guidelines", "Business card + letterhead"],
  },
];

function DesignServices() {
  return (
    <div>
      <section className="relative overflow-hidden text-white" style={{ backgroundImage: "linear-gradient(120deg, hsl(220 50% 18%), hsl(205 60% 32%))" }}>
        <div className="container-page py-20 max-w-3xl">
          <p className="uppercase tracking-widest text-xs font-semibold opacity-80 mb-3">Design Services</p>
          <h1 className="text-white mb-4">Professional Design — Let our experts do it</h1>
          <p className="text-lg opacity-90 mb-8">Brief us today, get original work from an in-house designer within 48 hours.</p>
          <button className="inline-flex items-center gap-2 bg-white text-primary font-semibold rounded-md px-7 py-3.5 hover:bg-white/90 transition">
            Start a Design Brief <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="mb-10 border-l-4 border-primary pl-4">What we design</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <div className="rounded-xl border border-border p-6 hover:shadow-card-hover hover:-translate-y-0.5 transition-all bg-card">
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary inline-flex items-center justify-center mb-4">
                  <s.Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.body}</p>
                <p className="text-primary font-semibold">From ₹{s.from.toLocaleString("en-IN")}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-page py-16">
          <h2 className="text-center mb-12">Our process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <FadeIn key={s} delay={i * 0.08}>
                <div className="text-center">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground inline-flex items-center justify-center font-bold mb-3">{i + 1}</div>
                  <p className="text-sm font-medium">{s}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-center mb-10">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`rounded-xl border p-7 bg-card relative ${t.popular ? "border-primary shadow-card-hover" : "border-border"}`}
            >
              {t.popular ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold rounded-full px-3 py-1">
                  Most Popular
                </span>
              ) : null}
              <h3 className="mb-1">{t.name}</h3>
              <p className="text-3xl font-bold text-primary mb-5">₹{t.price.toLocaleString("en-IN")}</p>
              <ul className="space-y-2.5 mb-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-success mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full rounded-md py-3 font-semibold text-sm transition ${t.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border-2 border-primary text-primary hover:bg-primary/5"}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-page py-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4">Recent work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {["Portfolio 1", "Portfolio 2", "Portfolio 3", "Portfolio 4", "Portfolio 5", "Portfolio 6"].map((n) => (
              <GradientPlaceholder key={n} name={n} ratio="square" label={n.replace("Portfolio ", "Project #")} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 text-center">
        <Link to="/help-centre" className="text-primary font-medium hover:underline">Have a question? Talk to our team →</Link>
      </section>
    </div>
  );
}
