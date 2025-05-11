"use client";
import { clsx, type ClassValue } from "clsx"
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge"

export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
