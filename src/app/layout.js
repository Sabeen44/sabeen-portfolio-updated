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
  description: 'Portfolio of Sabeen Chaudhry, a full-stack web developer specializing in React, Next.js, and user-centered design.',
  openGraph: {
    title: 'Sabeen — Web Developer',
    description: 'Full-stack web developer specializing in React, Next.js, and user-centered design.',
    url: 'https://sabeen44.github.io/Portfolio/',
    siteName: 'Sabeen Chaudhry — Portfolio',
    images: [{ url: '/profile-pic.jpeg', width: 800, height: 600, alt: 'Sabeen Chaudhry, Web Developer' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sabeen — Web Developer',
    description: 'Full-stack web developer specializing in React, Next.js, and user-centered design.',
    images: ['/profile-pic.jpeg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= {`${playfair.variable} ${dmSans.variable} antialiased`}
        style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
     
        <Navbar />
        {children}
      </body>
    </html>
  );
}

