import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mast Lounge" },
      { name: "description", content: "Visit or contact Mast Lounge Cafe & Shisha in Heraklion, Crete." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLanguage();
  return (
    <div className="bg-background pt-32">
      <div className="px-6 text-center">
        <h1 className="font-display text-5xl gold-gradient-text sm:text-7xl">{t.contact.title}</h1>
        <div className="mx-auto mt-4 h-px w-40 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
        <div className="space-y-8">
          <div className="rounded-2xl border border-[var(--gold)]/30 bg-black/40 p-6">
            <div className="mb-2 flex items-center gap-3 gold-text">
              <Phone size={18} /> <span className="text-xs tracking-widest">{t.contact.phone.toUpperCase()}</span>
            </div>
            <a href="tel:2810772162" className="font-display text-3xl text-foreground transition-colors hover:text-[var(--gold-light)]">2810 772162</a>
          </div>

          <div className="rounded-2xl border border-[var(--gold)]/30 bg-black/40 p-6">
            <div className="mb-2 flex items-center gap-3 gold-text">
              <MapPin size={18} /> <span className="text-xs tracking-widest">{t.contact.address.toUpperCase()}</span>
            </div>
            <p className="font-display text-2xl text-foreground">{t.contact.addressVal}</p>
          </div>

          <div className="rounded-2xl border border-[var(--gold)]/30 bg-black/40 p-6">
            <div className="mb-3 flex items-center gap-3 gold-text">
              <Clock size={18} /> <span className="text-xs tracking-widest">{t.contact.hours.toUpperCase()}</span>
            </div>
            <p className="text-foreground/85">{t.contact.weekdays}</p>
            <p className="mt-1 text-foreground/85">{t.contact.weekend}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="hhttps://www.instagram.com/mast_lounge_cafe/" target="_blank" rel="noreferrer" className="group flex flex-1 items-center justify-center gap-3 overflow-hidden rounded-full border border-[var(--gold)] px-6 py-3 gold-text transition-colors hover:text-background relative">
              <span className="absolute inset-0 -translate-x-full bg-[var(--gold)] transition-transform duration-500 group-hover:translate-x-0" />
              <Instagram size={18} className="relative" />
              <span className="relative text-sm tracking-widest">@mastlounge</span>
            </a>
            <a href="https://www.facebook.com/p/Mast_lounge_cafe-100062951874143/" target="_blank" rel="noreferrer" className="group flex flex-1 items-center justify-center gap-3 overflow-hidden rounded-full border border-[var(--gold)] px-6 py-3 gold-text transition-colors hover:text-background relative">
              <span className="absolute inset-0 -translate-x-full bg-[var(--gold)] transition-transform duration-500 group-hover:translate-x-0" />
              <Facebook size={18} className="relative" />
              <span className="relative text-sm tracking-widest">Mast Lounge</span>
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[var(--gold)]/40 gold-glow">
          <iframe
            title="Mast Lounge map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210.24350399254956!2d25.236785584208953!3d35.26007744936685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a5ff07e78133b%3A0x2138029471c634d0!2sMAST%20lounge%20cafe!5e1!3m2!1sel!2sgr!4v1781726751169!5m2!1sel!2sgr"
            className="h-full min-h-[500px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
