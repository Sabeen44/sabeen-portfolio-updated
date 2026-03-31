import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata = {
  title: 'Sabeen — Web Developer',
  description: 'Portfolio of Sabeen, a passionate web developer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}
        style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}