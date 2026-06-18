import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Mast Lounge Cafe & Shisha" },
      { name: "description", content: "Browse the full Mast Lounge menu: coffee, cocktails, premium spirits, wine, beers and mocktails." },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; price: string; desc?: string };
type Section = { id: string; emoji: string; titleKey: keyof ReturnType<typeof useLanguage>["t"]["menu"]["cats"]; items: Item[] };

const SECTIONS: Section[] = [
  {
    id: "rofimata", emoji: "", titleKey: "rofimata",
    items: [
      { name: "Nescafe", price: "2,00€" },
      { name: "Espresso Διπλό", price: "2,20€" },
      { name: "Espresso Μονό", price: "2,00€" },
      { name: "Espresso Freddo", price: "2,20€" },
      { name: "Espresso Freddo XL", price: "4,00€" },
      { name: "Cappuccino Διπλό", price: "2,40€" },
      { name: "Cappuccino Μονό", price: "2,20€" },
      { name: "Καφές Φίλτρου", price: "2,00€" },
      { name: "Σοκολάτα", price: "2,50€" },
      { name: "Τσάι", price: "2,00€" },
    ],
  },
  {
    id: "anapsiktika", emoji: "", titleKey: "anapsiktika",
    items: [
      { name: "Coca Cola (Regular / Zero)", price: "2,00€" },
      { name: "Fanta (Orange, Blue, Lemon)", price: "2,00€" },
      { name: "Sprite", price: "2,00€" },
      { name: "Schweppes (Orange, Lemon, Ρόδι, Pink, Ginger)", price: "2,00€" },
      { name: "Soda", price: "2,00€" },
      { name: "Τσάι Ροδάκινο / Λεμόνι", price: "2,00€" },
      { name: "Energy Drink", price: "2,00€" },
      { name: "Amita", price: "2,00€" },
    ],
  },
  {
    id: "nero", emoji: "", titleKey: "nero",
    items: [
      { name: "Ανθρακούχο", price: "2,00€" },
      { name: "Natural 330ml", price: "0,50€" },
      { name: "Natural 1L", price: "1,00€" },
    ],
  },
  {
    id: "bires", emoji: "", titleKey: "bires",
    items: [
      { name: "Fix / Βαρέλι 300ml", price: "3,00€" },
      { name: "Fix / Βαρέλι 400ml", price: "4,00€" },
      { name: "Fix Άνευ", price: "3,50€" },
      { name: "Mythos", price: "3,50€" },
      { name: "Kaizer", price: "4,00€" },
      { name: "Carlsberg", price: "4,00€" },
      { name: "Mythos Radler / ICE", price: "4,00€" },
      { name: "FIX", price: "3,50€" },
    ],
  },
  {
    id: "premium", emoji: "", titleKey: "premium",
    items: [
      { name: "Vodka — Stoli", price: "5€" },
      { name: "Vodka — Elit", price: "8€" },
      { name: "Vodka — Grey Goose", price: "8€" },
      { name: "Gin — Tanqueray", price: "6€" },
      { name: "Gin — Finsbury", price: "5€" },
      { name: "Gin — The Botanist", price: "8€" },
      { name: "Gin — Bulldog", price: "8€" },
      { name: "Rum — Artesano 3", price: "5€" },
      { name: "Rum — Artesano Anejo", price: "6€" },
      { name: "Rum — Artesano Black", price: "7€" },
      { name: "Rum — Mount Gay", price: "8€" },
      { name: "Se Busca Mezcal", price: "8€" },
      { name: "Whiskey — Haig", price: "5€" },
      { name: "Whiskey — Cutty Shark", price: "5€" },
      { name: "Whiskey — Jameson", price: "5€" },
      { name: "Whiskey — West Cork", price: "6€" },
      { name: "Whiskey — Jameson Black Barrel", price: "7€" },
      { name: "Whiskey — Cutty Shark 12", price: "7€" },
      { name: "Whiskey — Johnnie Black Label", price: "7€" },
      { name: "Whiskey — Port Charlotte", price: "8€" },
      { name: "Whiskey — Cardhu", price: "7€" },
      { name: "Whiskey — Jack Daniels", price: "7€" },
      { name: "Whiskey — Dimple", price: "7€" },
      { name: "Whiskey — Jim Beam", price: "6€" },
      { name: "Whiskey — Wiseman", price: "8€" },
      { name: "Tequila — Sierra Reposado", price: "5€" },
      { name: "Tequila — Sierra Silver", price: "5€" },
      { name: "Tequila — Cenote", price: "8€" },
      { name: "Brandy — Metaxa 3", price: "3€" },
      { name: "Brandy — Metaxa 5", price: "5€" },
      { name: "Brandy — Metaxa 7", price: "7€" },
      { name: "Brandy — Metaxa 12", price: "8€" },
      { name: "Ούζο", price: "3,50€" },
      { name: "Raki", price: "6€" },
      { name: "Aperol", price: "5€" },
      { name: "Campari", price: "5€" },
      { name: "Southern Comfort", price: "6€" },
      { name: "Sambuca", price: "5€" },
      { name: "Malibu", price: "5€" },
      { name: "Disaronno", price: "5€" },
      { name: "Jägermeister", price: "6€" },
    ],
  },
  {
    id: "wine", emoji: "", titleKey: "wine",
    items: [
      { name: "Dry White (glass)", price: "3,50€" },
      { name: "Dry White 187ml", price: "4,00€" },
      { name: "Semi-sweet White (glass)", price: "3,50€" },
      { name: "Dry Red (glass)", price: "3,50€" },
      { name: "Dry Red 187ml", price: "4,00€" },
      { name: "Dry Rosé (glass)", price: "3,50€" },
      { name: "Dry Rosé 187ml", price: "4,00€" },
      { name: "Cinzano Prosecco", price: "4,00€" },
    ],
  },
  {
    id: "cocktails", emoji: "", titleKey: "cocktails",
    items: [
      { name: "Hugo Spritz", price: "8,00€", desc: "Prosecco, elderflower syrup, soda, mint, lime" },
      { name: "Mojito", price: "8,00€", desc: "Artesano, lime, sugar syrup, mint" },
      { name: "Aperol Spritz", price: "8,00€", desc: "Aperol, soda, Prosecco" },
      { name: "Mast Lover", price: "8,00€", desc: "Disaronno, lemon, passion fruit, Angostura bitter" },
      { name: "Mai Tai", price: "8,00€", desc: "Rum 3, dark rum, Marie Brizard, almond syrup, lime" },
      { name: "Paloma", price: "8,00€", desc: "Tequila, lime, grapefruit" },
      { name: "Forest Daiquiri", price: "8,00€", desc: "Rum, lime, passion fruit, sugar syrup" },
      { name: "Negroni", price: "8,00€", desc: "Gin, Campari, Martini" },
    ],
  },
  {
    id: "mocktails", emoji: "", titleKey: "mocktails",
    items: [
      { name: "Red Velvet", price: "7,00€", desc: "Forest fruit, lemon, hazelnut syrup, soda" },
      { name: "Peach Me Up", price: "7,00€", desc: "Almond, peach, soda, lemon" },
      { name: "Cubby Bear", price: "7,00€", desc: "Mango puree, lemon, ginger" },
      { name: "Blue Lagoon", price: "7,00€", desc: "Blue Curacao syrup, lemon juice, Sprite" },
    ],
  },
];

