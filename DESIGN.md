# Design System & Technical Specifications: Landing Page Paskibra ADMAJA (SMKN 4 Kendal)

Dokumen `design.md` ini dirancang khusus untuk memandu AI Coding Assistant (seperti Cursor, Claude Dev, GitHub Copilot, v0, dll.) dalam mengimplementasikan Landing Page Ekstrakurikuler Paskibra Adika Mahol Jaya (ADMAJA) SMKN 4 Kendal dengan presisi visual, struktur komponen modular, dan aksesibilitas tinggi.

---

## 1. Executive Summary & Core Identity

- **Nama Project**: Landing Page Paskibra ADMAJA
- **Institusi**: SMKN 4 Kendal
- **Tujuan Utama**: Memperkenalkan ekstrakurikuler Paskibra, memamerkan struktur kepengurusan & prestasi, memberikan informasi pendaftaran, serta menyediakan kontak resmi.
- **Tone & Branding**: Formal, Patriotik, Disiplin, Modern, dan Enerjik.
- **Warna Identitas Utama**: Red Navy Dark Theme Mix (Merah Marun/Cabai, Kuning Emas/Accent, Navy/Dark Slate, Warm Off-White).

---

## 2. Tech Stack Recommendations for AI Agents

Untuk hasil terbaik, instruksikan AI Coding Agent menggunakan stack berikut:

- **Framework**: Next.js 14+ (App Router) / React
- **Styling**: Tailwind CSS v3+
- **Icons**: Lucide React / React Icons
- **Components**: Radix UI / Shadcn UI (Accordion, Dialog, Tooltip)
- **Maps**: Leaflet / React-Google-Maps / Mapbox / OpenStreetMap embed
- **Animation**: Framer Motion (untuk smooth reveal & hover effects)

---

## 3. Design Tokens & Color Palette

```json
{
  "colors": {
    "primary": {
      "main": "#C8102E" /* Red / Crimson Button & Hero Highlight */,
      "hover": "#A00C23",
      "light": "#FFF1F2"
    },
    "secondary": {
      "gold": "#FFD700" /* Accent Yellow/Gold Badge & Quote highlight */,
      "goldLight": "#FEF9C3"
    },
    "dark": {
      "bg": "#0F172A" /* Dark Navy / Slate Section */,
      "card": "#1E293B",
      "text": "#020617"
    },
    "neutral": {
      "bg": "#FAFAFA" /* Off-white background */,
      "surface": "#FFFFFF",
      "border": "#E2E8F0",
      "mutedText": "#64748B"
    }
  },
  "typography": {
    "fontFamily": "Inter, Plus Jakarta Sans, sans-serif",
    "sizes": {
      "h1": "2.5rem (40px) / bold",
      "h2": "1.875rem (30px) / bold",
      "h3": "1.25rem (20px) / semi-bold",
      "body": "0.875rem (14px) / regular",
      "small": "0.75rem (12px) / medium"
    }
  },
  "borderRadius": {
    "card": "12px",
    "button": "8px",
    "badge": "9999px"
  }
}
```

---

## 4. UI Layout & Component Architecture

### Component Hierarchy Tree

```text
LandingPage Layout
├── Navbar (Fixed Top)
├── Hero Section
├── Key Metrics / Stats Counter
├── About Section ("Mengenal Lebih Dekat")
│   └── Feature Cards (3 Columns)
├── Structure & Management Section ("Pembina & Dewan Pengurus Korps")
│   ├── Pembina Card (Top/Main)
│   ├── Pengurus Cards (2 Columns grid)
│   └── Foto Dokumentasi Pengurus (3 Columns gallery)
├── Quote / Vision Banner (Dark Red Accent Background)
│   └── Core Values Row (4 Columns Grid)
├── Activity Gallery & Achievements ("Galeri Kegiatan & Jejak Prestasi")
│   └── Masonry Grid (4 Highlight Cards with Badges)
├── FAQ Section ("Pertanyaan yang Sering Diajukan")
│   └── Accordion Component
├── CTA Registration Section ("Siap Menjadi Bagian...")
│   └── Dark Card with Red Action Button & Crest Outline
├── Location & Contact Section ("Hubungi Kami")
│   ├── Contact Info List
│   └── Interactive Map Container
└── Footer
    └── Multi-column Links + Social Media + Copyright
```

---

## 5. Detailed Section Breakdown (For AI Generation)

### 5.1 Navbar

- **Logo**: Logo SMK & Crest Paskibra Admaja di sebelah kiri.
- **Navigation Links**: Beranda, Tentang Kami, Pengurus, Prestasi, FAQ, Kontak.
- **CTA Button**: Button Merah `Gabung Sekarang`.

### 5.2 Hero Section

