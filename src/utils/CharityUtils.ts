import Charities from "@/constants/Charities";
import { Donation } from "@/types/Donation";

/**
 * Parse a currency string (e.g. "$1,234,567") into a number
 * @param value - Currency string to parse
 * @returns Numeric value
 */
function parseCurrency(value: string): number {
    return Number(value.replace(/[^0-9.]+/g, ""));
}

/**
 * Format a number as a USD-style currency string (e.g. 1234 -> "$1,234")
 * @param value - Numeric value to format
 * @returns Formatted currency string
 */
function formatCurrency(value: number): string {
    return `$${value.toLocaleString("en-US")}`;
}

/**
 * Add a donation to the specified charity in-place.
 * Mutates the Charities array: appends the donation and updates amountRaised.
 *
 * @param charityName - Unique name of the charity to update
 * @param donation - Donation object to add
 * @throws Error if the charity is not found
 */
export function addDonationToCharities(
    charityName: string,
    donation: Donation
): void {
    const charity = Charities.find((c) => c.name === charityName);
    if (!charity) {
        throw new Error(`Charity \"${charityName}\" not found`);
    }

    // Append new donation
    charity.donations.push(donation);

    // Update amountRaised
    const current = parseCurrency(charity.amountRaised);
    charity.amountRaised = formatCurrency(current + donation.amount);
}

export function removeCharityFromCharities(charityName: string) {
    const index = Charities.findIndex((c) => c.name === charityName);
    if (index === -1) {
        throw new Error(`Charity \"${charityName}\" not found`);
    }
    Charities.splice(index, 1);
}
