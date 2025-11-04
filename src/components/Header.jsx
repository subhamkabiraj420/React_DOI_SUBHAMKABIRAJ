import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">YourBrand</div>
        <nav className="space-x-6 hidden md:flex">
          <a className="hover:underline" href="#features">Features</a>
          <a className="hover:underline" href="#pricing">Pricing</a>
          <a className="hover:underline" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-md border">Log in</button>
          <button className="px-4 py-2 rounded-md bg-sky-600 text-white">Sign up</button>
        </div>
      </div>
    </header>
  );
}