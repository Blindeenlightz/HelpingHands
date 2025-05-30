import { Frequency } from "./Frequency";

export const Statuses: Record<Frequency, string> = {
    [Frequency.OneTime]: "text-blue-700 bg-blue-50 ring-blue-600/20",
    [Frequency.Daily]: "text-green-700 bg-green-50 ring-green-600/20",
    [Frequency.Weekly]: "text-indigo-700 bg-indigo-50 ring-indigo-600/20",
    [Frequency.Monthly]: "text-purple-700 bg-purple-50 ring-purple-600/20",
    [Frequency.Annual]: "text-yellow-800 bg-yellow-50 ring-yellow-600/20",
};