- **Left Column**:
  - Badge / Eyebrow text: `Ekstrakurikuler Paskibra`
  - Heading (H1): `Adika Mahol Jaya`
  - Subtitle: Deskripsi singkat visi dan semangat kedisiplinan Paskibra SMKN 4 Kendal.
  - Action Buttons: `Daftar Sekarang` (Primary Red Button) & Link sekunder.
- **Right Column**:
  - Card/Container Putih bersih menampilkan Logo Resmi Paskibra ADMAJA SMKN 4 Kendal.

### 5.3 Key Metrics / Stats Bar

- Grid 3 kolom horizontal berlatar putih/light border:
  1. `20+` — Anggota Aktif
  2. `10+` — Piala / Prestasi Diraih
  3. `100+` — Alumni Tersebar

### 5.4 About Section ("Mengenal Lebih Dekat Paskibra Admaja SMKN 4 Kendal")

- **Heading**: Centered / Left-aligned H2.
- **Description**: Narasi sejarah, filosofi, dan peran Paskibra di lingkungan sekolah.
- **3 Value Cards Grid**:
  - Card 1: Kedisiplinan & Kepemimpinan (Icon + Short Text)
  - Card 2: Perbarisan & Ketangkasan (Icon + Short Text)
  - Card 3: Kekeluargaan & Solidaritas (Icon + Short Text)
- **Callout Banner Yellow Accent**: Banner kecil dengan highlight kuning emas di bawah grid untuk informasi penting/jadwal latihan.

### 5.5 Pembina & Dewan Pengurus Korps

- **Pembina Header**: Card khusus dengan Foto Pembina, Nama, NIP/Jabatan.
- **Struktur Pengurus Grid**:
  - Kartu Jabatan (Ketua, Wakil, Sekretaris, Bendahara) dengan tag badge khusus (misal: "Ketua umum").
- **Foto Dokumentasi Latihan/Kegiatan**: Grid 3 gambar aksi pengurus/anggota saat bertugas.

### 5.6 Quote & Core Values Section (Dark Theme)

- **Background**: Dark Navy (`#0F172A`) dengan Banner Merah Utama di Tengah.
- **Quote Banner**:
  > _"Prajurit Tanpa Senjata yang Tanggul, Berprestasi Tinggi, dan Menjadi Teladan Generasi Muda Berkarakter Kebangsaan."_
- **4 Columns Grid (Bawah Quote)**:
  1. Patriotisme & Nasionalisme
  2. Jiwa Korsa & Solidaritas
  3. Mentorship & Character Building
  4. Sikap Tangguh & Pantang Serah

### 5.7 Galeri Kegiatan & Jejak Prestasi

- **Filter/Header**: "Galeri Kegiatan & Jejak Prestasi" dengan link "Lihat Semua".
- **4 Grid Items**:
  - Item 1: Pengibaran Bendera Merah Putih HUT RI (Badge: Highlights)
  - Item 2: Juara Lomba LKBB (Badge: Prestasi)
  - Item 3: Latihan Rutin & Pemantapan Fisik (Badge: Kegiatan)
  - Item 4: Pelantikan Anggota Baru (Badge: Tradisi)

### 5.8 FAQ Section (Accordion)

- **Header**: "Pertanyaan yang Sering Diajukan (FAQ)"
- **Accordion Items**:
  1. _Apakah ada syarat khusus untuk bergabung dengan Paskibra ADMAJA?_
  2. _Kapan jadwal latihan rutin Paskibra dilaksanakan?_
  3. _Apakah ekstrakurikuler ini mengganggu kegiatan akademik sekolah?_

### 5.9 CTA Registration Card

- **Background**: Dark Navy Card dengan Logo watermark transparan di kanan.
- **Heading**: "Siap Menjadi Bagian dari Keluarga Besar Paskibra ADMAJA?"
- **Button**: `Buka Formulir Pendaftaran` (Primary Red).

### 5.10 Location & Contact

- **Grid 2 Kolom**:
  - **Left**: Alamat SMKN 4 Kendal, No. Telepon, Email Resmi, Jam Operasional Latihan.
  - **Right**: Embed Interactive Map (Google Maps / OpenStreetMap Kendal region).

### 5.11 Footer

- Dark Footer (`#0F172A`).
- Logo & deskripsi singkat.
- Quick Links navigation.
- Social media icons (Instagram, TikTok, YouTube).
- Copyright text: `© 2026 Admaja. All Rights Reserved.`

---

---

_Dokumen ini dibuat secara otomatis dari analisis visual file "LP - With Yellow Color.jpg". Jika ada detail tambahan seperti tautan pendaftaran/API endpoint, Anda dapat memperbaruinya di bagian terkait._
