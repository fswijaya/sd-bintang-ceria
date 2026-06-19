import { motion, useInView } from "motion/react";
import { useRef } from "react";

const galleryItems = [
  { image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80", caption: "Kegiatan Belajar Mengajar", span: "col-span-2 row-span-2" },
  { image: "https://images.unsplash.com/photo-1512253080918-79cf0c2e0650?w=400&q=80", caption: "Kelas Seni Melukis", span: "" },
  { image: "https://images.unsplash.com/photo-1780751379328-9271686e4e06?w=400&q=80", caption: "Workshop Kerajinan", span: "" },
  { image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&q=80", caption: "Olahraga & Permainan", span: "" },
  { image: "https://images.unsplash.com/photo-1553777907-f5dbbbb44d7c?w=400&q=80", caption: "Waktu Istirahat Ceria", span: "" },
  { image: "https://images.unsplash.com/photo-1680178776508-41a276595b0f?w=400&q=80", caption: "Kunjungan Perpustakaan", span: "" },
];

export default function Gallery() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section id="galeri" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[oklch(0.9_0.12_260)]/50 text-[oklch(0.45_0.22_260)] font-bold text-sm px-4 py-1.5 rounded-full mb-3">
            📸 Galeri Sekolah
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold">Momen Indah di Sekolah</h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-xl mx-auto font-medium">
            Setiap hari adalah kenangan berharga yang kami abadikan bersama.
          </p>
        </motion.div>
        <motion.div
          ref={gridRef}
          initial={{ opacity: 0, y: 40 }}
          animate={gridInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={gridInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${item.span}`}
            >
              <img src={item.image} alt={item.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-bold">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
