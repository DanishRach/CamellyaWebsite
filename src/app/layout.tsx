import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camellya",
  description: "",
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
