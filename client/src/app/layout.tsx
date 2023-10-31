import type { Metadata } from 'next';

import { Heebo } from 'next/font/google';

import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const heebo = Heebo({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'frontend developer Shimdoyeon',
  description: '프론트엔드 개발자 심도연의 포트폴리오',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={heebo.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
