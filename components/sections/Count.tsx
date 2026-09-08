export default function Count() {
  const stats = [
    {
      label: "TAHUN BERDIRI",
      value: "2011",
      color: "text-[#0F172A]",
      desc: "15 tahun dedikasi melatih generasi muda",
    },
    {
      label: "ANGGOTA AKTIF",
      value: "60+ Siswa",
      color: "text-[#B91C1C]",
      desc: "Terbagi dalam angkatan aktif kelas X, XI, & XII",
    },
    {
      label: "PURNA & ALUMNI",
      value: "100+ Alumni",
      color: "text-[#0F172A]",
      desc: "",
    },
  ];

  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div>
                <p className="text-xs font-bold font-plus-jakarta-sans text-[#94A3B8] tracking-wider uppercase">
                  {stat.label}
                </p>
                <h3
                  className={`text-3xl sm:text-4xl lg:text-[42px] font-bold font-oswald ${stat.color} tracking-tight mt-3 mb-2 leading-none`}
                >
                  {stat.value}
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-plus-jakarta-sans text-[#64748B] leading-normal">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
