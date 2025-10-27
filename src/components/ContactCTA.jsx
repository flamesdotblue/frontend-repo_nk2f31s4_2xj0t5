import React from 'react';
import { Phone, MapPin, Mail, Star } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/30 p-10 text-white shadow-xl backdrop-blur-xl">
          <div className="pointer-events-none absolute -inset-px rounded-3xl bg-[radial-gradient(400px_120px_at_20%_0%,rgba(16,185,129,0.2),transparent),radial-gradient(400px_120px_at_80%_100%,rgba(56,189,248,0.2),transparent)]" />

          <div className="relative grid gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs text-white/80 ring-1 ring-white/20 backdrop-blur">
                <Star className="h-4 w-4 text-emerald-300" /> Trusted by local businesses
              </div>
              <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">Let’s design something unforgettable</h3>
              <p className="mt-2 max-w-xl text-slate-300">
                Share your brief on call or email. We’ll propose concepts, timelines, and transparent pricing.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="tel:9894686169" className="inline-flex items-center gap-2 rounded-xl bg-emerald-400/90 px-5 py-3 text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300">
                  <Phone className="h-5 w-5" /> Call 9894686169
                </a>
                <a href="mailto:hello@gdesigns.studio" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-white ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/15">
                  <Mail className="h-5 w-5" /> hello@gdesigns.studio
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <MapPin className="mt-0.5 h-5 w-5 text-cyan-300" />
                    <p>
                      Tambaram, opposite to Annai Arul Hospital
                      <br /> Chennai, Tamil Nadu
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <p className="text-sm text-slate-200">
                    Need print-ready banners or pamphlets? We deliver color-managed files with the right bleed and sizing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} GDesigns. Crafted in Chennai by MAGESH V.
        </p>
      </div>
    </section>
  );
}
