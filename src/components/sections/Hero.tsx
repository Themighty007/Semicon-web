import { motion } from "motion/react";
import { content } from "../../lib/content";
import { Button } from "../ui/Button";
import { CodeSnippet } from "../ui/CodeSnippet";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-8 pt-32 pb-20 grid grid-cols-1 md:grid-cols-12 gap-12 min-h-[90vh] items-center">
      {/* Hero Copy */}
      <div className="md:col-span-7 flex flex-col justify-center gap-6 z-10">
        <div>
          <div className="text-accent text-xs font-bold tracking-[0.2em] mb-3 uppercase">
            — Built for Precision at Nanometer Scale —
          </div>
          <h1 className="text-[clamp(2.5rem,5vw,3.8rem)] leading-[1.05] font-bold tracking-tight mb-4 text-text-primary">
            {content.hero.headline[0]} <br/> <span className="font-serif italic font-normal">{content.hero.headline[1]}</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-[540px] leading-relaxed">
            {content.hero.subheadline}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Button as="a" href={content.hero.primaryCta.href} variant="primary" className="w-full sm:w-auto">
            {content.hero.primaryCta.label}
          </Button>
          <Button as="a" href={content.hero.secondaryCta.href} variant="secondary" className="w-full sm:w-auto">
            {content.hero.secondaryCta.label}
          </Button>
        </div>

        {/* Quickstart Command */}
        <CodeSnippet command={content.hero.quickstartCommand} />

        {/* Marquee/Logos */}
        <div className="mt-8 flex flex-wrap items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {content.hero.logos.map((logo) => (
            <span key={logo} className="text-xs font-bold tracking-wider uppercase text-text-secondary">
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Terminal Card */}
      <div className="md:col-span-5 relative z-10 flex flex-col justify-center mt-12 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full bg-surface border border-white/10 rounded-xl overflow-hidden shadow-2xl relative"
        >
          <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5">
            <div className="flex gap-1.5 mr-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">drift-sense — localize.py v1.0</span>
            <div />
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-6 font-mono text-sm leading-relaxed overflow-x-auto space-y-1.5"
          >
            {content.hero.terminal.map((line, idx) => {
              if (line.startsWith("$ ")) {
                return <motion.div variants={lineVariants} key={idx} className="text-text-muted mb-4"><span className="text-text-muted">{'$ '}</span>{line.substring(2)}</motion.div>;
              }
              if (line.includes(".........")) {
                const [stage, rest] = line.split(".........");
                const isDone = rest.includes("done");
                const stageNum = stage.substring(0, 7);
                const stageName = stage.substring(7).trim();
                return (
                  <motion.div variants={lineVariants} key={idx} className="flex justify-between mb-1">
                    <span>
                      <span className="text-text-primary mr-2">{stageNum}</span>
                      <span className="text-text-muted">{stageName}</span>
                    </span>
                    <span className={isDone ? "text-accent" : "text-yellow-400/80"}>{rest.trim()}</span>
                  </motion.div>
                );
              }
              if (line.includes("{") || line.includes("}")) {
                return <motion.div variants={lineVariants} key={idx} className="text-accent">{line}</motion.div>;
              }
              if (line.includes(":")) {
                const [key, val] = line.split(":");
                return (
                  <motion.div variants={lineVariants} key={idx} className="pl-4 text-text-secondary">
                    {key}: <span className="text-white">{val}</span>
                  </motion.div>
                );
              }
              return <motion.div variants={lineVariants} key={idx} className="h-6">{line}</motion.div>;
            })}
            {/* Blinking cursor */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
              className="w-2 h-5 bg-accent/70 mt-1" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
