import React from 'react';

const items = [
  {title: 'Fast', body: 'Blazing fast performance.'},
  {title: 'Accessible', body: 'Built with accessibility in mind.'},
  {title: 'Customizable', body: 'Easily tweak styles to match Figma.'}
];

export default function Features() {
  return (
    <section id="features" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold">Features</h2>
      <p className="mt-2 text-slate-600">A short list of things your project does well.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it)=> (
          <div key={it.title} className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="font-semibold text-xl">{it.title}</h3>
            <p className="mt-2 text-slate-600">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}