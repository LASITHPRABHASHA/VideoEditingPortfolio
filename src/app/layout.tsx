import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional Video Editor | Level 2 Fiverr Expert",
  description: "Professional video editing services specializing in cinematic content, motion graphics, and premium post-production. Level 2 Fiverr seller with 5+ years experience.",
  keywords: "video editing, motion graphics, premiere pro, after effects, davinci resolve, fiverr, professional editor",
  authors: [{ name: "Professional Video Editor" }],
  openGraph: {
    title: "Professional Video Editor Portfolio",
    description: "Award-winning video editor with 5+ years experience creating stunning visual content",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-dark text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
