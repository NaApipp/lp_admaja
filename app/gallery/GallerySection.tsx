"use client";

import { useEffect, useState } from "react";
import { ContentPost, ContentResponse } from "../types/content";
import { CalendarDays, AlertCircle, RefreshCw, X, Image as ImageIcon } from "lucide-react";

// Helper style badge kategori
function getBadgeStyle(label?: string): string {
  const upper = (label || "").toUpperCase();
 // Berita → biru
  if (upper.includes("BERITA")) {
    return "bg-blue-100 text-blue-700 font-bold";
  }

  // Kegiatan → hijau
  if (upper.includes("KEGIATAN")) {
    return "bg-green-100 text-green-700 font-bold";
  }

  // Pengumuman → oranye
  if (upper.includes("PENGUMUMAN")) {
    return "bg-orange-100 text-orange-700 font-bold";
  }

  // Prestasi → kuning
  if (upper.includes("PRESTASI")) {
    return "bg-yellow-100 text-yellow-800 font-bold";
  }

  // Edukasi → ungu
  if (upper.includes("EDUKASI")) {
    return "bg-purple-100 text-purple-700 font-bold";
  }

  // Dokumentasi → cyan
  if (upper.includes("DOKUMENTASI")) {
    return "bg-cyan-100 text-cyan-700 font-bold";
  }

  // Latihan Rutin → merah
  if (upper.includes("LATIHAN RUTIN")) {
    return "bg-red-100 text-red-700 font-bold";
  }

  // Lainnya → abu-abu
  return "bg-gray-100 text-gray-700 font-bold";
}

// Format tanggal Indonesia
function formatDate(dateStr?: string): string {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

// Skeleton Card saat loading
function SkeletonCard() {
  return (
    <div className="rounded-2xl md:rounded-3xl bg-slate-100 animate-pulse overflow-hidden flex flex-col aspect-[4/3] justify-end border border-slate-200/80">
      <div className="p-5 space-y-2.5">
        <div className="h-4 w-20 bg-slate-200 rounded-md" />
        <div className="h-5 w-4/5 bg-slate-200 rounded-md" />
        <div className="h-3 w-full bg-slate-200 rounded-md" />
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [posts, setPosts] = useState<ContentPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<ContentPost | null>(null);

  async function fetchFrom() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/content", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

      const json: ContentResponse = await res.json();
      if (Array.isArray(json.data)) {
        setPosts(json.data);
      } else if (Array.isArray(json)) {
        setPosts(json as unknown as ContentPost[]);
      } else {
        setPosts([]);
      }
    } catch (err: any) {
      setError(err?.message || "Gagal memuat data galeri");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFrom();
  }, []);

  return (
    <section id="gallery" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-[#C8102E] uppercase bg-red-100/70 rounded-full mb-3">
            Dokumentasi & Prestasi
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Galeri Kegiatan ADMAJA
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Menampilkan seluruh dokumentasi kegiatan, latihan rutin, formasi variasi, dan pencapaian taruna-taruni Paskibra SMKN 4 Kendal.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Array.from({ length: 6 }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="max-w-md mx-auto text-center p-8 bg-white border border-red-100 rounded-2xl shadow-sm my-8">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Terjadi Kesalahan</h3>
            <p className="text-sm text-slate-600 mb-6">{error}</p>
            <button
              onClick={fetchFrom}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C8102E] hover:bg-[#A00D24] text-white text-sm font-semibold rounded-xl transition-all shadow-md active:scale-95"
            >
              <RefreshCw className="w-4 h-4" />
              Coba Lagi
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && posts.length === 0 && (
          <div className="max-w-md mx-auto text-center py-16 px-4">
            <ImageIcon className="w-14 h-14 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-800 mb-1">Belum Ada Dokumentasi</h3>
            <p className="text-sm text-slate-500">Data kegiatan galeri belum tersedia saat ini.</p>
          </div>
        )}

        {/* Data Grid */}
        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, index) => {
              const badgeClass = getBadgeStyle(post.label);

              return (
                <div
                  key={post._id || post.content_id || index}
                  onClick={() => setSelectedPost(post)}
                  className="group relative cursor-pointer overflow-hidden bg-slate-900 rounded-2xl md:rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 aspect-[4/3] flex flex-col justify-end"
                >
                  {/* Gambar */}
                  <img
                    src={post.image || "/images/gallery/upacara-bendera.jpg"}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/images/gallery/upacara-bendera.jpg";
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-50% to-transparent transition-opacity duration-300 group-hover:from-black/95" />

                  {/* Konten Card */}
                  <div className="relative z-10 p-5 sm:p-6 flex flex-col items-start justify-end">
                    {/* Badge */}
                    {post.label && (
                      <span
                        className={`text-[10px] sm:text-xs uppercase tracking-wider px-2.5 py-1 rounded font-semibold shadow-sm mb-2 ${badgeClass}`}
                      >
                        {post.label}
                      </span>
                    )}

                    {/* Judul */}
                    <h3 className="font-bold text-white text-base sm:text-lg leading-snug line-clamp-2 mb-1.5 drop-shadow-sm group-hover:text-red-200 transition-colors">
                      {post.title}
                    </h3>

                    {/* Deskripsi Singkat */}
                    {post.content && (
                      <p className="text-xs sm:text-sm text-slate-200/90 line-clamp-2 mb-2.5 leading-relaxed">
                        {post.content}
                      </p>
                    )}

                    
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal Detail & Fullscreen Image */}
        {selectedPost && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedPost(null)}
          >
            <div
              className="bg-white rounded-2xl sm:rounded-3xl max-w-lg md:max-w-4xl lg:max-w-5xl w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tombol Tutup */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2 rounded-full bg-black/60 text-white md:bg-slate-100 md:text-slate-600 md:hover:bg-slate-200 md:hover:text-slate-900 transition-colors shadow-sm"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Kolom Gambar: Mobile (atas, tinggi terukur) | Desktop (kiri, 55% lebar) */}
              <div className="relative w-full h-56 sm:h-72 md:h-auto md:w-7/12 flex-shrink-0 bg-slate-950 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedPost.image || "/images/gallery/upacara-bendera.jpg"}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/images/gallery/upacara-bendera.jpg";
                  }}
                />
              </div>

              {/* Kolom Konten & Teks: Mobile (bawah, scrollable) | Desktop (kanan, 45% lebar, scrollable) */}
              <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-1 overflow-y-auto max-h-[calc(90vh-14rem)] sm:max-h-[calc(90vh-18rem)] md:max-h-[85vh] bg-white">
                {/* Meta: Badge Kategori & Tanggal */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {selectedPost.label && (
                    <span
                      className={`text-[10px] sm:text-xs uppercase tracking-wider px-2.5 py-1 rounded font-semibold shadow-sm ${getBadgeStyle(
                        selectedPost.label
                      )}`}
                    >
                      {selectedPost.label}
                    </span>
                  )}
                  {selectedPost.times?.createdAt && (
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                      <CalendarDays className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{formatDate(selectedPost.times.createdAt)}</span>
                    </div>
                  )}
                </div>

                {/* Judul Kegiatan */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  {selectedPost.title}
                </h3>

                <div className="w-12 h-0.5 bg-red-600 rounded mb-4" />

                {/* Deskripsi Lengkap */}
                {selectedPost.content ? (
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line flex-1">
                    {selectedPost.content}
                  </p>
                ) : (
                  <p className="text-slate-400 text-sm italic">
                    Tidak ada deskripsi tambahan untuk kegiatan ini.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
