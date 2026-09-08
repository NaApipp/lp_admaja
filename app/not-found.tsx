"use client";

import { ArrowLeft, CircleGauge } from "lucide-react";
import { useRouter } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-lg w-full">
          

          <h1 className="text-slate-900 text-7xl sm:text-8xl md:text-9xl font-black font-oswald tracking-tight">
            404
          </h1>

          <p className="text-slate-900 text-xl sm:text-2xl font-bold font-plus-jakarta-sans mt-4 mb-2">
            Halaman Tidak Ditemukan
          </p>

          <p className="text-slate-600 font-plus-jakarta-sans text-sm sm:text-base mb-8 leading-relaxed max-w-md mx-auto">
            Maaf, halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau
            belum tersedia saat ini.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto">
            {/* Button Kembali */}
            <button
              onClick={() => router.back()}
              className="w-full sm:w-auto flex-1 h-12 px-6 rounded-xl bg-[#0B1120] hover:bg-[#1E293B] text-white font-semibold font-plus-jakarta-sans text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </button>

            {/* Button Report */}
            <a
              href="mailto:support@admajaskanifo.org"
              className="w-full sm:w-auto flex-1 h-12 px-6 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-semibold font-plus-jakarta-sans text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-xs"
            >
              <CircleGauge className="w-4 h-4 text-slate-700" />
              Laporkan Masalah
            </a>
          </div>
        </div>
      </main>

      {/* Footer spans full width edge-to-edge */}
      <Footer />
    </div>
  );
}
