import { Check, X } from "lucide-react";
import { content } from "../../lib/content";

export function Benchmark() {
  const { eyebrow, headline, cards } = content.benchmark;

  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-24 flex flex-col items-center">
      <div className="text-center max-w-3xl flex flex-col items-center gap-4 mb-16">
        <div className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
          — {eyebrow} —
        </div>
        <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-sans font-bold leading-[1.05] tracking-tight text-text-primary">
          {headline[0]} <br/> <span className="font-serif italic font-normal">{headline[1]}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
        {cards.map((card, idx) => {
          const isHighlighted = card.type === "highlighted";
          
          return (
            <div 
              key={idx}
              className={`relative flex flex-col p-8 rounded-xl border transition-all duration-300 h-full ${
                isHighlighted 
                  ? "bg-[#0F1E1A] border-accent/30 md:-translate-y-4 shadow-[0_0_60px_-15px_rgba(34,232,176,0.2)]" 
                  : "bg-[#0A1512] border-white/5 opacity-80 hover:opacity-100 hover:border-white/10"
              }`}
            >
              {isHighlighted && (
                <div className="absolute top-0 right-4 transform -translate-y-1/2 bg-accent text-void text-[9px] font-black px-3 py-1 rounded">
                  {card.badge}
                </div>
              )}
              
              {isHighlighted && (
                <div className="absolute inset-0 bg-accent/5 rounded-xl pointer-events-none" />
              )}

              <div className="flex flex-col gap-2 mb-8">
                <h3 className={`text-xl font-bold ${isHighlighted ? "text-accent" : "text-text-primary"}`}>
                  {card.title}
                </h3>
                <p className="text-sm text-text-secondary min-h-[40px]">
                  {card.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                <div className="flex items-center justify-between pb-4 border-b border-border-subtle/50">
                  <span className="text-sm text-text-muted">Success Rate</span>
                  <span className={`text-lg font-mono font-semibold ${isHighlighted ? "text-text-primary" : "text-text-secondary"}`}>
                    {card.metrics.successRate}
                  </span>
                </div>
                
                <div className="flex items-center justify-between pb-4 border-b border-border-subtle/50">
                  <span className="text-sm text-text-muted">Avg Inference</span>
                  <span className="text-lg font-mono text-text-secondary">
                    {card.metrics.avgTime}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-text-muted">Handles Periodicity</span>
                  {card.metrics.handlesPeriodicity ? (
                    <Check className="w-5 h-5 text-accent" />
                  ) : (
                    <X className="w-5 h-5 text-red-400/80" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
