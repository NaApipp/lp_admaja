import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Count from "@/components/sections/Count";
import Tentang from "@/components/sections/Tentang";
import Struktur from "@/components/sections/Struktur";
import VisiMisi from "@/components/sections/VisiMisi";
import Content from "@/components/sections/Content";
import Faq from "@/components/sections/Faq";
import CTA from "@/components/sections/CTA";
import Kontak from "@/components/sections/Kontak";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://admajaskanifo.org"),
  title: "Paskibra ADMAJA SMKN 4 Kendal | Ekstrakurikuler Adika Mahdi Jaya",
  description:
    "Website resmi Paskibra ADMAJA (Adika Mahdi Jaya) SMKN 4 Kendal. Wadah pembinaan karakter, kedisiplinan, kepemimpinan, dan baris-berbaris di SMK Negeri 4 Kendal.",
  keywords: [
    "Paskibra ADMAJA",
    "Adika Mahdi Jaya",
    "Paskibra SMKN 4 Kendal",
    "Paskibra Skanifo",
    "SMK Negeri 4 Kendal",
    "Paskibraka Kendal",
    "Ekstrakurikuler Paskibra Kendal",
    "PBB Paskibra SMKN 4 Kendal",
    "Paskibra Brangsong",
    "LBB Kendal",
    "Paskibra Jawa Tengah",
  ],
  authors: [{ name: "Paskibra ADMAJA SMKN 4 Kendal", url: "https://admajaskanifo.org" }],
  creator: "Paskibra ADMAJA SMKN 4 Kendal",
  publisher: "SMK Negeri 4 Kendal",
  category: "Education",
  alternates: {
    canonical: "https://admajaskanifo.org/beranda",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://admajaskanifo.org",
    title: "Paskibra ADMAJA SMKN 4 Kendal | Ekstrakurikuler Adika Mahdi Jaya",
    description:
      "Website resmi Paskibra ADMAJA (Adika Mahdi Jaya) SMKN 4 Kendal. Wadah pembinaan karakter, kedisiplinan, kepemimpinan, dan baris-berbaris di SMK Negeri 4 Kendal.",
    siteName: "Paskibra ADMAJA SMKN 4 Kendal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Logo Resmi Paskibra ADMAJA SMKN 4 Kendal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paskibra ADMAJA SMKN 4 Kendal | Adika Mahdi Jaya",
    description:
      "Website resmi Paskibra ADMAJA (Adika Mahdi Jaya) SMKN 4 Kendal. Membentuk siswa-siswi berwatak ksatria dan berjiwa Merah Putih.",
    images: ["/og-image.png"],
  },
};

export default function Beranda() {
  return (
    <>
      <Navbar />

      <main className="flex-1 pt-16">
        <Hero />
        <Count />
        <Tentang />
        <Struktur />
        {/* <VisiMisi /> */}
        <Content />
        <Faq />
        <CTA />
        <Kontak />
      </main>
      <Footer />
    </>
  );
}
