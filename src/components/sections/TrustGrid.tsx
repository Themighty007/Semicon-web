import { Target, ShieldAlert, Cpu, Layers, FlaskConical, FileWarning } from "lucide-react";
import { content } from "../../lib/content";

const iconMap: Record<string, React.ElementType> = {
  Target,
  ShieldAlert,
  Cpu,
  Layers,
  FlaskConical,
  FileWarning
};

export function TrustGrid() {
  const { cards } = content.trustGrid;

  // We only want the first 4 cards to match the design grid
  const displayCards = cards.slice(0, 4);

  return (
    <section id="problem" className="w-full max-w-7xl mx-auto px-8 flex flex-col items-center mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {displayCards.map((card, idx) => {
          // Special styling for the second card (Periodicity-Aware) based on the reference design
          const isHighlighted = idx === 1;
          
          return (
            <div 
              key={idx}
              className={`p-5 rounded-xl border ${isHighlighted ? 'bg-surface-raised border-accent/30 relative' : 'bg-surface border-white/5'}`}
            >
              {isHighlighted && (
                <div className="absolute top-0 right-4 transform -translate-y-1/2 bg-accent text-void text-[9px] font-black px-2 py-0.5 rounded">
                  AI-HYBRID
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${isHighlighted ? 'bg-accent/20 border-accent/40' : 'bg-accent/10 border-accent/20'}`}>
                   {/* Simplified icon representation to match reference */}
                   {idx === 0 && <div className='w-1 h-1 bg-accent rounded-full'></div>}
                   {idx === 1 && <div className='w-3 h-3 border border-accent rounded-sm'></div>}
                   {idx === 2 && <div className='w-3 h-1 bg-accent'></div>}
                   {idx === 3 && <div className='w-1 h-3 bg-accent rotate-45'></div>}
                   {idx > 3 && <div className='w-2 h-2 bg-accent rounded-full'></div>}
                </div>
                
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary">
                  {card.title}
                </h3>
              </div>
              
              <p className="text-xs text-text-secondary leading-relaxed">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
