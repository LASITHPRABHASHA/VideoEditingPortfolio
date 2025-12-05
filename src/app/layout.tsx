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
  title: "Lasith Prabasha - Professional Video Editor | Level 2 Fiverr Expert",
  description: "Official portfolio website of Lasith Prabasha. Professional video editor specializing in cinematic content, motion graphics, and premium post-production. Level 2 Fiverr seller with 5+ years experience.",
  keywords: "Lasith Prabasha, online course editor, course editor, video editing, motion graphics, premiere pro, after effects, davinci resolve, fiverr, professional editor, video production",
  authors: [{ name: "Lasith Prabasha" }],
  creator: "Lasith Prabasha",
  metadataBase: new URL('https://lasithprabasha.com'),
  openGraph: {
    title: "Lasith Prabasha - Professional Video Editor Portfolio",
    description: "Award-winning video editor with 5+ years experience creating stunning visual content",
    type: "website",
    url: "https://lasithprabasha.com",
    siteName: "Lasith Prabasha Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Lasith Prabasha",
              "url": "https://lasithprabasha.com",
              "jobTitle": "Professional Video Editor",
              "description": "Level 2 Fiverr seller specializing in video editing, motion graphics, and post-production services",
              "sameAs": [
                "https://www.fiverr.com/lasithprabasha",
                "https://www.upwork.com/freelancers/lasithp4",
                "https://www.linkedin.com/in/lasithprabasha",
                "https://github.com/lasithprabasha"
              ],
              "knowsAbout": [
                "Video Editing",
                "Motion Graphics",
                "Adobe Premiere Pro",
                "Adobe After Effects",
                "DaVinci Resolve",
                "Color Grading",
                "Visual Effects"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-dark text-foreground`}
      >
        {children}
      </body>
    </html>
  );
};