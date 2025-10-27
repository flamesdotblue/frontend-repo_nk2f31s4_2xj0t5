import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* 3D Scene Layer */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient and vignette overlays (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-slate-950/70 via-slate-900/30 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-0 z-10 [box-shadow:inset_0_0_160px_80px_rgba(2,6,23,0.8)]" />

      {/* Content Layer */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center text-white">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/90 ring-1 ring-white/20 backdrop-blur-md">
          <Sparkles className="h-4 w-4" />
          Futuristic design • Print & Digital
        </div>

        {/* Big, bright GDesign title with subtle motion and glow */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl leading-[1.05] drop-shadow-[0_0_20px_rgba(16,185,129,0.35)] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="relative inline-block bg-[linear-gradient(90deg,#34d399,45%,#22d3ee,70%,#60a5fa)] bg-clip-text text-transparent">
            GDesign
            <span
              className="pointer-events-none absolute inset-0 z-0 blur-2xl opacity-60"
              style={{
                background:
                  'radial-gradient(120px 60px at 50% 60%, rgba(34,211,238,0.35), transparent), radial-gradient(180px 80px at 50% 40%, rgba(16,185,129,0.35), transparent)'
              }}
            />
          </span>
        </motion.h1>

        <p className="mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
          Premium creative studio for invitations, posters, banners, pamphlets and high‑performing digital ads.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="tel:9894686169"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-400/90 px-6 py-3 text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300"
          >
            <Rocket className="h-5 w-5" />
            Start a Project
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-white ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/15"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
