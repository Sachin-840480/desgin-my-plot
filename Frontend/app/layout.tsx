import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Design My Plot',
  description: 'Sketch plot boundaries, arrange structures, and plan land layouts.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('font-mono', jetbrainsMono.variable)}>
      <body>
        <ClerkProvider signInUrl="/auth/sign-in" signUpUrl="/auth/sign-up">
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
