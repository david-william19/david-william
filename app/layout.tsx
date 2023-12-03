import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'David William Da Costa',
  description: 'welcome to my portofolio, I am a Frontend Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
