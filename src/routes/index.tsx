import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Star, Coffee, Wine, Flame } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import {  Maximize2 } from "lucide-react";
import image from "@/assets/slider-1.jpg";
import image2 from "@/assets/slider-2.jpg";
import image3 from "@/assets/slider-3.jpg";
import image4 from "@/assets/slider-4.jpg";
import image5 from "@/assets/slider-5.jpg";
import image6 from "@/assets/slider-6.jpg";
import image7 from "@/assets/slider-7.jpg";
import image8 from "@/assets/slider-8.jpg";
import image9 from "@/assets/slider-9.jpg";
import image10 from "@/assets/slider-10.jpg";
import image11 from "@/assets/slider-11.jpg";
import image12 from "@/assets/slider-12.jpg";
import image13 from "@/assets/slider-13.jpg";
import image14 from "@/assets/slider-14.jpg";
import image15 from "@/assets/slider-15.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mast Lounge Cafe & Shisha — Heraklion" },
      { name: "description", content: "Premium cafe & shisha lounge in Heraklion, Crete. Cocktails, coffee, and curated shisha flavours." },
    ],
  }),
  component: Home,
});

const HERO_IMAGES = [image, image2, image3];

const REVIEWS = [
  { name: "Nikos Christo", text: "Ένας υπέροχος χώρος για κάθε εποχή και κάθε περίσταση." },
  { name: "Natasa Kritikoy", text: "Το σέρβις ήταν 10/10, ο χώρος καταπληκτικός και η ατμόσφαιρα πολύ ευχάριστη. Όλοι ήταν πολύ ευγενικοί!" },
  { name: "Μαρία Αγογλωσσάκη", text: "Απλά ένας υπέροχος χώρος, ζεστός, προσιτός, πολύ καλή εξυπηρέτηση με ευγένεια και χαμόγελα!" },
  { name: "Manolis Milopotamitakis", text: "Καλό περιβάλλον, με άριστη εξυπηρέτηση, όλα ήταν τέλεια." },
  { name: "Ιωάννα Δραμητινού", text: "Ζεστό περιβάλλον, άμεση εξυπηρέτηση και κυρίως καλά παιδιά!" },
];

const GALLERY = [
  image,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
];

function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSlider />
      <ServedWithLove />
      <Gallery3D />
      <Highlights />
      <ReviewsMarquee />
      <FindUs />
    </div>
  );
}

