import { Trophy } from "lucide-react";

export default function VisiMisi() {
  const missions = [
    {
      num: "01",
      numColor: "text-[#EF4444]",
      title: "Penempaan Fisik & Jasmani",
      desc: "Membina postur tegap, daya tahan tubuh prima, dan kebugaran jasmani melalui pelatihan yang terencana dan aman bagi pelajar.",
    },
    {
      num: "02",
      numColor: "text-[#F59E0B]",
      title: "Pendidikan Mental & Etika",
      desc: "Menumbuhkan rasa hormat kepada orang tua, guru, dan sesama, serta pantang menyerah dalam menghadapi rintangan sekolah.",
    },
    {
      num: "03",
      numColor: "text-[#EF4444]",
      title: "Prestasi Lomba LKBB",
      desc: "Mengasah kekompakan tata upacara dan kreasi variasi formasi indah untuk berkompetisi di tingkat kabupaten hingga nasional.",
    },
    {
      num: "04",
      numColor: "text-[#F59E0B]",
      title: "Dukungan Masa Depan Karir",
      desc: "Membuka jalan rekomendasi sertifikat resmi untuk jalur prestasi seleksi TNI, Polri, Sekolah Kedinasan, maupun Perguruan Tinggi.",
    },
  ];

  return (
    <section
      id="visi-misi"
      aria-label="Visi dan Misi Paskibra ADMAJA"
      className="bg-[#0F172A] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Visi Banner Card */}
        <div className="max-w-5xl mx-auto bg-[#B91C1C] border-2 border-[#FFD700] rounded-3xl p-8 sm:p-12 lg:p-14 text-center shadow-2xl relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FEF73D] text-slate-950 font-bold font-plus-jakarta-sans text-xs mb-6 shadow-sm">
            <Trophy className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
            <span>VISI POKOK ORGANISASI</span>
          </div>

          {/* Visi Statement */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold font-plus-jakarta-sans text-white tracking-tight leading-[1.3] mb-5 max-w-4xl mx-auto">
            &quot;Menjadi Korps Paskibra yang Unggul, Berintegritas Tinggi, dan
            Menjadi Teladan Generasi Muda Berkarakter Kebangsaan.&quot;
          </h2>

          {/* Visi Subtitle / Explanation */}
          <p className="text-sm sm:text-base font-plus-jakarta-sans text-red-100/90 leading-relaxed max-w-2xl mx-auto">
            Pedoman utama setiap anggota ADMAJA dalam berpikir, bertindak, dan
            mengabdi untuk nama baik SMK Negeri 4 Kendal serta Bangsa Indonesia.
          </p>
        </div>

        {/* 4 Misi Utama Header */}
        <div className="text-center mt-16 mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-plus-jakarta-sans text-white tracking-tight">
            4 Misi Utama ADMAJA
          </h3>
          <p className="text-sm sm:text-base font-plus-jakarta-sans text-slate-400 mt-2">
            Langkah nyata mewujudkan kader pelajar teladan
          </p>
        </div>

        {/* 4 Misi Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((item) => (
            <div
              key={item.num}
              className="bg-[#1E293B]/70 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-start transition-all duration-300 hover:border-slate-700 hover:-translate-y-1 hover:shadow-xl"
            >
              <span
                className={`text-2xl sm:text-3xl font-bold font-plus-jakarta-sans ${item.numColor} mb-3`}
              >
                {item.num}
              </span>
              <h4 className="text-base sm:text-lg font-bold font-plus-jakarta-sans text-white mb-3">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm font-plus-jakarta-sans text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
