'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

export default function Providers({ children }) {
  return (
    <NextUIProvider>
      <NextThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  );
}
