import { Frequency } from '@/enums/Frequency';

export type Donation = {
    donorName: string;
    amount: number;
    frequency: Frequency;
    date: string;
};