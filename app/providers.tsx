'use client';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';

type ChildrenProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ChildrenProps) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
