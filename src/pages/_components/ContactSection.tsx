import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Alamat", value: "Jl. Bintang Ceria No. 12, Kota Bahagia, Jawa Tengah 50000", color: "text-primary", bg: "bg-primary/10" },
  { icon: Phone, label: "Telepon", value: "(0291) 123-4567", color: "text-accent", bg: "bg-accent/10" },
  { icon: Mail, label: "Email", value: "info@sdbintangceria.sch.id", color: "text-[oklch(0.55_0.22_260)]", bg: "bg-[oklch(0.93_0.09_260)]" },
  { icon: Clock, label: "Jam Sekolah", value: "Senin-Jumat: 07.00 - 14.30 WIB", color: "text-[oklch(0.55_0.2_95)]", bg: "bg-[oklch(0.93_0.1_95)]" },
];

export default function ContactSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Pesan berhasil dikirim! Kami akan menghubungi Anda segera. 🎉");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="kontak" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-accent/20 text-accent font-bold text-sm px-4 py-1.5 rounded-full mb-3">📩 Hubungi Kami</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold">Ayo Bergabung Bersama Kami!</h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-xl mx-auto font-medium">Daftarkan putra-putri Anda sekarang dan beri mereka pendidikan terbaik.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-5">
            <div className="rounded-3xl p-8 text-white" style={{ background: "linear-gradient(135deg, oklch(0.65 0.2 55), oklch(0.58 0.2 45))" }}>
              <h3 className="font-serif text-2xl font-bold mb-2">SD Bintang Ceria</h3>
              <p className="text-white/80 text-sm font-medium mb-6">Tempat anak-anak menemukan potensi terbaik mereka sejak dini.</p>
              <div className="grid grid-cols-2 gap-4">
                {[{ label: "Siswa", value: "500+" }, { label: "Guru", value: "40+" }, { label: "Ekskul", value: "15+" }, { label: "Prestasi", value: "200+" }].map((s) => (
                  <div key={s.label} className="bg-white/15 rounded-2xl p-4 text-center">
                    <p className="font-serif text-2xl font-bold">{s.value}</p>
                    <p className="text-xs text-white/70 font-semibold">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {contactInfo.map((info) => (
                <div key={info.label} className={`${info.bg} rounded-2xl p-4 flex items-center gap-3`}>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold">{info.label}</p>
                    <p className="text-sm font-bold text-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-[oklch(0.97_0.02_95)] rounded-3xl p-8">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-foreground">Nama Lengkap</label>
                  <Input required placeholder="Budi Santoso" className="rounded-xl bg-white" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-foreground">Nama Anak</label>
                  <Input required placeholder="Budi Jr." className="rounded-xl bg-white" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-foreground">Email / Nomor HP</label>
                <Input required placeholder="budi@email.com atau 08xx-xxxx-xxxx" className="rounded-xl bg-white" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-foreground">Kelas yang Diminati</label>
                <Input placeholder="Contoh: Kelas 1 (2024/2025)" className="rounded-xl bg-white" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-foreground">Pesan</label>
                <Textarea placeholder="Tulis pertanyaan atau informasi tambahan di sini..." className="rounded-xl bg-white min-h-[100px]" />
              </div>
              <Button type="submit" size="lg" className="rounded-full font-bold text-base mt-2" disabled={loading}>
                {loading ? "Mengirim..." : "Kirim Pesan 🚀"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
