import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import logo from "@/assets/mast-logo.png";

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: s => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/menu", label: t.nav.menu },
    { to: "/shisha", label: t.nav.shisha },
    { to: "/experience", label: t.nav.experience },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled || open
            ? "bg-background/95 backdrop-blur-md border-b border-[var(--gold)]/30"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="rounded-full  p-1.5">
              <img src={logo} alt="Mast" className="h-10 w-15 object-contain" />
            </div>
            <span className="font-display text-2xl tracking-widest gold-text">cafe & shisha</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
  <button
    onClick={() => setLang(lang === "el" ? "en" : "el")}
    className="rounded-full border border-[var(--gold)]/50 px-3 py-1.5 transition-all hover:bg-[var(--gold)]/10"
  >
    <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>
      {lang === "el" ? "🇬🇧" : "🇬🇷"}
    </span>
  </button>
  <button
    onClick={() => setOpen(o => !o)}
    aria-label="Toggle menu"
    className="rounded-full p-4 gold-text transition-colors hover:bg-[var(--gold)]/10"
  >
    {open ? <X size={26} /> : <Menu size={26} />}
  </button>
</div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-background/98 backdrop-blur-xl"
          >
            <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.3), transparent 60%)" }} />
            <nav className="relative flex flex-col items-center gap-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl tracking-wide text-foreground transition-colors hover:text-[var(--gold-light)] sm:text-6xl"
                    activeProps={{ className: "gold-gradient-text" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
