import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { name: "Tentang Paskibra Admaja", href: "/beranda#tentang" },
    { name: "Susunan Pembina & Pengurus", href: "/beranda#pengurus" },
    { name: "Galeri Dokumentasi", href: "/beranda#galeri" },
    { name: "Pertanyaan Umum (FAQ)", href: "/beranda#faq" },
  ];

  return (
    <footer className="bg-[#0B1120] text-white border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand, Desc, Motto (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-v2.png"
                alt="Logo ADMAJA"
                width={40}
                height={40}
                className="w-10 h-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold font-oswald text-white tracking-wider leading-tight">
                  Adika Mahdi Jaya
                </span>
                <span className="text-xs font-plus-jakarta-sans text-[#94A3B8]">
                  Paskibra SMK Negeri 4 Kendal
                </span>
              </div>
            </div>

            <p className="text-sm font-plus-jakarta-sans text-[#94A3B8] leading-relaxed max-w-sm">
              Organisasi kepemudaan ekstrakurikuler yang berkomitmen mencetak
              siswa-siswi berwatak ksatria, bermental baja, dan berjiwa merah
              putih yang siap mengharumkan almamater.
            </p>

            <div>
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FEF73D] border border-[#FBBF24]
              text-[#020617] font-semibold font-plus-jakarta-sans text-xs shadow-xs"
              >
                {/* <Star className="w-3.5 h-3.5 fill-slate-950 text-slate-950" /> */}
                <span>&quot;SEMBOYAN&quot;</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigasi Utama (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold font-plus-jakarta-sans text-white tracking-wider uppercase">
              NAVIGASI UTAMA
            </h4>
            <ul className="space-y-3 text-sm font-plus-jakarta-sans text-[#94A3B8]">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Informasi Sekolah (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold font-plus-jakarta-sans text-white tracking-wider uppercase">
              INFORMASI SEKOLAH
            </h4>
            <div className="space-y-2 text-sm font-plus-jakarta-sans text-[#94A3B8] leading-relaxed">
              <p className="text-slate-300 font-medium">SMK Negeri 4 Kendal</p>
              <p>
                Jl. Soekarno-Hatta, Brangsong Utara, Brangsong, Kec. Brangsong,
                Kabupaten Kendal, Jawa Tengah 51318
              </p>
              <p>
                Website Sekolah:{" "}
                <a
                  href="https://smkn4kendal.sch.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFD700] hover:text-yellow-300 transition-colors font-medium"
                >
                  smkn4kendal.sch.id
                </a>
              </p>
            </div>

            <div className="pt-2 space-y-2.5">
              <p className="text-xs font-plus-jakarta-sans text-[#94A3B8]">
                Ikuti Media Sosial Kami:
              </p>
              <div className="flex items-center gap-2">
                {/* Instagram */}
                <a
                  href="https://instagram.com/paskibraskanifo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Paskibra ADMAJA"
                  className="w-8 h-8 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-white flex items-center justify-center text-xs font-bold transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </a>
                {/* Tiktok */}
                <a
                  href="https://www.tiktok.com/@paskibra.skanifo?_r=1&_t=ZS-9B2lMKqolk5"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tiktok Paskibra ADMAJA"
                  className="w-8 h-8 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-white flex items-center justify-center text-xs font-bold transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-tiktok"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/80 mt-12 mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-plus-jakarta-sans text-slate-500 text-center sm:text-left">
          <p>© 2026 Admaja. All rights reserved.</p>
          <p>Dibina di bawah naungan Kesiswaan SMKN 4 Kendal</p>
        </div>
      </div>
    </footer>
  );
}
