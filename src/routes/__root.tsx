import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LanguageProvider } from "../lib/i18n";
import { LoadingScreen } from "../components/LoadingScreen";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl gold-gradient-text">404</h1>
        <p className="mt-4 text-foreground/70">Η σελίδα δεν βρέθηκε.</p>
        <a href="/" className="mt-6 inline-block rounded-full border border-[var(--gold)] px-6 py-2 text-sm tracking-widest gold-text transition-all hover:bg-[var(--gold)] hover:text-background">
          ΑΡΧΙΚΗ
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="font-display text-2xl gold-text">Κάτι πήγε στραβά</h1>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-full border border-[var(--gold)] px-6 py-2 text-sm tracking-widest gold-text hover:bg-[var(--gold)] hover:text-background">
          Δοκιμάστε ξανά
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Mast Lounge Cafe & Shisha — Επισκοπή Ηρακλείου Κρήτης" },
      { name: "description", content: "Mast Lounge Cafe & Shisha στην Επισκοπή Ηρακλείου Κρήτης. Premium καφέ, cocktails και ναργιλές σε έναν μοναδικό χώρο." },
      { name: "keywords", content: "Mast Lounge, cafe Επισκοπή, shisha Κρήτη, ναργιλές Ηράκλειο, shisha lounge Crete, lounge cafe Heraklion, cocktails Επισκοπή, cafe bar Κρήτη, shisha bar Heraklion, ναργιλές Κρήτη, Mast shisha, lounge Επισκοπή Ηρακλείου, καφέ Επισκοπή, shisha cafe Crete, premium shisha Heraklion" },
      { name: "author", content: "Mast Lounge Cafe & Shisha" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#c9a84c" },
      { name: "geo.region", content: "GR-91" },
      { name: "geo.placename", content: "Επισκοπή, Ηράκλειο, Κρήτη" },
      { name: "geo.position", content: "35.260077;25.236786" },
      { name: "ICBM", content: "35.260077, 25.236786" },
      { property: "og:title", content: "Mast Lounge Cafe & Shisha — Επισκοπή Ηρακλείου" },
      { property: "og:description", content: "Premium cafe, cocktails και shisha lounge στην Επισκοπή Ηρακλείου Κρήτης. Ζεστή ατμόσφαιρα, άριστη εξυπηρέτηση." },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "https://mastloungecafe.gr/" },
      { property: "og:image", content: "https://mastloungecafe.gr/slider-1.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mast Lounge Cafe & Shisha — Επισκοπή Ηρακλείου" },
      { property: "og:locale", content: "el_GR" },
      { property: "og:site_name", content: "Mast Lounge Cafe & Shisha" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mast Lounge Cafe & Shisha — Επισκοπή Ηρακλείου" },
      { name: "twitter:description", content: "Premium cafe, cocktails και shisha lounge στην Επισκοπή Ηρακλείου Κρήτης." },
      { name: "twitter:image", content: "https://mastloungecafe.gr/slider-1.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", href: "/logo.png" },
      { rel: "canonical", href: "https://mastloungecafe.gr/" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="el">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              name: "Mast Lounge Cafe & Shisha",
              description: "Premium cafe, cocktails και shisha lounge στην Επισκοπή Ηρακλείου Κρήτης.",
              url: "https://mastloungecafe.gr/",
              telephone: "+302810772162",
              image: "https://mastloungecafe.gr/slider-1.jpg",
              priceRange: "€€",
              servesCuisine: ["Coffee", "Cocktails", "Shisha"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Επισκοπή",
                addressLocality: "Ηράκλειο",
                addressRegion: "Κρήτη",
                postalCode: "714 00",
                addressCountry: "GR",
              },
              geo: { "@type": "GeoCoordinates", latitude: 35.26010226659159, longitude: 25.236827552150867 },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "02:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "10:00", closes: "03:00" },
              ],
              sameAs: ["https://www.instagram.com/mast_lounge_cafe/", "https://www.facebook.com/mastlounge"],
              aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "5", bestRating: "5" },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-27N294FY3R" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-27N294FY3R');`,
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}

function AppShell() {
  const [initialLoad, setInitialLoad] = useState(true);
  const [routeLoad, setRouteLoad] = useState(false);
  const pathname = useRouterState({ select: s => s.location.pathname });

  useEffect(() => {
    const t = setTimeout(() => setInitialLoad(false), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (initialLoad) return;
    setRouteLoad(true);
    const t = setTimeout(() => setRouteLoad(false), 1200);
    return () => clearTimeout(t);
  }, [pathname, initialLoad]);

  return (
    <>
      <LoadingScreen show={initialLoad || routeLoad} />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <AppShell />
      </LanguageProvider>
    </QueryClientProvider>
  );
}