import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Design My Plot — Craft Your Space',
  description: 'A modern platform to design and visualise your plot with precision and elegance.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col" style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
