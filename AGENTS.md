AGENTS.md — AI Coding Assistant Guidance & Operating Rules

Dokumen ini memberikan instruksi teknis, aturan arsitektur, dan _best practices_ bagi AI Coding Agent (seperti Cursor Agent, Windsurf, GitHub Copilot Workspace, v0, dll.) saat membangun dan mengelola codebase **Landing Page Paskibra ADMAJA SMKN 4 Kendal**.

---

## 1. System Role & Core Principles

- **Role**: Senior Full-Stack Web Developer & UI/UX Specialist.
- **Goal**: Membangun landing page Paskibra ADMAJA yang performant, pixel-perfect sesuai `design.md`, accessible (WCAG 2.1 AA), dan responsive di semua _device breakpoint_.
- **Tech Stack Baseline**:
  - **Framework**: Next.js 14+ (App Router, TypeScript)
  - **Styling**: Tailwind CSS v3+
  - **UI Components**: Radix UI / Shadcn UI
  - **Icons**: `lucide-react`
  - **Animations**: `framer-motion`
  - **Map Engine**: `leaflet` / `react-leaflet` atau OpenStreetMap Embed

---

## 2. Directory & Component Structure

Ikuti struktur folder standar Next.js App Router berikut:

```text
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with Metadata & Font setup
│   │   ├── page.tsx           # Main Landing Page assemble point
│   │   └── globals.css        # Tailwind directives & CSS custom variables
│   ├── components/
│   │   ├── layout/            # Navigation & Footer
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/          # Landing Page Sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatsCounter.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ManagementSection.tsx
│   │   │   ├── CoreValuesSection.tsx
│   │   │   ├── GallerySection.tsx
│   │   │   ├── FaqSection.tsx
│   │   │   ├── RegistrationCta.tsx
│   │   │   └── LocationContactSection.tsx
│   │   └── ui/                # Reusable Primitive UI Components (Shadcn style)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       └── accordion.tsx
│   ├── config/                # Design Tokens & Site Config
│   │   └── site.ts            # Navigation items, social links, FAQs data
│   └── types/                 # TypeScript Types & Interfaces
│       └── index.ts
├── public/                    # Static assets (logos, pictures, icons)
├── design.md                  # Design Specifications
├── AGENTS.md                  # Guidance for AI Coding Agents
└── CLAUDE.md                  # Claude / Anthropic Specific System Prompt
```

---

## 3. Strict Development Rules for AI Agents

### 3.1 Styling & Design Tokens

SESUAIKAN DENGAN DESIGN.md

### 3.2 Component Implementation Rules

- **No Hardcoded Data inside Components**: Pisahkan data statis (isi FAQ, daftar pengurus, link sosial media, item galeri) ke dalam `src/config/site.ts`.
- **Image Optimization**: Gunakan `<Image />` dari `next/image` dengan properti `alt`, `width`, `height`, dan `priority` (khusus Hero).
- **Interactive State**:
  - FAQ Accordion harus mendukung ekspansi tunggal/multi.
  - Hover effect pada card: `transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`.
- **Accessibility**:
  - Gunakan elemen HTML semantik (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Tambahkan `aria-label` untuk ikon navigasi atau tombol tanpa teks.

---

## 4. Workflows & Validation Steps

Setiap kali menyelesaikan fitur atau komponen baru:

1. Verifikasi kecocokan komponen dengan urutan section di `design.md`.
2. Pastikan tidak ada kesalahan TypeScript / ESLint (`npm run lint` / `tsc --noEmit`).
3. Pastikan tampilan responsif berjalan mulus di resolusi mobile (`375px`), tablet (`768px`), dan desktop (`1280px+`).
