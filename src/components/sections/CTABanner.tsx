import { content } from "../../lib/content";
import { Button } from "../ui/Button";

export function CTABanner() {
  const { headline, subtext, primaryCta } = content.cta;

  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-24 mb-10 relative z-10">
      <div className="relative w-full rounded-2xl border border-white/5 bg-[#0A1512] px-6 py-20 flex flex-col items-center justify-center text-center overflow-hidden">
        
        {/* Heavy Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent rounded-[100%] blur-[120px] opacity-10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
          <div className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
            — Ready for deployment —
          </div>
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-sans font-bold leading-[1.05] tracking-tight text-text-primary">
            {headline[0]} <span className="font-serif italic font-normal">{headline[1]}</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-[480px]">
            {subtext}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Button as="a" href={primaryCta.href} target="_blank" rel="noopener noreferrer" variant="primary" className="w-full sm:w-auto">
              {primaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
