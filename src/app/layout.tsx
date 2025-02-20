import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camellya",
  description: "",
  icons: {
    icon: "/icon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
