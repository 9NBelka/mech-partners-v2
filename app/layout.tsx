import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MECH Partners',
  description: 'Постачальники запчастин для автосервісів',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
