import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "rettio | Claridad financiera para quien decide",
  description: "Tu negocio tiene las respuestas... pero todavía no habla tu idioma. Construimos el sistema de información que tu empresa necesita para dejar de decidir a ciegas.",
  metadataBase: new URL("https://rettio.pro"),
  alternates: {
    canonical: "https://rettio.pro",
  },
  openGraph: {
    title: "rettio | Claridad financiera para quien decide",
    description: "Tu negocio tiene las respuestas... pero todavía no habla tu idioma.",
    url: "https://rettio.pro",
    siteName: "rettio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "rettio — Claridad financiera para quien decide",
      },
    ],
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "rettio | Claridad financiera para quien decide",
    description: "Tu negocio tiene las respuestas... pero todavía no habla tu idioma.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "rettio",
              "url": "https://rettio.pro",
              "description": "Gestión financiera para empresas en crecimiento. Construimos el sistema de información que tu empresa necesita para dejar de decidir a ciegas.",
              "areaServed": "UY",
              "serviceType": "Gestión financiera",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+59892922583",
                "contactType": "customer service",
                "availableLanguage": "Spanish",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#080D1A] text-[#FAF8F5] antialiased">
        {children}
      </body>
    </html>
  );
}
