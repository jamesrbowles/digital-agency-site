import GeneralProvider from '@/hooks/Context';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import './globals.css';
import Providers from './providers';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-manrope',
});

export const metadata = {
  title: 'Pexel | Digital Agency',
  description:
    'Pexel is a leading full-service digital agency based in London. We make mobile apps, websites & brands, that people appreciate all around the world.',
  openGraph: {
    images: '/assets/meta-logo.png',
  },
};

type ChildrenProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} bg-white dark:bg-black text-black dark:text-white`}
      >
        <GeneralProvider>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </GeneralProvider>
      </body>
    </html>
  );
}
