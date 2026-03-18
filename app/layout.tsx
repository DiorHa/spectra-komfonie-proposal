import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spectra x Komfonie | Dedicated Engineering Support",
  description:
    "Structured proposal microsite for a dedicated nearshore support model tailored to Komfonie's HLKS and BIM workflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
