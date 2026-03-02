import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MAH Quantum Talent Showcase",
  description:
    "Where Real Projects Become Real Careers. Showcase your AI/tech work. Get discovered by industry.",
  keywords: ["AI", "GPU", "CUDA", "LLM", "talent", "portfolio", "MAH Quantum"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased bg-[#020b14] text-slate-200`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
