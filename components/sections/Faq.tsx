"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      num: "01.",
      question:
        "Bagaimana cara mendaftar ekstrakurikuler Paskibra ADMAJA SMKN 4 Kendal?",
      answer: (
        <>
          Pendaftaran terbuka bagi seluruh siswa/siswi aktif SMKN 4 Kendal
          (khususnya kelas X dan XI).
          <strong className="font-bold text-[#B91C1C]">Hubungi Kami</strong> di
          halaman situs web ini atau menghubungi pengurus Paskibra ADMAJA saat
          masa Orientasi & Demonstrasi Ekstrakurikuler di sekolah.
        </>
      ),
    },
    {
      num: "02.",
      question:
        "Bagaimana jadwal latihan rutin? Apakah mengganggu jam pelajaran?",
      answer: (
        <>
          Latihan rutin dilaksanakan di luar jam Kegiatan Belajar Mengajar
          (KBM), umumnya pada hari selas di sore hari sepulang sekolah pukul
          15:00 - 17:00 Wib, atau akhir pekan menjelang upacara resmi dan
          kompetisi. Paskibra ADMAJA sangat menjunjung tinggi prestasi akademik,
          sehingga seluruh anggota wajib memprioritaskan tugas dan nilai
          sekolah.
        </>
      ),
    },
    {
      num: "03.",
      question:
        "Apa saja kegiatan utama yang diikuti oleh anggota Paskibra ADMAJA?",
      answer: (
        <>
          Anggota akan mendapat pelatihan Peraturan Baris-Berbaris (PBB) Baku
          &amp; Variasi Formasi, bertugas sebagai Pengibar Bendera Upacara di
          SMKN 4 Kendal dan tingkat kecamatan/kabupaten, berpartisipasi dalam
          Lomba Baris-Berbaris (LBB) antar sekolah, serta mengikuti Diklat
          Kepemimpinan dan Kepaskibraan.
        </>
      ),
    },
    {
      num: "04.",
      question: "Apakah ada biaya pendaftaran atau iuran untuk bergabung?",
      answer: (
        <>
          Pendaftaran ekstrakurikuler Paskibra ADMAJA SMKN 4 Kendal sepenuhnya{" "}
          <strong className="font-bold text-[#0F172A]">GRATIS</strong> tanpa
          dipungut biaya pendaftaran awal. Seluruh kegiatan pembinaan didampingi
          langsung oleh Pelatih Paskibra yang
          berpengalaman.
        </>
      ),
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-label="Pertanyaan yang Sering Diajukan"
      className="py-16 sm:py-20 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-[#B91C1C] font-bold font-plus-jakarta-sans text-xs tracking-wider uppercase border border-red-100 mb-4">
            PUSAT INFORMASI
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold font-plus-jakarta-sans text-[#0F172A] tracking-tight leading-[1.2] mb-3">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-sm sm:text-base font-plus-jakarta-sans text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Temukan jawaban lengkap seputar pendaftaran, kriteria, jadwal
            latihan, dan manfaat menjadi bagian dari Keluarga Besar Paskibra
            ADMAJA SMKN 4 Kendal.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.num}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-2 border-[#B91C1C] bg-white shadow-md p-6 sm:p-7"
                    : "border border-slate-200/80 bg-[#F8FAFC]/70 hover:bg-[#F8FAFC] hover:border-slate-300 p-5 sm:p-6"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center">
                    <span
                      className={`font-extrabold text-base sm:text-lg font-plus-jakarta-sans shrink-0 mr-3.5 transition-colors ${
                        isOpen
                          ? "text-[#B91C1C]"
                          : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      {faq.num}
                    </span>
                    <h3
                      className={`text-base sm:text-lg font-bold font-plus-jakarta-sans leading-snug transition-colors ${
                        isOpen
                          ? "text-[#0F172A]"
                          : "text-slate-800 group-hover:text-[#0F172A]"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isOpen
                        ? "bg-red-50 text-[#B91C1C] rotate-180"
                        : "bg-slate-100 text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Answer Content */}
                {isOpen && (
                  <div className="pt-4 mt-4 border-t border-slate-100 text-sm sm:text-base font-plus-jakarta-sans text-slate-600 leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Callout Box */}
        <div className="max-w-4xl mx-auto mt-10 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div>
              <h4 className="text-base font-bold font-plus-jakarta-sans text-[#0F172A]">
                Punya Pertanyaan Lain?
              </h4>
              <p className="text-xs sm:text-sm font-plus-jakarta-sans text-slate-500">
                Tim pengurus Paskibra ADMAJA siap membantu memberikan informasi
                lebih lanjut.
              </p>
            </div>
          </div>

          <a
            href="#kontak"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold font-plus-jakarta-sans text-xs sm:text-sm transition-all shadow-xs"
          >
            Hubungi Pengurus
          </a>
        </div>
      </div>
    </section>
  );
}
