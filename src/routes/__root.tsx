import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display text-brand">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">This sector is unsecured.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-bold tracking-widest uppercase text-primary-foreground hover:shadow-glow transition-all">Return to base</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Terrain Protection Services Pvt Ltd | Premier Security Company in Kerala, India" },
      { name: "description", content: "Terrain Force – Kerala's leading security company. Armed & unarmed guards, corporate security, training, antecedents verification across 12 Indian states. 4200+ trained staff. Call 0484 4304400." },
      { name: "keywords", content: "security company Kerala, armed guards Kochi, corporate security India, Terrain Force, protection services, antecedents verification, TRAC tracking, CAPSI security" },
      { name: "author", content: "Terrain Protection Services Pvt Ltd" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Terrain Protection Services Pvt Ltd | Premier Security Company in Kerala, India" },
      { property: "og:description", content: "Terrain Force – Kerala's leading security company. Armed & unarmed guards, corporate security, training, antecedents verification across 12 Indian states. 4200+ trained staff. Call 0484 4304400." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://terrainforce.com" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Terrain Protection Services Pvt Ltd | Premier Security Company in Kerala, India" },
      { name: "twitter:description", content: "Terrain Force – Kerala's leading security company. Armed & unarmed guards, corporate security, training, antecedents verification across 12 Indian states. 4200+ trained staff. Call 0484 4304400." },
      { name: "theme-color", content: "#80BA41" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/56c4ff69-7671-41d2-8d6d-9a5e1a1ce20e/id-preview-056bbb4c--a26563b6-bd3a-4e8b-96a6-0003ded915ce.lovable.app-1777982242832.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/56c4ff69-7671-41d2-8d6d-9a5e1a1ce20e/id-preview-056bbb4c--a26563b6-bd3a-4e8b-96a6-0003ded915ce.lovable.app-1777982242832.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@300;400;600;700;800&display=swap" },
      { rel: "canonical", href: "https://terrainforce.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SecurityService",
          name: "Terrain Protection Services Pvt Ltd",
          alternateName: "Terrain Force",
          description: "Premier security company in Kerala providing armed and unarmed guards, corporate security, training, and antecedents verification across India.",
          url: "https://terrainforce.com",
          telephone: "+91-484-4304400",
          email: "info@terrainforce.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1st Floor, 46/2914 B, Madathiparambu Road, Vennala P.O",
            addressLocality: "Kochi",
            addressRegion: "Kerala",
            postalCode: "682028",
            addressCountry: "IN",
          },
          areaServed: ["Kerala", "Tamil Nadu", "Karnataka", "Telangana", "India"],
          sameAs: [
            "https://www.facebook.com/Terrainforce",
            "https://www.linkedin.com/company/terrain-force-private-limited",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: () => <Outlet />,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
