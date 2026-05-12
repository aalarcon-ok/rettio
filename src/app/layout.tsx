import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "rettio",
  description: "Los números están. Las respuestas a tus preguntas, todavía no.",
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
      </head>
      <body className="min-h-screen bg-[#0D0D12] text-[#FAF8F5] antialiased">
        {children}
      </body>
    </html>
  );
}
