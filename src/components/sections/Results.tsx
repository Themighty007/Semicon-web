import { motion } from "motion/react";
import { content } from "../../lib/content";
import { Crosshair } from "lucide-react";

export function Results() {
  const { eyebrow, headline, cards } = content.results;

  return (
    <section id="results" className="w-full max-w-7xl mx-auto px-8 py-24 flex flex-col items-center">
      <div className="text-center max-w-3xl flex flex-col items-center gap-4 mb-16">
        <div className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
          — {eyebrow} —
        </div>
        <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-sans font-bold leading-[1.05] tracking-tight text-text-primary">
          {headline[0]} <br/> <span className="font-serif italic font-normal">{headline[1]}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {cards.map((card, idx) => {
          const isSuccess = card.type === "success";
          
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col bg-[#0A1512] border border-white/5 rounded-xl overflow-hidden group hover:border-white/10 transition-colors duration-300"
            >
              {/* Image Comparison Area */}
              <div className="relative w-full aspect-video bg-[#050B0A] p-4 flex gap-4 border-b border-white/5 items-center justify-center">
                
                {/* Reference Image Container */}
                <div className="relative w-1/2 h-full rounded-lg overflow-hidden border border-border-subtle/50 bg-black">
                  <div className="absolute top-2 left-2 px-2 py-1 bg-void/80 backdrop-blur rounded text-[10px] font-mono text-text-muted z-10">Reference</div>
                  <img src={card.imageReference} alt="Reference" className="w-full h-full object-cover opacity-60" />
                  
                  {/* True Location Target */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-dashed border-text-muted rounded-sm flex items-center justify-center">
                  </div>
                </div>

                {/* Search Image Container */}
                <div className="relative w-1/2 h-full rounded-lg overflow-hidden border border-border-subtle/50 bg-black">
                  <div className="absolute top-2 left-2 px-2 py-1 bg-void/80 backdrop-blur rounded text-[10px] font-mono text-text-muted z-10">Search space</div>
                  <img src={card.imageSearch} alt="Search" className="w-full h-full object-cover opacity-60" />
                  
                  {/* Predicted Location (Offset for failure demo if needed, centered for simplicity here) */}
                  <div className={`absolute w-8 h-8 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 ${isSuccess ? 'top-1/2 left-1/2' : 'top-[30%] left-[30%]'}`}>
                     <Crosshair className={`w-8 h-8 ${isSuccess ? 'text-accent' : 'text-red-400'}`} strokeWidth={1} />
                  </div>
                  {/* True Location (Dashed) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-dashed border-text-muted/50 rounded-sm">
                  </div>
                </div>
              </div>

              {/* Caption Block */}
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className={`text-lg font-semibold ${isSuccess ? 'text-text-primary' : 'text-red-400'}`}>
                    {card.title}
                  </h3>
                  <span className="text-xs font-mono bg-surface-raised px-2 py-1 rounded text-text-muted">
                    {card.method}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-mono bg-surface-raised/50 p-4 rounded-lg border border-border-subtle/50">
                  <div className="flex flex-col">
                    <span className="text-text-muted text-[10px] uppercase">Predicted</span>
                    <span className="text-text-secondary">{card.predicted}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-text-muted text-[10px] uppercase">True Target</span>
                    <span className="text-text-secondary">{card.true}</span>
                  </div>
                  <div className="col-span-2 pt-2 mt-1 border-t border-border-subtle/50 flex justify-between">
                    <span className="text-text-muted text-[10px] uppercase">Error Distance</span>
                    <span className={isSuccess ? 'text-accent' : 'text-red-400'}>{card.error}</span>
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed border-l-2 border-border-subtle pl-4 mt-2">
                  {card.caption}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
