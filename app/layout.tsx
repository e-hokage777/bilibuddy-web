import type { Metadata } from "next";
import { Montserrat, Libre_Baskerville, Inconsolata } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next"

/* sans-serif font */
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

/** serif font */
const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
});

/** mono font */
const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BiliBuddy",
  description: "Measure bilirubin levels of newborn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${libreBaskerville.variable} ${inconsolata.variable} font-sans antialiased`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
