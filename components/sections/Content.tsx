"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ContentPost, ContentResponse } from "@/app/types/content";
import { CalendarDays, ArrowRight } from "lucide-react";

/**
 * Konfigurasi Sumber Data:
 * Saat ini diset `true` untuk mengambil data dari API /api/content.
 * Ubah menjadi `false` jika ingin menggunakan DATA DUMMY.
 */
const USE_API = true;

// Data dummy fallback — 6 item agar sesuai tampilan
const DUMMY_POSTS: ContentPost[] = [
  {
    _id: "1",
    content_id: "penugasan-upacara-resmi",
    title: "Pengibaran Bendera Merah Putih HUT Kemerdekaan RI",
    content:
      "Taruna ADMAJA SMKN 4 Kendal bertugas sebagai pasukan pengibar bendera pusaka di tingkat kecamatan dan kabupaten dengan sempurna.",
    label: "PENUGASAN UPACARA RESMI",
    image: "/images/gallery/upacara-bendera.jpg",
    times: { createdAt: "2026-09-01T07:00:00.000Z", updatedAt: "2026-09-01T07:00:00.000Z" },
  },
  {
    _id: "2",
    content_id: "juara-lkbb-pelajar",
    title: "Juara Umum LKBB Tingkat Jawa Tengah",
    content:
      "Membawa pulang piala Juara 1 Umum, Best Danton, serta Formasi Variasi Terfavorit.",
    label: "JUARA LKBB PELAJAR",
    image: "/images/gallery/juara-lkbb.jpg",
    times: { createdAt: "2026-09-05T07:00:00.000Z", updatedAt: "2026-09-05T07:00:00.000Z" },
  },
  {
    _id: "3",
    content_id: "latihan-rutin",
    title: "Latihan Rutin PBB & Pembentukan Karakter",
    content: "Dilaksanakan setiap Selasa & Jumat sore di Lapangan SMKN 4 Kendal.",
    label: "LATIHAN RUTIN",
    image: "/images/gallery/latihan-pbb.jpg",
    times: { createdAt: "2026-09-10T07:00:00.000Z", updatedAt: "2026-09-10T07:00:00.000Z" },
  },
  {
    _id: "4",
    content_id: "kreasi-seni-pasukan",
    title: "Gelar Formasi Variasi Musik & Kekompakan",
    content: "Paduan gerakan tegas berirama musik patriotik yang menggetarkan penonton.",
    label: "KREASI SENI PASUKAN",
    image: "/images/gallery/formasi-variasi.jpg",
    times: { createdAt: "2026-09-15T07:00:00.000Z", updatedAt: "2026-09-15T07:00:00.000Z" },
  },
  {
    _id: "5",
    content_id: "pelantikan-anggota-baru",
    title: "Pelantikan Anggota Baru Paskibra ADMAJA",
    content:
      "Prosesi pelantikan resmi anggota baru yang mengukuhkan mereka sebagai bagian dari keluarga besar ADMAJA.",
    label: "TRADISI",
    image: "/images/gallery/upacara-bendera.jpg",
    times: { createdAt: "2026-09-20T07:00:00.000Z", updatedAt: "2026-09-20T07:00:00.000Z" },
  },
  {
    _id: "6",
    content_id: "latihan-gabungan",
    title: "Latihan Gabungan Antar Ekstrakurikuler Paskibra",
    content:
      "Sesi kolaborasi bersama paskibra dari sekolah lain untuk meningkatkan kualitas baris-berbaris.",
    label: "LATIHAN GABUNGAN",
    image: "/images/gallery/latihan-pbb.jpg",
    times: { createdAt: "2026-09-25T07:00:00.000Z", updatedAt: "2026-09-25T07:00:00.000Z" },
  },
];

// Helper warna badge
function getBadgeStyle(label: string): string {
  const upper = (label || "").toUpperCase();
  if (upper.includes("JUARA") || upper.includes("LKBB") || upper.includes("PRESTASI")) {
    return "bg-[#EAB308] text-slate-950 font-bold";
  }
  if (upper.includes("LATIHAN") || upper.includes("RUTIN") || upper.includes("GABUNGAN")) {
    return "bg-[#D97706] text-white font-bold";
  }
  if (upper.includes("KREASI") || upper.includes("SENI") || upper.includes("VARIASI")) {
    return "bg-[#CA8A04] text-white font-bold";
  }
  if (upper.includes("TRADISI") || upper.includes("PELANTIKAN")) {
    return "bg-[#7C3AED] text-white font-bold";
  }
  return "bg-[#C8102E] text-white font-bold";
}

// Format tanggal Indonesia
function formatDate(dateStr?: string): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// Sort by createdAt descending, ambil limit terbaru
function getLatestPosts(posts: ContentPost[], limit = 6): ContentPost[] {
  return [...posts]
    .sort((a, b) => {
      const dateA = a.times?.createdAt ? new Date(a.times.createdAt).getTime() : 0;
      const dateB = b.times?.createdAt ? new Date(b.times.createdAt).getTime() : 0;
      return dateB - dateA;
    })
    .slice(0, limit);
}

// Skeleton Card
function SkeletonCard({ featured = false }: { featured?: boolean }) {
  return (
    <div
      className={`rounded-2xl md:rounded-3xl bg-slate-100 animate-pulse relative overflow-hidden flex flex-col justify-end ${
        featured ? "aspect-[16/10] md:aspect-auto md:h-full" : "aspect-[4/3]"
      }`}
    >
      <div className="p-5 space-y-2">
        <div className="h-4 w-24 bg-slate-200 rounded" />
        <div className="h-6 w-3/4 bg-slate-200 rounded" />
        <div className="h-3 w-full bg-slate-200 rounded" />
      </div>
    </div>
  );
}

