import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import slider15 from "@/assets/slider-15.jpg";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/shisha")({
  head: () => ({
    meta: [
      { title: "Shisha — Mast Lounge" },
      { name: "description", content: "Premium shisha flavours and curated tobaccos at Mast Lounge, Heraklion." },
    ],
  }),
  component: ShishaPage,
});

const FLAVOURS = [
  { name: "Grape Mint", color: "#7a5c3a" },
  { name: "Grape", color: "#5a3a6a" },
  { name: "Mint", color: "#4a7a5a" },
  { name: "Lemon Cake", color: "#c9a84c" },
  { name: "Two Apple", color: "#8b4a3a" },
  { name: "Blueberry", color: "#3a4a7a" },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

function ShishaPage() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <div className="pt-24 relative min-h-screen">

      {/* Full page background — fixed on desktop, scroll on mobile */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: `url(${slider15})`,
          backgroundSize: isMobile ? "contain" : "80%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
          backgroundColor: "#0a0a0a",
        }}
      />
      {/* Overlay — lighter so photo is more visible */}
      <div className="fixed inset-0 -z-10 bg-black/50" />

      {/* Hero */}
      <section className="relative flex h-[60vh] items-center justify-center text-center">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='4' height='4'><circle cx='1' cy='1' r='0.5' fill='%23c9a84c'/></svg>\")" }} />
        <div className="relative z-10 px-6">
          <Flame size={48} className="mx-auto mb-4 animate-shimmer gold-text" />
          <h1 className="font-display text-5xl gold-gradient-text sm:text-7xl">{t.shisha.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl font-accent text-xl italic text-[var(--muted-foreground)]">
            {t.shisha.intro}
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-pad relative z-10">
        <h2 className="mb-10 text-center font-display text-3xl gold-gradient-text sm:text-4xl">{t.shisha.pricing}</h2>
        <div className="mx-auto max-w-md rounded-3xl border border-[var(--gold)]/40 bg-black/60 backdrop-blur-sm p-10 gold-glow">
          <ul className="space-y-5">
            {[
              { l: t.shisha.base, v: "12€" },
              { l: t.shisha.ice, v: "+1€" },
              { l: t.shisha.fruits, v: "+2€" },
              { l: t.shisha.premium, v: "20€" },
              { l: t.shisha.three, v: "3+1" },
            ].map(row => (
              <li key={row.l} className="flex items-center justify-between border-b border-[var(--gold)]/15 pb-4 last:border-0">
                <span className="text-foreground/85">{row.l}</span>
                <span className="font-display text-2xl gold-text">{row.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Flavours */}
      <section className="section-pad relative z-10">
        <h2 className="mb-12 text-center font-display text-4xl gold-gradient-text sm:text-5xl">{t.shisha.flavours}</h2>
        <div className="mx-auto grid max-w-5xl gap-5 px-2 sm:grid-cols-2 lg:grid-cols-3">
          {FLAVOURS.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-[var(--gold)]/30 bg-black/50 backdrop-blur-sm p-7 transition-all hover:-translate-y-1 hover:gold-glow"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-5 w-5 rounded-full ring-2 ring-[var(--gold)]/30" style={{ backgroundColor: f.color }} />
                <h3 className="font-display text-2xl text-foreground">{f.name}</h3>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs tracking-widest text-[var(--muted-foreground)]">CLASSIC / PREMIUM</span>
                <span className="font-display text-xl gold-text">12€ / 20€</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 mb-10 text-center">
          <Link to="/contact" className="group relative inline-block overflow-hidden rounded-full border border-[var(--gold)] px-10 py-4 text-sm tracking-[0.25em] gold-text transition-colors hover:text-background">
            <span className="absolute inset-0 -translate-x-full bg-[var(--gold)] transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative">{t.shisha.book}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}