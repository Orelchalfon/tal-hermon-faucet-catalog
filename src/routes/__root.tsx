import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
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
      { title: "טל חרמון — ברזי מזיגה למים קרים, חמים וסודה" },
      {
        name: "description",
        content:
          "פתרון תת־כיורי אלגנטי למים קרים, רותחים וסודה — ברזי מזיגה בעיצוב פרימיום מבית טל חרמון.",
      },
      { name: "author", content: "טל חרמון" },
      { property: "og:title", content: "טל חרמון — ברזי מזיגה למים קרים, חמים וסודה" },
      {
        property: "og:description",
        content:
          "פתרון תת־כיורי אלגנטי למים קרים, רותחים וסודה — בלי בר מים על השיש.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "טל חרמון — ברזי מזיגה למים קרים, חמים וסודה" },
      { name: "description", content: "A premium Hebrew RTL catalog page showcasing a multi-function soda tap faucet system." },
      { property: "og:description", content: "A premium Hebrew RTL catalog page showcasing a multi-function soda tap faucet system." },
      { name: "twitter:description", content: "A premium Hebrew RTL catalog page showcasing a multi-function soda tap faucet system." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/655b4932-551b-4101-93d3-0ce15513fa4e/id-preview-ebbd1453--a4a6f8f8-53f6-4245-9243-8c7d61e7e320.lovable.app-1778059892337.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/655b4932-551b-4101-93d3-0ce15513fa4e/id-preview-ebbd1453--a4a6f8f8-53f6-4245-9243-8c7d61e7e320.lovable.app-1778059892337.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
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

function RootComponent() {
  return <Outlet />;
}
