import { motion } from "motion/react";
import { Button } from "@/components/ui/button.tsx";
import { ChevronDown } from "lucide-react";

const floatingShapes = [
  { emoji: "⭐", top: "12%", left: "8%", delay: 0, size: "text-3xl" },
  { emoji: "🎨", top: "20%", right: "10%", delay: 0.3, size: "text-2xl" },
  { emoji: "📚", top: "65%", left: "5%", delay: 0.6, size: "text-2xl" },
  { emoji: "🏆", bottom: "20%", right: "8%", delay: 0.2, size: "text-3xl" },
  { emoji: "🎵", top: "45%", left: "3%", delay: 0.9, size: "text-xl" },
  { emoji: "🌈", bottom: "35%", right: "4%", delay: 0.5, size: "text-2xl" },
];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 30% 20%, oklch(0.92 0.12 30 / 0.35) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, oklch(0.88 0.14 155 / 0.3) 0%, transparent 50%), radial-gradient(ellipse at 60% 20%, oklch(0.9 0.12 260 / 0.2) 0%, transparent 45%), oklch(0.99 0.012 95)",
      }}
    >
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.size} select-none pointer-events-none`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
          }}
          animate={{ y: [-8, 8, -8], rotate: [-5, 5, -5] }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          {shape.emoji}
        </motion.div>
      ))}

      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-[oklch(0.65_0.2_260)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block bg-primary/15 text-primary font-bold text-sm px-4 py-1.5 rounded-full mb-4">
              🎉 Penerimaan Siswa Baru 2024/2025 Dibuka!
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-4"
          >
            Belajar Itu
            <span className="block text-primary drop-shadow-sm">Menyenangkan!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-muted-foreground text-lg md:text-xl font-semibold mb-8 max-w-xl"
          >
            SD Bintang Ceria — tempat anak-anak tumbuh cerdas, kreatif, dan bahagia
            bersama guru-guru terbaik.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <Button asChild size="lg" className="rounded-full font-bold text-base px-8 shadow-lg">
              <a href="#kontak">Daftar Sekarang 🚀</a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="rounded-full font-bold text-base px-8">
              <a href="#program">Lihat Program</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start"
          >
            {[
              { value: "500+", label: "Siswa Aktif" },
              { value: "15+", label: "Tahun Berdiri" },
              { value: "98%", label: "Lulus UN" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl text-primary font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-semibold">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 relative w-full max-w-sm lg:max-w-md"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80"
              alt="Guru dan murid SD belajar bersama"
              className="w-full h-72 object-cover"
            />
          </div>
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2"
          >
            <span className="text-2xl">🏅</span>
            <div>
              <p className="text-xs font-bold text-foreground">Sekolah Terbaik</p>
              <p className="text-xs text-muted-foreground">Kota 2023</p>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 bg-primary text-white rounded-2xl shadow-xl p-3 text-center"
          >
            <p className="text-2xl font-serif font-bold">A+</p>
            <p className="text-xs font-semibold">Akreditasi</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#keunggulan"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground cursor-pointer hover:text-primary transition-colors"
      >
        <span className="text-xs font-semibold">Scroll ke bawah</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12">
          <path
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,25 1440,30 L1440,60 L0,60 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
