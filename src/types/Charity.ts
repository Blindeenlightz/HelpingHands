import { Donation } from "./Donation";

export interface Charity {
    name: string;
    description: string;
    email: string;
    phone: string;
    amountRaised: string;
    targetAmount: string;
    imageUrl: string;
    donations: Donation[];
}