// Card komponen
function PostCard({
  post,
  featured = false,
}: {
  post: ContentPost;
  featured?: boolean;
}) {
  const badgeClass = getBadgeStyle(post.label);

  return (
    <div
      className={`group relative overflow-hidden bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-2xl md:rounded-3xl ${
        featured ? "aspect-[16/10] md:aspect-auto md:h-full" : "aspect-[4/3]"
      }`}
    >
      {/* Image */}
      <img
        src={post.image || "/images/gallery/upacara-bendera.jpg"}
        alt={post.title}
        sizes={
          featured
            ? "(max-width: 768px) 100vw, 50vw"
            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        }
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-40% to-transparent transition-opacity duration-300 group-hover:from-black/95" />

      {/* Konten */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-7 flex flex-col items-start justify-end z-10">
        {/* Badge Label */}
        {post.label && (
          <span
            className={`text-[10px] sm:text-xs uppercase tracking-wider px-2.5 py-1 rounded font-plus-jakarta-sans shadow-sm mb-2 ${badgeClass}`}
          >
            {post.label}
          </span>
        )}

        {/* Judul */}
        <h3
          className={`font-bold font-plus-jakarta-sans text-white leading-snug drop-shadow-sm mb-1.5 ${
            featured
              ? "text-xl sm:text-2xl lg:text-[28px]"
              : "text-sm sm:text-base lg:text-lg"
          }`}
        >
          {post.title}
        </h3>

        {/* Deskripsi — hanya di featured atau layar sm+ untuk small card */}
        {post.content && featured && (
          <p className="text-sm sm:text-base font-plus-jakarta-sans text-slate-200 leading-relaxed line-clamp-2 max-w-xl mb-2">
            {post.content}
          </p>
        )}

        {/* Tanggal */}
        {post.times?.createdAt && (
          <div className="flex items-center gap-1.5 text-slate-300/80">
            <CalendarDays className="w-3 h-3 flex-shrink-0" />
            <span className="text-[11px] font-plus-jakarta-sans">
              {formatDate(post.times.createdAt)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Content() {
  const [allPosts, setAllPosts] = useState<ContentPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!USE_API) {
      setAllPosts(DUMMY_POSTS);
      setLoading(false);
      return;
    }

    let isMounted = true;

    async function fetchFromApi() {
      try {
        const res = await fetch("/api/content", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

        const json: ContentResponse = await res.json();
        if (isMounted && json && Array.isArray(json.data) && json.data.length > 0) {
          setAllPosts(json.data);
        } else if (isMounted) {
          setAllPosts(DUMMY_POSTS);
        }
      } catch (err) {
        console.warn("Gagal memuat data dari /api/content, beralih ke data dummy:", err);
        if (isMounted) setAllPosts(DUMMY_POSTS);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchFromApi();
    return () => {
      isMounted = false;
    };
  }, []);

  const posts = getLatestPosts(allPosts, 6);
  const [featured1, featured2, ...secondaryPosts] = posts;

  return (
    <section
      id="galeri"
      aria-label="Galeri Kegiatan dan Jejak Prestasi Paskibra ADMAJA"
      className="py-16 sm:py-20 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#FEE2E2] text-[#DC2626] font-bold font-plus-jakarta-sans text-xs tracking-wider uppercase mb-3.5 border border-red-100">
              DOKUMENTASI &amp; PORTOFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold font-plus-jakarta-sans text-[#0F172A] tracking-tight leading-tight">
              Galeri Kegiatan
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-sm sm:text-base font-plus-jakarta-sans text-slate-500 leading-relaxed max-w-md md:text-right">
              6 Kegiatan terbaru Paskibra Adika Mahdi Jaya
            </p>
            <a
              href="#"
              className="hidden md:hidden inline-flex items-center gap-1.5 text-sm font-semibold font-plus-jakarta-sans text-[#C8102E] hover:text-[#A00C23] transition-colors whitespace-nowrap group/btn"
            >
              Lihat Semua
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* ===== LOADING SKELETON ===== */}
        {loading ? (
          <div className="space-y-5 lg:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 md:h-[360px] lg:h-[440px]">
              <SkeletonCard featured />
              <SkeletonCard featured />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {[1, 2, 3, 4].map((n) => (
                <SkeletonCard key={n} />
              ))}
            </div>
          </div>
        ) : posts.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-24 text-slate-400">
            <CalendarDays className="w-12 h-12 mb-4 opacity-40" />
            <p className="font-plus-jakarta-sans text-base">Belum ada konten tersedia.</p>
          </div>
        ) : (
          <div className="space-y-5 lg:space-y-6">
            {/* ===== ROW ATAS: 2 featured card besar ===== */}
            {(featured1 || featured2) && (
              <div
                className={`grid gap-5 lg:gap-6 ${
                  featured1 && featured2
                    ? "grid-cols-1 md:grid-cols-2 md:h-[360px] lg:h-[440px]"
                    : "grid-cols-1 md:h-[360px] lg:h-[440px]"
                }`}
              >
                {featured1 && <PostCard post={featured1} featured />}
                {featured2 && <PostCard post={featured2} featured />}
              </div>
            )}

            {/* ===== ROW BAWAH: 4 secondary card ===== */}
            {secondaryPosts.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                {secondaryPosts.map((post, index) => (
                  <PostCard
                    key={post._id || post.content_id || index}
                    post={post}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

