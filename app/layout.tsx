import '@/styles/globals.css';
import { Metadata } from 'next';
import React from 'react';
import { Analytics } from '@vercel/analytics/react';

import { Providers } from './providers';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  verification: {
    google: '52_A2iC1h1k6lBb10MF7BgxbB2hb15KWvdqHwL1qDbA',
  },
  keywords: [
    'Vividverse',
    'sensory transformation',
    'writing enhancement',
    'convert senses',
    'creative writing tools',
    'sensory experiences',
    '감각 변환',
    '다른 표현',
  ],
  authors: {
    url: 'https://juniverse-dev.vercel.app/',
    name: 'Lee jiyoon',
  },
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      ko: '/ko',
      ja: '/ja',
      zh: '/zh',
    },
  },
  openGraph: {
    images: '/logo.png',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Analytics />
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>{children}</Providers>
      </body>
    </html>
  );
}
