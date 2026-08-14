import { Crosshair, Github } from "lucide-react";
import { content } from "../../lib/content";

export function Footer() {
  return (
    <footer className="px-8 py-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-text-muted uppercase tracking-widest relative z-20 bg-void w-full mt-20">
      <div>Team VisionForge — SEMICON India 2026</div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
        <span>Reference: Applied Materials Track</span>
        <span>Model: 241K Params</span>
        <span>≤1px Accuracy: 86.7%</span>
      </div>
      <div>© 2026 Drift-Sense</div>
    </footer>
  );
}
