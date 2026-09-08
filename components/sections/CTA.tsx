import Image from "next/image";
import { Send } from "lucide-react";

export default function CTA() {
  return (
    <section
      aria-label="Pendaftaran Paskibra ADMAJA"
      className="pt-16 pb-8 sm:pt-20 bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Dark CTA Banner */}
        <div className="relative bg-[#0F172A] rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden shadow-xl">
          {/* Watermark Crest Background */}
          <div className="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden md:block">
            <Image
              src="/logo-v2.png"
              alt="Watermark Crest ADMAJA"
              width={340}
              height={340}
              className="w-64 sm:w-72 lg:w-80 h-auto opacity-20 object-contain"
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            {/* Badge */}
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#B91C1C] text-white font-bold font-plus-jakarta-sans text-xs tracking-wider uppercase mb-5">
              PENDAFTARAN TERBUKA • ANGKATAN XIII
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-plus-jakarta-sans text-white tracking-tight leading-[1.2] mb-4">
              Siap Menjadi Bagian dari Keluarga Besar Paskibra ADMAJA?
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base font-plus-jakarta-sans text-slate-300 leading-relaxed mb-8 max-w-xl">
              Jadilah pribadi yang lebih tangguh, memiliki banyak sahabat
              berjiwa patriot, dan buat orang tua bangga melihatmu berdiri tegap
              mengibarkan Sang Saka Merah Putih.
            </p>

            {/* CTA Button */}
            <div>
              <a
                href="https://instagram.com/paskibraskanifo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold font-plus-jakarta-sans text-sm sm:text-base shadow-lg shadow-red-900/30 active:scale-[0.98] transition-all"
              >
                <Send className="w-4 h-4 shrink-0" />
                <span>Hubungi Kami via DM Instagram</span>
              </a>
            </div>

            <p className="text-xs font-medium font-plus-jakarta-sans text-slate-400 mt-6">
              Gratis • Dibina langsung Pelatih Paskibra yang Berpengalaman
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
