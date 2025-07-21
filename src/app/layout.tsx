import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Importa a fonte Inter
import './globals.css'; // Importa os estilos globais (Tailwind CSS)

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Carlos Henrique | Desenvolvedor Frontend',
  description: 'Portfólio pessoal de Carlos Henrique de Oliveira, Desenvolvedor Frontend Júnior com React.js, TypeScript e Tailwind CSS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}