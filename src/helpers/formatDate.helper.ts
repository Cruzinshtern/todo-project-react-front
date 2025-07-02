/**
 * Formats the date
 *
 * @param date Actual date from a todo
 * @returns Formatted date (e.g. Jul 02, 2025)
 */
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}
