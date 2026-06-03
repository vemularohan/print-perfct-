import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Palette, Download, Check } from "lucide-react";
import { GradientPlaceholder } from "@/components/ui/gradient-placeholder";
import { FadeIn } from "@/components/ui/fade-in";

export const Route = createFileRoute("/logomaker")({
  head: () => ({
    meta: [
      { title: "Free Logo Maker — VistaPrint India" },
      { name: "description", content: "Create a professional business logo for free. Choose a template, customise colours and text, download instantly." },
      { property: "og:title", content: "Free Logo Maker — VistaPrint India" },
      { property: "og:description", content: "Hundreds of templates. Fully customisable. Download in PNG or SVG." },
    ],
  }),
  component: LogoMaker,
});

const STEPS = [
  { Icon: Sparkles, title: "Choose a Template", body: "Browse hundreds of professionally designed templates by industry." },
  { Icon: Palette, title: "Customise It", body: "Edit colours, fonts and layout to match your brand identity." },
  { Icon: Download, title: "Download & Use", body: "Export in PNG or SVG and use anywhere — cards, web, signage." },
];

const BENEFITS = ["Free to use", "Hundreds of templates", "Fully customisable", "Download in PNG / SVG"];

function LogoMaker() {
  const styles = ["Modern Mark", "Wordmark", "Monogram", "Emblem", "Mascot", "Abstract", "Lettermark", "Combination", "Geometric"];
  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-page py-20 text-center">
          <FadeIn>
            <p className="uppercase tracking-widest text-xs font-semibold opacity-80 mb-3">Free Tool</p>
            <h1 className="text-white max-w-3xl mx-auto mb-4">Create Your Free Business Logo</h1>
            <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">Choose a template, customise colours & text, download instantly.</p>
            <button className="inline-flex items-center gap-2 bg-white text-primary font-semibold rounded-md px-7 py-3.5 hover:bg-white/90 transition shadow-card">
              Start Designing for Free
            </button>
          </FadeIn>
          <div className="mt-12 grid grid-cols-3 gap-5 max-w-3xl mx-auto">
            {["Aura Studio", "Northwind Co", "Saffron + Co"].map((n) => (
              <div key={n} className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
                <div className="text-2xl font-bold tracking-tight">{n}</div>
                <div className="text-xs opacity-80 mt-1">Sample mark</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-center mb-12">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="h-14 w-14 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center mb-4">
                  <s.Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-page py-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4">Template Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {styles.map((s, i) => (
              <FadeIn key={s} delay={i * 0.04}>
                <div className="group relative">
                  <GradientPlaceholder name={`logo-${s}`} ratio="square" label={s} />
                  <button className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 bg-white text-primary font-medium rounded-md py-2 text-sm transition-opacity">
                    Use This Template
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {BENEFITS.map((b) => (
          <div key={b} className="flex items-center gap-2 text-sm">
            <Check className="h-5 w-5 text-success" /> <span className="font-medium">{b}</span>
          </div>
        ))}
      </section>

      <section className="container-page pb-16">
        <div className="rounded-2xl bg-primary text-primary-foreground p-10 text-center">
          <h2 className="text-primary-foreground mb-3">Print your new logo today</h2>
          <p className="opacity-90 mb-6">Put your finished mark on cards, t-shirts, stamps and more.</p>
          <Link to="/business-cards" className="inline-flex items-center gap-2 bg-white text-primary font-semibold rounded-md px-6 py-3 hover:bg-white/90 transition">
            Browse Products
          </Link>
        </div>
      </section>
    </div>
  );
}
