import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Danish Portofolio",
  description: "All My Projects",
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