function MenuPage() {
  const { t } = useLanguage();
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 160, behavior: "smooth" });
  };

  return (
    <div className="bg-background pt-32">
      <div className="px-6 text-center">
        <h1 className="font-display text-5xl gold-gradient-text sm:text-7xl">{t.menu.title}</h1>
        <div className="mx-auto mt-4 h-px w-40 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
      </div>

      <div className="sticky top-[72px] z-40 mt-12 border-y border-[var(--gold)]/30 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-4 scrollbar-none">
          {SECTIONS.map(s => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium tracking-wider transition-all sm:text-sm ${
                active === s.id
                  ? "border-[var(--gold)] bg-[var(--gold)] text-background"
                  : "border-[var(--gold)]/40 gold-text hover:bg-[var(--gold)]/10"
              }`}
            >
              <span className="mr-1">{s.emoji}</span> {t.menu.cats[s.titleKey]}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-12 px-6 py-16">
        {SECTIONS.map(s => (
          <section key={s.id} id={s.id} className="scroll-mt-48 rounded-2xl border border-[var(--gold)]/25 bg-black/40 p-6 sm:p-10">
            <h2 className="mb-8 font-display text-3xl gold-gradient-text sm:text-4xl">
              <span className="mr-2">{s.emoji}</span>{t.menu.cats[s.titleKey]}
            </h2>
            <ul className="divide-y divide-[var(--gold)]/15">
              {s.items.map(it => (
                <li key={it.name} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground">{it.name}</p>
                    {it.desc && <p className="mt-0.5 text-xs italic text-[var(--muted-foreground)]">{it.desc}</p>}
                  </div>
                  <p className="shrink-0 font-display text-lg gold-text">{it.price}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
