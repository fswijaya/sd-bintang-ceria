import { Star } from "lucide-react";

const footerLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Program", href: "#program" },
  { label: "Galeri", href: "#galeri" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <Star className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-serif text-xl font-bold">SD Bintang Ceria</span>
            </div>
            <p className="text-white/60 text-sm font-medium leading-relaxed">
              Mendidik generasi penerus bangsa dengan penuh cinta, kreativitas, dan semangat belajar yang tinggi.
            </p>
          </div>
          <div>
            <p className="font-bold text-sm mb-4 text-white/80 uppercase tracking-wider">Menu</p>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-white text-sm font-medium transition-colors cursor-pointer">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold text-sm mb-4 text-white/80 uppercase tracking-wider">Motto Kami</p>
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="font-serif text-xl text-primary font-bold mb-2">{`"Cerdas, Kreatif, Berkarakter"`}</p>
              <p className="text-white/60 text-sm font-medium">Menjadi sekolah pilihan keluarga Indonesia yang mengutamakan kualitas pendidikan karakter.</p>
            </div>
          </div>
        </div>
        <div className="h-1 rounded-full bg-gradient-to-r from-primary via-accent to-[oklch(0.65_0.2_260)] mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm font-medium">© {year} SD Bintang Ceria. Semua hak dilindungi.</p>
          <p className="text-white/50 text-sm font-medium">Dengan ❤️ untuk generasi masa depan Indonesia 🇮🇩</p>
        </div>
      </div>
    </footer>
  );
}
