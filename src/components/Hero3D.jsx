import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/40 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_160px_80px_rgba(2,6,23,0.8)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center text-white">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/90 ring-1 ring-white/20 backdrop-blur-md">
          <Sparkles className="h-4 w-4" />
          Elevate your brand with striking visuals
        </div>

        <h1 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          GDesigns — Premium Creative Studio for
          <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent"> Invitations, Posters & Digital Ads</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
          We craft modern, high-converting designs — from event invitations and banners to performance-driven ad creatives and social media campaigns.
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
