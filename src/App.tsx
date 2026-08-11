/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { TrustGrid } from "./components/sections/TrustGrid";
import { Pipeline } from "./components/sections/Pipeline";
import { InteractiveVisualizer } from "./components/sections/InteractiveVisualizer";

// Lazy load below-the-fold components
const Benchmark = lazy(() => import("./components/sections/Benchmark").then(module => ({ default: module.Benchmark })));
const Results = lazy(() => import("./components/sections/Results").then(module => ({ default: module.Results })));
const TeamStack = lazy(() => import("./components/sections/TeamStack").then(module => ({ default: module.TeamStack })));
const CTABanner = lazy(() => import("./components/sections/CTABanner").then(module => ({ default: module.CTABanner })));

export default function App() {
  return (
    <div className="relative min-h-screen bg-void text-text-primary font-sans antialiased selection:bg-accent/30 flex flex-col overflow-x-hidden">
      {/* Background Gradients (Extracted to index.css utility classes) */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-glow-gradient" />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.04] bg-dot-pattern" />
      
      <Navbar />
      
      <main className="flex flex-col items-center w-full relative z-10">
        <Hero />
        <TrustGrid />
        <Pipeline />
        <InteractiveVisualizer />
        
        <Suspense fallback={<div className="h-96 flex items-center justify-center text-accent">Loading...</div>}>
          <Benchmark />
          <Results />
          <TeamStack />
          <CTABanner />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
