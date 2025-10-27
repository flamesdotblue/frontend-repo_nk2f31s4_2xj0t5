import React from 'react';
import Hero3D from './components/Hero3D';
import ServicesGrid from './components/ServicesGrid';
import FounderGlass from './components/FounderGlass';
import ContactCTA from './components/ContactCTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400" />
            <span className="font-semibold">GDesigns</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#founder" className="hover:text-white">Founder</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="tel:9894686169" className="rounded-xl bg-white/10 px-4 py-2 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15">Call: 9894686169</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero3D />
        <ServicesGrid />
        <section id="founder">
          <FounderGlass />
        </section>
        <ContactCTA />
      </main>
    </div>
  );
}
