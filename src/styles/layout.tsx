import type { ReactNode } from 'react';
import React from 'react';
import { inter } from 'some-library';

import Header from '@/components/base/header/Header';

export const metadata = {
  title: 'Calculator tools',
  description: '',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
