import './globals.css';

import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/features/shadcn/utils';
import ClientProviders from '@/features/shared/components/ClientProviders';
import Toast from '@/features/ui/components/Toast';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create-next-app',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ClientProviders>
          {children}
          <Toast></Toast>
        </ClientProviders>
      </body>
    </html>
  );
}
