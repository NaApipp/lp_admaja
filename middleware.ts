import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 🔧 Tambahkan path baru di sini kapan pun dibutuhkan.
// Gunakan awalan path (bukan regex) — dicek dengan startsWith.
const EXCLUDED_PATHS = [
  "/maintenance", // halaman maintenance itu sendiri (wajib agar tidak infinite loop)
  "/api",         // API routes
  "/_next",       // static & image optimization files next.js
  "/favicon.ico", // icon website
  "/asset",       // public assets (gambar, dll)
  // "/admin",    // contoh: halaman admin yang tetap bisa diakses saat maintenance
];

// 🔧 Toggle maintenance mode langsung dari file ini.
// Ubah nilai di bawah menjadi `true` jika sedang maintenance, dan `false` jika normal.
const isMaintenanceMode = true;
// const isMaintenanceMode = false;

export function middleware(request: NextRequest) {
  // 1. Kalau maintenance mode MATI, biarkan user mengakses apa saja.
  if (!isMaintenanceMode) {
    // Namun jika user mencoba mengakses /maintenance secara manual saat sistem NORMAL, 
    // kita bisa redirect kembali ke /home agar tidak membingungkan.
    if (request.nextUrl.pathname.startsWith("/maintenance")) {
        return NextResponse.redirect(new URL("/beranda", request.url));
    }
    return NextResponse.next();
  }

  // 2. Kalau maintenance mode MENYALA:
  const { pathname } = request.nextUrl;

  // Cek apakah path saat ini termasuk yang dikecualikan
  const isExcluded = EXCLUDED_PATHS.some((path) => pathname.startsWith(path));
  if (isExcluded) {
    return NextResponse.next();
  }

  // Redirect semua rute lain ke halaman /maintenance
  return NextResponse.redirect(new URL("/maintenance", request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - asset (public assets)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|asset).*)",
  ],
};