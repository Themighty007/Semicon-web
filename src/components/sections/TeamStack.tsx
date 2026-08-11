import { Github } from "lucide-react";
import { content } from "../../lib/content";

export function TeamStack() {
  const { team, tech } = content.teamStack;

  return (
    <section id="tech-stack" className="w-full max-w-7xl mx-auto px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        
        {/* Left: Team */}
        <div id="team" className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
              — The Team —
            </div>
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-sans font-bold leading-[1.05] tracking-tight text-text-primary">
              {team.name}
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {team.members.map((member, idx) => (
              <div key={idx} className="flex flex-col gap-1 pb-4 border-b border-white/5 last:border-0">
                <h3 className="text-lg font-bold text-text-primary">{member.name}</h3>
                <p className="text-sm text-text-secondary">{member.role}</p>
                <p className="text-sm text-text-muted">{member.college}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a href={`mailto:${team.contact}`} className="text-sm text-text-secondary hover:text-white transition-colors">
              {team.contact}
            </a>
            <span className="text-white/20">•</span>
            <a href={`https://${team.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors">
              <Github className="w-4 h-4" />
              {team.github}
            </a>
          </div>
        </div>

        {/* Right: Tech & Feasibility */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
              — Tech & Feasibility —
            </div>
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-sans font-bold leading-[1.05] tracking-tight text-text-primary">
              System <br/> <span className="font-serif italic font-normal">Specs.</span>
            </h2>
          </div>

          <div className="bg-[#0A1512] border border-white/5 rounded-xl p-6 font-mono text-sm relative overflow-hidden">
            {/* Terminal styling top bar */}
            <div className="flex items-center pb-4 mb-4 border-b border-white/5">
               <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="ml-4 text-[10px] uppercase tracking-widest text-text-muted">neofetch</span>
            </div>

            <div className="flex flex-col gap-3">
              {tech.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-text-muted w-36 shrink-0">{item.label}</span>
                  <span className="hidden sm:inline text-text-muted shrink-0">::</span>
                  <span className="text-text-secondary">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
