import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import slider1 from "@/assets/slider-1.jpg";
import slider3 from "@/assets/slider-10.jpg";
import slider4 from "@/assets/slider-4.jpg";
import slider5 from "@/assets/slider-7.jpg";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Mast Lounge" },
      { name: "description", content: "More than a café. Discover the Mast Lounge experience — atmosphere, shisha, cocktails." },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  const { t } = useLanguage();
  const sections = [
    { t: t.experience.s1t, b: t.experience.s1b, img: slider4 },
    { t: t.experience.s2t, b: t.experience.s2b, img: slider1 },
    { t: t.experience.s3t, b: t.experience.s3b, img: slider3 },
    { t: t.experience.s4t, b: t.experience.s4b, img: slider5 },
  ];

  return (
    <div className="relative pt-32">

      {/* Background image — stretched to full page */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          backgroundImage: `url(${slider1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1,
          background: "rgba(0,0,0,0.65)",
        }}
      />
      {/* Gold glow */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 2,
          background: "radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.1) 0%, transparent 65%)",
        }}
      />

      {/* All content sits above the background */}
      <div style={{ position: "relative", zIndex: 3 }}>

        {/* Hero header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="px-6 text-center"
        >
          <h1 className="font-display text-5xl gold-gradient-text sm:text-7xl">{t.experience.title}</h1>
          <div className="mx-auto mt-4 h-px w-40 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
        </motion.div>

        <div className="mx-auto max-w-6xl space-y-24 px-6 py-24">
          {sections.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className={`grid items-center gap-10 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div>
                  <p className="mb-3 text-xs tracking-[0.4em] gold-text">{String(i + 1).padStart(2, "0")}</p>
                  <h2 className="font-display text-4xl gold-gradient-text sm:text-5xl">{s.t}</h2>
                  <div className="mt-5 h-px w-20 bg-[var(--gold)]" />
                  <p className="mt-6 text-base leading-relaxed text-foreground/90 sm:text-lg">{s.b}</p>
                </div>

                <div
                  className="relative h-[340px] overflow-hidden rounded-2xl border border-[var(--gold)]/40"
                  style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.2)" }}
                >
                  {s.img ? (
                    <>
                      <img
                        src={s.img}
                        alt={s.t}
                        className="h-full w-full object-cover"
                        style={{ filter: "brightness(0.85)" }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%), radial-gradient(ellipse at center, rgba(201,168,76,0.1), transparent 70%)",
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <div className="h-full w-full" style={{ background: "linear-gradient(135deg, #1a1200, #3a2810)" }} />
                      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.2), transparent 60%)" }} />
                      <div className="absolute bottom-6 right-6 font-display text-7xl text-[var(--gold)]/20">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}