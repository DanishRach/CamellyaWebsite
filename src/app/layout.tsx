import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camellya",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Tambahkan link ke favicon */}
        <link rel="icon" href="/icon.ico" type="image/x-icon" />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
