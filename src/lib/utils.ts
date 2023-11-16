import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function for merging class names using clsx and tailwind-merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility function for formatting a timestamp into a localized date string
export function formatDate(timestamp: string): string {
  // Convert the timestamp to a Date object
  const date = new Date(timestamp);

  // Options for formatting the date
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // Use the Date.toLocaleDateString method to create a formatted date string
  return date.toLocaleDateString('en-GB', options);
}