function HeroSlider() {
  const { t } = useLanguage();
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI(p => (p + 1) % HERO_IMAGES.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {HERO_IMAGES.map((src, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-[1500ms]"
          style={{ opacity: i === idx ? 1 : 0 }}
        >
          <img
            src={src}
            alt={`Hero ${idx + 1}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.08), transparent 70%)" }} />
        </div>
      ))}

      {/* Dark vignette overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-black/40 to-background/30" />

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.5em] gold-text sm:text-sm"
        >
          {t.home.welcome}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 font-display text-6xl gold-gradient-text sm:text-8xl md:text-9xl"
        >
          {t.home.brand}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-2 font-accent text-2xl italic text-[var(--muted-foreground)] sm:text-3xl"
        >
          {t.home.tag}
        </motion.p>
      </div>


      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-[var(--gold)]" : "w-2 bg-[var(--gold)]/30"}`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function ServedWithLove() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <section ref={ref} className="section-pad text-center relative overflow-hidden">
      {/* Background slider-4.jpg */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${image4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/45 to-black/55" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="mx-auto max-w-3xl"
      >
        <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
        <p className="mt-10 font-accent text-3xl italic leading-snug text-foreground sm:text-5xl">
          "{t.home.lovedQuote}"
        </p>
        <p className="mt-8 text-base text-[var(--muted-foreground)] sm:text-lg">{t.home.lovedSub}</p>
        <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
      </motion.div>
    </section>
  );
}

function Gallery3D() {
  const { t } = useLanguage();
  const [center, setCenter] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const total = GALLERY.length;

  const prev = () => setCenter(p => (p - 1 + total) % total);
  const next = () => setCenter(p => (p + 1) % total);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox(p => (p! + 1) % total);
      if (e.key === "ArrowLeft") setLightbox(p => (p! - 1 + total) % total);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, total]);

  useEffect(() => {
    if (lightbox !== null) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [lightbox, total]);

  const getSlotProps = (idx: number) => {
    let offset = idx - center;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(false);
    dragStartX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    const endX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX.current - endX;
    if (Math.abs(diff) > 40) {
      setIsDragging(true);
      diff > 0 ? next() : prev();
    }
  };

  return (
    <section className="section-pad bg-background overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center font-display text-4xl gold-gradient-text sm:text-6xl"
      >
        {t.home.ourSpace}
      </motion.h2>

      <div
        className="relative mx-auto flex items-center justify-center select-none"
        style={{ perspective: "1200px", height: "420px", maxWidth: "100vw" }}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        {GALLERY.map((g, idx) => {
          const offset = getSlotProps(idx);
          const abs = Math.abs(offset);
          if (abs > 2) return null;

          const isCenter = offset === 0;
          const tx = offset * 220;
          const ry = -offset * 30;
          const scale = isCenter ? 1 : 1 - abs * 0.13;
          const opacity = isCenter ? 1 : 1 - abs * 0.35;
          const zIndex = isCenter ? 20 : 10 - abs;

          return (
            <div
              key={idx}
              onClick={() => {
                if (isDragging) return;
                isCenter ? setLightbox(idx) : setCenter(idx);
              }}
              className="absolute rounded-2xl overflow-hidden cursor-pointer"
              style={{
                width: "300px",
                height: "380px",
                transform: `translateX(${tx}px) rotateY(${ry}deg) scale(${scale})`,
                opacity,
                zIndex,
                transition: "all 0.65s cubic-bezier(0.25,0.46,0.45,0.94)",
                boxShadow: isCenter
                  ? "0 40px 80px rgba(201,168,76,0.3), 0 0 0 1px rgba(201,168,76,0.3)"
                  : "0 10px 40px rgba(0,0,0,0.6)",
              }}
            >
              <img
                src={g}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
              {isCenter && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 transition-colors duration-300">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 size={36} className="gold-text drop-shadow-lg" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {GALLERY.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCenter(idx)}
            className="rounded-full transition-all duration-300"
            style={{
              width: idx === center ? "28px" : "8px",
              height: "8px",
              background: idx === center ? "var(--gold)" : "rgba(201,168,76,0.3)",
            }}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button onClick={prev} className="rounded-full border border-[var(--gold)]/50 p-3 gold-text hover:bg-[var(--gold)]/20 transition-colors">
          <ChevronLeft size={20} />
        </button>
        <button onClick={next} className="rounded-full border border-[var(--gold)]/50 p-3 gold-text hover:bg-[var(--gold)]/20 transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-5 top-5 z-10 rounded-full border border-[var(--gold)]/50 p-2 gold-text hover:bg-[var(--gold)]/20 transition-colors"
            onClick={e => { e.stopPropagation(); setLightbox(null); }}
          >
            <X size={22} />
          </button>
          <button
            className="absolute left-5 top-1/2 -translate-y-1/2 z-10 rounded-full border border-[var(--gold)]/50 p-3 gold-text hover:bg-[var(--gold)]/20 transition-colors"
            onClick={e => { e.stopPropagation(); setLightbox(p => (p! - 1 + total) % total); }}
          >
            <ChevronLeft size={26} />
          </button>
          <div
            className="relative flex items-center justify-center"
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            onClick={e => e.stopPropagation()}
          >
            <img
              src={GALLERY[lightbox]}
              alt={`Lightbox ${lightbox + 1}`}
              className="max-w-[90vw] max-h-[90vh] rounded-xl object-contain"
              style={{ boxShadow: "0 0 60px rgba(201,168,76,0.2)" }}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1 text-sm gold-text tracking-widest">
              {lightbox + 1} / {total}
            </div>
          </div>
          <button
            className="absolute right-5 top-1/2 -translate-y-1/2 z-10 rounded-full border border-[var(--gold)]/50 p-3 gold-text hover:bg-[var(--gold)]/20 transition-colors"
            onClick={e => { e.stopPropagation(); setLightbox(p => (p! + 1) % total); }}
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </section>
  );
}

function Highlights() {
  const { t } = useLanguage();
  const cards = [
    { icon: Coffee, ...t.home.pastries },
    { icon: Wine, ...t.home.cocktails },
    { icon: Flame, ...t.home.shishaCard },
  ];
  return (
    <section className="section-pad relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Lighter overlay — πιο visible φωτογραφία */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/40 to-black/55" />

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center font-display text-4xl gold-gradient-text sm:text-5xl"
      >
        {t.home.highlights}
      </motion.h2>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded-2xl border border-[var(--gold)]/40 bg-black/30 backdrop-blur-sm p-8 transition-all hover:gold-glow hover:-translate-y-1"
            >
              <Icon size={36} className="gold-text" />
              <h3 className="mt-5 font-display text-3xl text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">{c.desc}</p>
              <ul className="mt-5 space-y-2">
                {c.items.map(it => (
                  <li key={it} className="flex items-center gap-2 text-sm text-foreground/85">
                    <span className="h-1 w-1 rounded-full bg-[var(--gold)]" /> {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-14 text-center">
        <Link to="/menu" className="group relative inline-block overflow-hidden rounded-full border border-[var(--gold)] px-10 py-4 text-sm tracking-[0.25em] gold-text transition-colors hover:text-background">
          <span className="absolute inset-0 -translate-x-full bg-[var(--gold)] transition-transform duration-500 group-hover:translate-x-0" />
          <span className="relative">{t.home.viewMenu}</span>
        </Link>
      </div>
    </section>
  );
}

function ReviewsMarquee() {
  const { t } = useLanguage();
  const [paused, setPaused] = useState(false);
  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <section className="section-pad relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Lighter overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/45 to-black/60" />

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center font-display text-3xl gold-gradient-text sm:text-4xl"
      >
        <Star size={20} className="mr-2 inline gold-text" fill="currentColor" />
        {t.home.reviewsTitle}
      </motion.h2>

      <div className="overflow-hidden cursor-pointer" onClick={() => setPaused(p => !p)}>
        <div className={`flex w-max gap-6 animate-marquee ${paused ? "paused" : ""}`}>
          {loop.map((r, i) => (
            <div key={i} className="w-[320px] shrink-0 rounded-xl border border-[var(--gold)]/40 bg-black/35 backdrop-blur-sm p-6 sm:w-[380px]">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} className="gold-text" fill="currentColor" />
                ))}
              </div>
              <p className="font-display text-lg gold-text">{r.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-[var(--muted-foreground)]">
        {paused ? "▶ Tap to resume" : "⏸ Tap to pause"}
      </p>
    </section>
  );
}
function FindUs() {
  const { t } = useLanguage();
  return (
    <section className="section-pad" style={{ background: "var(--gradient-dark)" }}>
      <h2 className="mb-10 text-center font-display text-4xl gold-gradient-text sm:text-5xl">{t.home.findUs}</h2>
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[var(--gold)]/40 gold-glow">
        <iframe
          title="Mast Lounge map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210.24350399254956!2d25.236785584208953!3d35.26007744936685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a5ff07e78133b%3A0x2138029471c634d0!2sMAST%20lounge%20cafe!5e1!3m2!1sel!2sgr!4v1781726751169!5m2!1sel!2sgr"
          className="h-[420px] w-full"
          loading="lazy"
        />
      </div>
    </section>
  );
}