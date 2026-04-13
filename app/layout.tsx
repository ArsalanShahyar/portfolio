import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Arsalan Shahyar | AI & ML Developer Portfolio',
  description: 'Premium portfolio of Arsalan Shahyar, aspiring AI and Machine Learning developer. Explore projects, skills, education, and contact for collaboration.',
  openGraph: {
    title: 'Arsalan Shahyar | AI & ML Developer Portfolio',
    description: 'Premium portfolio of Arsalan Shahyar, aspiring AI and Machine Learning developer. Explore projects, skills, education, and contact for collaboration.',
    url: 'https://your-domain.com',
    siteName: 'Arsalan Shahyar Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arsalan Shahyar | AI & ML Developer Portfolio',
    description: 'Premium portfolio of Arsalan Shahyar, aspiring AI and Machine Learning developer. Explore projects, skills, education, and contact for collaboration.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"      data-scroll-behavior="smooth"      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col transition-colors duration-300">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
