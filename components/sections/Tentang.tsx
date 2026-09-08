import { Shield, BookOpen, Flame, History } from "lucide-react";

export default function Tentang() {
  const pancaBakti = [
    {
      id: "1",
      title: "BERTAQWA KEPADA TUHAN YANG MAHA ESA.",
    },
    {
      id: "2",
      title:
        "TAK TERHALANG PANAS TERIK TAK TERHENTI HUJAN BADAI TUK MENGIBARKAN SANG MERAH PUTIH.",
    },
    {
      id: "3",
      title:
        "SELALU MENJUNJUNG TINGGI LOYALITAS KEDISIPLINAN DAN KEBERSAMAAN SERTA BERANI MEMBELA KEBENARAN DAN KEADILAN.",
    },
    {
      id: "4",
      title:
        "SELALU MENJAGA, MEMBANGUN DAN MENUMBUHKAN RASA PATRIOTISME DAN CINTA TANAH AIR.",
    },
    {
      id: "5",
      title:
        "ADIKA MAHDI JAYA ADALAH NAFASKU, PANCASILA ADALAH DARAHKU, DAN MERAH PUTIH ADALAH JIWAKU.",
    },
  ];

  return (
    <section
      id="tentang"
      aria-label="Tentang Paskibra ADMAJA SMKN 4 Kendal"
      className="py-16 sm:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Sejarah Organisasi */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-50 text-[#B91C1C] font-bold font-plus-jakarta-sans text-xs tracking-wider uppercase border border-red-100">
              SEJARAH ORGANISASI
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-plus-jakarta-sans text-[#0F172A] tracking-tight leading-[1.2] mb-8">
            Sejarah Terbentuknya Adika Mahdi Jaya
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-base font-plus-jakarta-sans text-slate-600 leading-relaxed bg-slate-50/60 p-6 sm:p-8 rounded-2xl border border-slate-200/80">
              <div className="space-y-4">
                <p>
                  Pada tahun <strong className="text-slate-900 font-semibold">2010</strong>, <strong className="text-slate-900 font-semibold">Widi Widayat</strong> — senior Paskibra SMKN 4 Kendal (Danton/Pin Up Paskibra Kab. Kendal 2009, Ketua OSIS 2010/2011 &amp; Komandan Paskibra Kab. Kendal 2011) — mengusulkan pembentukan Batalyon Paskibra di sekolah dengan <strong className="text-slate-900 font-semibold">Burung Phoenix</strong> sebagai lambang dasarnya.
                </p>
                <p>
                  Perjuangan ini dilanjutkan oleh <strong className="text-slate-900 font-semibold">Dimas Ageng Nugroho</strong> bersama Purna Paskibra Kec. Brangsong, hingga dua juniornya, <strong className="text-slate-900 font-semibold">Yulanda Hermawan</strong> dan <strong className="text-slate-900 font-semibold">Harun Al-Faruq</strong>, mengusulkan nama <span className="italic font-medium text-slate-800">&quot;Samawi Adika Mahdi Jaya&quot;</span>.
                </p>
                <p>
                  Setelah didiskusikan bersama para senior, nama tersebut disederhanakan menjadi <strong className="text-[#B91C1C] font-bold">&quot;Adika Mahdi Jaya&quot;</strong>.
                </p>
              </div>
            </div>

            {/* Right Card: Meaning & Philosophy Callout */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0F172A] to-slate-900 text-white p-7 sm:p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-md">
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 font-bold text-xs">
                    Lambang: Burung Phoenix
                  </span>
                  <BookOpen className="w-5 h-5 text-slate-400" />
                </div>

                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  ARTI &amp; MAKNA NAMA
                </h3>

                <blockquote className="text-xl sm:text-2xl font-bold font-plus-jakarta-sans text-amber-300 leading-snug mb-4">
                  &quot;Pemimpin yang terbaik dan selalu di depan.&quot;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-300 space-y-1">
                <p>
                  <strong className="text-white">Sumber nama:</strong> Disusun oleh M. Khasanudin &amp; Dwi Benny Kisworo (KBBI &amp; Kamus Jawa).
                </p>
                <p>
                  <strong className="text-white">Dirangkai oleh:</strong> Bpk. Ryndarto Widyodo Trysnanegara.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Panca Bakti Adika Mahdi Jaya Grid */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#B91C1C] flex items-center justify-center border border-red-100">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-plus-jakarta-sans text-[#0F172A]">
                Panca Bakti Adika Mahdi Jaya
              </h3>
              <p className="text-sm font-plus-jakarta-sans text-slate-500">
                5 Prinsip Kehormatan &amp; Pedoman Utama Anggota Paskibra ADMAJA
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pancaBakti.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-red-50 text-[#B91C1C] font-extrabold font-plus-jakarta-sans text-sm flex items-center justify-center border border-red-100">
                      0{item.id}
                    </span>
                    <span className="text-[10px] font-bold font-plus-jakarta-sans tracking-widest text-slate-400 uppercase">
                      PANGKAL {item.id}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-bold font-plus-jakarta-sans text-[#0F172A] leading-relaxed">
                    {item.title}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold font-plus-jakarta-sans text-amber-600">
                    ADMAJA SMKN 4 KENDAL
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner / Ikrar Card */}
        <div className="relative bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs overflow-hidden">
          {/* Top-Right Yellow Accent Bar */}
          <div className="absolute top-0 right-0 w-32 sm:w-48 h-1 bg-[#FFD700]" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2.5 max-w-4xl">
              <div className="flex items-center gap-2 text-xs font-bold font-plus-jakarta-sans uppercase tracking-wider">
                <span className="text-[#B91C1C]">IKRAR PASKIBRA ADMAJA</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                <span className="text-amber-600">KODE KEHORMATAN</span>
              </div>
              <p className="text-base sm:text-lg font-semibold font-plus-jakarta-sans text-[#0F172A] leading-relaxed">
                &quot;Bukan sekadar mengibarkan bendera, melainkan menjaga
                martabat Merah Putih di setiap langkah dan hembusan nafas
                perjuangan.&quot;
              </p>
            </div>

            <div className="shrink-0 self-start lg:self-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#FFD700] border border-amber-400 text-slate-950 font-bold font-plus-jakarta-sans text-xs shadow-xs">
                <Shield className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                <span>Keluarga Besar ADMAJA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
