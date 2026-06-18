import { Instagram, Facebook, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-[var(--gold)]/30 bg-[#070707]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
        <div>
          <h3 className="mb-4 font-display text-xl gold-text">{t.contact.phone}</h3>
          <a href="tel:2810772162" className="flex items-center gap-2 text-foreground/80 transition-colors hover:text-[var(--gold-light)]">
            <Phone size={16} className="gold-text" /> 2810 772162
          </a>
        </div>
        <div>
          <h3 className="mb-4 font-display text-xl gold-text">{t.contact.address}</h3>
          <p className="flex items-start gap-2 text-foreground/80">
            <MapPin size={16} className="mt-1 shrink-0 gold-text" /> {t.contact.addressVal}
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-display text-xl gold-text">Social</h3>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/mast_lounge_cafe/" target="_blank" rel="noreferrer" className="rounded-full border border-[var(--gold)]/60 p-3 gold-text transition-all hover:bg-[var(--gold)] hover:text-background">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/p/Mast_lounge_cafe-100062951874143/" target="_blank" rel="noreferrer" className="rounded-full border border-[var(--gold)]/60 p-3 gold-text transition-all hover:bg-[var(--gold)] hover:text-background">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--gold)]/15 px-6 py-5 text-center text-xs tracking-wider text-[var(--muted-foreground)]">
        © 2024 Mast Lounge Cafe &amp; Shisha — {t.footer.rights}
      </div>
    </footer>
  );
}
