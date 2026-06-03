import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { Download } from "lucide-react";
import { CATEGORIES } from "@/data/categories";

export const Route = createFileRoute("/qr-code-generator")({
  head: () => ({
    meta: [
      { title: "Free QR Code Generator — VistaPrint India" },
      { name: "description", content: "Generate free QR codes for URLs, text, contacts and Wi-Fi. Download as PNG or SVG and print on cards, posters and stickers." },
      { property: "og:title", content: "Free QR Code Generator — VistaPrint India" },
      { property: "og:description", content: "Create and download QR codes for free." },
    ],
  }),
  component: QrPage,
});

const PRINT_LINKS = [
  { label: "Visiting Cards", to: "/business-cards" as const },
  { label: "Posters", to: "/signs-posters" as const },
  { label: "Stickers", to: "/labels-stickers" as const },
  { label: "Flyers", to: "/signs-posters" as const },
];

function QrPage() {
  const [text, setText] = useState("https://vistaprint.in");
  const [pngUrl, setPngUrl] = useState<string>("");
  const [svg, setSvg] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!text) return;
    const value = text.trim() || " ";
    QRCode.toDataURL(value, { width: 360, margin: 2, color: { dark: "#006196", light: "#ffffff" } }).then(setPngUrl);
    QRCode.toString(value, { type: "svg", margin: 2, color: { dark: "#006196", light: "#ffffff" } }).then(setSvg);
  }, [text]);

  const downloadSvg = () => {
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "qr-code.svg";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <section className="bg-surface border-b border-border">
        <div className="container-page py-14 text-center">
          <h1 className="mb-3">Free QR Code Generator</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Generate a QR code for any URL or text. Print it on cards, posters and stickers.</p>
        </div>
      </section>

      <section className="container-page py-12 grid md:grid-cols-2 gap-10 max-w-5xl">
        <div>
          <label className="text-sm font-medium mb-2 block">Enter URL or text</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={5}
            className="w-full rounded-md border border-border focus:border-primary px-4 py-3 text-sm focus:outline-none"
            placeholder="https://yourwebsite.com"
          />
          <div className="mt-4 flex flex-wrap gap-3">
            {pngUrl ? (
              <a href={pngUrl} download="qr-code.png" className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-md px-5 py-2.5 text-sm font-semibold hover:bg-primary/90">
                <Download className="h-4 w-4" /> PNG
              </a>
            ) : null}
            {svg ? (
              <button onClick={downloadSvg} className="inline-flex items-center gap-2 border-2 border-primary text-primary rounded-md px-5 py-2.5 text-sm font-semibold hover:bg-primary/5">
                <Download className="h-4 w-4" /> SVG
              </button>
            ) : null}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="rounded-2xl bg-card shadow-card p-6">
            {pngUrl ? <img src={pngUrl} alt="Generated QR code" className="w-72 h-72" /> : <div className="w-72 h-72 bg-muted rounded" />}
          </div>
        </div>
        <canvas ref={canvasRef} className="hidden" />
      </section>

      <section className="bg-surface">
        <div className="container-page py-14">
          <h2 className="text-center mb-8">Put your QR code in print</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {PRINT_LINKS.map((p) => (
              <Link key={p.label} to={p.to} className="rounded-xl border border-border p-6 text-center hover:border-primary hover:shadow-card transition">
                <div className="font-semibold mb-1">{p.label}</div>
                <div className="text-sm text-primary">Print with QR →</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 text-sm text-muted-foreground">
            Or <Link to="/" className="text-primary hover:underline">browse all categories</Link> — {CATEGORIES.length} ways to brand your business.
          </div>
        </div>
      </section>
    </div>
  );
}
