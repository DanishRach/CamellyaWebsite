import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camellya",
  description: "My 'Waifu' website",
  icons: {
    icon: "/icon.ico?v=2",
    apple: "/icon.ico?v=2",
  },
  openGraph: {
    title: "Camellya",
    description: "A dedicated website for my waifu ❤️.",
    url: "https://camellya-website.vercel.app/", // Sesuaikan dengan URL website
    siteName: "Camellya",
    images: [
      {
        url: "https://camellya-website.vercel.app/1.jpg", // Gantilah dengan path gambar yang benar
        width: 1200,
        height: 630,
        alt: "Camellya - My Waifu",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico?v=2" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.ico?v=2" />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
