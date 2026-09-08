import Image from "next/image";
import Link from "next/link";
import { SquareCheck, CheckCircle2 } from "lucide-react";

export default function Hero() {
  // Schema.org JSON-LD Structured Data for search engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Paskibra ADMAJA SMKN 4 Kendal",
    alternateName: ["Adika Mahdi Jaya", "ADMAJA", "Paskibraka SMKN 4 Kendal"],
    description:
      "Ekstrakurikuler Paskibra ADMAJA (Adika Mahdi Jaya) SMKN 4 Kendal melatih kepemimpinan, baris-berbaris, dan cinta tanah air sejak 2012.",
    foundingDate: "2012",
    parentOrganization: {
      "@type": "EducationalOrganization",
      name: "SMK Negeri 4 Kendal",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Soekarno-Hatta, Brangsong Utara, Brangsong",
        addressLocality: "Kendal",
        addressRegion: "Jawa Tengah",
        postalCode: "51318",
        addressCountry: "ID",
      },
    },
    logo: "https://smkn4kendal.sch.id/logo-v2.png",
  };

  return (
    <section
      id="beranda"
      aria-label="Hero Section Ekstrakurikuler Paskibra ADMAJA SMKN 4 Kendal"
      className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20"
    >
      {/* Search Engine Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <header>
              <span className="sr-only">
                Profil Resmi Paskibra SMK Negeri 4 Kendal
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold font-plus-jakarta-sans text-[#0F172A] tracking-tight leading-[1.15]">
                Ekstrakurikuler Paskibra <br className="hidden sm:inline" />
                Adika Mahdi Jaya
              </h1>
            </header>

            <p className="mt-6 text-base sm:text-lg font-plus-jakarta-sans text-slate-600 leading-relaxed max-w-xl">
              Selamat datang di laman resmi Paskibra ADMAJA (Adika Mahdi Jaya)
              SMKN 4 Kendal. Kawah candradimuka bagi siswa-siswi berdedikasi
              tinggi untuk mengasah jiwa kepemimpinan, kekompakan
              baris-berbaris, dan rasa cinta tanah air.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="#tentang"
                title="Pelajari lebih lanjut tentang Paskibra ADMAJA SMKN 4 Kendal"
                aria-label="Buka informasi tentang Paskibra ADMAJA SMKN 4 Kendal"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold font-plus-jakarta-sans text-sm sm:text-base shadow-lg shadow-red-700/20 active:scale-[0.98] transition-all"
              >
                <span>Tentang Admaja</span>
              </Link>
            </div>

            {/* Features / Trust Badges */}
            <div className="mt-10 pt-6 border-t border-slate-200/80 max-w-xl">
              <ul className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium font-plus-jakarta-sans text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    className="w-4 h-4 text-emerald-600 shrink-0"
                    aria-hidden="true"
                  />
                  <span>Terakreditasi Sekolah</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    className="w-4 h-4 text-emerald-600 shrink-0"
                    aria-hidden="true"
                  />
                  <span>Pembinaan Terstruktur</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Official Logo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <article
              aria-label="Informasi Korps Paskibra ADMAJA"
              className="bg-white rounded-3xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-8 sm:p-10 flex flex-col justify-between items-center text-center w-full max-w-md min-h-[480px]"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between w-full text-xs font-medium font-plus-jakarta-sans text-slate-400 pb-4">
                <span>Lambang Resmi Organisasi</span>
                <span>Adika Mahdi Jaya</span>
              </div>

              {/* Logo Center */}
              <figure className="my-auto py-8 flex items-center justify-center">
                <Image
                  src="/logo-v2.png"
                  alt="Lambang Resmi Ekstrakurikuler Korps Paskibra ADMAJA SMKN 4 Kendal - Adika Mahdi Jaya"
                  title="Lambang Resmi Korps Paskibra ADMAJA"
                  width={220}
                  height={220}
                  className="w-44 sm:w-52 h-auto object-contain drop-shadow-sm"
                  priority
                />
              </figure>

              {/* Card Footer */}
              <div className="space-y-2 pt-2">
                <h2 className="text-xl sm:text-2xl font-bold font-oswald text-[#0F172A] tracking-wider uppercase">
                  PASKIBRA ADMAJA
                </h2>
                <p className="text-xs sm:text-sm font-plus-jakarta-sans text-slate-500 leading-relaxed max-w-xs mx-auto">
                  Adika Mahdi Jaya SMK Negeri 4 Kendal • Berdiri sejak 2011
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
