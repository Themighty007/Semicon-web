import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { content } from "../../lib/content";

export function Pipeline() {
  const { eyebrow, headline, description, stages } = content.pipeline;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="pipeline" className="w-full max-w-7xl mx-auto px-8 py-24" ref={containerRef}>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Left Column - Sticky Description */}
        <div className="lg:w-5/12 flex flex-col gap-6 lg:sticky lg:top-32 h-fit">
          <div className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
            — {eyebrow} —
          </div>
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-sans font-bold leading-[1.05] tracking-tight text-text-primary">
            {headline[0]} <br/> <span className="font-serif italic font-normal">{headline[1]}</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-[480px]">
            {description}
          </p>
        </div>

        {/* Right Column - Timeline */}
        <div className="lg:w-7/12 relative">
          {/* Animated Connecting Line */}
          <div className="absolute left-6 top-10 bottom-10 w-px bg-border-subtle overflow-hidden hidden sm:block">
            <motion.div 
              className="absolute top-0 left-0 right-0 h-full bg-accent origin-top shadow-[0_0_10px_rgba(34,232,176,0.8)]"
              style={{ scaleY: lineScale }}
            />
          </div>

          <div className="flex flex-col gap-12">
            {stages.map((stage, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-8 items-start group"
              >
                {/* Timeline Node */}
                <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-full border border-white/10 bg-[#0A1512] items-center justify-center relative z-10 group-hover:border-accent/50 transition-colors duration-300 shadow-[0_0_15px_rgba(34,232,176,0.1)]">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-[#0A1512] border border-white/5 rounded-xl p-6 transition-all duration-250 ease-out hover:-translate-y-1 hover:border-accent/30 relative overflow-hidden">
                  {stage.type === 'AI' && (
                    <div className="absolute top-0 right-4 transform bg-accent text-void text-[9px] font-black px-2 py-0.5 rounded-b">
                      {stage.type}-HYBRID
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-3 mt-1">
                    <h3 className="text-lg font-bold text-text-primary">{stage.title}</h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
