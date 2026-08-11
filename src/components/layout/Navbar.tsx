import { useEffect, useState } from "react";
import { Github, Crosshair } from "lucide-react";
import { content } from "../../lib/content";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300",
        scrolled ? "bg-void/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 border-2 border-accent rounded-full flex items-center justify-center relative">
          <div className="w-1 h-4 bg-accent absolute"></div>
          <div className="w-4 h-1 bg-accent absolute"></div>
        </div>
        <span className="font-bold tracking-tight text-lg text-text-primary">
          {content.nav.logo}
        </span>
      </div>

      <div className="hidden md:flex gap-8 text-sm text-text-secondary font-medium">
        {content.nav.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:text-text-primary transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <a
          href={content.nav.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-text-muted hover:text-text-primary transition-colors"
        >
          GitHub
        </a>
        <a
          href={content.nav.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-void px-4 py-2 rounded-lg text-xs font-bold hidden sm:inline-block transition-transform hover:scale-105"
        >
          View Repository
        </a>
      </div>
    </nav>
  );
}
