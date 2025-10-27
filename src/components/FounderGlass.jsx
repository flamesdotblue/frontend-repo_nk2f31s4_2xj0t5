import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function FounderGlass() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-white/5 p-[2px] ring-1 ring-white/10">
        <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl">
          {/* Decorative glows */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(600px_200px_at_20%_0%,rgba(16,185,129,0.25),transparent),radial-gradient(500px_200px_at_80%_100%,rgba(56,189,248,0.25),transparent)]" />

          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-widest text-emerald-300">Founder</p>
              <h3 className="mt-2 bg-gradient-to-r from-white via-emerald-100 to-cyan-100 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                MAGESH V
              </h3>
              <p className="mt-2 max-w-xl text-slate-200">
                Building GDesigns into a go-to creative partner for brands and events in Chennai and beyond. We obsess over clarity, craft, and conversion.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:9894686169"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-white ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/15"
                >
                  <Phone className="h-5 w-5 text-emerald-300" /> 9894686169
                </a>
                <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-white ring-1 ring-white/20 backdrop-blur-md">
                  <MapPin className="h-5 w-5 text-cyan-300" /> Tambaram, opposite to Annai Arul Hospital
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="mx-auto max-w-sm rounded-2xl border border-white/20 bg-white/10 p-6 text-center text-white shadow-2xl backdrop-blur-2xl">
                <p className="text-sm text-emerald-200">Glassmorphic highlight</p>
                <p className="mt-2 text-lg font-semibold">Your brand, in its best light</p>
                <p className="mt-2 text-sm text-slate-200">
                  Subtle blur, soft gradients, and clean type draw attention to what matters most — your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
