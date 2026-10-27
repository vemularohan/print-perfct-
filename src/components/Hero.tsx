import { Hero as AnimatedHero } from "@/components/ui/animated-hero";
import { Warp } from "@paper-design/shaders-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Shader Background */}
      <div className="absolute inset-0">
        <Warp
          style={{ height: "100%", width: "100%" }}
          proportion={0.4}
          softness={1.2}
          distortion={0.2}
          swirl={0.7}
          swirlIterations={9}
          shape="checks"
          shapeScale={0.12}
          scale={1}
          rotation={0}
          speed={1}
          colors={[
            "hsl(221, 39%, 8%)",   // Very dark navy (primary)
            "hsl(221, 35%, 12%)",  // Dark navy-blue
            "hsl(28, 60%, 25%)",   // Deep muted orange (subtle accent)
            "hsl(220, 30%, 10%)"   // Almost black navy
          ]}
        />
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30 pointer-events-none z-[5]" />

      {/* Hero Content */}
      <div className="relative z-10 w-full">
        <AnimatedHero />
      </div>
    </section>
  );
};

export default Hero;
