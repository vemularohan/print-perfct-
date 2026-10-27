import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/919676662304"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Outer glow ring */}
        <div className="absolute inset-0 w-16 h-16 rounded-full bg-[#25D366] animate-pulse blur-md opacity-75"></div>

        {/* Main button */}
        <div className="relative w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 animate-float">
          {/* Icon with glow */}
          <div className="relative">
            <WhatsAppIcon className="w-8 h-8 text-white drop-shadow-lg group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 w-8 h-8 bg-white/40 rounded-full blur-sm animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-5 py-3 rounded-xl bg-[#25D366] text-white text-sm font-semibold shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 whitespace-nowrap pointer-events-none">
        Chat with us!
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-[#25D366]"></div>
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
