'use client';

import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Button />;

  if (theme === 'dark') {
    return <Button onClick={() => setTheme('light')}>Light Mode</Button>;
  }

  return <Button onClick={() => setTheme('dark')}>Dark Mode</Button>;
}
