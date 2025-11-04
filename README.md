# React Vite Website

A clean, minimal React + Vite + Tailwind project scaffold — ready for pixel-perfect Figma conversions.

## 🚀 Features
- React 18 with Vite 5
- TailwindCSS 3 for utility-first styling
- Vitest + Testing Library setup
- TypeScript-ready
- Clean, semicolon-safe root `index.tsx` shim

## 🛠 Setup Instructions

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Start the dev server
```bash
npm run dev
```

### 3️⃣ Run tests
```bash
npm run test
```

### 4️⃣ Build for production
```bash
npm run build
```

## 🧩 Folder Structure
```
react-vite-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   └── Footer.jsx
│   ├── __tests__/App.test.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── index.tsx
├── package.json
├── vite.config.js
├── tailwind.config.cjs
├── postcss.config.cjs
└── tsconfig.json
```

## 📘 Notes
If you encounter a semicolon or parsing error in `/index.tsx`, verify that your build tool parses `.tsx` via TypeScript (Vite does this by default).

---

💡 Want to extend this scaffold? Add routing, animations, or CMS integration.
Pull requests welcome!
