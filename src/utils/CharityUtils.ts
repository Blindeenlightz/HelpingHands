/**
 * Parse a currency string (e.g. "$1,234,567") into a number
 * @param value - Currency string to parse
 * @returns Numeric value
 */
export function parseCurrency(value: string): number {
    return Number(value.replace(/[^0-9.]+/g, ""));
}

/**
 * Format a number as a USD-style currency string (e.g. 1234 -> "$1,234")
 * @param value - Numeric value to format
 * @returns Formatted currency string
 */
export function formatCurrency(value: number): string {
    return `$${value.toLocaleString("en-US")}`;
}
