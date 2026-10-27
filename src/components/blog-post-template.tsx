import { Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/site";

type Props = {
  title: string;
  description: string;
  publishDate: string;
  h1: string;
  introImage: string;
  contentHtml: string;
  canonicalUrl: string;
};

export function BlogPostTemplate({
  title,
  description,
  publishDate,
  h1,
  introImage,
  contentHtml,
  canonicalUrl,
}: Props) {
  return (
    <div className="bg-background min-h-screen text-left">
      {/* Blog Article JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": canonicalUrl,
            "headline": h1,
            "description": description,
            "image": `https://suriyanprints.vercel.app${introImage}`,
            "datePublished": publishDate,
            "author": {
              "@type": "Organization",
              "name": "Suriyan Prints",
              "url": "https://suriyanprints.vercel.app/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Suriyan Prints",
              "logo": {
                "@type": "ImageObject",
                "url": "https://suriyanprints.vercel.app/suriyanprintslogo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonicalUrl
            }
          })
        }}
      />

      <section className="bg-surface py-12 md:py-16 border-b border-border">
        <div className="container-page max-w-3xl">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/explore" className="hover:text-primary">Blog</Link>
            <span>/</span>
            <span className="text-foreground truncate">{h1}</span>
          </nav>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <CalendarDays className="h-3.5 w-3.5" />
            <span>{publishDate}</span>
            <span>•</span>
            <span>By Suriyan Prints Editorial</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-foreground">
            {h1}
          </h1>
          <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      <section className="container-page py-12 md:py-16 max-w-3xl">
        <div className="rounded-3xl overflow-hidden aspect-video bg-muted border border-border/80 shadow-md mb-8">
          <img src={introImage} alt={h1} className="w-full h-full object-cover" />
        </div>

        <article className="prose prose-slate max-w-none space-y-6 text-foreground text-sm leading-7">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>

        {/* CTA box at end of article */}
        <div className="mt-12 rounded-3xl bg-surface border border-border p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-extrabold text-base mb-1">Need Customized T-Shirt Printing?</h4>
            <p className="text-xs text-muted-foreground">Get a direct corporate quotation with express delivery in Hyderabad.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link to="/#quote" className="btn-primary py-2.5 px-5 rounded-xl font-bold text-xs">
              Get Free Quote
            </Link>
            <a
              href={whatsappUrl(`Hi Suriyan Prints! I read your article '${h1}' and want custom print assistance.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border px-5 py-2.5 font-bold text-xs hover:bg-muted"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
