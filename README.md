# Drift-Sense: AI-Hybrid Navigation-Error Recovery

Built by **Open Epoch** for SEMICON India 2026.

## 🚀 Overview

SEM tools drift off-target between inspections. Periodic wafer layouts (DRAM/FinFET) make relocation genuinely hard because repeating structures look identical. 

**Drift-Sense** solves this by marrying the speed of classical signal processing (FFT-NCC) with the disambiguating power of Deep Learning (Siamese Candidate Ranking). It successfully identifies unique manufacturing defect fingerprints to break periodic ambiguity and find the exact target.

## ✨ Features

- **Interactive AI Visualizer:** Drag the slider to see how standard classical approaches fail on periodic layouts by locking onto false repeated structures, and how our AI-Hybrid approach succeeds.
- **Lightning Fast Loading:** Built with React `lazy` loading and Suspense, the page loads instantly.
- **Premium Aesthetics:** Features dynamic Framer Motion animations, interactive typing terminal simulation, and sleek glassmorphism.
- **Sub-Pixel Accuracy:** Mentions phase-correlation refinement resolving drift to 0.01px precision via Guizar-Sicairos Fourier-domain phase shift.
- **CPU-Only Inference:** Full 5-stage pipeline runs in under 100ms on standard CPU hardware.

## 👥 Team Open Epoch

- **Gowthum Vijaay D** - Team Lead & Developer
- **Jayanthsairam M L** - Developer
- **SRI HARI KARTHIKEYAN K** - Developer

## 💻 Tech Stack

- **Frontend Framework:** React, Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript

## 🛠️ Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Themighty007/Semicon-web.git
   cd Semicon-web
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```
3. Run the development server:
   ```bash
   npm run dev
   # or
   bun run dev
   ```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
