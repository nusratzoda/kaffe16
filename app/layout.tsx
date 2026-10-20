import type { Metadata } from "next";
import { Instrument_Serif, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
const display = Instrument_Serif({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body" });
const desc = "Specialty coffee and comfort food in a quiet concrete-and-greenery café on Jalan Panggong, Kuala Lumpur.";
export const metadata: Metadata = {
  title: "Kaffe 16 | Café on Jalan Panggong, Kuala Lumpur",
  description: desc,
  openGraph: { title: "Kaffe 16", description: desc, type: "website", locale: "en_MY" },
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${display.variable} ${body.variable}`}><body className="font-body antialiased">{children}</body></html>;
}
