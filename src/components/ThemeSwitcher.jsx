'use client';

import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import MoonIcon from './icons/MoonIcon';
import SunIcon from './icons/SunIcon';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button isIconOnly radius="full" variant="flat">
        <p className="invisible" />
      </Button>
    );
  }

  return (
    <Button isIconOnly radius="full" variant="flat" onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}>
      {theme === 'dark' ? <SunIcon className="text-xl" /> : <MoonIcon className="text-xl" />}
    </Button>
  );
}
