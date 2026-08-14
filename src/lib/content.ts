export const content = {
  nav: {
    logo: "Drift-Sense",
    links: [
      { label: "Problem", href: "#problem" },
      { label: "Pipeline", href: "#pipeline" },
      { label: "Visualizer", href: "#visualizer" },
      { label: "Results", href: "#results" },
      { label: "Team", href: "#team" },
    ],
    githubUrl: "https://github.com/JayanthSairam467/Semicon-Drift-Sense",
  },
  hero: {
    headline: ["Drift-Sense: AI-Hybrid Navigation-Error", "Recovery."],
    subheadline: "SEM tools drift off-target between inspections. Periodic wafer layouts (DRAM/FinFET) make relocation genuinely hard because repeating structures look identical.",
    primaryCta: { label: "Try Visualizer", href: "#visualizer" },
    secondaryCta: { label: "View on GitHub", href: "https://github.com/JayanthSairam467/Semicon-Drift-Sense" },
    quickstartCommand: "git clone https://github.com/JayanthSairam467/Semicon-Drift-Sense.git && cd Semicon-Drift-Sense && pip install -r requirements.txt && python benchmark.py",
    terminal: [
      "$ python localize.py --reference dataset/dram_pair_003/reference.png --search dataset/dram_pair_003/search.png --json",
      "",
      "Stage 1  FFT-NCC coarse localization ......... done",
      "Stage 2  Top-K peak extraction (k=10) ........ done",
      "Stage 3  Siamese candidate ranking (AI) ...... done",
      "Stage 4  Confidence estimation ............... 0.87 (high)",
      "Stage 5  Phase-correlation subpixel refine ... done",
      "",
      "{",
      '  "center_x": 512.34,',
      '  "center_y": 498.11,',
      '  "method": "ai_hybrid",',
      '  "inference_ms": 41.2',
      "}"
    ],
    logos: ["OpenCV", "PyTorch", "scikit-image", "NumPy", "SciPy", "Applied Materials Challenge"]
  },
  trustGrid: {
    eyebrow: "Built for Rigor and Reproducibility",
    headline: ["Trusted Precision for Mission-Critical", "Inspection."],
    subtext: "In a fab environment, reliability matters more than raw novelty. Our architecture prioritizes consistency and graceful failure.",
    cards: [
      {
        icon: "Target",
        title: "Sub-Pixel Accuracy",
        description: "Phase-correlation refinement resolves drift to 0.01px precision via Guizar-Sicairos Fourier-domain phase shift."
      },
      {
        icon: "ShieldAlert",
        title: "Graceful Degradation",
        description: "If AI weights are missing or confidence is low, the system falls back to classical Lowe's-ratio + center-bias heuristics. It never crashes, never returns nothing."
      },
      {
        icon: "Cpu",
        title: "CPU-Only Inference",
        description: "Full 5-stage pipeline runs in under 100ms on standard CPU hardware — no GPU dependency for deployment."
      },
      {
        icon: "Layers",
        title: "Periodicity-Aware",
        description: "A 241K-parameter Siamese CNN ranks candidate peaks against permanent manufacturing-defect \"fingerprints,\" breaking ties that defeat naive template matching."
      },
      {
        icon: "FlaskConical",
        title: "Physics-Grounded Synthetic Data",
        description: "Poisson shot noise, secondary-electron edge brightening, line-edge roughness, and charging gradients — every augmentation cited against SEM imaging literature."
      },
      {
        icon: "FileWarning",
        title: "Honest Failure Reporting",
        description: "Every prediction ships with a confidence score and method label, so operators know when to trust a result and when to verify manually."
      }
    ]
  },
  pipeline: {
    eyebrow: "The AI-Hybrid Architecture",
    headline: ["One Pipeline.", "Five Stages."],
    description: "Pure classical methods fail on periodicity, and pure deep learning is slow, opaque, and prone to domain gaps. Our hybrid split solves both.",
    stages: [
      {
        number: 1,
        type: "CLASSICAL",
        title: "Coarse Localization",
        description: "FFT-accelerated Normalized Cross-Correlation across the full search space in milliseconds."
      },
      {
        number: 2,
        type: "CLASSICAL",
        title: "Top-K Candidate Extraction",
        description: "Non-maximum suppression pulls the 10 strongest correlation peaks, since periodic layouts produce many near-identical matches."
      },
      {
        number: 3,
        type: "AI",
        title: "Intelligent Tie-Breaker",
        description: "A tiny Siamese CNN scores each candidate against the reference using learned defect fingerprints invisible to raw correlation."
      },
      {
        number: 4,
        type: "AI",
        title: "Confidence Estimation & Fallback",
        description: "Best-vs-second-best score ratio gates trust; low confidence triggers automatic fallback to center-bias heuristics."
      },
      {
        number: 5,
        type: "CLASSICAL",
        title: "Sub-Pixel Refinement",
        description: "Phase correlation in the Fourier domain sharpens the chosen coordinate to fractional-pixel precision."
      }
    ]
  },
  visualizer: {
    eyebrow: "Interactive Demo",
    headline: ["See the AI-Hybrid", "Advantage."],
    description: "Drag the slider to see how standard classical approaches fail on periodic layouts by locking onto false repeated structures. Our AI-Hybrid approach successfully identifies the unique manufacturing defect fingerprint to find the exact target.",
  },
  benchmark: {
    eyebrow: "Benchmark",
    headline: ["Choose Your", "Confidence Level."],
    cards: [
      {
        type: "muted",
        title: "Raw Baseline",
        description: "plain cv2.matchTemplate, no fallback logic",
        metrics: {
          successRate: "12%",
          avgTime: "15ms",
          handlesPeriodicity: false
        }
      },
      {
        type: "standard",
        title: "Classical-Only",
        description: "NCC + Lowe's ratio + center-bias, no AI",
        metrics: {
          successRate: "24%",
          avgTime: "74ms",
          handlesPeriodicity: false
        }
      },
      {
        type: "highlighted",
        title: "AI-Hybrid",
        badge: "RECOMMENDED",
        description: "Full 5-stage pipeline. Best on periodic layouts.",
        metrics: {
          successRate: "90%+",
          avgTime: "100ms",
          handlesPeriodicity: true
        }
      }
    ]
  },
  results: {
    eyebrow: "Results",
    headline: ["One Success.", "One Honest Failure."],
    cards: [
      {
        type: "success",
        title: "Success",
        imageReference: "/results/success-thumb.png",
        imageSearch: "/results/success-thumb.png",
        predicted: "[512.3, 498.1]",
        true: "[512.0, 498.0]",
        error: "0.3px",
        method: "AI-Hybrid",
        caption: "DRAM medium-difficulty pair successfully resolved."
      },
      {
        type: "failure",
        title: "Failure",
        imageReference: "/results/failure-thumb.png",
        imageSearch: "/results/failure-thumb.png",
        predicted: "[120.0, 340.0]",
        true: "[120.0, 680.0]",
        error: "340.0px",
        method: "Classical Fallback",
        caption: "Siamese confidence collapsed to near-1.0 ratio between two visually identical periodic candidates; fallback center-bias heuristic selected the wrong peak, producing a 340px error."
      }
    ]
  },
  teamStack: {
    team: {
      name: "Open Epoch",
      members: [
        { name: "Gowthum Vijaay D", role: "Team Lead & Developer", college: "" },
        { name: "Jayanthsairam M L", role: "Developer", college: "" },
        { name: "SRI HARI KARTHIKEYAN K", role: "Developer", college: "" }
      ],
      contact: "team@openepoch.example",
      github: "github.com/Themighty007"
    },
    tech: [
      { label: "Language", value: "Python 3.8+ / TypeScript" },
      { label: "Core libraries", value: "OpenCV, scikit-image, PyTorch, React" },
      { label: "Model size", value: "943KB" },
      { label: "Hardware", value: "CPU-only, no GPU required" },
      { label: "Dataset gen time", value: "45 mins" },
      { label: "Inference time", value: "~100ms per pair" }
    ]
  },
  cta: {
    headline: ["See Drift-Sense", "Localize."],
    subtext: "Explore the codebase and run the evaluation pipeline yourself.",
    primaryCta: { label: "View Repository", href: "https://github.com/JayanthSairam467/Semicon-Drift-Sense" },
    secondaryCta: { label: "Watch Demo Video", href: "#demo-video" }
  },
  footer: {
    logo: "Drift-Sense",
    description: "AI-Hybrid Navigation-Error Recovery for SEMICON India 2026. Built by Open Epoch.",
    columns: [
      {
        title: "Project",
        links: [
          { label: "Problem", href: "#problem" },
          { label: "Pipeline", href: "#pipeline" },
          { label: "Results", href: "#results" },
          { label: "Tech Stack", href: "#tech-stack" }
        ]
      },
      {
        title: "Resources",
        links: [
          { label: "README", href: "https://github.com/JayanthSairam467/Semicon-Drift-Sense" },
          { label: "Setup Guide", href: "https://github.com/JayanthSairam467/Semicon-Drift-Sense" },
        ]
      },
      {
        title: "Team",
        links: [
          { label: "GitHub Profile", href: "https://github.com/Themighty007" },
        ]
      }
    ],
    copyright: "© 2026 Open Epoch. All rights reserved."
  }
};
