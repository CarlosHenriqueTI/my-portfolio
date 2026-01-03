import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Importa a fonte Inter
import './globals.css'; // Importa os estilos globais (Tailwind CSS)
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://carloshenrique.dev'),
  title: {
    default: 'Carlos Henrique | Desenvolvedor Frontend',
    template: '%s | Carlos Henrique'
  },
  description: 'Portifólio profissonal de Carlos Henrique de Oliveira Henrique, Desenvolvedor Frontend Júnior especializado em React.js, TypeScript, Next.js e Tailwind CSS.',
  keywords: ['Carlos Henrique', 'Frontend Developer', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Web Developer'],
  authors: [{ name: 'Carlos Henrique', url: 'https://github.com/CarlosHenriqueTI' }],
  creator: 'Carlos Henrique',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://carloshenrique.dev',
    title: 'Carlos Henrique | Desenvolvedor Frontend',
    description: 'Portifólio profissonal de Carlos Henrique de Oliveira Henrique, Desenvolvedor Frontend Júnior',
    siteName: 'Carlos Henrique Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlos Henrique | Desenvolvedor Frontend',
    description: 'Portifólio profissonal de Carlos Henrique de Oliveira Henrique',
    creator: '@CarlosHenriqueTI',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}