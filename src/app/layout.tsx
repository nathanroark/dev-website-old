import './globals.css';
import NavBar from '@/components/Nav';
import MobileNavBar from '@/components/MobileNav';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: {
    default: 'Nathan Roark',
    template: '%s | Nathan Roark',
  },
  description: 'Software Engineer',
  openGraph: {
    title: 'Nathan Roark',
    description: 'Software Engineer',
    url: 'https://nathanroark.dev',
    siteName: 'Nathan Roark',
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: 'https://nathanroark.dev/og.png',
        width: 800,
        height: 400,
      },
    ],
  },
  twitter: {
    title: 'Nathan Roark',
    card: 'summary_large_image',
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
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="w-[6%] fixed left-0 h-full z-50 hidden md:visible lg:block md:block">
          <NavBar />
        </div>
        <div className="fixed top-0 w-full z-50 block md:hidden px-8 pt-4">
          <MobileNavBar />
        </div>
        <div
          className="pt-24 md:pt-0 text-zinc-200 flex justify-center items-center min-h-screen max-h-auto
        bg-gradient-to-br from-[#111] to-zinc-950"
        >
          <main className="max-w-5xl w-[90%] md:w-[80%] pt-12 md:pl-[3%]">
            {children} <Analytics />
          </main>
        </div>
      </body>
    </html>
  );
}
