import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} YourBrand. All rights reserved.</div>
        <div className="space-x-4">
          <a className="hover:underline" href="#">Privacy</a>
          <a className="hover:underline" href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}