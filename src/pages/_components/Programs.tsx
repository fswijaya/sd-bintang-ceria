import { motion, useInView } from "motion/react";
import { useRef } from "react";

const programs = [
  {
    grade: "Kelas 1 & 2",
    title: "Fondasi Ceria",
    desc: "Belajar membaca, menulis, dan berhitung dengan metode bermain yang menyenangkan. Anak-anak membangun kepercayaan diri sejak dini.",
    image: "https://images.unsplash.com/photo-1527822618093-743f3e57977c?w=400&q=80",
    tags: ["Membaca", "Menulis", "Berhitung", "Seni"],
    color: "from-[oklch(0.92_0.14_30)] to-[oklch(0.97_0.06_30)]",
    badge: "bg-primary text-white",
  },
  {
    grade: "Kelas 3 & 4",
    title: "Petualang Ilmu",
    desc: "Mengeksplorasi sains, sosial, dan bahasa Inggris dengan pendekatan project-based learning yang interaktif dan kolaboratif.",
    image: "https://images.unsplash.com/photo-1512253080918-79cf0c2e0650?w=400&q=80",
    tags: ["Sains", "IPS", "B. Inggris", "Komputer"],
    color: "from-[oklch(0.9_0.12_155)] to-[oklch(0.96_0.06_155)]",
    badge: "bg-accent text-white",
  },
  {
    grade: "Kelas 5 & 6",
    title: "Bintang Prestasi",
    desc: "Persiapan menuju jenjang SMP dengan program pendalaman materi, olimpiade, dan pengembangan karakter kepemimpinan.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&q=80",
    tags: ["Olimpiade", "Leadership", "Bahasa", "Teknologi"],
    color: "from-[oklch(0.9_0.12_260)] to-[oklch(0.96_0.06_260)]",
    badge: "bg-[oklch(0.55_0.22_260)] text-white",
  },
];

function ProgramCard({ program, index }: { program: typeof programs[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className={`rounded-3xl overflow-hidden bg-gradient-to-br ${program.color} shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className={`absolute top-4 left-4 ${program.badge} text-xs font-bold px-3 py-1.5 rounded-full shadow`}>
          {program.grade}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{program.title}</h3>
        <p className="text-muted-foreground text-sm font-medium mb-4 leading-relaxed">{program.desc}</p>
        <div className="flex flex-wrap gap-2">
          {program.tags.map((tag) => (
            <span key={tag} className="bg-white/70 text-foreground text-xs font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Programs() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="program" className="py-20 px-4" style={{ background: "linear-gradient(180deg, white 0%, oklch(0.97 0.02 95) 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-accent/20 text-accent font-bold text-sm px-4 py-1.5 rounded-full mb-3">
            🎓 Program Belajar
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold">Program di Setiap Jenjang</h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-xl mx-auto font-medium">
            Kurikulum dirancang khusus untuk setiap tahap perkembangan anak.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <ProgramCard key={program.grade} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
