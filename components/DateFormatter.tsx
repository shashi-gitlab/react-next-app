'use client';

import { useState, useEffect } from 'react';

interface DateFormatterProps {
  date: string | Date | number;
  /** 'short' (10/25/26), 'medium' (Oct 25, 2026), 'long' (October 25, 2026), or 'full' */
  dateStyle?: 'short' | 'medium' | 'long' | 'full';
  /** 'short' (3:30 PM), 'medium' (3:30:00 PM), or undefined to hide time */
  timeStyle?: 'short' | 'medium';
  /** BCP 47 language tag, e.g., 'en-US', 'en-GB', 'es-ES'. Defaults to browser locale. */
  locale?: string;
  className?: string;
}

export default function DateFormatter({
  date,
  dateStyle = 'medium',
  timeStyle,
  locale,
  className = '',
}: DateFormatterProps) {
  const [mounted, setMounted] = useState(false);

  // Avoid SSR hydration mismatch by waiting until the component mounts on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  const parsedDate = new Date(date);

  // Fallback if an invalid date string is passed
  if (isNaN(parsedDate.getTime())) {
    return <span className={className}>Invalid Date</span>;
  }

  // Before hydration, render a standard safe string (ISO format or empty) 
  // so the server and client HTML match exactly.
  if (!mounted) {
    return <span className={className}>{parsedDate.toLocaleDateString('en-US', { dateStyle })}</span>;
  }

  // On the client, format using the user's specific timezone and locale settings
  const formattedDate = new Intl.DateTimeFormat(locale || undefined, {
    dateStyle,
    ...(timeStyle && { timeStyle }),
  }).format(parsedDate);

  return <span className={className}>{formattedDate}</span>;
}