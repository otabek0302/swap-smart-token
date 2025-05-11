'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button variant="outline" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='cursor-pointer'>
      {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem] border-none outline-none transition-all text-primary cursor-pointer" /> : <Moon className="h-[1.2rem] w-[1.2rem] border-none outline-none transition-all text-primary cursor-pointer " />}
    </Button>
  );
}
