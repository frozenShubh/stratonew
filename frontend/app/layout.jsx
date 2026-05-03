import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Analytics } from '@/components/Analytics';
import { Suspense } from 'react';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata = {
  title: 'Stratosport - Shaping Technology',
  description: 'AI-centric engineering and software development services.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};


export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#020507] text-[#D9EAF6] antialiased">
        <ScrollProgress />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <main className="App">
          {children}
        </main>
      </body>
    </html>
  );
}



