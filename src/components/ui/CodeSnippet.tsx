import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeSnippetProps {
  command: string;
}

export function CodeSnippet({ command }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative group w-full max-w-2xl mt-8">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/30 to-accent/10 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
      <div className="relative flex items-center justify-between w-full bg-surface-raised border border-white/10 rounded-lg p-4 shadow-xl">
        <div className="flex items-center space-x-3 overflow-x-auto no-scrollbar pr-4">
          <span className="text-accent select-none font-mono font-bold">$</span>
          <code className="text-text-primary text-sm font-mono whitespace-nowrap">
            {command}
          </code>
        </div>
        <button
          onClick={handleCopy}
          className="ml-4 p-2 shrink-0 rounded-md bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all focus:outline-none"
          title="Copy to clipboard"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-text-muted hover:text-text-primary transition-colors" />
          )}
        </button>
      </div>
      <div className="text-center mt-2">
        <p className="text-xs text-text-muted">Requires Python 3.8+ and Git</p>
      </div>
    </div>
  );
}
