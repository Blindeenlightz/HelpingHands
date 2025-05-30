import { Donation } from "./Donation";

export interface Charity {
    name: string;
    description: string;
    email: string;
    phone: string;
    targetAmount: string;
    imageUrl: string;
    amountRaised: string;
    donations: Donation[];
}
