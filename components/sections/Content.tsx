"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ContentPost, ContentResponse } from "@/app/types/content";
import { X, ZoomIn } from "lucide-react";

/**
 * Konfigurasi Sumber Data:
 * Saat ini diset `false` untuk menggunakan DATA DUMMY sesuai permintaan.
 * Ubah menjadi `true` jika ingin langsung mengambil data dari API /api/content.
 */
const USE_API = true;

// Data dummy sesuai dengan desain visual Galeri Kegiatan & Jejak Prestasi
const DUMMY_POSTS: ContentPost[] = [
  {
    _id: "1",
    content_id: "penugasan-upacara-resmi",
    title: "Pengibaran Bendera Merah Putih HUT Kemerdekaan RI",
    content:
      "Taruna ADMAJA SMKN 4 Kendal bertugas sebagai pasukan pengibar bendera pusaka di tingkat kecamatan dan kabupaten dengan sempurna.",
    label: "PENUGASAN UPACARA RESMI",
    image: "/images/gallery/upacara-bendera.jpg",
  },
  {
    _id: "2",
    content_id: "juara-lkbb-pelajar",
    title: "Juara Umum LKBB Tingkat Jawa Tengah",
    content:
      "Membawa pulang piala Juara 1 Umum, Best Danton, serta Formasi Variasi Terfavorit.",
    label: "JUARA LKBB PELAJAR",
    image: "/images/gallery/juara-lkbb.jpg",
  },
  {
    _id: "3",
    content_id: "latihan-rutin",
    title: "Latihan Rutin PBB & Pembentukan Karakter",
    content:
      "Dilaksanakan setiap Selasa & Jumat sore di Lapangan SMKN 4 Kendal.",
    label: "LATIHAN RUTIN",
    image: "/images/gallery/latihan-pbb.jpg",
  },
  {
    _id: "4",
    content_id: "kreasi-seni-pasukan",
    title: "Gelar Formasi Variasi Musik & Kekompakan",
    content:
      "Paduan gerakan tegas berirama musik patriotik yang menggetarkan penonton.",
    label: "KREASI SENI PASUKAN",
    image: "/images/gallery/formasi-variasi.jpg",
  },
];

// Helper penentuan warna badge label sesuai tema pada desain
function getBadgeStyle(label: string): string {
  const upper = (label || "").toUpperCase();
  if (upper.includes("JUARA") || upper.includes("LKBB")) {
    return "bg-[#EAB308] text-slate-950 font-bold";
  }
  if (upper.includes("LATIHAN") || upper.includes("RUTIN")) {
    return "bg-[#D97706] text-white font-bold";
  }
  if (
    upper.includes("KREASI") ||
    upper.includes("SENI") ||
    upper.includes("VARIASI")
  ) {
    return "bg-[#CA8A04] text-white font-bold";
  }
  return "bg-[#C8102E] text-white font-bold";
}

export default function Content() {
  const [posts, setPosts] = useState<ContentPost[]>(DUMMY_POSTS);
  const [loading, setLoading] = useState(USE_API);

  useEffect(() => {
    if (!USE_API) {
      setPosts(DUMMY_POSTS);
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

        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }

        const json: ContentResponse = await res.json();
        if (
          isMounted &&
          json &&
          Array.isArray(json.data) &&
          json.data.length > 0
        ) {
          setPosts(json.data);
        }
      } catch (err) {
        console.warn(
          "Gagal memuat data dari /api/content, beralih ke data dummy:",
          err,
        );
        if (isMounted) {
          setPosts(DUMMY_POSTS);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchFromApi();

    return () => {
      isMounted = false;
    };
  }, []);

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
              DOKUMENTASI & PORTOFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold font-plus-jakarta-sans text-[#0F172A] tracking-tight leading-tight">
              Galeri Kegiatan
            </h2>
          </div>

          <p className="text-sm sm:text-base font-plus-jakarta-sans text-slate-500 leading-relaxed max-w-md md:text-right">
            Galeri Kegiatan Paskibra Adika Mahdi Jaya
          </p>
        </div>

        {/* Gallery Grid - Ukuran Image 4:3 Horizontal */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="aspect-[4/3] rounded-2xl md:rounded-3xl bg-slate-100 animate-pulse relative overflow-hidden flex flex-col justify-end p-6 md:p-8"
              >
                <div className="h-5 w-32 bg-slate-200 rounded mb-3" />
                <div className="h-7 w-3/4 bg-slate-200 rounded mb-2" />
                <div className="h-4 w-full bg-slate-200 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {posts.map((post, index) => {
              const badgeClass = getBadgeStyle(post.label);

              return (
                <div
                  key={post._id || post.content_id || index}
                  className="group relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image 4:3 Horizontal */}
                  <img
                    src={post.image || "/images/gallery/upacara-bendera.jpg"}
                    alt={post.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 via-45% to-transparent transition-opacity duration-300 group-hover:from-black/95" />

                  {/* Konten Bagian Bawah */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 md:p-8 flex flex-col items-start justify-end z-10">
                    {/* Badge Label */}
                    {post.label && (
                      <span
                        className={`text-[10px] sm:text-xs uppercase tracking-wider px-2.5 py-1 rounded font-plus-jakarta-sans shadow-sm mb-2.5 ${badgeClass}`}
                      >
                        {post.label}
                      </span>
                    )}

                    {/* Judul Kegiatan */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-plus-jakarta-sans text-white leading-snug drop-shadow-sm mb-2">
                      {post.title}
                    </h3>

                    {/* Deskripsi */}
                    {post.content && (
                      <p className="text-xs sm:text-sm font-plus-jakarta-sans text-slate-200 leading-relaxed max-w-xl line-clamp-2 md:line-clamp-3">
                        {post.content}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
