import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Ibu Sari Dewi", role: "Orang tua murid Kelas 3", avatar: "👩", quote: "Anak saya sangat senang bersekolah di sini! Setiap hari selalu ada cerita seru yang dibawa pulang. Guru-gurunya sabar dan kreatif sekali.", stars: 5, color: "bg-[oklch(0.95_0.1_30)]" },
  { name: "Pak Budi Santoso", role: "Orang tua murid Kelas 5", avatar: "👨", quote: "Prestasi anak kami meningkat drastis sejak pindah ke SD Bintang Ceria. Program olimpiadanya luar biasa, anak jadi lebih percaya diri.", stars: 5, color: "bg-[oklch(0.93_0.1_155)]" },
  { name: "Ibu Rina Melati", role: "Orang tua murid Kelas 1", avatar: "👩\u200d💼", quote: "Transisi dari TK ke SD tidak mudah, tapi guru-guru di sini sangat membantu. Anak saya langsung nyaman dan betah di sekolah.", stars: 5, color: "bg-[oklch(0.93_0.09_260)]" },
  { name: "Pak Ahmad Yusuf", role: "Orang tua murid Kelas 6", avatar: "👨\u200d💼", quote: "6 tahun di SD Bintang Ceria adalah pengalaman terbaik. Anak kami lulus dengan nilai tinggi dan diterima di SMP favorit!", stars: 5, color: "bg-[oklch(0.95_0.1_95)]" },
];

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={`${t.color} rounded-3xl p-6 flex flex-col gap-4 hover:shadow-lg transition-all duration-300`}
    >
      <div className="flex gap-1">
        {Array.from({ length: t.stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-foreground font-medium text-sm leading-relaxed italic">{`"${t.quote}"`}</p>
      <div className="flex items-center gap-3 mt-auto">
        <span className="text-3xl">{t.avatar}</span>
        <div>
          <p className="font-bold text-sm text-foreground">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });
  return (
    <section id="testimoni" className="py-20 px-4" style={{ background: "linear-gradient(180deg, oklch(0.97 0.02 95) 0%, white 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-primary/15 text-primary font-bold text-sm px-4 py-1.5 rounded-full mb-3">💬 Testimoni</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold">Kata Orang Tua Kami</h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-xl mx-auto font-medium">Kepercayaan orang tua adalah kebanggaan terbesar kami.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => <TestimonialCard key={t.name} t={t} index={i} />)}
        </div>
      </div>
    </section>
  );
}
