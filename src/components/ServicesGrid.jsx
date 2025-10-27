import React from 'react';
import { Image, Megaphone, Layout, Printer, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Image,
    title: 'Invitations & Posters',
    desc: 'Elegant invitations, event posters, and social posts that set the tone and drive attention.'
  },
  {
    icon: Layout,
    title: 'Banners & Pamphlets',
    desc: 'Crisp layouts for banners, brochures, and pamphlets with press-ready output.'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing Creatives',
    desc: 'High-performing ad designs for Meta, Google, and local promotions.'
  },
  {
    icon: Printer,
    title: 'Print & Production',
    desc: 'Pixel-perfect print files, color-managed and sized for any format.'
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Designs that perform</h2>
        <p className="mt-3 text-slate-300">
          We blend strategy and aesthetics to build visuals that convert — online and offline.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative rounded-2xl bg-white/5 p-6 text-white ring-1 ring-white/10 transition hover:bg-white/[0.08]"
          >
            <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 p-3 ring-1 ring-white/10">
              <Icon className="h-6 w-6 text-emerald-300" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-slate-300">{desc}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-emerald-300 opacity-0 transition group-hover:opacity-100">
              <CheckCircle className="h-4 w-4" />
              Quality guaranteed
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
