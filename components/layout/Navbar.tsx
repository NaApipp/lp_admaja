"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Vote,
  CalendarCheck,
  Users,
  ShieldAlert,
  LogOut,
  Lock,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const sessionUser = sessionStorage.getItem("user");
      if (sessionUser) {
        const parsed = JSON.parse(sessionUser);
        return parsed.role || null;
      }
    } catch {
      return null;
    }
    return null;
  });

  useEffect(() => {
    try {
      const sessionUser = sessionStorage.getItem("user");
      if (sessionUser) {
        const parsed = JSON.parse(sessionUser);
        setRole(parsed.role || null);
        setUserName(parsed.name || parsed.email || null);
      }
    } catch {
      setRole(null);
      setUserName(null);
    }

    const handleStorage = () => {
      try {
        const sessionUser = sessionStorage.getItem("user");
        if (sessionUser) {
          const parsed = JSON.parse(sessionUser);
          setRole(parsed.role || null);
          setUserName(parsed.name || parsed.email || null);
        }
      } catch {
        setRole(null);
        setUserName(null);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const menuItems = [
    {
      name: "Tentang",
      href: "#tentang",
    },
    {
      name: "Pengurus & Pembina",
      href: "#pengurus",
    },
    {
      name: "Visi Misi",
      href: "#visi-misi",
    },
    {
      name: "Galeri Kegiatan",
      href: "#galeri",
    },
    {
      name: "FAQ",
      href: "#faq",
    },
    {
      name: "kontak",
      href: "#kontak",
    },
  ];

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoggingOut(true);
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      sessionStorage.removeItem("user");
      router.push("/login");
    }
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-slate-200 bg-white/95 backdrop-blur-md text-slate-800">
        <div className="flex h-full max-w-7xl mx-auto items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo & Brand */}
          <Link
            href="/general"
            className="flex items-center gap-2.5 focus:outline-none shrink-0"
          >
            <Image
              src="/logo-v2.png"
              alt="Logo Admaja"
              width={50}
              height={50}
              className="w-11 h-auto object-contain"
              priority
            />
            <div className="flex flex-col">
              <p className="font-bold font-oswald text-sm sm:text-base text-[#0F172A] leading-tight tracking-tight">
                ADIKA MAHDI JAYA
              </p>
              <p className="font-semibold font-plus-jakarta-sans text-xs sm:text-sm text-[#B91C1C] leading-tight">
                SMKN 4 KENDAL
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {menuItems.map((item) => {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-plus-jakarta-sans font-semibold text-slate-700 hover:text-[#1e3388] hover:bg-slate-100 transition-all"
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5">
            {/* Desktop Logout Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="#kontak"
                className="group flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold bg-[#B91C1C] text-white hover:bg-[#921616] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                <span>Hubungi Kami</span>
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-[#475569] hover:bg-blue-50/80 active:bg-blue-100 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Dropdown */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-xs"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-white border-b border-slate-200 text-slate-700 p-5 flex flex-col justify-between shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nav Menu */}
            <div className="space-y-4">
              <nav>
                <ul className="space-y-1.5">
                  {menuItems.map((item) => {
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-plus-jakarta-sans font-semibold text-[#475569] hover:text-[#1e3388]
                           hover:bg-blue-50/80 active:bg-blue-100 transition-all"
                        >
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
