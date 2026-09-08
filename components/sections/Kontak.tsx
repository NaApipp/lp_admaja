export default function Kontak() {
  return (
    <section
      id="kontak"
      aria-label="Informasi Sekretariat dan Lokasi Kampus Paskibra ADMAJA"
      className="py-14 sm:py-16 bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Col 1: Hubungi Kami (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 shadow-xs flex flex-col justify-between">
            <div>
              {/* Header */}
              <span className="text-[#B91C1C] font-bold font-plus-jakarta-sans text-xs tracking-wider uppercase mb-1.5 inline-block">
                SEKRETARIAT RESMI
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-plus-jakarta-sans text-[#0F172A] mb-2">
                Hubungi Kami
              </h3>
              <p className="text-xs sm:text-sm font-plus-jakarta-sans text-slate-500 leading-relaxed mb-7">
                Silakan hubungi kami untuk informasi seputar pendaftaran siswa,
                undangan upacara, atau studi banding paskibraka antar-sekolah.
              </p>

              {/* Items List */}
              <div className="space-y-5">
                {/* Alamat */}
                <div className="flex items-start gap-3.5">
                  {/* <div className="w-10 h-10 rounded-xl bg-red-50 text-[#B91C1C] flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5" />
                  </div> */}
                  <div className="space-y-1">
                    <p className="text-xs font-bold font-plus-jakarta-sans text-[#0F172A] uppercase">
                      ALAMAT SEKOLAH:
                    </p>
                    <p className="text-xs sm:text-sm font-plus-jakarta-sans text-slate-600 leading-relaxed">
                      Jl. Soekarno-Hatta, Brangsong Utara, Brangsong, Kec.
                      Brangsong, Kabupaten Kendal, Jawa Tengah 51318
                    </p>
                  </div>
                </div>

              

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  {/* <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div> */}
                  <div className="space-y-1">
                    <p className="text-xs font-bold font-plus-jakarta-sans text-[#0F172A] uppercase">
                      EMAIL RESMI:
                    </p>
                    <a
                      href="mailto:paskibraskanifo@gmail.com"
                      className="block text-xs sm:text-sm font-plus-jakarta-sans text-slate-600 hover:text-[#B91C1C] transition-colors"
                    >
                      paskibraskanifo@gmail.com
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5">
                  {/* <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </div> */}
                  <div className="space-y-1">
                    <p className="text-xs font-bold font-plus-jakarta-sans text-[#0F172A] uppercase">
                      INSTAGRAM KEGIATAN:
                    </p>
                    <a
                      href="https://instagram.com/paskibraskanifo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs sm:text-sm font-bold font-plus-jakarta-sans text-[#B91C1C] hover:underline"
                    >
                      @paskibraskanifo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Lokasi Kampus & Map (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 shadow-xs flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <span className="text-xs font-bold font-plus-jakarta-sans text-slate-400 tracking-wider uppercase">
                    PUSAT LATIHAN
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-plus-jakarta-sans text-[#0F172A] mt-0.5">
                    Lokasi SMK Negeri 4 Kendal
                  </h3>
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-medium font-plus-jakarta-sans text-xs w-fit">
                  Jalur Pantura Brangsong
                </span>
              </div>

              {/* Map Embed Container */}
              <div className="relative w-full h-[320px] sm:h-[360px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5298226288755!2d110.2303467!3d-6.9466537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705d9c2a3b439b%3A0xcd3827ba60db3c5!2sSMK%20Negeri%204%20Kendal!5e0!3m2!1sid!2sid!4v1788608529800!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
