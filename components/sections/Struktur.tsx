import { User, Award, Shield, Users, Crown, GraduationCap } from "lucide-react";
import { leadership, pengurus } from "@/lib/struktur";
import Image from "next/image";

export default function Struktur() {
  return (
    <section
      id="pengurus"
      aria-label="Pembina dan Dewan Pengurus Paskibra ADMAJA"
      className="py-16 sm:py-20 bg-white border-t border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-block px-3 py-1 rounded-md bg-red-50 text-[#B91C1C] font-bold font-plus-jakarta-sans text-xs tracking-wider uppercase mb-4">
            STRUKTUR KEPENGURUSAN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-plus-jakarta-sans text-[#0F172A] tracking-tight leading-[1.2] mb-4">
            Pembina & Dewan Pengurus
          </h2>
          <p className="text-base sm:text-lg font-plus-jakarta-sans text-slate-600 leading-relaxed">
            Sinergi antara pembina berpengalaman dan dewan pengurus yang berdedikasi
            tinggi dalam memajukan kehormatan Paskibra ADMAJA SMKN 4 Kendal.
          </p>
        </div>

        {/* Pembina & Penanggung Jawab Section */}
        <div className="mb-14">
          <h3 className="text-xl sm:text-2xl font-bold font-plus-jakarta-sans text-[#0F172A] mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-red-500" />
            <span>Penanggung Jawab & Pembina</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((item) => {
              return (
                <div
                  key={item.name}
                  className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs transition-all duration-300 hover:shadow-md flex flex-col justify-between"
                >
                  <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center text-slate-400 shrink-0">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      ) : (
                        <User className="w-10 h-10 stroke-1 text-slate-400" />
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border text-xs font-bold font-plus-jakarta-sans ${item.badge}`}
                        >
                          {item.title}
                        </span>
                        <span className="text-xs font-semibold font-plus-jakarta-sans text-slate-500">
                          • {item.role}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold font-plus-jakarta-sans text-[#0F172A]">
                        {item.name}
                      </h4>
                      <p className="text-sm font-plus-jakarta-sans text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dewan Pengurus Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold font-plus-jakarta-sans text-[#0F172A] mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-[#B91C1C]" />
            <span>Dewan Pengurus Organisasi</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pengurus.map((item) => (
              <div
                key={item.role}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto mb-5 text-slate-400">
                    <Users className="w-7 h-7 text-slate-500" />
                  </div>

                  <div className="text-center space-y-2 mb-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-md border text-[11px] font-bold font-plus-jakarta-sans ${item.badge}`}
                    >
                      {item.role}
                    </span>
                    <h4 className="text-lg font-bold font-plus-jakarta-sans text-[#0F172A]">
                      {item.name}
                    </h4>
                    <p className="text-xs font-semibold font-plus-jakarta-sans text-slate-400">
                      {item.class}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-plus-jakarta-sans text-slate-600 text-center leading-relaxed border-t border-slate-100 pt-4 mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
