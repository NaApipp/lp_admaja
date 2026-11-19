"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, User, Award, Crown } from "lucide-react";
import komsat from "@/lib/komsat";

export default function CarouselKomsat() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Periksa apakah scrollbar bisa digeser ke kiri/kanan
  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  // Fungsi scroll kiri/kanan
  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 320;
    const scrollAmount =
      direction === "left" ? -cardWidth * 1.5 : cardWidth * 1.5;

    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative w-full max-w-7xl mx-auto py-4 mt-9"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start sm:items-center gap-3.5 mb-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold font-plus-jakarta-sans text-[#0F172A] tracking-tight">
            Jejak Kepemimpinan Komandan Satuan
          </h3>
          <p className="text-sm sm:text-base font-plus-jakarta-sans text-slate-600 mt-1 leading-relaxed">
            Estafet kepemimpinan terbaik yang mengemban amanah sebagai Komandan Satuan Paskibra ADMAJA dari masa ke masa.
          </p>
        </div>
      </div>
      {/* Tombol Navigasi Kiri */}
      <button
        type="button"
        onClick={() => handleScroll("left")}
        disabled={!canScrollLeft}
        aria-label="Geser ke kiri"
        className={`absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-[#B91C1C] hover:border-red-200 hover:shadow-lg transition-all active:scale-95 disabled:opacity-0 disabled:pointer-events-none ${
          canScrollLeft && isHovered ? "opacity-100" : "sm:opacity-80"
        }`}
      >
        <ChevronLeft className="w-6 h-6 stroke-[2]" />
      </button>

      {/* Container Carousel Horizontal */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-5 sm:gap-6 pb-6 pt-3 px-4 sm:px-2 scroll-smooth select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {komsat.map((item) => {
          const isLatest = item.angkatan === 14;
          const imageSrc = item.image
            ? item.image.startsWith("/")
              ? item.image
              : `/${item.image}`
            : null;

          return (
            <div
              key={item.id}
              className={`group/card snap-start shrink-0 w-72 sm:w-80 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl bg-white border ${
                isLatest
                  ? "border-red-300 shadow-lg shadow-red-500/10 ring-2 ring-red-500/20"
                  : "border-slate-200/80 shadow-sm hover:border-slate-300"
              }`}
            >
              {/* Area Gambar yang Besar & Tajam */}
              <div className="relative w-full h-72 sm:h-80 bg-slate-950 overflow-hidden flex items-center justify-center">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={item.nama}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/card:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallback = parent.querySelector(
                          ".fallback-container",
                        );
                        if (fallback) fallback.classList.remove("hidden");
                      }
                    }}
                  />
                ) : null}

                {/* Gradient Shadow lembut */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

                {/* Fallback Placeholder jika belum ada foto */}
                <div
                  className={`fallback-container absolute inset-0 bg-gradient-to-b from-slate-100 to-slate-200 flex flex-col items-center justify-center text-slate-400 ${
                    imageSrc ? "hidden" : "flex"
                  }`}
                >
                  <div className="w-20 h-20 rounded-full bg-white/80 shadow-inner flex items-center justify-center mb-2">
                    <User className="w-10 h-10 stroke-[1.5] text-slate-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    Foto Belum Tersedia
                  </span>
                </div>

                {/* Floating Badges di atas gambar */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between gap-2 z-10">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase backdrop-blur-md shadow-md ${
                      isLatest
                        ? "bg-[#B91C1C] text-white border border-red-400/30"
                        : "bg-white/90 text-slate-800 border border-white/60"
                    }`}
                  >
                    {isLatest ? (
                      <>
                        <Crown className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                        <span>Komsat Aktif</span>
                      </>
                    ) : (
                      <>
                        <Award className="w-3.5 h-3.5 text-slate-600" />
                        <span>Komsat Ke-{item.angkatan}</span>
                      </>
                    )}
                  </span>

                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold backdrop-blur-md bg-black/40 text-white border border-white/20">
                    Angkatan {item.angkatan}
                  </span>
                </div>
              </div>

              {/* Informasi Nama & Detail di Bawah Foto */}
              <div className="p-5 sm:p-6 bg-white flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B91C1C]">
                    Komandan Satuan
                  </span>
                  <h3
                    className="font-extrabold text-slate-900 text-lg leading-snug line-clamp-2 min-h-[2.8rem] flex items-center"
                    title={item.nama}
                  >
                    {item.nama}
                  </h3>
                </div>

                {/* Footer Card */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Masa Bakti</span>
                  <span className="font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md">
                    Gen {item.angkatan}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tombol Navigasi Kanan */}
      <button
        type="button"
        onClick={() => handleScroll("right")}
        disabled={!canScrollRight}
        aria-label="Geser ke kanan"
        className={`absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-[#B91C1C] hover:border-red-200 hover:shadow-lg transition-all active:scale-95 disabled:opacity-0 disabled:pointer-events-none ${
          canScrollRight && isHovered ? "opacity-100" : "sm:opacity-80"
        }`}
      >
        <ChevronRight className="w-6 h-6 stroke-[2]" />
      </button>
    </div>
  );
}
