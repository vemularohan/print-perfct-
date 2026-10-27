import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle, Send } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { useState } from "react";
import { buildQuoteMessage, whatsappUrl } from "@/data/site";

type FAQ = { q: string; a: string };

type Props = {
  title: string;
  description: string;
  h1: string;
  tagline: string;
  introImage: string;
  contentHtml: string; // HTML or React element containing 600-1000 words
  features: string[];
  faqs: FAQ[];
  canonicalUrl: string;
};

export function ServicePageTemplate({
  title,
  description,
  h1,
  tagline,
  introImage,
  contentHtml,
  features,
  faqs,
  canonicalUrl,
}: Props) {
  const [quoteData, setQuoteData] = useState({ name: "", company: "", email: "", phone: "", product: h1, details: "" });

  const submitQuote = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(whatsappUrl(buildQuoteMessage(quoteData)), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-background min-h-screen text-left">
      {/* Dynamic SEO headers inside component via JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": canonicalUrl,
                "url": canonicalUrl,
                "name": title,
                "description": description,
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://suriyanprints.vercel.app/" },
                    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://suriyanprints.vercel.app/explore" },
                    { "@type": "ListItem", "position": 3, "name": h1, "item": canonicalUrl }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "@id": `${canonicalUrl}#faq`,
                "mainEntity": faqs.map((faq) => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a
                  }
                }))
              }
            ]
          })
        }}
      />

      {/* Hero Banner */}
      <section className="bg-surface py-12 md:py-20 border-b border-border">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-primary block">
                {tagline}
              </span>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-foreground">
                {h1}
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                {description}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#quote" className="btn-primary inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all text-sm">
                  Get Free Quote <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={whatsappUrl(`Hi Suriyan Prints! I want to inquire about ${h1} in Hyderabad.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba56] text-white px-6 py-3.5 font-bold transition-all hover:-translate-y-0.5 shadow-md text-sm"
                >
                  <MessageCircle className="h-4.5 w-4.5" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-lg aspect-[4/3] bg-muted">
              <img src={introImage} alt={h1} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container-page py-16 md:py-24 grid lg:grid-cols-[1fr_360px] gap-12">
        {/* Left Side: Rich SEO Content */}
        <article className="prose prose-slate max-w-none space-y-6 text-foreground">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

          {/* Key Features list */}
          <div className="mt-8 border-t border-border/60 pt-8">
            <h3 className="text-lg font-extrabold mb-4">Why Choose Suriyan Prints for {h1}?</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feat) => (
                <div key={feat} className="flex items-start gap-3">
                  <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-semibold text-muted-foreground">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs section */}
          <div className="mt-12 border-t border-border/60 pt-12">
            <h3 className="text-2xl font-black mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="group rounded-2xl border border-border bg-card px-6 py-4 shadow-sm">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-sm text-foreground select-none">
                    <span>{faq.q}</span>
                    <span className="text-primary text-xl font-light transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed border-t border-border/50 pt-2.5">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </article>

        {/* Right Side: Floating Sidebar Quote Form */}
        <aside>
          <div className="sticky top-28 bg-card border border-border rounded-[2rem] p-6 md:p-8 shadow-lg">
            <h3 className="text-lg font-black text-foreground mb-1">Get an Instant Quote</h3>
            <p className="text-xs text-muted-foreground mb-6">Send your requirements for direct pricing.</p>

            <form onSubmit={submitQuote} className="space-y-4 text-foreground">
              <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Name
                <input required value={quoteData.name} onChange={(event) => setQuoteData((value) => ({ ...value, name: event.target.value }))} className="mt-1.5 w-full rounded-xl border border-input px-4 py-3 text-sm focus:outline-primary transition-all font-semibold bg-background" />
              </label>
              <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Phone Number
                <input required value={quoteData.phone} onChange={(event) => setQuoteData((value) => ({ ...value, phone: event.target.value }))} className="mt-1.5 w-full rounded-xl border border-input px-4 py-3 text-sm focus:outline-primary transition-all font-semibold bg-background" />
              </label>
              <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Email Address
                <input type="email" required value={quoteData.email} onChange={(event) => setQuoteData((value) => ({ ...value, email: event.target.value }))} className="mt-1.5 w-full rounded-xl border border-input px-4 py-3 text-sm focus:outline-primary transition-all font-semibold bg-background" />
              </label>
              <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Details / Requirements
                <textarea required rows={3} value={quoteData.details} onChange={(event) => setQuoteData((value) => ({ ...value, details: event.target.value }))} placeholder="E.g. 100x Polo Shirts, screen printing, delivery to Hitech City by next week." className="mt-1.5 w-full rounded-xl border border-input px-4 py-3 text-sm focus:outline-primary transition-all font-semibold bg-background" />
              </label>
              <button type="submit" className="btn-primary w-full inline-flex justify-center items-center gap-2 py-3.5 rounded-xl shadow-lg transition-all font-bold text-sm">
                Request Free Quote <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </aside>
      </section>
    </div>
  );
}
