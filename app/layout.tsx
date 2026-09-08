import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { oswald, plusJakartaSans } from "@/lib/fonts";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  publisher: "Paskibra ADMAJA SMKN 4 Kendal",
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
        url: "/logo-v2.png",
        width: 800,
        height: 800,
        alt: "Logo Resmi Paskibra ADMAJA SMKN 4 Kendal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paskibra ADMAJA SMKN 4 Kendal | Adika Mahdi Jaya",
    description:
      "Website resmi Paskibra ADMAJA (Adika Mahdi Jaya) SMKN 4 Kendal. Membentuk siswa-siswi berwatak ksatria dan berjiwa Merah Putih.",
    images: ["/logo-v2.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
