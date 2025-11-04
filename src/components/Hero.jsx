import React from 'react';

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Build beautiful stuff — fast.</h1>
        <p className="mt-6 text-lg text-slate-600">This is a clean, responsive starter built from your Figma (placeholder). Pixel-perfect mapping requires Figma exports (images, colors, fonts).</p>
        <div className="mt-8 flex gap-4">
          <a className="px-6 py-3 rounded-md bg-sky-600 text-white" href="#">Get started</a>
          <a className="px-6 py-3 rounded-md border" href="#">Learn more</a>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-md bg-gradient-to-br from-white to-slate-100 p-6 rounded-2xl shadow-lg">
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">Design preview placeholder</div>
        </div>
      </div>
    </section>
  );
}