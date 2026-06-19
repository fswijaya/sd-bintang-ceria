import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

const features = [
  {
    emoji: "👩\u200d🏫",
    title: "Guru Berpengalaman",
    desc: "Tim pengajar bersertifikat dengan pengalaman lebih dari 10 tahun dalam pendidikan dasar.",
    color: "bg-[oklch(0.95_0.1_30)]",
    accent: "text-primary",
  },
  {
    emoji: "📖",
    title: "Kurikulum Merdeka",
    desc: "Menggunakan Kurikulum Merdeka yang inovatif dan berpusat pada perkembangan anak.",
    color: "bg-[oklch(0.93_0.1_155)]",
    accent: "text-accent",
  },
  {
    emoji: "🎭",
    title: "Ekstrakurikuler Lengkap",
    desc: "Lebih dari 15 pilihan ekskul: seni, olahraga, robotik, bahasa, musik, dan masih banyak lagi.",
    color: "bg-[oklch(0.93_0.09_260)]",
    accent: "text-[oklch(0.55_0.22_260)]",
  },
  {
    emoji: "🍎",
    title: "Kantin Sehat",
    desc: "Makanan bergizi, bebas MSG, dan ramah anak untuk menunjang tumbuh kembang optimal.",
    color: "bg-[oklch(0.95_0.1_95)]",
    accent: "text-[oklch(0.55_0.2_95)]",
  },
  {
    emoji: "💻",
    title: "Kelas Digital",
    desc: "Laboratorium komputer modern dengan akses internet yang aman dan terpantau.",
    color: "bg-[oklch(0.95_0.08_300)]",
    accent: "text-[oklch(0.55_0.2_300)]",
  },
  {
    emoji: "🏫",
    title: "Lingkungan Aman",
    desc: "Fasilitas lengkap dengan sistem keamanan CCTV dan penjagaan 24 jam untuk ketenangan orang tua.",
    color: "bg-[oklch(0.95_0.1_50)]",
    accent: "text-[oklch(0.55_0.22_50)]",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={`${feature.color} rounded-3xl p-6 flex flex-col gap-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default`}
    >
      <span className="text-4xl">{feature.emoji}</span>
      <h3 className={`font-serif text-xl font-bold ${feature.accent}`}>{feature.title}</h3>
      <p className="text-sm text-muted-foreground font-medium leading-relaxed">{feature.desc}</p>
    </motion.div>
  );
}

export default function Features() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="keunggulan" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-primary/15 text-primary font-bold text-sm px-4 py-1.5 rounded-full mb-3">
            ✨ Keunggulan Kami
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold">
            Kenapa Pilih SD Bintang Ceria?
          </h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-xl mx-auto font-medium">
            Kami percaya setiap anak adalah bintang yang siap bersinar dengan dukungan dan lingkungan yang tepat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
