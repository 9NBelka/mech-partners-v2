import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MECH Partners — Постачальники запчастин для автосервісів',
  description:
    'MECH Partners — інтеграція вашого каталогу запчастин в екосистему MECHorbit. Прямий доступ до 1000+ автосервісів. Механік замовляє у вас в один клік. Безкоштовна інтеграція.',
  keywords: [
    'mech partners',
    'запчастини',
    'постачальники',
    'автосервіс',
    'СТО',
    'MECHorbit',
    'інтеграція',
  ],
  authors: [{ name: 'MECH Partners' }],
  robots: { index: true, follow: true },

  openGraph: {
    title: 'MECH Partners — Постачальники запчастин для автосервісів',
    description:
      'Інтегруйте ваш каталог в MECHorbit і отримайте прямий доступ до 1000+ СТО. Механік замовляє у вас в один клік — без дзвінків і очікування.',
    type: 'website',
    url: 'https://mech.partners',
    siteName: 'MECH Partners',
    images: [{ url: 'https://mech.partners/images/logo.svg' }],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'MECH Partners — Постачальники запчастин для автосервісів',
    description:
      'Прямий доступ до 1000+ СТО. Механік замовляє у вас в один клік. Безкоштовна інтеграція.',
    images: ['https://mech.partners/images/logo.svg'],
  },

  alternates: {
    canonical: 'https://mech.partners/ua',
    languages: {
      uk: 'https://mech.partners/ua',
      ru: 'https://mech.partners/ru',
      en: 'https://mech.partners/en',
      'x-default': 'https://mech.partners/ua',
    },
  },

  icons: {
    icon: [{ url: '/logo.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/logo.svg' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='uk' dir='ltr'>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
