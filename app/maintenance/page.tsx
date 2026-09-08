"use client";

import Link from "next/link";
import { ArrowLeft, Wrench, Clock, ShieldAlert, RefreshCw } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Maintenance() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* <Navbar /> */}

      <main className="flex-1 flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full text-center">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-[#B91C1C] text-xs font-bold font-plus-jakarta-sans tracking-wider uppercase mb-5">
            SYSTEM MAINTENANCE
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold font-plus-jakarta-sans text-[#0F172A] tracking-tight leading-tight mb-4">
            Halaman Sedang Dalam Pemeliharaan
          </h1>

          {/* Description */}
          <p className="text-slate-600 font-plus-jakarta-sans text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            Kami sedang melakukan peningkatan performa dan pembaruan sistem untuk menyajikan layanan yang lebih optimal bagi Paskibra ADMAJA SMKN 4 Kendal.
          </p>

          {/* Status Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left max-w-md mx-auto">
            <div className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-center gap-3 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold font-plus-jakarta-sans text-slate-400 uppercase tracking-wider">
                  ESTIMASI
                </p>
                <p className="text-sm font-bold font-plus-jakarta-sans text-slate-800">
                  Segera Selesai
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-center gap-3 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-red-50 text-[#B91C1C] flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold font-plus-jakarta-sans text-slate-400 uppercase tracking-wider">
                  STATUS SISTEM
                </p>
                <p className="text-sm font-bold font-plus-jakarta-sans text-slate-800">
                  Pembaruan Rutin
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold font-plus-jakarta-sans text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </Link>

            <button
              onClick={() => typeof window !== "undefined" && window.location.reload()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold font-plus-jakarta-sans text-sm border border-slate-200 transition-all shadow-xs"
            >
              <RefreshCw className="w-4 h-4 text-slate-500" />
              <span>Coba Muat Ulang</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}
