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
        <p className="mt-4 text-foreground/70">This page could not be found.</p>
        <a href="/" className="mt-6 inline-block rounded-full border border-[var(--gold)] px-6 py-2 text-sm tracking-widest gold-text transition-all hover:bg-[var(--gold)] hover:text-background">
          HOME
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
        <h1 className="font-display text-2xl gold-text">Something went wrong</h1>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-full border border-[var(--gold)] px-6 py-2 text-sm tracking-widest gold-text hover:bg-[var(--gold)] hover:text-background">
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mast Lounge Cafe & Shisha" },
      { name: "description", content: "Mast Lounge — premium cafe & shisha experience in Heraklion, Crete." },
      { property: "og:title", content: "Mast Lounge Cafe & Shisha" },
      { property: "og:description", content: "Premium cafe & shisha experience in Heraklion, Crete." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
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
