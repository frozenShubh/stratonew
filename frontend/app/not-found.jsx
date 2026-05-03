import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { NotFoundClient } from './NotFoundClient';

export const metadata = {
  title: 'Page Not Found | Stratosport',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020507]">
      <Header />
      <NotFoundClient />
      <Footer />
    </div>
  );
}


