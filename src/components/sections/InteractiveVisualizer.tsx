import { useState } from "react";
import { motion } from "motion/react";
import { content } from "../../lib/content";

export function InteractiveVisualizer() {
  const [mode, setMode] = useState<"classical" | "ai">("classical");

  return (
    <section id="visualizer" className="relative w-full max-w-7xl mx-auto px-8 py-24 flex flex-col items-center">
      <div className="text-center max-w-2xl mb-12">
        <div className="text-accent text-xs font-bold tracking-[0.2em] mb-3 uppercase">
          — {content.visualizer.eyebrow} —
        </div>
        <h2 className="text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-bold tracking-tight mb-6 text-text-primary">
          {content.visualizer.headline[0]} <span className="font-serif italic font-normal">{content.visualizer.headline[1]}</span>
        </h2>
        <p className="text-text-secondary text-lg leading-relaxed">
          {content.visualizer.description}
        </p>
      </div>

      <div className="w-full max-w-4xl bg-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
        <div className="flex w-full border-b border-white/10">
          <button
            onClick={() => setMode("classical")}
            className={`flex-1 py-4 text-sm font-semibold tracking-wider uppercase transition-colors ${
              mode === "classical" ? "bg-white/5 text-white" : "text-text-muted hover:text-text-secondary"
            }`}
          >
            Classical Mode (Fails)
          </button>
          <button
            onClick={() => setMode("ai")}
            className={`flex-1 py-4 text-sm font-semibold tracking-wider uppercase transition-colors ${
              mode === "ai" ? "bg-accent/10 text-accent" : "text-text-muted hover:text-text-secondary"
            }`}
          >
            AI-Hybrid Mode (Succeeds)
          </button>
        </div>

        <div className="relative aspect-video bg-[#0d1b17] overflow-hidden flex items-center justify-center">
          {/* Simulated Wafer Background */}
          <div 
            className="absolute inset-0 opacity-40 bg-[length:40px_40px]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.1) 2px, transparent 2px)'
            }}
          />

          <motion.div
            key={mode}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative w-3/4 h-3/4 flex items-center justify-center"
          >
            {mode === "classical" ? (
              <div className="relative w-full h-full border border-red-500/30 bg-red-500/5 rounded-lg flex items-center justify-center">
                {/* Wrong Target Box */}
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                  className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-red-500 bg-red-500/20 glow-bloom flex items-center justify-center rounded"
                >
                  <span className="text-red-500 font-bold text-xs">FALSE MATCH</span>
                </motion.div>
                <div className="absolute bottom-4 left-4 right-4 bg-red-950/80 border border-red-500/30 p-4 rounded text-red-200 text-sm">
                  <strong>Error:</strong> Classical NCC locks onto a false periodic structure because the local region looks identical mathematically.
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full border border-accent/30 bg-accent/5 rounded-lg flex items-center justify-center">
                {/* True Target Box */}
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-accent bg-accent/20 glow-bloom flex items-center justify-center rounded"
                >
                  <span className="text-accent font-bold text-xs">TRUE MATCH</span>
                </motion.div>
                {/* Defect Fingerprint */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, type: "spring" }}
                  className="absolute top-1/2 left-1/2 ml-6 mt-6 w-3 h-3 rounded-full border border-yellow-400 bg-yellow-400/50 shadow-[0_0_15px_rgba(250,204,21,0.6)]"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-accent/10 border border-accent/30 p-4 rounded text-accent text-sm">
                  <strong>Success:</strong> Siamese CNN detects the shared manufacturing defect fingerprint (yellow marker), breaking the periodic ambiguity.
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
