# HexForge 🛠️

A high-performance, distraction-free numeric base converter designed specifically for assembly language developers, low-level programmers, and reverse engineers working with environments like NASM and AFD (Advanced Fullscreen Debugger).

Instead of waiting for heavy, ad-supported web conversion apps, HexForge offers an instant offline companion utility to map out register allocations and calculate target memory offsets on the fly.

## ✨ Features

- **Multi-Base Interoperability**: Seamlessly cross-convert between **Hexadecimal**, **Decimal**, and **Binary** representations.
- **As-You-Type Conversions**: Calculations update instantly on input change events—no unnecessary submission buttons.
- **Low-Level Dev Optimization**: Built-in automatic casing corrections to instantly handle hex characters (`A-F`).
- **Responsive Terminal-Inspired UI**: Styled with modern, high-contrast tokens utilizing variable elevations, crisp borders, and full viewport optimizations for desktop and mobile workflows.

## 🚀 Tech Stack

- **Framework Core**: React 19 (Strict Mode)
- **Build Optimization**: Vite 8 (Hot Module Replacement enabled)
- **Linter System**: ESLint 10 (Flat Configuration)
- **Styling Architecture**: Semantic Pure CSS Variables & Layout Media Queries

## 📂 Project Architecture

```text
├── src/
│   ├── App.jsx        # Main component layout & base translation algorithms
│   ├── main.jsx       # Virtual DOM configuration and bootstrapping
│   ├── index.css      # Custom styling tokens, animations, and color schemas
│   └── file.js        # Algorithm sandbox testing script
├── index.html         # Application entry root wrapper
├── eslint.config.js   # Code quality configuration rules
└── package.json       # Build scripts and package dependencies
